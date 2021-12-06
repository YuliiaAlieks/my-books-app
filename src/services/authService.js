export const login = (username) => {
    localStorage.setItem('username', username);
}

export const getUser = () => {
    const username = localStorage.getItem('username');
    console.log("🧚 ~ username", username);

    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}