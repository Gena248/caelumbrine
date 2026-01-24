import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main.jsx";
import BooksPage from "../BooksPage/BooksPage.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import Profile from "../Profile/Profile.jsx";

import { login, register, checkToken, logout } from "../../utils/backend.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

export default function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedBooks, setSavedBooks] = useState(() => {
    const books = localStorage.getItem("savedBooks");
    return books ? JSON.parse(books) : [];
  });

  useEffect(() => {
    async function loadUser() {
      const user = await checkToken();

      if (user) {
        setCurrentUser(user);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
  }, [savedBooks]);

  async function handleLogin(email, password) {
    const userInfo = await login(email, password);

    if (userInfo.authorized) {
      setCurrentUser(userInfo.user);
      setLoginOpen(false);
    }
    return userInfo;
  }

  async function handleRegister(name, email, password) {
    const userInfo = await register(name, email, password);

    if (userInfo.authorized) {
      setRegisterOpen(false);
      alert("Registeration successful. Please log in.");
    }
    return userInfo;
  }

  function handleLogout() {
    logout();
    setCurrentUser(null);
  }

  function handleSaveBook(book) {
    setSavedBooks((prev) => {
      if (prev.some((b) => b.title === book.title)) return prev;
      return [...prev, book];
    });
  }

  function handleDeleteBook(title) {
    setSavedBooks((prev) => prev.filter((b) => b.title !== title));
  }

  return (
    <>
      <Navigation
        onLoginOpen={() => setLoginOpen(true)}
        onRegisterOpen={() => setRegisterOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/books"
          element={
            <BooksPage onSaveBook={handleSaveBook} currentUser={currentUser} />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={!!currentUser}>
              <Profile
                currentUser={currentUser}
                savedBooks={savedBooks}
                onDeleteBook={handleDeleteBook}
              />
            </ProtectedRoute>
          }
        />
      </Routes>

      {isLoginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onLogin={handleLogin}
          currentUser={currentUser}
        />
      )}

      {isRegisterOpen && (
        <RegisterModal
          onClose={() => setRegisterOpen(false)}
          onRegister={handleRegister}
        />
      )}
    </>
  );
}
