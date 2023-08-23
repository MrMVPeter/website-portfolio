import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import paper_plane from "../../assets/icons/paper_plane.svg";
import { handleSubmit } from "./formHandlers";

function Contact() {
  // Setup states for the form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // Handles the state data when fields are changed
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Turns handle submit function into an event handler
  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Peter | Get in Touch</title>
        <meta
          name="description"
          content="Reach out to Peter Gilliam for collaborations, projects, or any inquiries. Let's connect!"
        />
        <meta
          property="og:title"
          content="Contact Peter Gilliam | Let's Collaborate"
        />
        <meta
          property="og:description"
          content="Looking to collaborate or have a project in mind? Contact Peter Gilliam directly here."
        />
      </Helmet>

      <div className="bodyPage" id="contactPage">
        <div id="contactFormSection">
          <h1 className="highlighted">Contact Me!</h1>
          <form onSubmit={submitForm}>
            <label>Full Name:</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <label>Return Email Address:</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div id="contactSubmitSection">
              <button type="submit">
                <p>Send It!</p>
                <img src={paper_plane} alt="Paper Plane"></img>
              </button>
              <h2>peter.n.gilliam@gmail.com</h2>
            </div>
          </form>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11701.650342329605!2d-82.90026977344345!3d42.84302064650424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824fd9a01f3a803%3A0xfcfeceb42e5ae313!2sArmada%2C%20MI%2048005!5e0!3m2!1sen!2sus!4v1671421117998!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps Embeded"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
