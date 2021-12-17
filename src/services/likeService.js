import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, bookId) => request.post(`${baseUrl}/likes`, { userId, bookId });

export const getBookLikes = (bookId) => {
    const query = encodeURIComponent(`bookId="${bookId}"`);
    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => {
            console.log("🧚 ~ res", res);
            return res.map(x => x.userId);
        })
        .catch(err => console.log(err));

}
// const getSortedByLikes = () => {
//     const query = encodeURIComponent(`/books?sortBy= ${book.likes.length}`);
//     return request.get(`${baseUrl}${query}`)
//         .then(res => {
//             console.log("🧚 ~ res", res);
//             setBooks(res)
//         })
//         .catch(err => console.log(err));
// }
