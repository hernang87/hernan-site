import React from 'react';
import { experienceData } from './data';
import { ExperienceItem } from '../ExperienceItem';
import './style.css';

export const ExperienceContainer: React.FC = () => {
  return (
    <section className="experience-container" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      {experienceData.map((company) => (
        <ExperienceItem key={company.name} company={company} />
      ))}
    </section>
  );
};
