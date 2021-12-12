import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '..//../services/authService';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
        .then(() => {
            logout();
            navigate('/dashboard');
        })
    }, []);

  

// what to show to the users if request will be delayed?
    return null;
}

export default Logout;