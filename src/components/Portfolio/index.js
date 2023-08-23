import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Helmet } from "react-helmet";
import "./index.scss";
import projectData from "./projectData";
import iconMapping from "./iconMapping";
import Overlay from "./Overlay";

// Renders a project Tile
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
function ProjectType(props) {
  return (
    <div className="project_type">
      <h1>{props.data.name}</h1>
      {
        <div className="project_type_body">
          {props.data.projects.map((item) => {
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
    <>
      <Helmet>
        <title>Portfolio | Peter Gilliam's Projects and Web Apps</title>
        <meta
          name="description"
          content="Explore a collection of Peter Gilliam's web projects, apps, and other tech-related works."
        />
        <meta
          property="og:title"
          content="Portfolio | Dive into Peter Gilliam's Tech Projects"
        />
        <meta
          property="og:description"
          content="A showcase of web apps, projects, and other tech endeavors by Peter Gilliam."
        />
      </Helmet>

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
              <ProjectType
                data={item}
                handleToggleShowOverlay={handleToggleShowOverlay}
              />
            );
          })}
        </div>
      </body>
    </>
  );
}

export default Portfolio;
