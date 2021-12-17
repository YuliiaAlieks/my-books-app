import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, bookId) => request.post(`${baseUrl}/likes`, {userId, bookId});

export const getBookLikes = (bookId) => {
    const query = encodeURIComponent(`bookId="${bookId}"`);
    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId))
        .catch(err => console.log(err));
}
