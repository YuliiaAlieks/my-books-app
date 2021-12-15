import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import * as bookService from '../../services/bookService';

const Dashboard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
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
            <h1>Recommended books</h1>
            <section>
                <BookList books={books}/>
            </section>
        </section>
    );
}

export default Dashboard;