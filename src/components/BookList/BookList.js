import { useEffect, useState } from "react";
import RecommendedBook from "./RecommendedBook";
import * as bookService from "..//../services/bookService";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getRecommended()
            .then(result => {
                console.log("🧚 ~ result", result)

                setBooks(result);
            });
    }, []);

    return (
        <>
            {books.length > 0
                ? (
                    <ul className="other-books-list">
                        {books.map(b => <RecommendedBook key={b._id} book={b} />)}

                    </ul>
                )
                : <p>No books are recommended</p>
            }
        </>

    );

}

export default BookList;