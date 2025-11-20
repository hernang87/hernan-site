import React from 'react';
import { SiteTitle } from './components/SiteTitle';
import { Intro } from './components/Intro';
import { ExperienceContainer } from './components/ExperienceContainer';
import { SocialToolbar } from './components/SocialToolbar';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="App">
      <ScrollProgress />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SocialToolbar />
      <BackToTop />
      <main id="main-content" className="container">
        <SiteTitle />
        <Intro />
        <ExperienceContainer />
      </main>
    </div>
  );
};

export default App;
