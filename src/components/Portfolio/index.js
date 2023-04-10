import React from "react";
import "./index.scss";
import projectData from "./projectData";
// import react from "../../assets/icons/react.png";

function ProjectTile(props) {
  return (
    <div className="project_tile">
      <h1>{props.data.name}</h1>
      <div className="tileBody"></div>
    </div>
  );
}

function ProjecType(props) {
  return (
    <div className="project_type">
      <h1>{props.data.name}</h1>
      {
        <div className="project_type_body">
          {props.data.projects.map((item, index) => {
            return <ProjectTile data={item} />;
          })}
        </div>
      }
    </div>
  );
}

function Portfolio() {
  return (
    <body className="bodyPage" id="portfolio_page">
      <h1>Portfolio Page</h1>
      <div id="project_list">
        {projectData.map((item, index) => {
          return <ProjecType data={item} />;
        })}
      </div>
    </body>
  );
}

export default Portfolio;
