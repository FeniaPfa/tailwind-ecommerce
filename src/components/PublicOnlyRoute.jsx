import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicOnlyRoute = ({ children }) => {
    const { signOut } = useSelector((state) => state.user);

    if (!signOut) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};
