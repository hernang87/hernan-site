import React from 'react';
import { SiteTitle } from './components/SiteTitle';
import { Intro } from './components/Intro';
import { ExperienceContainer } from './components/ExperienceContainer';
import { SocialToolbar } from './components/SocialToolbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <SocialToolbar />
      <SiteTitle />
      <Intro />
      <ExperienceContainer />
    </div>
  );
};

export default App;
