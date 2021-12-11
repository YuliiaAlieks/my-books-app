const baseUrl = 'http://localhost:3030/data';

export const getRecommended = async () => {
    const response = await fetch(`http://localhost:3030/jsonstore/recommened-books`);
    const books = await response.json();
    const result = Object.values(books);

    return result;
}

export const getOwned = async () => {
    const response = await fetch(`${baseUrl}/my-books`);
    const books = await response.json();
    const result = Object.values(books);

    return result;
}

export const create = async (bookData, token) => {
    const response = await fetch(`${baseUrl}/my-books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...bookData, likes: 0})
    });

    const result = await response.json();
    return result;
}

export const getOne = (bookId) => {
    return fetch(`${baseUrl}/my-books/${bookId}`)
        .then(res => res.json());
}

export const getOneRecommended = (bookId) => {
    return fetch(`http://localhost:3030/jsonstore/recommened-books/${bookId}`)
        .then(res => res.json());
}