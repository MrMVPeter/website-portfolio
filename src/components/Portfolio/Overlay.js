import "./Overlay.scss";
import iconMapping from "./iconMapping";

function Overlay({ handleClose, project }) {
  return (
    <div className="screen_overlay" onClick={handleClose}>
      <div id="screen_overlay_body">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <img src={iconMapping[project.id]} alt="Project_Icon"></img>
        <p>
          Relevant Technologies:<b></b>
          {project.relevant_technologies}
        </p>
      </div>
    </div>
  );
}

export default Overlay;
