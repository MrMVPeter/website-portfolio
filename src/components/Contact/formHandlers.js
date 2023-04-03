import axios from "axios";

async function handleSubmit(formData) {
  const { fullName, email, message } = formData;

  try {
    const response = await axios.post("/.netlify/functions/submitForm", {
      fullName,
      email,
      message,
    });

    if (response.data.status === "success") {
      // Handle success e-g, show a success message or clear the form
      alert("Your message has been sent successfully.");
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
