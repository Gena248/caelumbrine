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
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      {currentUser ? (
        <>
          <span>Hello {currentUser.name}</span>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={onLoginOpen}>Login</button>
          <button onClick={onRegisterOpen}>Sign Up</button>
        </>
      )}
    </nav>
  );
}
