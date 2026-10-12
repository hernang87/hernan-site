import * as React from 'react';
import classNames from 'classnames';

interface ExperienceItemLogoProps {
  name: string;
  logoUrl?: string;
  withBorder?: boolean;
}

export const ExperienceItemLogo: React.FC<ExperienceItemLogoProps> = ({
  name,
  logoUrl,
  withBorder
}: ExperienceItemLogoProps) => {
  const cx = classNames('h-8 w-8 shrink-0 rounded-md', {
    'ring-1 ring-line': withBorder ?? false
  });

  if (logoUrl === undefined) {
    return (
      <span
        className={classNames(
          cx,
          'inline-flex items-center justify-center border border-line font-mono text-sm text-muted'
        )}
        aria-hidden="true">
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      className={cx}
      src={process.env.PUBLIC_URL + logoUrl}
      alt={`${name} company logo`}
      width="32"
      height="32"
      loading="lazy"
    />
  );
};
