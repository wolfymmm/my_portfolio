import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleTheme } from '../../themeSlice';
import logoDark from '../../assets/star.svg';
import logoLight from '../../assets/star.svg';
import themeSwitcherLight from '../../assets/theme-switcher-light.svg';
import themeSwitcherDark from '../../assets/theme-switcher-dark.svg';
import './Navbar.scss';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-logo">
          {themeMode === 'light' ? (
            <img src={logoLight} alt="Light Theme Logo" className="logo" />
          ) : (
            <img src={logoDark} alt="Dark Theme Logo" className="logo" />
          )}
        </div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About me</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
          
          <li className="mobile-only-item">
            <button className="contact-button" onClick={() => { window.location.href = '#contact'; setIsOpen(false); }}>
              Get In Touch
            </button>
          </li>
        </ul>
        
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

          <button className="contact-button desktop-only-btn" onClick={() => window.location.href = '#contact'}>
            Get In Touch
          </button>

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
    </nav>
  );                     
};

export default Navbar;