import { useEffect, useState } from "react";
import * as bookService from "../../services/bookService";
import BookList from "../BookList/BookList";

const OwnedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getOwned()
            .then(result => {
                // console.log("🧚 ~ result", result)
                setBooks(result);
            })
            .catch(err => {
                console.log("🧚 ~ err", err);
            });
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>My Books</h1>

            <section>
                <BookList books={books} />
            </section>
        </section>

    );

}

export default OwnedBooks;