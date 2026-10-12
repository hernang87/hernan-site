import React from 'react';
import { experienceData } from './data';
import { ExperienceItem } from '../ExperienceItem';

export const ExperienceContainer: React.FC = () => {
  return (
    <section aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-10 font-mono text-xs font-medium uppercase tracking-widest text-muted">
        Experience
      </h2>
      <div className="space-y-14">
        {experienceData.map((company) => (
          <ExperienceItem key={company.name} company={company} />
        ))}
      </div>
    </section>
  );
};
