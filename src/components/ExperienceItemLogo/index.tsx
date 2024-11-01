import * as React from 'react';
import classNames from 'classnames';

import './style.css';

interface ExperienceItemLogoProps {
  name: string;
  logoUrl: string;
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
  return <img className={cx} src={process.env.PUBLIC_URL + logoUrl} alt={name} />;
};
