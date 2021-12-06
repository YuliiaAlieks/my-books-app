import { Routes, Route, Link } from "react-router-dom";
import BookList from "../BookList/BookList";

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <Link to="genres">Genres</Link>

            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/genres" element="GENRES......" />

                </Routes>
            </section>
        </section>
    );
}

export default Dashboard;