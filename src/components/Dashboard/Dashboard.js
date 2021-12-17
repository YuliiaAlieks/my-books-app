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
                setBooks(result);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("🧚 ~ err", err);
                setIsLoading(false);
            });
    }, [isLogged]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <section id="dashboard-page" className="dashboard">
            {isLogged() ? <div className="message"><h1>All Books</h1></div> : <WelcomeMessage />}
            <BookList books={books} />
        </section>
    )

}

export default Dashboard;