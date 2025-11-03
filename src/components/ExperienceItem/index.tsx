import * as React from 'react';
import { formatDate } from '../../helpers/format-date';
import { type Company } from '../../types';
import { ExperienceItemLogo } from '../ExperienceItemLogo';

import './style.css';

interface ExperienceItemProps {
  company: Company;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ company }: ExperienceItemProps) => {
  const companyId = `company-${company.name.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <article className="experience-item" aria-labelledby={companyId}>
      <h3 className="experience-item-company" id={companyId}>
        <ExperienceItemLogo
          name={company.name}
          logoUrl={company.logo.url}
          withBorder={company.logo.withBorder}
        />
        <span>{company.name}</span>
      </h3>
      <ul role="list">
        {company.positions.map((position, index) => (
          <li
            key={`${company.name}-${position.position}-${index}`}
            className="experience-item-position"
            role="listitem">
            <h4>{position.position}</h4>
            <p>
              <time dateTime={position.from.toISOString().split('T')[0]}>
                {formatDate(position.from)}
              </time>{' '}
              -{' '}
              {position.to !== undefined ? (
                <time dateTime={position.to.toISOString().split('T')[0]}>
                  {formatDate(position.to)}
                </time>
              ) : (
                'Present'
              )}
            </p>
            <ul role="list">
              {position.description.map((desc, descIndex) => (
                <li key={`${desc}-${descIndex}`} role="listitem">
                  {desc}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
};
