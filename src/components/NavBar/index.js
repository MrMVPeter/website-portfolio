import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./index.scss";
import MenuItems from "./MenuItems.json";

function NavBar() {
  const [navVerticleState, setNavVerticleState] = useState(false);

  return (
    <div id="navigation">
      <nav>
        {/* Contains Name in Logo Form */}
        <div id="LOGO">
          <h1> &lt;Peter Gilliam /&gt;</h1>
        </div>

        {/* Links to all pages when on widescreen */}
        <ul id="pages">
          {/* Dynamically Creats Page links from MenuItemsRight */}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link /* TODO? Change to NavLink to add some Active State*/
                  to={item.url}
                >
                  <h2>
                    <span className="prefix">{index + 1}.</span>
                    {item.title}
                  </h2>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Only! Hambuger Menu Icon Transition
        Hamburger Icon <==> X button */}
        <CSSTransition
          in={navVerticleState}
          timeout={600}
          classNames="hambState"
        >
          <div>
            {/* Hamburger Link for Responsive layout */}
            <button
              id="hamburger"
              onClick={() => {
                setNavVerticleState(!navVerticleState);
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

      {/* Slide Vertical Navigation to and from off-screen */}
      <CSSTransition in={navVerticleState} timeout={600} classNames="dropMenu">
        <div>
          <ul id="dropDownMenu">
            {/* Dynamically Creats Page links from MenuItemsRight */}
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link /* TODO? Change to NavLink to add some Active State*/
                    to={item.url}
                    onClick={() => {
                      setNavVerticleState(false);
                    }}
                  >
                    <h2>
                      <span className="prefix">{index + 1}.</span>
                      {item.title}
                    </h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NavBar;
