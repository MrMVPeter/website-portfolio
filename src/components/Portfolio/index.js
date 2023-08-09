import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import projectData from "./projectData";
import iconMapping from "./iconMapping";
import Overlay from "./Overlay";

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
          <button
            onClick={() => {
              props.handleToggleShowOverlay(props.data);
              window.scrollTo(0, 0);
            }}
          >
            <h2>Read More</h2>
          </button>
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
            return (
              <ProjectTile
                data={item}
                handleToggleShowOverlay={props.handleToggleShowOverlay}
              />
            );
          })}
        </div>
      }
    </div>
  );
}

// Primary Exported Function
function Portfolio() {
  const [showOverlay, setShowOverlay] = useState(false);

  const [selectedOverlay, setSelectedOverlay] = useState(0);

  const handleToggleShowOverlay = (project = 0) => {
    setSelectedOverlay(project);
    setShowOverlay((prevState) => !prevState);
  };

  return (
    <body className="bodyPage" id="portfolio_page">
      {/* Overlay Element */}
      <CSSTransition in={showOverlay} timeout={600} classNames="showOverlay">
        <Overlay
          handleClose={handleToggleShowOverlay}
          project={selectedOverlay}
        />
      </CSSTransition>

      {/* Persistant Portfolio Page */}
      <h1>Portfolio Page</h1>
      <div id="project_list">
        {projectData.map((item, index) => {
          return (
            <ProjecType
              data={item}
              handleToggleShowOverlay={handleToggleShowOverlay}
            />
          );
        })}
      </div>
    </body>
  );
}

export default Portfolio;
