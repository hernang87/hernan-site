import * as React from 'react';

import './style.css';

interface ExperienceItemLogoProps {
  name: string;
  logoUrl: string;
}

export const ExperienceItemLogo: React.FC<ExperienceItemLogoProps> = ({
  name,
  logoUrl
}: ExperienceItemLogoProps) => {
  return <img className="logo" src={logoUrl} alt={name} />;
};
