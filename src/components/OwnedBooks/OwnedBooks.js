import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as bookService from "../../services/bookService";
import BookList from "../BookList/BookList";

const OwnedBooks = () => {
    const [books, setBooks] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        bookService.getOwned(user._id)
            .then(bookResult => {
                console.log("🧚 ~ bookResult", bookResult)
                setBooks(bookResult);
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