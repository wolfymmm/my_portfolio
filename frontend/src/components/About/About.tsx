import React from 'react';
import myPhoto from '../../assets/my_photo.png';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        
        <div className="about-text">
          <h2>About me</h2>
          <p>
            I am a Full-Stack Developer and UI/UX Designer who builds complete web products from scratch. 
            I handle the entire product lifecycle, ensuring a smooth and reliable transition from abstract 
            ideas and visual mockups to a live, working interface.
          </p>
          <p>
            Dedicated to clean code and user-centered design, I focus on creating efficient, 
            maintainable, and highly responsive applications.
          </p>
          <p>
            Always ready to adapt, master new tools, and build digital solutions that make an impact :)
          </p>
        </div>

        <div className="about-photo-wrapper">
          <img src={myPhoto} alt="Yana Marusina" className="about-photo" />
        </div>

      </div>
    </section>
  );                     
};

export default About;