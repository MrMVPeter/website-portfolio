import React from "react";
import "./index.scss";
import cartoon_me from "../../assets/images/cartoon_me.jpg";

function About() {
  return (
    <body className="BodyPage">
      <div id="timeline"></div>
      <div id="text">
        <h1>All About Me</h1>
        <h2>Meet </h2>
        <p>12312</p>
      </div>
      <div id="visual">
        <img id="hero_pic" src={cartoon_me} alt="Peter Gilliam" />
      </div>
    </body>
  );
}

export default About;
