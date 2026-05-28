import React, { useState } from 'react';
import './Skills.scss';

// 1. Імпортуємо твої SVG-іконки (заміни шляхи на свої реальні файли)
import figmaIcon from '../../assets/figmaIcon.svg';
import aiIcon from '../../assets/illustratorIcon.svg';
import reactIcon from '../../assets/reactIcon.svg';
import htmlCssIcon from '../../assets/css_html_Icon.svg'; // або окремо
import scssIcon from '../../assets/scssIcon.svg';
import jsIcon from '../../assets/javaScriptIcon.svg';

// Описуємо тип для категорій
type CategoryType = 'All' | 'Design' | 'Frontend' | 'Backend' | 'Tools';

interface SkillItem {
  name: string;
  category: CategoryType;
  icon: string;
}

// 2. База даних твоїх навичок
const skillsData: SkillItem[] = [
  { name: 'Figma', category: 'Design', icon: figmaIcon },
  { name: 'Adobe Illustrator', category: 'Design', icon: aiIcon },
  { name: 'React', category: 'Frontend', icon: reactIcon },
  { name: 'HTML/CSS', category: 'Frontend', icon: htmlCssIcon },
  { name: 'SCSS', category: 'Frontend', icon: scssIcon },
  { name: 'JavaScript', category: 'Frontend', icon: jsIcon },
  // Додай сюди бекенд та інструменти, коли вони з'являться:
  // { name: 'Node.js', category: 'Backend', icon: nodeIcon },
  // { name: 'Git', category: 'Tools', icon: gitIcon },
];

// Список категорій для рендеру кнопок
const categories: CategoryType[] = ['All', 'Design', 'Frontend', 'Backend', 'Tools'];

export const Skills: React.FC = () => {
  // Стейт, який зберігає поточну вибрану категорію
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  // 3. Логіка фільтрації: якщо 'All' — показуємо все, інакше — фільтруємо за категорією
  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      {/* Блок кнопок-фільтрів */}
      <div className="skills-filter-wrapper">
        {categories.map((category) => (
          <button
            key={category}
            // Якщо кнопка активна, додаємо їм клас 'active'
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Сітка з іконками навичок */}
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