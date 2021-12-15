import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/books`);
// export const getOneRecommended = (bookId) => {
//     return fetch(`${baseUrl}/books/${bookId}`)
//         .then(res => res.json());
// }


// export const getOwned = () => request.get(`${baseUrl}/my-books`);
export const getOwned = (ownerId) => {
    console.log("🧚 ~ ownerId", ownerId)
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);
    console.log("🧚 ~ query", query)
    return request.get(`${baseUrl}/books?where=${query}`);
}

export const getOne = (bookId) => {
    return fetch(`${baseUrl}/books/${bookId}`)
        .then(res => {
            console.log("🧚 ~ getOneFetchRes", res)

            if (res.ok) {
                return res.json();
            } else {
                throw res.statusText;
            }
        });

}



export const create = async (bookData, token) => {
    const response = await fetch(`${baseUrl}/books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...bookData, likes: [] })
    });

    const result = await response.json();
    return result;
}

export const deleteBook = (bookId, token) => {
    return fetch(`${baseUrl}/books/${bookId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
}

export const update = (bookId, bookData) => request.put(`${baseUrl}/books/${bookId}`, bookData);

