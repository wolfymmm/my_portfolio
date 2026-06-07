import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import './Contact.css';
import emailIcon from '../../assets/icons/email.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });


  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); 


    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("Перевірка ключів:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      alert('Message sent successfully! I will get back to you as soon as possible.');
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Message sending failed:', error);
      alert('Oops, something went wrong. Please try again or message me directly.');
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Let’s Work Together</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
              disabled={isSubmitting} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="type" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn purple-gradient-button" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-info">
          <div className="info-text">
            <p>
              I am always open to discussing new projects and creative ideas. 
              You can be absolutely sure that I will be 100% invested in your vision, 
              putting my heart and soul into it.
            </p>
            <p>
              I strive to create high-quality, soulful digital products that truly make a difference.
            </p>
          </div>

          <div className="socials-block">
            <h3 className="socials-title">My Socials</h3>
            <div className="socials-links">
              <a href="mailto:your-email@example.com" className="social-icon" title="Email">
                <img src={emailIcon} alt="Email Icon" className="social-icon-image" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <img src={instagramIcon} alt="Instagram Icon" className="social-icon-image" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn Icon" className="social-icon-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;