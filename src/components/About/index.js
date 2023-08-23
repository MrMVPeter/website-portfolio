import React from "react";
import "./index.scss";
import cartoon_me from "../../assets/images/real_me.jpg";
import timeLineItems from "./timeLineItems";
import textItems from "./textItems.js";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Peter | Background and Experience</title>
        <meta
          name="description"
          content="Learn more about Peter Gilliam, his background, experiences, skills, and personal journey in the tech industry."
        />
        <meta
          property="og:title"
          content="About Peter Gilliam | Background and Experience"
        />
        <meta
          property="og:description"
          content="Discover the journey, skills, and experiences that shape Peter Gilliam's career in tech."
        />
      </Helmet>

      <body className="bodyPage" id="aboutPage">
        <div className="text">
          <h1 className="highlighted">{textItems["textHeader"]}</h1>
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
        <div className="visual">
          <img className="headshot" src={cartoon_me} alt="Peter Gilliam" />
        </div>
      </body>
    </>
  );
}

export default About;
