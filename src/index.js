import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './Contexts/appContext';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

