import React from "react";
import "./index.scss";
import textItems from "./textItems";
import cartoon_me from "../../assets/images/real_me.jpg";

function Home() {
  return (
    <body className="bodyPage" id="HomePage">
      <div className="text">
        <h1>
          <span className="highlighted">{textItems["textHeader"][0]}</span>
          {textItems["textHeader"][1]}{" "}
          <span className="highlighted">{textItems["textHeader"][2]}</span>
        </h1>
        <h2>{textItems["textSubHeader"]}</h2>
      </div>
      <div className="visual">
        <img className="headshot" src={cartoon_me} alt="Peter Gilliam" />
      </div>
    </body>
  );
}

export default Home;
