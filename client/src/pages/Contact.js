// Contact.js

import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:nithyananthank8@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Reset form fields
    setName('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <div className="social-links">
<ul className="social-links-list">
  <li className="social-link">
    <a href="www.linkedin.com/in/nithyananthank" className="social-link-icon" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={32} />
    </a>
    <a href="www.linkedin.com/in/nithyananthank" className="social-link-text" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </li>
  <li className="social-link">
    <a href="https://github.com/Hackingfreakz" className="social-link-icon" target="_blank" rel="noopener noreferrer">
      <FaGithub size={32} />
    </a>
    <a href="https://github.com/Hackingfreakz" className="social-link-text" target="_blank" rel="noopener noreferrer">GitHub</a>
  </li>
</ul>

      </div>

      <div className="message-box">
        <h3>Send a Message Through Mail</h3>
        <form onSubmit={handleSubmit} className="message-form">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
