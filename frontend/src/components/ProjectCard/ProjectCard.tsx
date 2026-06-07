import React from 'react';
import './ProjectCard.css';

import githubIcon from '../../assets/icons/Github.svg';
import behanceIcon from '../../assets/icons/Behance.svg';

export interface ProjectProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  category: ('Development' | 'Design')[]; 
  behanceLink?: string;
  githubLink?: string;
  demoLink?: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  tags,
  category,
  behanceLink,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-content">
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        


        <div className="project-links">
          

          {category.includes('Design') && behanceLink && (
            <a 
              href={behanceLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-icon" 
              title="View on Behance"
            >
              <img src={behanceIcon} alt="Behance" className="icon-img" />
              <span className="link-text">View on Behance</span>
            </a>
          )}


          {category.includes('Development') && (
            <>
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-icon" 
                  title="View Code on GitHub"
                >
                  <img src={githubIcon} alt="GitHub" className="icon-img" />
                  <span className="link-text">View on GitHub</span>
                </a>
              )}
              
              {demoLink && (
  <a 
    href={demoLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="project-link-icon" 
    title="Live Demo"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      className="icon-svg-stroke" 
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
    <span className="link-text">Live Demo</span>
  </a>
)}
            </>
          )}

        </div>
      </div>
    </div>
  );
};