import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./form.component.css";

const SERVICE_ID = "service_mareklukac08";
const TEMPLATE_ID = "template_testsetup";
const PUBLIC_KEY = "VdETkktU9QKLeBXNu";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("Email send response:", response.text);
        alert("Správa úspešne odoslaná!");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Niečo sa pokazilo! Vyskúšajte to neskôr.");
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Napíšte mi</h3>
      <div className="form-div">
        <input
          className="form-input form-input-name"
          type="text"
          id="name"
          value={name}
          placeholder="Meno: *"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-div">
        <input
          className="form-input form-input-email"
          type="email"
          id="email"
          value={email}
          placeholder="E-mail: *"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-div">
        <textarea
          className="form-textarea"
          id="message"
          value={message}
          placeholder="Správa: *"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className="form-button" type="submit">
        ODOSLAŤ
      </button>
    </form>
  );
};

export default Form;
