const baseUrl = 'http://localhost:3030';

export const login = async (email, password) => {
    const res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
 
}

export const logout = () => {
    fetch(`${baseUrl}/users/logout`)
}

export const getUser = () => {
    const username = localStorage.getItem('username');
    console.log("🧚 ~ username", username);

    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}