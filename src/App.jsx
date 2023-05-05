import { useRoutes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { MyAccount } from './pages/MyAccount';
import { MyOrder } from './pages/MyOrder';
import { MyOrders } from './pages/MyOrders';
import { NotFound } from './pages/NotFound';
import { SignIn } from './pages/SignIn';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/my-account',
            element: <MyAccount />,
        },
        {
            path: '/my-orders',
            element: <MyOrders />,
        },
        {
            path: '/my-order',
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
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <AppRoutes />
            </Provider>
        </>
    );
}

export default App;
