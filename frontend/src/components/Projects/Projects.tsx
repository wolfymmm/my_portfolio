import React, { useState } from 'react';
import { ProjectCard, type ProjectProps } from '../ProjectCard/ProjectCard';
import './Projects.scss';

import phillyImg from '../../assets/philly.png';
import hydroImg from '../../assets/hydrophase.png';

interface ProjectData extends ProjectProps {
  category: 'Development' | 'Design';
}

const projectsData: ProjectData[] = [
  {
    image: phillyImg,
    title: 'Voice Assistant Chat App',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course.',
    tags: ['Design', 'Frontend', 'Backend', 'Tools'],
    behanceLink: 'https://www.behance.net/...',
    category: 'Development',
  },
  {
    image: hydroImg,
    title: 'Hydroacoustic Signal Phase Spectrum Analysis System',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course.',
    tags: ['Design', 'Frontend', 'Backend', 'Tools'],
    behanceLink: 'https://www.behance.net/...',
    category: 'Development',
  },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Development' | 'Design'>('Development');

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-tabs">
        <button
          className={`tab-btn ${activeCategory === 'Development' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Development')}
        >
          Development
        </button>
        <button
          className={`tab-btn ${activeCategory === 'Design' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Design')}
        >
          Design
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;