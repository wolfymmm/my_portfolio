import React from 'react';
import myPhoto from '../../assets/my_photo.png';
import './About.scss';

export const About: React.FC = () => {
  return (
    <div id="about"className="about-container">
      <h2>About Me</h2>
      <p>
        I am a passionate Full-Stack Developer and UI/UX Designer with a knack for turning ideas into polished web applications. With experience in both frontend and backend development, I specialize in creating seamless user experiences while ensuring robust functionality. My design background allows me to craft visually appealing interfaces that are not only user-friendly but also align with the latest design trends. I thrive on challenges and am always eager to learn new technologies to enhance my skill set.
      </p>
    <img src={myPhoto} alt="Yana Marusina Photo" className="about-photo" />
    </div>
  );                     
};

export default About;