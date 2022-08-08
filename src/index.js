import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { JobsContextProvider } from './context/JobContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobsContextProvider>
          <App />
      </JobsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
