import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from 'react-ga4';
ReactGA.initialize('GTM-TD2GJ9HV'); // Replace with your Measurement ID
ReactGA.send('pageview'); // Track the initial pageview

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
