import { useRoutes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { useSelector } from 'react-redux';

import { CheckoutSideMenu } from './components/CheckoutSideMenu';
import { appRoutes } from './constants/appRoutes';

const AppRoutes = () => {
    let routes = useRoutes(appRoutes);
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
