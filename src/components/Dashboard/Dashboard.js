import BookList from "../BookList/BookList";

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <section>
                <BookList />
            </section>
        </section>

    );
}

export default Dashboard;