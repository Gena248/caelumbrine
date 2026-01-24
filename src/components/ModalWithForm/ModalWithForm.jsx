import { useEffect } from "react";

import "./ModalWithForm.css";

export default function ModalWithForm({
  onClose,
  title,
  children,
  onSubmit,
  buttonText,
}) {
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
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}>
        <div className="modal__container" onClick={(e) => e.stopPropagation()}>
          <button className="modal__close-btn" onClick={onClose}>
            X
          </button>

          <h2 className="modal__title">{title}</h2>
          <form className="modal__form" onSubmit={onSubmit} noValidate>
            <div className="modal__content">
              {children}
              <button type="submit" className="modal__submit">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
