import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { fetchProducts } from '../redux/productsSlice';
import { navRoutes } from '../constants/navRoutes';
import { toggleMenu } from '../redux/cartSlice';
import { logout } from '../redux/userSlice';

export const Navbar = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const activeStyle = 'underline underline-offset-4';
    const { signOut } = useSelector((state) => state.user);

    const isUserSignOut = JSON.parse(localStorage.getItem('sign-out')) || signOut;
    console.log(isUserSignOut);

    const getDataFromCategory = (slug) => {
        dispatch(fetchProducts(slug));
    };

    const toggleCartMenu = () => {
        dispatch(toggleMenu());
    };

    const handleSignOut = () => {
        dispatch(logout());
    };
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
                <li className="text-black/60">correo@correo.com</li>
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
                {isUserSignOut ? (
                    <li>
                        <NavLink to="/signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            Sign in
                        </NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink onClick={handleSignOut}>Sign Out</NavLink>
                    </li>
                )}

                <li onClick={toggleCartMenu}>
                    <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
                </li>
                <li>
                    <span className="font-bold">{cart.count}</span>
                </li>
            </ul>
        </nav>
    );
};
