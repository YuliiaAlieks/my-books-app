import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthstate = {
    accessToken: '',
    email: '',
    _id: ''
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthstate);

    const login = (authData) => {
        setUser(authData);
    }
    
    const logout = () => {
        setUser(initialAuthstate);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

