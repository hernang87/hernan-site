import React from 'react';
import { SiteTitle } from './components/SiteTitle';
import { Intro } from './components/Intro';

const App: React.FC = () => {
  return (
    <div className="App">
      <SiteTitle />
      <Intro />
    </div>
  );
};

export default App;
