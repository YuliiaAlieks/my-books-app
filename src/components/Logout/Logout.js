import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '..//../services/authService';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    useEffect(() => {
        authService.logout(user.accessToken)
        .then(() => {
            logout();
            navigate('/');
        })
    }, [logout, navigate, user.accessToken]);

    return null;
}

export default Logout;