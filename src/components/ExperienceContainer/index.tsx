import React from 'react';
import { experienceData } from './data';
import { ExperienceItem } from '../ExperienceItem';
import './style.css';

export const ExperienceContainer: React.FC = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      {experienceData.map((company) => (
        <ExperienceItem key={company.name} company={company} />
      ))}
    </div>
  );
};
