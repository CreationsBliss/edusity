import React from "react";
import location_icon from "../../assets/location-icon.png";
import email_icon from "../../assets/mail-icon.png";
import msg_icon from "../../assets/msg-icon.png";
import phn_icon from "../../assets/phone-icon.png";
import arrow from "../../assets/white-arrow.png";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3a8ee3dc-42c3-4ed3-9e6a-f57fde42f5f4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="msg icon" />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={email_icon} alt="email icon" /> something@someone.dev
          </li>
          <li>
            {" "}
            <img src={phn_icon} alt="phn icon" /> +1 123-456-7890
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="location icon" /> +1 123-456-7890
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            required
          />

          <label>Write your messages here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            {" "}
            Submit Now <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
};

export default Contact;
