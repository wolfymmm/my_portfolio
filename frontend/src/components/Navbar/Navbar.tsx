import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleTheme } from '../../themeSlice';
import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';
import themeSwitcherLight from '../../assets/icons/theme-switcher-light.svg';
import themeSwitcherDark from '../../assets/icons/theme-switcher-dark.svg';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 140; 
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar-container ">
      <div className="navbar-inner glass-effect">
        <div className="navbar-logo">
          {themeMode === 'light' ? (
            <img src={logoLight} alt="Light Theme Logo" className="logo" />
          ) : (
            <img src={logoDark} alt="Dark Theme Logo" className="logo" />
          )}
        </div>
        
        <div className="navbar-controls">
          <button 
            className="theme-toggle" 
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {themeMode === 'light' ? (
              <img src={themeSwitcherDark} alt="Dark Theme" className="theme-switcher" />
            ) : (
              <img src={themeSwitcherLight} alt="Light Theme" className="theme-switcher" />
            )}
          </button>

          {!isMobile && (
            <button 
              className="contact-button desktop-only-btn purple-gradient-button" 
              onClick={(e) => handleAnchorClick(e, 'contact')}
            >
              Get In Touch
            </button>
          )}

          <button 
            className={`burger-menu ${isOpen ? 'open' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''} ${isMobile ? 'glass-effect' : ''}`}>
        <li>
          <a href="#about" className="nav-link" onClick={(e) => handleAnchorClick(e, 'about')}>
            About me
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link" onClick={(e) => handleAnchorClick(e, 'skills')}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link" onClick={(e) => handleAnchorClick(e, 'projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link" onClick={(e) => handleAnchorClick(e, 'contact')}>
            Contact
          </a>
        </li>
        
        {isMobile && (
          <li className="mobile-only-item">
            <button 
              className="contact-button purple-gradient-button" 
              onClick={(e) => handleAnchorClick(e, 'contact')}
            >
              Get In Touch
            </button>
          </li>
        )}
      </ul>
    </nav>
  );                 
};

export default Navbar;