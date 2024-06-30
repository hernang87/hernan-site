import * as React from 'react';

interface ExperienceItemLogoProps {
  name: string;
  logoUrl: string;
}

export const ExperienceItemLogo: React.FC<ExperienceItemLogoProps> = ({
  name,
  logoUrl
}: ExperienceItemLogoProps) => {
  return <img src={logoUrl} alt={name} />;
};
