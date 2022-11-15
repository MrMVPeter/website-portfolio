import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import youtube from "../../assets/icons/youtube.png";
import instagram from "../../assets/icons/instagram.png";
import email from "../../assets/icons/email.png";

function FooterBar() {
  return (
    <footer id="FooterBar">
      <div id="rows">
        <div id="footer_icons">
          <img className="foot_icon" alt="Github" src={github} />
          <img className="foot_icon" alt="Linkedin" src={linkedin} />
          <img className="foot_icon" alt="Youtube" src={youtube} />
          <img className="foot_icon" alt="Instagram" src={instagram} />
          <img className="foot_icon" alt="Email" src={email} />
        </div>
        <div id="footer_btns">
          <Link to="/#">
            <h3>Resume</h3>
          </Link>
          <Link to="/#">
            <h3>Contact Me</h3>
          </Link>
        </div>
        <div id="footer_message">
          <a href="/#">
            <p>Designed and Develped by Peter Gilliam</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
