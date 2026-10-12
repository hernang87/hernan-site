import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// build/index.html ships with <App /> prerendered (scripts/prerender.js); in dev it's empty
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
