import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import CreateBook from './components/CreateBook';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Header from './components/Header';
import Login from './components/Login';
import OwnedBooks from './components/OwnedBooks';
import Register from './components/Register';
import WishList from './components/WishList';
import { isAuthenticated } from './services/authService';
import Logout from './components/Logout';



function App() {

  const [user, setUser] = useState({
    accessToken: '',
    email: '',
    _id: ''
  });


  const login = (authData) => {
    setUser(authData);
  }

  const onLogout = () => {

  }

  return (
    <AuthContext.Provider value={{user, login}}>
      <div id="container">
        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-wish-list" element={<WishList />} />
            <Route path="/my-books" element={<OwnedBooks />} />
            <Route path="/create" element={<CreateBook />} />
            <Route path="/details/:bookId" element={<Details />} />
          </Routes>

        </main>
      </div>
    </AuthContext.Provider>

  );
}

export default App;
