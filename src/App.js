import './App.css';

import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import CreateBook from './components/CreateBook';
import Edit from './components/Edit/Edit';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Header from './components/Header';
import Login from './components/Login';
import { NotificationProvider } from './contexts/NotificationContext';
import Notification from './Common/Notification';
import OwnedBooks from './components/OwnedBooks';
import Register from './components/Register';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartPage from './components/StartPage/StartPage';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div id="container">
          <Header />
          <Notification />
          <main id="site-content">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-books" element={<OwnedBooks />} />
              <Route path="/create" element={<CreateBook />} />
              <Route path="/edit/:bookId" element={<Edit />} />
              <Route path="/details/:bookId" element={<Details />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>

          </main>
          <footer><p>@MyBooksApp</p></footer>
        </div>
      </NotificationProvider>
    </AuthProvider>

  );
}

export default App;
