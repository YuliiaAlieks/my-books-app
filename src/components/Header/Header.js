import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/" >Dashboard</Link>
                    <div id="guest">
                        <Link className="button" to="login" >Login</Link>
                        <Link className="button" to="register" >Register</Link>
                    </div>
                    <div id="user">
                        <span>Welcome, email</span>
                        <Link className="button" to="create" >Add Book</Link>
                        <Link className="button" to="my-wish-list" >My Wish List</Link>
                        <Link className="button" to="my-books" >My Books</Link>
                        <Link className="button" to="#">Logout</Link>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;