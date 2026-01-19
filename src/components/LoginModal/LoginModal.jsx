import { useState } from "react";

import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  function handleInput(input) {
    return (e) => input(e.target.value);
  }

  return (
    <ModalWithForm title="Log in" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <label>Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            onChange={handleInput(setEmail)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={handleInput(setPassword)}
          />

          <button type="submit">Enter the World of Caelumbrine</button>
        </div>
      </form>
    </ModalWithForm>
  );
}
