import React, { useState } from 'react';
import { CertificateCard, type CertificateProps } from '../CertificateCard/CertificateCard';
import './Certificates.scss';

import certFullStack from '../../assets/cert_fullstack.png';
import certJS from '../../assets/cert_js.png';
import certGit from '../../assets/cert_git.png';

interface CertificateData extends CertificateProps {
  category: 'Mate Academy' | 'Udemy';
}

const certificatesData: CertificateData[] = [
  {
    image: certFullStack,
    platform: 'MATE ACADEMY',
    title: 'Full-Stack Developer',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course.',
    year: '2026',
    link: 'https://static.mate.academy/certificates/production/844648/120202/bd821edc-6725-432a-a81b-a1ee6ea18dea/marusina-certificate.pdf?_gl=1*1abh5hq*_gcl_au*MTEzMDQwMDk2My4xNzc0Njk3NDg5LjEzNjAxNjA0NTkuMTc3OTgxNjk3OC4xNzc5ODE4MDkz', // Твоє посилання
    category: 'Mate Academy'
  },
  {
    image: certJS,
    platform: 'MATE ACADEMY',
    title: 'JavaScript Advanced',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://static.mate.academy/certificates/production/844648/84301/a9a01a38-2f8f-43f9-99c2-eebf0f912a82/marusina-certificate.pdf?_gl=1*1bcsequ*_gcl_au*MTEzMDQwMDk2My4xNzc0Njk3NDg5LjEzNjAxNjA0NTkuMTc3OTgxNjk3OC4xNzc5ODE4MTIw',
    category: 'Mate Academy'
  },
  {
    image: certGit,
    platform: 'MATE ACADEMY',
    title: 'Git and Terminal',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://static.mate.academy/certificates/production/844648/57451/5094ec01-a685-4a5c-951e-dd15bf477470/marusina-certificate.pdf?_gl=1*bs8kyw*_gcl_au*MTEzMDQwMDk2My4xNzc0Njk3NDg5LjEzNjAxNjA0NTkuMTc3OTgxNjk3OC4xNzc5ODE4MTIw',
    category: 'Mate Academy'
  }
];

export const Certificates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Mate Academy' | 'Udemy'>('Mate Academy');

  const filteredCertificates = certificatesData.filter(
    (cert) => cert.category === activeCategory
  );

  return (
    <section id="certificates" className="certificates-container">
      <h2 className="section-title">Certificates and Achievements</h2>

      <div className="certificates-filter">
        <button
          className={`filter-tab ${activeCategory === 'Mate Academy' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Mate Academy')}
        >
          Mate Academy
        </button>
        <button
          className={`filter-tab ${activeCategory === 'Udemy' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Udemy')}
        >
          Udemy
        </button>
      </div>

      <div className="certificates-grid">
        {filteredCertificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;