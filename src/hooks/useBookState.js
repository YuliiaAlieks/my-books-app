import { useState, useEffect } from 'react';
import * as bookService from '../services/bookService';

const useBookState = (bookId) => {
    const [book, setBook] = useState({likes:[]});

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                console.log("🧚 ~ details result", result)
                setBook(result);
            });

    }, [bookId]);

    return [
        book,
        setBook
    ];
}

export default useBookState;