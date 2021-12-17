import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    const guestNavigation = (
        <div id="guest" className='nav-right'>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
        </div>
    );

    const userNavigation = (
        <div id="user" className='nav-right'>
            <span>Welcome, {user.email}</span>
            <Nav.Link href="/add">Add Book</Nav.Link>
            <Nav.Link href="/my-books">My Books</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
        </div>
    );

    return (
        <header id="site-header">
            <Navbar bg='dark' variant='dark'>
                <Container >
                    <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
                    <Nav>
                        {
                            user.email
                                ? userNavigation
                                : guestNavigation
                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;