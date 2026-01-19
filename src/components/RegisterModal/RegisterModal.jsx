import { useState } from "react";

import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({ onClose, onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(name, email, password);
  }

  function handleInput(input) {
    return (e) => input(e.target.value);
  }

  return (
    <ModalWithForm title="Sign Up" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="signup">
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={handleInput(setName)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={handleInput(setEmail)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handleInput(setPassword)}
          />

          <button type="submit">Enter the World of Caelumbrine</button>
        </div>
      </form>
    </ModalWithForm>
  );
}
