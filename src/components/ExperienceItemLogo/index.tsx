import * as React from 'react';
import classNames from 'classnames';

import './style.css';

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
  const cx = classNames('logo', {
    'with-border': withBorder ?? false
  });

  if (logoUrl === undefined) {
    return (
      <span className={classNames(cx, 'logo-monogram')} aria-hidden="true">
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      className={cx}
      src={process.env.PUBLIC_URL + logoUrl}
      alt={`${name} company logo`}
      width="40"
      height="40"
      loading="lazy"
    />
  );
};
