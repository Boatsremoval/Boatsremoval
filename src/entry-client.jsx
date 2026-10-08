import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Pages arrive fully rendered from the server; React takes over in the browser.
const path = window.location.pathname.replace(/\/+$/, '') || '/';
hydrateRoot(document.getElementById('root'), <App path={path} />);
