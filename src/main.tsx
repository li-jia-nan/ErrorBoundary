import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.querySelector<HTMLDivElement>('#root');

ReactDOM.createRoot(root!).render(<App />);
