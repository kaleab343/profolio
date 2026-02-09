import React, { useContext, useState, useCallback } from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import EmailModal from "../emailModal/EmailModal";

export default function Footer() {
  const [isEmailOpen, setEmailOpen] = useState(false);
  const handleOpenEmail = useCallback((e) => {
    e?.preventDefault?.();
    setEmailOpen(true);
  }, []);
  const handleCloseEmail = useCallback(() => setEmailOpen(false), []);

  const handleSubmitMessage = useCallback(async (data) => {
    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const subject = (data.subject || "").trim();
    const message = (data.message || "").trim();
    
    if (!name || !message) {
      alert("Please provide your name and message.");
      return false;
    }

    try {
      // Use different endpoints for dev and production
      const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const apiUrl = isDev ? 'http://localhost:3001/api/send-email' : '/api/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error('Send error:', result);
        const errorMsg = result.error || 'Failed to send message. Please try again later.';
        alert(errorMsg);
        console.error('Full error details:', result.details);
        return false;
      }

      return true;
    } catch (e) {
      console.error('Network error:', e);
      alert('Network error. Please try again later. Check console for details.');
      return false;
    }
  }, []);

  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Kaleab Zelalem ·
          {" "}
          <a href="https://www.linkedin.com/in/kaleab-zelalem-297b091b8/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {" "}|{" "}
          <a href="mailto:kaleab.lala123@gmail.com" rel="noreferrer" onClick={handleOpenEmail}>
            Contact
          </a>
        </p>
       <EmailModal 
         isOpen={isEmailOpen} 
         onClose={handleCloseEmail} 
         onSubmit={handleSubmitMessage}
         isDark={isDark} 
       />
      </div>
    </Fade>
  );
}
