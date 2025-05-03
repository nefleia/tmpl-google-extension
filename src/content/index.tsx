import { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';

console.log('Hello Content');

const rootEl: HTMLElement = document.createElement('div');
document.body.insertBefore(rootEl, document.body.firstElementChild);

const root: Root = createRoot(rootEl);
root.render(
  <StrictMode>
    <h1>Hello, World</h1>
  </StrictMode>,
);
