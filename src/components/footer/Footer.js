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
      const isDevelopment = process.env.NODE_ENV === 'development';
      
      // In development, send directly to Telegram API
      if (isDevelopment) {
        const TELEGRAM_BOT_TOKEN = "8220132078:AAGKRnRm_MTHHPOdvqZ4zoWzAxIUvBFnhWk";
        const TELEGRAM_CHAT_ID = "500761652";
        
        const telegramMessage = `
🔔 *New Portfolio Contact Message*

👤 *Name:* ${name}
${email ? `📧 *Email:* ${email}` : ''}
${subject ? `📝 *Subject:* ${subject}` : ''}

💬 *Message:*
${message}

⏰ *Received:* ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Addis_Ababa' })}
        `.trim();
        
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'Markdown'
          })
        });
        
        const result = await response.json();
        
        if (!result.ok) {
          console.error('Telegram error:', result);
          alert('Failed to send message via Telegram. Please try again later.');
          return false;
        }
        
        return true;
      }
      
      // In production, use Vercel serverless function
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

      return true;
    } catch (e) {
      console.error('Network error:', e);
      alert('Network error. Please try again later.');
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
