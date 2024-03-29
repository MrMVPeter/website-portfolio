import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import socialLinks from "./socialLinks.json";
import iconMapping from "./iconMapping";
import resume from "../../assets/pdfs/resume.pdf";

function FooterBar() {
  const iconSrc = (id) => iconMapping[id];
  return (
    <footer>
      <ul>
        {socialLinks.map((item) => (
          <li>
            <a
              className="footerIcons"
              key={item.id}
              href={item.linkURL}
              target={item.target}
            >
              <img src={iconSrc(item.id)} alt={item.name} />
            </a>
          </li>
        ))}
      </ul>
      <div id="footerResumeAndContact">
        <a href={resume} target="_blank" rel="noreferrer">
          <h3>Resume</h3>
        </a>
        <NavLink to="/Contact">
          <h3>Contact Me</h3>
        </NavLink>
      </div>
      <div id="footerMessage">
        <NavLink to="/Portfolio">
          <p>Designed and Develped by Peter Gilliam</p>
        </NavLink>
      </div>
    </footer>
  );
}

export default FooterBar;
