import axios from "axios";

async function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  try {
    const response = await axios.post("/.netlify/functions/submitForm", {
      name,
      email,
      message,
    });

    if (response.data.status === "success") {
      // Handle success e-g, show a success message or clear the form
      alert("Your message has been sent successfully.");
      event.target.reset();
    } else {
      // Handle error e-g, show an error message
      alert("An error occurred. Please try again later.");
    }
  } catch (error) {
    // Handle error e-g, show an error message
    alert("An error occurred. Please try again later.");
  }
}

export { handleSubmit };
