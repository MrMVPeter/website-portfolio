import React from "react";
import "./index.scss";
import projectData from "./projectData";
import iconMapping from "./iconMapping";

function ProjectTile(props) {
  const iconSrc = iconMapping[props.data.id];

  return (
    <div className="project_tile">
      <h1>{props.data.name}</h1>
      <div className="tileBody">
        {iconSrc && (
          <img className="project_icon" src={iconSrc} alt="Project Icon" />
        )}
      </div>
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
