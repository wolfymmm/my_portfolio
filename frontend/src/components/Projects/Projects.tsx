import React, { useState } from 'react';
import { ProjectCard, type ProjectProps } from '../ProjectCard/ProjectCard';
import './Projects.css';

import phillyImg from '../../assets/projects/philly.png';
import hydroImg from '../../assets/projects/hydrophase.png';
import masdokImg from '../../assets/projects/masdok.png';
import booksyImg from '../../assets/projects/booksy.png';
import game2048Img from '../../assets/projects/2048.png';
import landingImg from '../../assets/projects/landing.png';
import reactPhoneCatalogImg from '../../assets/projects/react_phone-catalog.png';

interface ProjectData extends ProjectProps {
  category: ('Development' | 'Design')[];
  githubLink?: string;
  demoLink?: string;
}

const projectsData: ProjectData[] = [
    {
    image: reactPhoneCatalogImg,
    title: 'Nice Gadgets',
    description: 'Modern React-based e-commerce platform offering a seamless shopping experience for tech enthusiasts. It features an interactive banner slider, smart category filtering, advanced sorting with pagination, and a fully functional cart and wishlist system with real-time counter updates.',
    tags: ['React', 'Redux', 'Typescript', 'SCSS', ],
    githubLink: 'https://github.com/wolfymmm/React-Phone-Catalog',
    demoLink: 'https://wolfymmm.github.io/react_phone-catalog/',
    category: ['Development'],
  },
    {
    image: booksyImg,
    title: 'Booksy',
    description: 'Online library platform that allows users to discover and easily order books for free. It features an intuitive catalog search, smart category filtering, real-time book availability badges.',
    tags: ['Figma', 'Node.js', 'JavaScript', 'NLP', 'REST API', 'MongoDB', 'Python'],
    githubLink: 'https://github.com/wolfymmm/Booksy',
    category: ['Development'],
  },
    {
    image: game2048Img,
    title: '2048 Game',
    description: 'A web-based version of the popular 2048 puzzle game.',
    tags: ['JavaScript', 'SCSS', 'HTML'],
    githubLink: 'https://github.com/wolfymmm/2048',
    demoLink: 'https://wolfymmm.github.io/js_2048_game/',
    category: ['Development'],
  },
    {
    image: landingImg,
    title: 'Bang & Olufsen Landing Page',
    description: 'Fully responsive concept website designed to showcase high-end audio products. It features a minimalist and elegant aesthetic with sophisticated typography, immersive imagery, seamless navigation, and smooth adaptive layouts tailored perfectly for luxury brand storytelling across all device screens.',
    tags: ['SCSS', 'HTML'],
    githubLink: 'https://github.com/wolfymmm/Landing-Page',
    demoLink: 'https://wolfymmm.github.io/layout_landing-page/',
    category: ['Development'],
  },
  {
    image: phillyImg,
    title: 'Philly — Voice Assistant Chat App',
    description: 'An interactive voice assistant that streamlines your learning process. Organise your timetable and master your deadlines with a friendly, automated chat experience.',
    tags: ['Figma','React', 'TypeScript', 'JavaScript', 'SCSS', 'Node.js', 'MongoDB', 'Web Speech API', 'Web Audio API', 'Python'],
    githubLink: 'https://github.com/wolfymmm/Philly',
    behanceLink: 'https://www.behance.net/gallery/247997199/Voice-assistant-Philly',
    category: ['Development', 'Design'], 
  },
  {
    image: hydroImg,
    title: 'Hydroacoustic Signal Phase Spectrum Analysis System',
    description: 'System for analyzing hydroacoustic signal phase spectrums using advanced algorithms.',
    tags: ['Figma', 'React', 'JavaScript', 'CSS', 'Python'],
    behanceLink: 'https://www.behance.net/gallery/247672129/Data-Visualization-HydroPhase',
    category: ['Design'], 
  },
  {
    image: masdokImg,
    title: 'Masdok — E-commerce Platform',
    description: 'Masdok is a comprehensive, multi-page B2B e-commerce platform tailored for POS and retail automation equipment.',
    tags: ['Figma', 'Adobe Illustrator', 'UI/UX Design', 'Branding'],
    behanceLink: 'https://www.behance.net/gallery/235445281/E-Commerce-MASDOK',
    category: ['Design'],
  },
];

type CategoryFilter = 'All' | 'Development' | 'Design';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProjects = projectsData.filter((project) =>
    activeCategory === 'All' ? true : project.category.includes(activeCategory)
  );

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-tabs">
        <button
          className={`tab-btn ${activeCategory === 'All' ? 'purple-gradient-button' : 'transparent-button'}`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        
        <button
          className={`tab-btn ${activeCategory === 'Development' ? 'purple-gradient-button' : 'transparent-button'}`}
          onClick={() => setActiveCategory('Development')}
        >
          Development
        </button>
        
        <button
          className={`tab-btn ${activeCategory === 'Design' ? 'purple-gradient-button' : 'transparent-button'}`}
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