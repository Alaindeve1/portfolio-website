import React, { useState } from 'react';
import '../styles/ContactStyles.css';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields'
      });
      return;
    }

    try {
      // Create URLSearchParams instead of FormData
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject || '(No subject)');
      formDataToSend.append('message', formData.message);
      
      const response = await fetch('https://formspree.io/f/xblyrwdw', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        mode: 'cors' // Explicitly set CORS mode
      });

      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        
        <div className="contact-container">
          <form 
            className="contact-form" 
            onSubmit={handleSubmit}
            noValidate
          >
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name <span className="required">*</span></label>
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
              <label htmlFor="email">Email <span className="required">*</span></label>
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
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to me using the form or through the contact information below.</p>
            
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>alainndizeye11@gmail.com</p>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+250 799324850</p>
            </div>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>KIGALI, Rwanda</p>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ndizeye-alain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;