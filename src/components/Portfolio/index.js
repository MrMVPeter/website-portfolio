import React from "react";
import "./index.scss";
// import projectComponent from "./projectComponent";

function ProjectTile(props) {
  return (
    <div className="projectTile">
      <h1>Project Tile</h1>
      <div className="tileBody"></div>
    </div>
  );
}

function Portfolio() {
  return (
    <body className="bodyPage" id="portfolioPage">
      <h1>Portfolio Page</h1>
      {/* <projectComponent></projectComponent> */}
      {/* <Portfolio></Portfolio> */}
    </body>
  );
}

export default Portfolio;
