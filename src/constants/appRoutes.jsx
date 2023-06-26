import { PrivateRoute } from '../components/PrivateRoute';
import { PublicOnlyRoute } from '../components/PublicOnlyRoute';
import { Home } from '../pages/Home';
import { MyAccount } from '../pages/MyAccount';
import { MyOrder } from '../pages/MyOrder';
import { MyOrders } from '../pages/MyOrders';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export const appRoutes = [
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
        element: (
            <PrivateRoute>
                <MyAccount />
            </PrivateRoute>
        ),
    },
    {
        path: '/my-order',
        element: (
            <PrivateRoute>
                <MyOrder />
            </PrivateRoute>
        ),
    },
    {
        path: '/my-orders',
        element: (
            <PrivateRoute>
                <MyOrders />
            </PrivateRoute>
        ),
    },
    {
        path: '/my-orders/last',
        element: (
            <PrivateRoute>
                <MyOrder />
            </PrivateRoute>
        ),
    },
    {
        path: '/my-orders/:id',
        element: (
            <PrivateRoute>
                <MyOrder />
            </PrivateRoute>
        ),
    },
    {
        path: '/signin',
        element: (
            <PublicOnlyRoute>
                <SignIn />
            </PublicOnlyRoute>
        ),
    },
    {
        path: '/signup',
        element: (
            <PublicOnlyRoute>
                <SignUp />
            </PublicOnlyRoute>
        ),
    },
    {
        path: '/*',
        element: <NotFound />,
    },
];
