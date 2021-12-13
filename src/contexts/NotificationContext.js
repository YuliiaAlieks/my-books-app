import { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

export const notificationTypes = {
    error: 'danger',
    warn: 'warning',
    info: 'info',
    success: 'success',
}

const initialNotificationState = {show: false, message: '', type: notificationTypes.error};

export const NotificationProvider = ({
    children
}) => {
    const [notification, setNotification] = useState(initialNotificationState);

    const addNotification = useCallback((message, type = notificationTypes.error) => {
        setNotification({show: true, message, type});

        setTimeout(() => {
            setNotification(initialNotificationState);
        }, 3000);
    }, []);

    const hideNotification = useCallback(() => setNotification(initialNotificationState), []);

    return (
        <NotificationContext.Provider value={{notification, addNotification, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    );
}

//this is not nessessary, it only saves 2 imports
export const useNotificationContext = () => {
    const state = useContext(NotificationContext);
    return state;
}