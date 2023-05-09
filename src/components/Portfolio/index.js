import React from "react";
import "./index.scss";
import projectData from "./projectData";
import iconMapping from "./iconMapping";
import Overlay from "./Overlay.js";

// Creates a tile with header, icon, and overlay
function ProjectTile(props) {
  const iconSrc = iconMapping[props.data.id];
  return (
    <div className="project_tile">
      <h1>{props.data.name}</h1>
      <div className="tileBody">
        {iconSrc && (
          <img className="project_icon" src={iconSrc} alt="Project Icon" />
        )}
        <div className="tile_overlay">
          <a href="/Home">
            <h2>Read More</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

// Creates rows and fills them with tiles
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

// Primary Exported Function
function Portfolio() {
  return (
    <body className="bodyPage" id="portfolio_page">
      <Overlay />
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
