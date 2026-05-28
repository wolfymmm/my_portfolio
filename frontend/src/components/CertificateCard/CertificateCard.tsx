import React from 'react';
import './CertificateCard.scss';

export interface CertificateProps {
  image: string;
  platform: string;
  title: string;
  description: string;
  year: string;
  link: string;
}

export const CertificateCard: React.FC<CertificateProps> = ({
  image,
  platform,
  title,
  description,
  year,
  link,
}) => {
  return (
    <div className="certificate-card">
      <div className="certificate-image-wrapper">
        <img src={image} alt={title} className="certificate-image" />
      </div>

      <div className="certificate-info">
        <span className="certificate-platform">{platform}</span>
        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-description">{description}</p>
        <span className="certificate-year">{year}</span>
      </div>

      <button 
        className="view-certificate-btn" 
        onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
      >
        View Certificate
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </button>
    </div>
  );
};