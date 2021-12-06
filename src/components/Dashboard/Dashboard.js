import { Routes, Route, Link } from "react-router-dom";
import BookList from "../BookList/BookList";

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <Routes>
                <Route path="/" element={<BookList />} />
            </Routes>
        </section>

    );
}

export default Dashboard;