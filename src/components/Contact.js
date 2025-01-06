import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Contact.css'; // Import the CSS for styling the form

const Contact = () => {
  const form = useRef(); // Create a ref for the form element

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Update the state for the form field being changed
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data via EmailJS
    emailjs.sendForm('service_gs4fg8j', 'template_k6w7pf1', form.current, {
      publicKey: 'HU0yYhBUwXUp6rZYP' // Your public key
    })
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log('Email sending failed:', error.text);
      alert('Failed to send email.');
    });

    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <h2>Get in Touch</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
