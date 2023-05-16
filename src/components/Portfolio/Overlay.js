import "./Overlay.scss";

function Overlay({ handleClose }) {
  return (
    <div className="screen_overlay" onClick={handleClose}>
      <h1>OVERLAY</h1>
    </div>
  );
}

export default Overlay;
