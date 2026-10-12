import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { ExperienceContainer } from './components/ExperienceContainer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="App">
      <ScrollProgress />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <BackToTop />
      <main id="main-content" className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20">
        <Header />
        <Intro />
        <ExperienceContainer />
      </main>
    </div>
  );
};

export default App;
