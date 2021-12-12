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

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            console.log("🧚 ~ res1", res)

            if (res.ok) {
                return res.json();
            } else {
                throw res.statusText;
            }
        });
}

export const logout = (token) => {
   return fetch(`${baseUrl}/users/logout`, {
    method: 'GET',
    headers: {
        'X-Authorization': token
    }
    });

} 


export const getUser = () => {
    const username = localStorage.getItem('username');
    console.log("🧚 ~ username", username);

    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}