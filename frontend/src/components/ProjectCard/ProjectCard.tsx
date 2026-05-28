import React from 'react';
import './ProjectCard.scss';

export interface ProjectProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  behanceLink: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  tags,
  behanceLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-content">

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag-badge">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <a 
          href={behanceLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="behance-link"
        >
          <svg className="behance-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.22 5.384c1.117 0 2.027.202 2.73.606.702.404 1.233.978 1.593 1.72.36.743.54 1.62.54 2.631 0 .937-.156 1.745-.468 2.423a4.52 4.52 0 01-1.346 1.737c.72.336 1.302.85 1.746 1.542.444.693.666 1.57.666 2.632 0 1.13-.213 2.1-.64 2.91a5.215 5.215 0 01-1.84 1.996c-.8.472-1.782.707-2.946.707H0V5.384h8.22zm-.575 6.643c.646 0 1.155-.156 1.526-.468.371-.312.557-.79.557-1.433 0-.616-.183-1.077-.547-1.382-.365-.306-.877-.459-1.536-.459H3.456v3.742H7.645zm.528 7.373c.72 0 1.285-.175 1.693-.523.41-.349.614-.881.614-1.597 0-.672-.206-1.18-.62-1.522-.412-.34-.99-.512-1.732-.512H3.456v4.154H8.173zm11.236-8.995c1.453 0 2.613.386 3.48 1.157.867.77 1.323 1.895 1.37 3.37h-7.854c.032.73.238 1.312.618 1.746.38.435.914.652 1.603.652.541 0 .99-.115 1.348-.346.355-.23.633-.59.83-.979l2.458.94c-.453.903-1.132 1.623-2.036 2.16-.905.539-2.02.807-3.346.807-1.741 0-3.155-.526-4.243-1.577-1.088-1.05-1.632-2.47-1.632-4.259 0-1.747.533-3.155 1.6-4.224 1.066-1.07 2.455-1.605 4.166-1.605zm-.105 2.179c-.58 0-1.054.175-1.42.523-.369.349-.58.847-.634 1.498h4.147c-.032-.656-.221-1.16-.566-1.512-.346-.352-.857-.529-1.532-.529zM16.14 7.61h6.634v1.51H16.14V7.61z"/>
          </svg>
          View on Behance
        </a>
      </div>
    </div>
  );
};