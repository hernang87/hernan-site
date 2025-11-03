import * as React from 'react';
import { SocialIcon } from 'react-social-icons';

import './style.css';

export const SocialToolbar: React.FC = () => {
  return (
    <div className="social-toolbar" role="navigation" aria-label="Social media links">
      <SocialIcon
        target="_blank"
        url="https://www.linkedin.com/in/hernang87"
        aria-label="Visit my LinkedIn profile"
      />
      <SocialIcon
        target="_blank"
        url="https://github.com/hernang87"
        aria-label="Visit my GitHub profile"
      />
      <SocialIcon
        target="_blank"
        url="https://instagram.com/hernang87"
        aria-label="Visit my Instagram profile"
      />
      <SocialIcon target="_blank" url="mailto:hernang87@gmail.com" aria-label="Send me an email" />
    </div>
  );
};
