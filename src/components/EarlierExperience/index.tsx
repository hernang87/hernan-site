import * as React from 'react';
import { type Company } from '../../types';
import { DateRange } from '../DateRange';

interface EarlierExperienceProps {
  companies: Company[];
}

export const EarlierExperience: React.FC<EarlierExperienceProps> = ({
  companies
}: EarlierExperienceProps) => {
  return (
    <div className="mt-14">
      <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted">
        Earlier
      </h3>
      <ul className="space-y-3 sm:space-y-1">
        {companies.flatMap((company) =>
          company.positions.map((position, index) => (
            <li
              key={`${company.name}-${position.position}-${index}`}
              className="grid gap-x-6 sm:grid-cols-[9rem_1fr]">
              <DateRange from={position.from} to={position.to} />
              <p className="text-[0.9375rem]">
                {position.position}
                <span className="text-muted"> · {company.name}</span>
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
