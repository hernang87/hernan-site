import React from 'react';
import { SiteTitle } from './components/SiteTitle';
import { Intro } from './components/Intro';
import { ExperienceContainer } from './components/ExperienceContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <SiteTitle />
      <Intro />
      <ExperienceContainer />
    </div>
  );
};

export default App;
