import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import * as bookService from '../../services/bookService';
import { Loader } from "../../Common/Loader/Loader";
import { useAuthContext } from "../../contexts/AuthContext";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isLogged } = useAuthContext();

    useEffect(() => {
        bookService.getAll(!isLogged())
            .then(result => {
                console.log("🧚 ~ result", result)
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
            {isLogged() ? <h1>All books</h1> : <WelcomeMessage />}
            <BookList books={books} />
        </section>
    )

}

export default Dashboard;