import React from 'react';
import '../styles/WhatsApp.css';

// Utility to build WhatsApp link
const buildWhatsAppLink = (phoneNumber, message) => {
  const base = 'https://wa.me/';
  const num = (phoneNumber || '').replace(/[^0-9]/g, '');
  const text = encodeURIComponent(message || 'Hi Alain! I came from your portfolio website and would love to chat.');
  return `${base}${num}?text=${text}`;
};

const WhatsAppCTA = ({
  variant = 'button', // 'button' | 'card'
  phone = '250799324850',
  message,
  className = '',
}) => {
  const href = buildWhatsAppLink(phone, message);

  if (variant === 'card') {
    return (
      <div className={`wa-card ${className}`}>
        <div className="wa-card-left">
          <div className="wa-avatar">
            <span>NA</span>
            <span className="wa-status" aria-hidden="true"></span>
          </div>
          <div className="wa-texts">
            <h3>Chat on WhatsApp</h3>
            <p>Fastest response. Typically replies within minutes.</p>
          </div>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          aria-label="Chat with Alain on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path fill="currentColor" d="M20.52 3.48A11.77 11.77 0 0 0 12.02 0C5.74 0 .63 5.11.63 11.4c0 2.01.53 3.98 1.53 5.72L0 24l7.06-2.09a11.42 11.42 0 0 0 5 .12c6.28-1.36 10.34-7.5 8.98-13.78-.5-2.3-1.73-4.41-3.52-5.77zM12.03 21.3c-1.58.01-3.14-.38-4.52-1.13l-.32-.17-4.17 1.24 1.25-4.06-.2-.33A9.69 9.69 0 0 1 2.33 11.4c0-5.34 4.35-9.69 9.7-9.69 2.59 0 5.03 1.01 6.86 2.85a9.66 9.66 0 0 1 2.84 6.84c0 5.35-4.35 9.7-9.7 9.7zm5.51-7.24c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.22-.66.07-.3-.15-1.24-.46-2.37-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.47.13-.62.13-.13.3-.34.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.69-1.65-.95-2.25-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.21 3.1.15.2 2.09 3.2 5.06 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.79-.73 2.04-1.44.25-.71.25-1.32.18-1.45-.07-.13-.27-.2-.57-.35z"/>
          </svg>
          <span>Message me</span>
        </a>
      </div>
    );
  }

  // default: compact button
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-compact ${className}`}
      aria-label="Chat with Alain on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path fill="currentColor" d="M20.52 3.48A11.77 11.77 0 0 0 12.02 0C5.74 0 .63 5.11.63 11.4c0 2.01.53 3.98 1.53 5.72L0 24l7.06-2.09a11.42 11.42 0 0 0 5 .12c6.28-1.36 10.34-7.5 8.98-13.78-.5-2.3-1.73-4.41-3.52-5.77zM12.03 21.3c-1.58.01-3.14-.38-4.52-1.13l-.32-.17-4.17 1.24 1.25-4.06-.2-.33A9.69 9.69 0 0 1 2.33 11.4c0-5.34 4.35-9.69 9.7-9.69 2.59 0 5.03 1.01 6.86 2.85a9.66 9.66 0 0 1 2.84 6.84c0 5.35-4.35 9.7-9.7 9.7z"/>
      </svg>
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppCTA;
