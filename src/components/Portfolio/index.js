import React from "react";
import "./index.scss";
<<<<<<< HEAD
// import projectComponent from "./projectComponent";
=======
import projectData from "./projectData";
>>>>>>> main

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
<<<<<<< HEAD
      {/* <projectComponent></projectComponent> */}
      {/* <Portfolio></Portfolio> */}
=======
      <div id="project_list">
        {projectData.map((item, index) => {
          return <ProjectTile />;
        })}
      </div>
>>>>>>> main
    </body>
  );
}

export default Portfolio;
