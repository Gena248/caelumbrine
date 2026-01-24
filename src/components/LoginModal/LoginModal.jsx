import { useState } from "react";

import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({ onClose, onLogin, currentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [backendError, setBackendError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let validation = true;

    if (!email) {
      setEmailError("Email is required");
      validation = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      validation = false;
    } else {
      setPasswordError("");
    }
    if (!validation) return;
    const result = await onLogin(email, password);

    if (!result.authorized) {
      setBackendError(result.message);
    }
  }

  function handleInput(setValue, clearError) {
    return (e) => {
      setValue(e.target.value);
      clearError("");
      setBackendError("");
    };
  }

  return (
    <ModalWithForm
      title="Log in"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={"Enter the World of Caelumbrine"}
    >
      <label className="login__label">
        Email
        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={handleInput(setEmail, setEmailError)}
        />
        {backendError && <span className="login__error">{backendError}</span>}
        {emailError && <span className="login__error">{emailError}</span>}
      </label>

      <label className="login__label">
        Password
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleInput(setPassword, setPasswordError)}
        />
        {backendError && <span className="login__error">{backendError}</span>}
        {passwordError && <span className="login__error">{passwordError}</span>}
      </label>
    </ModalWithForm>
  );
}
