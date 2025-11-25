import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./EmailModal.scss";

export default function EmailModal({ isOpen, onClose, onSubmit, isDark }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose?.();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    onSubmit?.(data);
  }

  return ReactDOM.createPortal(
    <div className="email-modal-backdrop" onClick={handleBackdropClick}>
      <div ref={dialogRef} className={`email-modal ${isDark ? "dark" : ""}`} role="dialog" aria-modal="true">
        <div className="email-modal-header">
          <div className="email-modal-title">Send me an email</div>
          <button className="email-modal-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <form className="email-modal-body email-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fromName">Your name</label>
            <input id="fromName" name="fromName" type="text" className="email-input" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="fromEmail">Your email</label>
            <input id="fromEmail" name="fromEmail" type="email" className="email-input" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" className="email-input" placeholder="Subject" />
          </div>
          <div className="stacked-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="email-textarea" placeholder="Write your message..." />
          </div>
          <div className="email-modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
