import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LeagueIdContextProvider } from './Contexts/LeagueIdContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LeagueIdContextProvider>
      <App />
    </LeagueIdContextProvider>
  </React.StrictMode>,
)
