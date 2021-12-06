import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateBook from './components/CreateBook';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Header from './components/Header';
import Login from './components/Login';
import OwnedBooks from './components/OwnedBooks';
import Register from './components/Register';
import WishList from './components/WishList';



function App() {
  return (
    <div id="container">
      <Header />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-wish-list" element={<WishList />} />
          <Route path="/my-books" element={<OwnedBooks />} />
          <Route path="/create" element={<CreateBook />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
