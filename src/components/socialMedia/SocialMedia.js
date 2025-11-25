import React, { useState, useContext, useCallback } from "react";
import "./SocialMedia.scss";
import EmailModal from "../emailModal/EmailModal";
import StyleContext from "../../contexts/StyleContext";
import {socialMediaLinks, telegramConfig} from "../../portfolio";

export default function SocialMedia() {
  const { isDark } = useContext(StyleContext);
  const [isEmailOpen, setEmailOpen] = useState(false);

  const handleOpenEmail = useCallback((e) => {
    e?.preventDefault?.();
    setEmailOpen(true);
  }, []);

  // Robust MX check using public DNS-over-HTTPS providers
  const checkEmailDomainMx = useCallback(async (domain) => {
    const providers = [
      async () => {
        const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`);
        return res.json();
      },
      async () => {
        const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`, {
          headers: { Accept: "application/dns-json" }
        });
        return res.json();
      }
    ];
    for (const fn of providers) {
      try {
        const json = await fn();
        const ok = json && json.Status === 0 && Array.isArray(json.Answer) && json.Answer.some(a => a.type === 15);
        if (ok) return true;
      } catch (e) {
        // try next provider
      }
    }
    return false;
  }, []);

  const handleCloseEmail = useCallback(() => setEmailOpen(false), []);

  const handleSubmitEmail = useCallback(async (data) => {
    // Require all fields
    const name = (data.fromName || "").trim();
    const email = (data.fromEmail || "").trim();
    const subjectRaw = (data.subject || "").trim();
    const messageRaw = (data.message || "").trim();
    if (!name || !email || !subjectRaw || !messageRaw) {
      alert("Please complete all fields before sending.");
      return false; // prevent modal from showing success/closing
    }

    // Fields already collected above during required-field check
    // Using existing variables: name, email, subjectRaw, messageRaw

    // Send directly to Telegram
    const token = telegramConfig.token?.trim();
    const chatId = telegramConfig.chatId?.toString().trim();
    if (!token || !chatId) {
      alert("Telegram is not configured (token or chatId missing). Please configure in portfolio.js.");
      return;
    }

    const text = [
      `New contact via portfolio:`,
      `From: ${name || "(no name)"}${email ? ` <${email}>` : ""}`,
      `Subject: ${subjectRaw || "(no subject)"}`,
      ``,
      messageRaw || "(no message)"
    ].join("\n");

    try {
      const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text })
      });
      const tgJson = await tgRes.json();
      if (!tgJson.ok) {
        console.error("Telegram error:", tgJson);
        alert("Couldn't send message to Telegram. Please try again later.");
        return;
      }
      // return true to let modal show a success and auto-close
      return true;
    } catch (e) {
      console.error("Telegram network error:", e);
      alert("Network error sending to Telegram. You can try again later.");
    }
  }, [telegramConfig]);

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
