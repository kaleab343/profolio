import React, { useState, useContext, useCallback } from "react";
import "./SocialMedia.scss";
import EmailModal from "../emailModal/EmailModal";
import StyleContext from "../../contexts/StyleContext";
import {socialMediaLinks} from "../../portfolio";

export default function SocialMedia() {
  const { isDark } = useContext(StyleContext);
  const [isEmailOpen, setEmailOpen] = useState(false);

  const handleOpenEmail = useCallback((e) => {
    e?.preventDefault?.();
    setEmailOpen(true);
  }, []);


  const handleCloseEmail = useCallback(() => setEmailOpen(false), []);

  const handleSubmitEmail = useCallback(async (data) => {
    // Get form data with new field names
    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const subject = (data.subject || "").trim();
    const message = (data.message || "").trim();
    
    // Only name and message are required
    if (!name || !message) {
      alert("Please provide your name and message.");
      return false;
    }

    try {
      // Send to serverless function (which will use Telegram)
      const response = await fetch('/api/send-email', {
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
        alert(result.error || 'Failed to send message. Please try again later.');
        return false;
      }

      // Success - let modal show success message and close
      return true;
    } catch (e) {
      console.error('Network error:', e);
      alert('Network error. Please try again later.');
      return false;
    }
  }, []);

  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          onClick={handleOpenEmail}
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      <EmailModal
        isOpen={isEmailOpen}
        isDark={isDark}
        onClose={handleCloseEmail}
        onSubmit={handleSubmitEmail}
      successText="Thanks! I will contact you soon."
      />

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
