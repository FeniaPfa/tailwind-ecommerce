import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { signOut } = useSelector((state) => state.user);

    if (signOut) {
        return <Navigate to="/signin" />;
    } else {
        return children;
    }
};
