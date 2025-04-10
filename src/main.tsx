import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router';
import { Suspense } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
);