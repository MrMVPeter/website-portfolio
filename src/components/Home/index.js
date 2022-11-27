import React from "react";
import "./index.scss";
import textItems from "./textItems";
import cartoon_me from "../../assets/images/cartoon_me.jpg";

function Home() {
  return (
    <body className="BodyPage">
      <div id="text">
        <h1>
          {textItems["textHeader"][0]}{" "}
          <span id="name">{textItems["textHeader"][1]}</span>
        </h1>
        <h2>{textItems["textSubHeader"]}</h2>
      </div>
      <div id="visual">
        <img id="hero_pic" src={cartoon_me} alt="Peter Gilliam" />
      </div>
    </body>
  );
}

export default Home;
