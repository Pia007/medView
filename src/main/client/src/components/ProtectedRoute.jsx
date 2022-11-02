
import { Navigate, Outlet } from 'react-router-dom';

// use localStorage to store the logged in status
const useAuth = () => {
    const provider = localStorage.getItem('provider');
    if (provider) {
        return true;
    } else {
        return false;
    }
}
    
const ProtectedRoute = (props: any) => {

    const auth=useAuth();

    return auth? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
