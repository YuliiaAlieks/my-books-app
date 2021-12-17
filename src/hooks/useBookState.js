import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bookService from '../services/bookService';

const useBookState = (bookId) => {
    const [book, setBook] = useState({ likes: [] });
    const navigate = useNavigate();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
            })
            .catch(err => {
                console.log(err);
                if (err === 'Not Found') {
                    navigate('/not-found');
                }
            })
    }, [bookId, navigate]);

    return [
        book,
        setBook
    ];
}

export default useBookState;