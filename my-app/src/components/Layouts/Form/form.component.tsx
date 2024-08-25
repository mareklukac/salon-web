import React, { useState } from "react";

import "./form.component.css";

const Form: React.FC = () => {
  // State variables to hold form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Log form data to the console (you can replace this with actual form submission logic)
    console.log("Form submitted with data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form fields after submission
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
        Odoslať
      </button>
    </form>
  );
};

export default Form;
