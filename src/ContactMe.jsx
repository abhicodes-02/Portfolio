import React, { useRef } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/progamerbaban02@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">
        CONTACT <span>ME</span>
      </h1>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="phone" placeholder="Phone No." />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message Here" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
