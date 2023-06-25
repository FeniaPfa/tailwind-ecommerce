import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { fetchProducts } from '../redux/productsSlice';
import { navRoutes } from '../constants/navRoutes';
import { toggleMenu } from '../redux/cartSlice';
import { logout, updateFromLocalStorage } from '../redux/userSlice';
import { useEffect } from 'react';
import { localStorageAccount } from '../constants/localStorage';

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
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

    const toggleCartMenu = () => {
        dispatch(toggleMenu());
    };

    const handleSignOut = () => {
        dispatch(logout());
        navigate('/signin');
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <nav className="flex justify-between bg-white items-center z-10 w-full py-5 px-8 text-sm font-light top-0 fixed shadow-md">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                {navRoutes.map((item) => (
                    <li key={item.name} onClick={() => getDataFromCategory(item.slug)}>
                        <NavLink to={item.to} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-3">
                {!signOut && (
                    <>
                        <li className="text-black/60">{account.email}</li>
                        <li>
                            <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                My orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                                My account
                            </NavLink>
                        </li>
                    </>
                )}

                {signOut ? (
                    <li>
                        <NavLink to="/signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            Sign in
                        </NavLink>
                    </li>
                ) : (
                    <button onClick={handleSignOut}>Sign Out</button>
                )}
                <div className="relative flex gap-0.5 items-center">
                    <li onClick={toggleCartMenu}>
                        <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
                    </li>
                    <span className="absolute bottom-3.5 left-3.5 bg-black text-white w-5 h-5 rounded-full flex justify-center items-center text-xs font-bold">
                        {cart.count}
                    </span>
                </div>
                <li></li>
            </ul>
        </nav>
    );
};
