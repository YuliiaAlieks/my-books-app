import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, bookId) => request.post(`${baseUrl}/likes`, {userId, bookId});

export const getCount = (bookId) => {
    const query = encodeURIComponent(`bookId="${bookId}"`);
    return request.get(`${baseUrl}/likes?select=_id&where=${query}`)
        .then(res => res.length);
}
