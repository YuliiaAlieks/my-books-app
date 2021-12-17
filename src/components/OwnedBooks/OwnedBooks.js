import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as bookService from "../../services/bookService";
import BookList from "../BookList/BookList";

const OwnedBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuthContext();

    useEffect(() => {
        bookService.getOwned(user._id)
            .then(bookResult => {
                // console.log("🧚 ~ bookResult", bookResult)
                setBooks(bookResult);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("🧚 ~ err", err);
                setIsLoading(false);
            });
    }, [user._id]);

    if (isLoading) {
        return <p className="message">Loading...</p>;
    }

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