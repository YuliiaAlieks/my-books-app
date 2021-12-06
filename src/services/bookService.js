const baseUrl = 'http://localhost:3030/jsonstore';

export const getRecommended = async () => {
    const response = await fetch(`${baseUrl}/recommened-books`);
    const books = await response.json();
    const result = Object.values(books);

    return result;
}