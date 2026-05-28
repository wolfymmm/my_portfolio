import React from 'react';
import './Home.scss';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Certificates from '../../components/Certificates/Certificates';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import resumePdf from '../../assets/CV.pdf';


export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="bg-glow bg-glow--top"></div>
      <div className="bg-glow bg-glow--bottom"></div>

      <main className="home-content">
            <span className="nav-availability">Available for new Projects</span>
            <h1 className="nav-title">Hi! I am Yana</h1>
            <p className="nav-subtitle">Full-Stack Developer & UI/UX Designer</p>
            <p className="nav-description">I take ideas and transform them into real, polished web applications, covering everything from the first design prototype to a live, deployed product.</p>
            <div className="button-group-home">
            <button className="view-my-work-button" onClick={() => window.location.href = '#projects'}>
              View My Work
            </button>
            <button 
                className="view-resume-button" 
                onClick={() => window.open(resumePdf, '_blank', 'noopener,noreferrer')}
              >
                View Resume
              </button>
            </div>
          <About />
          <Skills />
          <Certificates />
          <Projects />
          <Footer />
      </main>
    </div>
  );
};

export default Home;