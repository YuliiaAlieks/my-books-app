
export const request = (method, url, data) => {
    let result = null;

    if (method === 'GET') {
        result = fetch(url);
    } else {
        result = fetch(url,{
            method,
            headers: {
                'content-type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(data)
        });
    }
    return result.then(responseHandler);
}

async function responseHandler(res) {
    let jsonData = await res.json();

    if(res.ok){
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
}

function getToken() {
    try {
        let userItem = localStorage.getItem('user');
        if (!userItem) {
            console.log('You must be authenticated');
            throw Error;
        }

        const user = JSON.parse(userItem);
        return user.accessToken;

    } catch (error) {
        console.log(error);
    }
}

export const get = (url) => request('GET', url);
export const put = (url, data) => request('PUT', url, data);
export const post = (url, data) => request('POST', url, data);