import React from 'react';
import { experienceData } from './data';
import { ExperienceItem } from '../ExperienceItem';

export const ExperienceContainer: React.FC = () => {
  return (
    <div>
      <h2>Experience</h2>
      {experienceData.map((company) => (
        <ExperienceItem key={company.name} company={company} />
      ))}
    </div>
  );
};
