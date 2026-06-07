import React, { useState } from 'react';
import './Skills.css';

import figmaIcon from '../../assets/skills/figmaIcon.svg';
import aiIcon from '../../assets/skills/illustratorIcon.svg';
import reactIcon from '../../assets/skills/reactIcon.svg';
import htmlCssIcon from '../../assets/skills/css_html_Icon.svg'; 
import scssIcon from '../../assets/skills/scssIcon.svg';
import jsIcon from '../../assets/skills/javaScriptIcon.svg';
import tsIcon from '../../assets/skills/tsIcon.svg';
import nodeIcon from '../../assets/skills/nodeIcon.svg';
import gitIcon from '../../assets/skills/gitIcon.svg'; 
import pythonIcon from '../../assets/skills/pythonIcon.svg';
import reduxIcon from '../../assets/skills/reduxIcon.svg';
import fastaApiIcon from '../../assets/skills/fastApiIcon.svg';  
import postmanIcon from '../../assets/skills/postmanIcon.svg';
import sequelizeIcon from '../../assets/skills/sequelizeIcon.svg';
import prismaIcon from '../../assets/skills/prismaIcon.svg';
import postgresIcon from '../../assets/skills/postgresIcon.svg';
import mongodbIcon from '../../assets/skills/mongodbIcon.svg';

type CategoryType = 'All' | 'Design' | 'Frontend' | 'Backend' | 'Tools';

interface SkillItem {
  name: string;
  category: CategoryType;
  icon: string;
}

const skillsData: SkillItem[] = [
  { name: 'Figma', category: 'Design', icon: figmaIcon },
  { name: 'Adobe Illustrator', category: 'Design', icon: aiIcon },
  { name: 'React', category: 'Frontend', icon: reactIcon },
  { name: 'HTML/CSS', category: 'Frontend', icon: htmlCssIcon },
  { name: 'SCSS', category: 'Frontend', icon: scssIcon },
  { name: 'JavaScript', category: 'Frontend', icon: jsIcon },
  { name: 'TypeScript', category: 'Frontend', icon: tsIcon },
  { name: 'Node.js', category: 'Backend', icon: nodeIcon },
  { name: 'Git', category: 'Tools', icon: gitIcon },
  { name: 'Python', category: 'Backend', icon: pythonIcon },
  { name: 'Redux', category: 'Frontend', icon: reduxIcon },
  { name: 'FastApi', category: 'Backend', icon: fastaApiIcon },
  { name: 'Postman', category: 'Tools', icon: postmanIcon },
  { name: 'Sequelize', category: 'Backend', icon: sequelizeIcon },
  { name: 'Prisma', category: 'Backend', icon: prismaIcon },
  { name: 'PostgreSQL', category: 'Backend', icon: postgresIcon },
  { name: 'MongoDB', category: 'Backend', icon: mongodbIcon },
];

const categories: CategoryType[] = ['All', 'Design', 'Frontend', 'Backend', 'Tools'];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-filter-wrapper">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'purple-gradient-button' : 'transparent-button'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon-wrapper">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;