import React from "react";
import "./index.scss";
import projectData from "./projectData";

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
    <body className="bodyPage" id="portfolio_page">
      <h1>Portfolio Page</h1>
      <div id="project_list">
        {projectData.map((item, index) => {
          return <ProjectTile />;
        })}
      </div>
    </body>
  );
}

export default Portfolio;
