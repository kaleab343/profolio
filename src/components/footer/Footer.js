import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
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
          <a href="mailto:kaleab.lala123@gmail.com" rel="noreferrer">
            Email
          </a>
        </p>
      </div>
    </Fade>
  );
}
