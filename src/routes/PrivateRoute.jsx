import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login"
            state={{ from: location.pathname }}
            replace></Navigate>
    }

    return children;
};

export default PrivateRoute;