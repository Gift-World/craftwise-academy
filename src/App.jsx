import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Programs from './pages/Programs';
import BenefitsSection from './components/Benefits/BenefitsSection';
import ContactSection from './components/Contact/ContactSection';

// Initialize Google Analytics with your Measurement ID
ReactGA.initialize('GTM-TD2GJ9HV'); // Replace with your actual Measurement ID

// Component to track page views
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <TrackPageView />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/benefits" element={<BenefitsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;
