import * as React from 'react';
import { SocialIcon } from 'react-social-icons';

import './style.css';

export const SocialToolbar: React.FC = () => {
  return (
    <div className="social-toolbar">
      <SocialIcon target="_blank" url="https://www.linkedin.com/in/hernang87" />
      <SocialIcon target="_blank" url="https://github.com/hernang87" />
      <SocialIcon target="_blank" url="https://instagram.com/hernang87" />
      <SocialIcon target="_blank" url="mailto:hernang87@gmail.com" />
    </div>
  );
};
