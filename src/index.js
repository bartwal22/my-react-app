import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure App is correctly imported
import './index.css';

// Create root and render App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
