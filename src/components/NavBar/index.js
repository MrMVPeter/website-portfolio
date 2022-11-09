import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'
import './index.scss'
import { MenuItemsLeft, MenuItemsRight } from './MenuItems';

function NavBar() {
  const [navVerticleState, setNavVerticleState] = useState(false);


  return (
    <>
    <nav>
      {/* Contact us Link and graphic */}
      <Link to="/Contact" id='contact'>
        <h1>&lt;C&gt;</h1>
        <p>Contact</p>
      </Link>
      

      {/* Contains Name in Logo Form */}
      <div id='LOGO'>
        <h1> &lt;Peter Gilliam&gt;</h1>
      </div>

      {/* Links to all pages when on widescreen */}
      <ul id='pages'>
        {/* Dynamically Creats Page links from MenuItemsRight */}
        {MenuItemsRight.map((item, index) => {
          return (
            <li key={index}>
              <Link   /* TODO? Change to NavLink to add some Active State*/
              to={item.url}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>


      {/* Mobile Only! Hambuger Menu */}
      <CSSTransition
          in={navVerticleState}
          timeout={600}
          classNames="hambState"
          >
        <div>
          {/* Hamburger Link for Responsive layout */}
          <button id='hamburger' onClick={()=>{
              setNavVerticleState(!navVerticleState);
            }}>
            
            {/* Lines */}
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </CSSTransition>

      
    </nav>
    
    <CSSTransition
      in={navVerticleState}
      timeout={600}
      classNames="dropMenu"
    >
      <div>
        <ul id='dropDownMenu'>
            {/* Dynamically Creats Page links from MenuItemsRight */}
            {MenuItemsRight.map((item, index) => {
              return (
                <li key={index}>
                  <Link   /* TODO? Change to NavLink to add some Active State*/
                    to={item.url}
                    onClick={()=>{
                      setNavVerticleState(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}

            {/* Add Contact Info */}
            <li key={MenuItemsRight.length}>
              <Link
                to={MenuItemsLeft[0].url}
                onClick={()=>{
                  setNavVerticleState(false);
                }}
              >
                {MenuItemsLeft[0].title}
              </Link>
            </li>
        </ul>
      </div>
    </CSSTransition>
    </>
  )
}

export default NavBar