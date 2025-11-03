import * as React from 'react';
import { formatDate } from '../../helpers/format-date';
import { type Company } from '../../types';
import { ExperienceItemLogo } from '../ExperienceItemLogo';

import './style.css';

interface ExperienceItemProps {
  company: Company;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ company }: ExperienceItemProps) => {
  return (
    <div className="experience-item">
      <h3 className="experience-item-company">
        <ExperienceItemLogo
          name={company.name}
          logoUrl={company.logo.url}
          withBorder={company.logo.withBorder}
        />
        <span>{company.name}</span>
      </h3>
      <ul>
        {company.positions.map((position, index) => (
          <li
            key={`${company.name}-${position.position}-${index}`}
            className="experience-item-position">
            <h4>{position.position}</h4>
            <p>
              {formatDate(position.from)} -{' '}
              {position.to !== undefined ? formatDate(position.to) : 'Present'}
            </p>
            <ul>
              {position.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
