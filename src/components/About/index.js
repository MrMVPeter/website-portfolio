import React from "react";
import "./index.scss";
import cartoon_me from "../../assets/images/real_me.webp";
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
        <div id="textArea">
          <h1 className="highlighted">{textItems["textHeader"]}</h1>
          <h2>{textItems["textSubHeader"]}</h2>
          <p>{textItems["textBody"]}</p>
        </div>
        <div id="timelineSection">
          <div id="timeLineBar"></div>
          <ul>
            {timeLineItems.map((item, index) => {
              return (
                <li>
                  <p className="barDate">{item["date"]}</p>
                  <p className="barName">{item["name"]}</p>
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
