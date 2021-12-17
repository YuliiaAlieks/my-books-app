import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import * as bookService from '../../services/bookService';
import { Loader } from "../../Common/Loader/Loader";

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        bookService.getAll()
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
            <h1>All books</h1>
            <section>
                <BookList books={books} />
            </section>
        </section>
    );
}

export default Dashboard;