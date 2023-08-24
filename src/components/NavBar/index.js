import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import "./index.scss";
import MenuItems from "./MenuItems.json";

function NavBar() {
  const [verticalNavOverlayActive, setVerticalNavOverlayActive] =
    useState(false);

  return (
    <div id="navigation">
      <nav>
        {/* Hero-style Name */}
        <h1> &lt;Peter Gilliam /&gt;</h1>

        {/* WIDESCREEN-ONLY NavLinks to other pages */}
        <ul>
          {/* Pull all pages from MenuItems.json */}
          {MenuItems.map((item) => (
            <li key={item.id}>
              <NavLink to={item.url}>
                <h2>
                  <span className="prefix">{item.id + 1}.</span>
                  {item.title}
                </h2>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* NARROWSCREEN-ONLY Hamburger icon */}
        <CSSTransition
          in={verticalNavOverlayActive}
          timeout={600}
          classNames="hambState"
        >
          <div>
            <button
              id="hamburger"
              aria-label="Drop Down Button"
              onClick={() => {
                setVerticalNavOverlayActive(!verticalNavOverlayActive);
              }}
            >
              {/* Lines */}
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </CSSTransition>
      </nav>

      {/* NARROWSCREEN-ONLY Navigation overlay */}
      <CSSTransition
        in={verticalNavOverlayActive}
        timeout={600}
        classNames="dropMenu"
      >
        <div>
          <ul id="dropDownMenu">
            {/* Pull all pages from MenuItems.json */}
            {MenuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.url}
                  onClick={() => {
                    setVerticalNavOverlayActive(false);
                  }}
                >
                  <h2>
                    <span className="prefix">{item.id + 1}.</span>
                    {item.title}
                  </h2>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NavBar;
