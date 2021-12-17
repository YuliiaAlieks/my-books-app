import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import * as bookService from '../../services/bookService';
import { Loader } from "../../Common/Loader/Loader";

const StartPage = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        bookService.getTopThree()
            .then(result => {
                // console.log("🧚 ~ result", result)
                setBooks(result);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("🧚 ~ err", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <section id="dashboard-page" className="dashboard">
            <div className="message">
            <h1>Welcome to My Books App 😊</h1>
            <h2>Register or Login to see more books</h2>
            </div>

            <section>
                <BookList books={books} />
            </section>
        </section>
    );

    return (
        <div className="message">
            <p>Welcome to My Books App :D</p>
            <p>Register or Login to see more books</p>
        </div>
    );
}

export default StartPage;