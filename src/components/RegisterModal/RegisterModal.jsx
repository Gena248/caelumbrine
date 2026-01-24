import { useState } from "react";

import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({ onClose, onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [backendError, setBackendError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let validation = true;

    if (!name) {
      setNameError("Name is required");
      validation = false;
    } else {
      setNameError("");
    }
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
    const result = await onRegister(name, email, password);

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
      title="Sign Up"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={"Enter the World of Caelumbrine"}
    >
      <label className="register__label">
        Name
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleInput(setName, setNameError)}
          required
          minLength={2}
        />
        {backendError && (
          <span className="register__error">{backendError}</span>
        )}
        {nameError && <span className="register__error">{nameError}</span>}
      </label>

      <label className="register__label">
        Email
        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={handleInput(setEmail, setEmailError)}
          required
        />
        {backendError && (
          <span className="register__error">{backendError}</span>
        )}
        {emailError && <span className="register__error">{emailError}</span>}
      </label>

      <label className="register__label">
        Password
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleInput(setPassword, setPasswordError)}
          required
          minLength={6}
        />
        {backendError && (
          <span className="register__error">{backendError}</span>
        )}
        {passwordError && (
          <span className="register__error">{passwordError}</span>
        )}
      </label>
    </ModalWithForm>
  );
}
