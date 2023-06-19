import { useRoutes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { MyAccount } from './pages/MyAccount';
import { MyOrder } from './pages/MyOrder';
import { MyOrders } from './pages/MyOrders';
import { NotFound } from './pages/NotFound';
import { SignIn } from './pages/SignIn';
import { Navbar } from './components/Navbar';
import { useSelector } from 'react-redux';

import { CheckoutSideMenu } from './components/CheckoutSideMenu';

const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/clothes',
            element: <Home />,
        },
        {
            path: '/electronics',
            element: <Home />,
        },
        {
            path: '/furnitures',
            element: <Home />,
        },
        {
            path: '/toys',
            element: <Home />,
        },
        {
            path: '/others',
            element: <Home />,
        },
        {
            path: '/my-account',
            element: <MyAccount />,
        },
        {
            path: '/my-order',
            element: <MyOrder />,
        },
        {
            path: '/my-orders',
            element: <MyOrders />,
        },
        {
            path: '/my-orders/last',
            element: <MyOrder />,
        },
        {
            path: '/my-orders/:id',
            element: <MyOrder />,
        },
        {
            path: '/signin',
            element: <SignIn />,
        },
        {
            path: '/*',
            element: <NotFound />,
        },
    ]);

    return routes;
};

function App() {
    const { isCheckoutOpen } = useSelector((state) => state.cart);
    return (
        <>
            <Navbar />
            {isCheckoutOpen && <CheckoutSideMenu />}
            <AppRoutes />
        </>
    );
}

export default App;
