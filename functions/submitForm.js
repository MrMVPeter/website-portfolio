const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  console.log("Function started");
  alert("Function started");

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Mothod Not Allowed",
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_TO,
    subject: "New message from your portfolio website",
    text: message,
  };

  console.log("About to send email"); // Add this line

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully"); // Add this line
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success", message: "Email Sent" }),
    };
  } catch (error) {
    console.error("Email sending failed:", error); // Add this line
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "error",
        message: "Email Failed to Send",
      }),
    };
  }
};
