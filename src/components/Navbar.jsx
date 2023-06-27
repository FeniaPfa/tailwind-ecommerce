import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { fetchProducts } from '../redux/productsSlice';
import { navRoutes } from '../constants/navRoutes';
import { logout, updateFromLocalStorage } from '../redux/userSlice';
import { useEffect, useState } from 'react';
import { localStorageAccount } from '../constants/localStorage';
import { CartToggle } from './CartToggle';

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggleNav, setToggleNav] = useState(false);
    const activeStyle = 'underline underline-offset-4';
    const { signOut, account } = useSelector((state) => state.user);

    const getUserData = () => {
        if (localStorageAccount) {
            dispatch(updateFromLocalStorage());
        }
    };

    const getDataFromCategory = (slug) => {
        dispatch(fetchProducts(slug));
    };

    const handleSignOut = () => {
        setToggleNav(false);
        dispatch(logout());
        navigate('/signin');
    };

    const handleToggleNav = () => {
        setToggleNav((prevState) => !prevState);
    };

    const renderNavLinks = () => {
        return (
            <div className="desktop flex justify-between items-center text-sm font-light w-full flex-col md:flex-row">
                <ul className="flex items-center gap-3 flex-col md:flex-row  py-2 md:py-0">
                    <li className="font-semibold text-lg"></li>
                    {navRoutes.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => {
                                getDataFromCategory(item.slug), handleToggleNav();
                            }}>
                            <NavLink to={item.to} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center md:gap-3 gap-4 flex-col md:flex-row border-t border-black py-2 md:py-0 md:border-none">
                    {!signOut && (
                        <>
                            <li className="text-black/60">{account.email}</li>
                            <li>
                                <NavLink
                                    to="/my-orders"
                                    onClick={handleToggleNav}
                                    className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                    My orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/my-account"
                                    onClick={handleToggleNav}
                                    className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                    My account
                                </NavLink>
                            </li>
                        </>
                    )}

                    {signOut ? (
                        <li>
                            <NavLink
                                to="/signin"
                                onClick={handleToggleNav}
                                className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                Sign in
                            </NavLink>
                        </li>
                    ) : (
                        <button onClick={handleSignOut}>Sign Out</button>
                    )}
                    <div className="hidden md:block">
                        <CartToggle />
                    </div>
                </ul>
            </div>
        );
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <>
            <nav className=" bg-white z-10 w-full py-5 px-8 top-0 fixed shadow-md flex justify-between">
                <NavLink to="/">Shopi</NavLink>
                <div className="flex gap-2 md:hidden">
                    <button>
                        <Bars3Icon className="w-8 h-8" onClick={handleToggleNav} />
                    </button>

                    <CartToggle />
                </div>
                <div className="hidden md:justify-between md:flex w-full">{renderNavLinks()}</div>
            </nav>
            {toggleNav && <div className="-mt-2 py-5 fixed md:hidden z-10 bg-white w-full border-y">{renderNavLinks()}</div>}
        </>
    );
};
