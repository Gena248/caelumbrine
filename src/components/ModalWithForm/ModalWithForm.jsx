import { useEffect } from "react";

import "./ModalWithForm.css";

export default function ModalWithForm({ onClose, title, children }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-btn" onClick={onClose}>
          X
        </button>
        <h2 className="modal__title">{title}</h2>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}
