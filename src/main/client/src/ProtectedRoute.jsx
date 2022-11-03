
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const token = JSON.parse(localStorage.getItem('username'));

    if (!token) {

        return <Navigate to="/login" replace />
    }

    return children;
}

export default Protected;
