import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { fetchProducts } from '../redux/productsSlice';

export const Navbar = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const activeStyle = 'underline underline-offset-4';
    const routes = [
        {
            name: 'All',
            to: '/',
            category: '',
        },
        {
            name: 'Clothes',
            to: '/clothes',
            category: '/?categoryId=1',
        },
        {
            name: 'Electronics',
            to: '/electronics',
            category: '/?categoryId=2',
        },
        {
            name: 'Furnitures',
            to: '/furnitures',
            category: '/?categoryId=3',
        },
        {
            name: 'Toys',
            to: '/toys',
            category: '/?categoryId=4',
        },
        {
            name: 'Others',
            to: '/others',
            category: '/?categoryId=5',
        },
    ];

    const getDataFromCategory = (slug) => {
        console.log(slug);
        dispatch(fetchProducts(slug));
    };
    return (
        <nav className="flex justify-between bg-white items-center z-10 w-full py-5 px-8 text-sm font-light top-0 fixed shadow-md">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li> */}
                {routes.map((item) => (
                    <li key={item.name} onClick={() => getDataFromCategory(item.category)}>
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
                <li>
                    <NavLink to="/signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <ShoppingBagIcon className="h-6 w-6" />
                </li>
                <li>
                    <span className="font-bold">{cart.count}</span>
                </li>
            </ul>
        </nav>
    );
};
