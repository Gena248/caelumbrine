import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main.jsx";
import BooksPage from "../BooksPage/BooksPage.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";

import { login, register, checkToken, logout } from "../../utils/backend.js";

export default function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const user = await checkToken();

      if (user) {
        setCurrentUser(user);
      }
    }

    loadUser();
  }, []);

  async function handleLogin(email, password) {
    const userInfo = await login(email, password);

    if (userInfo.authorized) {
      setCurrentUser(userInfo.user);
      setLoginOpen(false);
    } else {
      alert(userInfo.message);
    }
  }

  async function handleRegister(name, email, password) {
    const userInfo = await register(name, email, password);

    if (userInfo.authorized) {
      setRegisterOpen(false);
      alert("Registeration successful. Please log in.");
    } else {
      alert(userInfo.message);
    }
  }

  function handleLogout() {
    logout();
    setCurrentUser(null);
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
        <Route path="/books" element={<BooksPage />} />
      </Routes>

      {isLoginOpen && (
        <LoginModal onClose={() => setLoginOpen(false)} onLogin={handleLogin} />
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
