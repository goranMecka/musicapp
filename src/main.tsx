
import React from 'react';

import './index.css';

import { createRoot } from 'react-dom/client';
import App from './App'; // Import your App component here

const container: HTMLElement | null = document.getElementById('root');
if (!container) {
  throw new Error('Container not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
    </React.StrictMode>
);
