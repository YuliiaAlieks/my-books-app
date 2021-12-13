import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getRecommended = () => request.get(`http://localhost:3030/jsonstore/recommened-books`);
export const getOneRecommended = (bookId) => {
    return fetch(`http://localhost:3030/jsonstore/recommened-books/${bookId}`)
        .then(res => res.json());
}


export const getOwned = () => request.get(`${baseUrl}/my-books`);

export const getOne = (bookId) => {
    return fetch(`${baseUrl}/my-books/${bookId}`)
        .then(res => res.json());
}



export const create = async (bookData, token) => {
    const response = await fetch(`${baseUrl}/my-books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...bookData, likes: []})
    });

    const result = await response.json();
    return result;
}

export const deleteBook = (bookId, token) => {
    return fetch(`${baseUrl}/my-books/${bookId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
}

export const update = (bookId, bookData) => request.put(`${baseUrl}/my-books/${bookId}`, bookData);



// export const like = (bookId, book, token) => {
//     //only owner of the book allowed to PATCH
//     //How to process Likes?
//     return fetch(`${baseUrl}/my-books/${bookId}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(book)
//     })
//         .then(res => res.json());
// }