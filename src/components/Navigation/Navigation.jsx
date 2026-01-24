import { Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation({
  onLoginOpen,
  onRegisterOpen,
  currentUser,
  onLogout,
}) {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Home
      </Link>
      <Link to="/books">Books</Link>
      {currentUser ? (
        <>
          <Link to="/profile" className="navigation__name">
            Hello {currentUser.name}
          </Link>
          <button className="navigation__modal" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button className="navigation__modal" onClick={onLoginOpen}>
            Login
          </button>
          <button className="navigation__modal" onClick={onRegisterOpen}>
            Sign Up
          </button>
        </>
      )}
    </nav>
  );
}
