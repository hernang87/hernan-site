// Renders <App /> into build/index.html so the page paints before the JS bundle runs.
// index.tsx then hydrates this markup instead of rendering from scratch.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
// Inside the project so the compiled files resolve react from node_modules
const outDir = path.join(root, 'node_modules/.cache/prerender');
fs.rmSync(outDir, { recursive: true, force: true });

execFileSync(
  path.join(root, 'node_modules/.bin/tsc'),
  [
    path.join(root, 'src/App.tsx'),
    '--outDir', outDir,
    '--module', 'commonjs',
    '--target', 'es2019',
    '--jsx', 'react-jsx',
    '--esModuleInterop',
    '--skipLibCheck',
    '--resolveJsonModule'
  ],
  { stdio: 'inherit' }
);

// Values CRA inlines at build time; PUBLIC_URL is '' when package.json has no homepage
process.env.NODE_ENV = 'production';
process.env.PUBLIC_URL = '';

const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require(path.join(outDir, 'App.js')).default;

const htmlPath = path.join(root, 'build/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const mount = '<div id="root"></div>';
if (!html.includes(mount)) throw new Error(`${mount} not found in build/index.html`);

fs.writeFileSync(
  htmlPath,
  html.replace(mount, `<div id="root">${renderToString(React.createElement(App))}</div>`)
);
fs.rmSync(outDir, { recursive: true, force: true });
console.log('Prerendered build/index.html');
