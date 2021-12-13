import { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

export const notificationTypes = {
    error: 'error',
    warn: 'warn',
    info: 'info',
    success: 'success',
}

export const NotificationProvider = ({
    children
}) => {
    const [notification, setNotification] = useState({show: false, message: '', type: notificationTypes.error});
    const addNotification = useCallback((message, type = notificationTypes.error) => {
        setNotification({show: true, message, type});
    }, []);

    return (
        <NotificationContext.Provider value={{notification, addNotification}}>
            {children}
        </NotificationContext.Provider>
    );
}

//this is not nessessary, it only saves 2 imports
export const useNotificationContext = () => {
    const state = useContext(NotificationContext);
    return state;
}