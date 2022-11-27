import React from "react";
import "./index.scss";
import cartoon_me from "../../assets/images/cartoon_me.jpg";
import timeLineItems from "./timeLineItems";
import textItems from "./textItems.js";

function About() {
  return (
    <body className="BodyPage">
      <div id="text">
        <h1>{textItems["textHeader"]}</h1>
        <h2>{textItems["textSubHeader"]}</h2>
        <p>{textItems["textBody"]}</p>
      </div>
      <div id="timeline">
        <div id="timeLineBar"></div>
        <ul>
          {timeLineItems.map((item, index) => {
            return (
              <li>
                <h2 className="barDate">{item["date"]}</h2>
                <h2 className="barName">{item["name"]}</h2>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="visual">
        <img id="hero_pic" src={cartoon_me} alt="Peter Gilliam" />
      </div>
    </body>
  );
}

export default About;
