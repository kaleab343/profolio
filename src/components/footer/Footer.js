import React, { useContext, useState, useCallback } from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import EmailModal from "../emailModal/EmailModal";

export default function Footer() {
  const [isEmailOpen, setEmailOpen] = useState(false);
  const handleOpenEmail = useCallback((e) => {
    e?.preventDefault?.();
    setEmailOpen(true);
  }, []);
  const handleCloseEmail = useCallback(() => setEmailOpen(false), []);

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
            Email
          </a>
        </p>
       <EmailModal isOpen={isEmailOpen} onClose={handleCloseEmail} isDark={isDark} />
      </div>
    </Fade>
  );
}
