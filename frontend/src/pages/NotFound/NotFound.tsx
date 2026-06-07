import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Oops! Page Not Found</h2>
        <p className="not-found-description">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/" className="back-home-btn purple-gradient-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;