import { NavLink, useNavigate } from 'react-router-dom';
import { navRoutes } from '../constants/navRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import { logout } from '../redux/userSlice';
import { CartToggle } from './CartToggle';

export const NavLinks = ({ setToggleNav, handleToggleNav }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const activeStyle = 'underline underline-offset-4';
    const { signOut, account } = useSelector((state) => state.user);
    const getDataFromCategory = (slug) => {
        dispatch(fetchProducts(slug));
    };

    const handleSignOut = () => {
        setToggleNav(false);
        dispatch(logout());
        navigate('/signin');
    };
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
