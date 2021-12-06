// import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import RecommendedBook from "./RecommendedBook";
import * as bookService from "..//../services/bookService";

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        bookService.getRecommended()
            .then(result => {
                console.log("🧚 ~ result", result)

                setBooks(result);
            });
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <ul className="other-books-list">
                {books.map(b => <RecommendedBook key={b._id} book={b} />)}

            </ul>
        </section>
    );
}

export default Dashboard;