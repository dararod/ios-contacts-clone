import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ alignItems: 'center', backgroundColor: '#333', display: 'flex', height: '100vh', justifyContent: 'center', width: '100vw', }}>
      <App />
    </div>
  </React.StrictMode>
);
