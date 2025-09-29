import React, { useState } from 'react';
import '../styles/ContactStyles.css';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('common');
  
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
        message: t('contact.messages.required')
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: t('contact.messages.invalidEmail')
      });
      return;
    }

    try {
      // Using FormData instead of URLSearchParams as it's more compatible with Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('email', formData.email.trim());
      formDataToSend.append('subject', formData.subject.trim() || '(No subject)');
      formDataToSend.append('message', formData.message.trim());
      
      const response = await fetch('https://formspree.io/f/xblyrwdw', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      
      if (response.ok && data.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: t('contact.messages.success')
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
        message: `${t('contact.messages.errorPrefix')} ${error.message || ''}`.trim()
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="section-title">{t('contact.title')}</h1>
        
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
              <label htmlFor="name">{t('contact.form.name')} <span className="required">*</span></label>
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
              <label htmlFor="email">{t('contact.form.email')} <span className="required">*</span></label>
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
              <label htmlFor="subject">{t('contact.form.subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')} <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">{t('contact.form.submit')}</button>
          </form>
          
          <div className="contact-info">
            <h2>{t('contact.infoTitle')}</h2>
            <p>{t('contact.infoCopy')}</p>
            
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
              <a href="https://github.com/Alaindeve1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ndizeye-alain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/ndizeyealain1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            {/* WhatsApp CTA Card */}
            <div style={{ marginTop: '1rem' }}>
              <WhatsAppCTA
                variant="card"
                message="Hi Alain! I’m on your contact page and would like to chat on WhatsApp."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;