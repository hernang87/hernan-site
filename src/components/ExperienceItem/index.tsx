import * as React from 'react';
import { type Company } from '../../types';
import { DateRange } from '../DateRange';
import { ExperienceItemLogo } from '../ExperienceItemLogo';

interface ExperienceItemProps {
  company: Company;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ company }: ExperienceItemProps) => {
  const companyId = `company-${company.name.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <article aria-labelledby={companyId}>
      <h3 id={companyId} className="flex items-center gap-3 text-lg font-semibold">
        <ExperienceItemLogo
          name={company.name}
          logoUrl={company.logo?.url}
          withBorder={company.logo?.withBorder}
        />
        <span>{company.name}</span>
      </h3>
      <ul className="mt-5 space-y-8">
        {company.positions.map((position, index) => (
          <li
            key={`${company.name}-${position.position}-${index}`}
            className="grid gap-x-6 gap-y-1 sm:grid-cols-[9rem_1fr]">
            <DateRange from={position.from} to={position.to} />
            <div>
              <h4 className="font-medium">{position.position}</h4>
              {position.summary !== undefined && (
                <p className="mt-1 text-muted">{position.summary}</p>
              )}
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.9375rem] text-ink/85 marker:text-muted/60">
                {position.description.map((desc, descIndex) => (
                  <li key={`${desc}-${descIndex}`}>{desc}</li>
                ))}
              </ul>
              {position.stack !== undefined && (
                <p className="mt-3 font-mono text-xs text-muted">{position.stack.join(' · ')}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
