import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authService';
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
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

  useEffect(() => {
    const user = authService.getUser();
    setUserInfo({
      isAuthenticated: Boolean(user),
      user
    });

  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    });
  }

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null
    });
  }

  return (
    <div id="container">
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-wish-list" element={<WishList />} />
          <Route path="/my-books" element={<OwnedBooks />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/details/:bookId" element={<Details />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
