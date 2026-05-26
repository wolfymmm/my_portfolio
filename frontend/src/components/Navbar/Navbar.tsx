import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleTheme } from '../..//themeSlice';
import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';
import themeSwitcherLight from '../../assets/theme-switcher-light.svg';
import themeSwitcherDark from '../../assets/theme-switcher-dark.svg';
import './Navbar.scss';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
         {themeMode === 'light' ? (
               <img src={logoLight} alt="Light Theme Logo" className="logo" />
            ) : (
               <img src={logoDark} alt="Dark Theme Logo" className="logo" />
            )}
      </div>
      
      <ul className="nav-links">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
        
        <li>
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

          <button 
            className="contact-button"
            onClick={() => window.location.href = '#contact'}
          >
            Get In Touch
          </button>
        </li>
      </ul>
    </nav>
  );                     
};

export default Navbar;