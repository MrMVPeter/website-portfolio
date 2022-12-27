import React from "react";
import "./index.scss";
import paper_plane from "../../assets/icons/paper_plane.svg";

function Contact() {
  return (
    <body className="BodyPage">
      <div id="Contact">
        <h1>Contact Me!</h1>
        {/* <h1>peter.n.gilliam@gmail.com</h1> */}
        <form id="ContactBody">
          <label>Full Name:</label>
          <input></input>
          <label>Return Email Address:</label>
          <input></input>
          <label>Message:</label>
          <textarea></textarea>
          <div id="ContactFinalLine">
            <button id="submitBtn" onClick={{}}>
              <p>Send It!</p>
              <img src={paper_plane} alt="Paper Plane"></img>
            </button>
            <h2>peter.n.gilliam@gmail.com</h2>
          </div>
        </form>
      </div>

      <iframe
        id="googleMaps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11701.650342329605!2d-82.90026977344345!3d42.84302064650424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824fd9a01f3a803%3A0xfcfeceb42e5ae313!2sArmada%2C%20MI%2048005!5e0!3m2!1sen!2sus!4v1671421117998!5m2!1sen!2sus"
        width="600"
        height="450"
        // style={{}=>()}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google Maps Embeded"
      ></iframe>
    </body>
  );
}

export default Contact;
