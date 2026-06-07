import React, { useState } from 'react';
import { CertificateCard, type CertificateProps } from '../CertificateCard/CertificateCard';
import './Certificates.css';

import certFullStack from '../../assets/certificates/cert_fullstack.png';
import certJS from '../../assets/certificates/cert_js.png';
import certGit from '../../assets/certificates/cert_git.png';
import certHTMLCSS from '../../assets/certificates/cert_html_css.png';
import certReact from '../../assets/certificates/cert_react.png';
import certTS from '../../assets/certificates/cert_ts.png';
import certSQL from '../../assets/certificates/cert_sql.png';
import certFigma from '../../assets/certificates/cert_figma.png';
import certIllustrator from '../../assets/certificates/cert_illustrator.png';

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
  },
   {
    image: certHTMLCSS,
    platform: 'MATE ACADEMY',
    title: 'HTML/CSS Advanced',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://static.mate.academy/certificates/production/844648/76860/f70e3d1c-4cb0-45e8-9fd1-aca97a3f8a54/marusina-certificate.pdf?_gl=1*e5eq4q*_gcl_au*MTEzMDQwMDk2My4xNzc0Njk3NDg5LjU5NDczNjczMi4xNzgwNTEzMTM2LjE3ODA1MTMxNDI.',
    category: 'Mate Academy'
  },
   {
    image: certReact,
    platform: 'MATE ACADEMY',
    title: 'React',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://static.mate.academy/certificates/production/844648/90346/741dfdc9-0f78-49f8-beb4-cb9fbdfcd336/marusina-certificate.pdf?_gl=1*12z2lim*_gcl_au*MTEzMDQwMDk2My4xNzc0Njk3NDg5LjU5NDczNjczMi4xNzgwNTEzMTM2LjE3ODA1MTMxNDI.',
    category: 'Mate Academy'
  },
   {
    image: certTS,
    platform: 'MATE ACADEMY',
    title: 'TypeScript',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://static.mate.academy/certificates/production/844648/103428/c6f998ae-be59-45cd-bc09-04ac80aa5ab5/marusina-certificate.pdf?_gl=1*18brdkm*_gcl_au*MTEzMDQwMDk2My4xNzc0Njk3NDg5LjU5NDczNjczMi4xNzgwNTEzMTM2LjE3ODA1MTMxNDI.',
    category: 'Mate Academy'
  },
     {
    image: certSQL,
    platform: 'MATE ACADEMY',
    title: 'SQL Basics',
    description: 'Certificate from Mate Academy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://static.mate.academy/certificates/production/844648/94750/86f57e85-3f51-4668-849d-6fe119d1b7b0/marusina-certificate.pdf?_gl=1*18brdkm*_gcl_au*MTEzMDQwMDk2My4xNzc0Njk3NDg5LjU5NDczNjczMi4xNzgwNTEzMTM2LjE3ODA1MTMxNDI.',
    category: 'Mate Academy'
  },
    {
    image: certFigma,
    platform: 'UDEMY',
    title: 'Complete Figma Course: Web & Mobile Projects from Scratch',
    description: 'Certificate from Udemy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-de414fe9-7b64-4107-9ecb-b0fb2183a220.pdf',
    category: 'Udemy'
  },
     {
    image: certIllustrator,
    platform: 'UDEMY',
    title: 'Adobe Illustrator CC - Essentials Training Course',
    description: 'Certificate from Udemy awarded for completion of a full stack course module.',
    year: '2026',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e113d4ab-688e-4203-9d19-4291be64af16.pdf',
    category: 'Udemy'
  },
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
          className={`filter-tab ${activeCategory === 'Mate Academy' ? 'purple-gradient-button' : 'transparent-button'}`}
          onClick={() => setActiveCategory('Mate Academy')}
        >
          Mate Academy
        </button>
        <button
          className={`filter-tab ${activeCategory === 'Udemy' ? 'purple-gradient-button' : 'transparent-button'}`}
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