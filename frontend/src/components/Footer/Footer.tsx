import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <footer className="footer-container">
      <button 
        className="back-to-top-btn" 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
      </button>

      <hr className="footer-divider" />

      <p className="footer-copyright">
        Copyright 2026. Yana Marusina
      </p>
    </footer>
  );
};

export default Footer;