import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga4'; // or 'react-ga' if using Universal Analytics

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import SolutionSection from '../components/Solution/SolutionSection';
import OfficeLabsSection from '../components/OfficeLabs/OfficeLabsSection';
import ImmersiveSection from '../components/Immersive/ImmersiveSection';
import ExperienceSection from '../components/Experience/ExperienceSection';
import CraftersAssemblySection from '../components/CraftersAssembly/CraftersAssemblySection';
import WhyItMattersSection from '../components/WhyItMatters/WhyItMattersSection';
import ImpactSection from '../components/Impact/ImpactSection';
import PartnersSection from '../components/Partners/PartnersSection'; 
import Footer from '../components/Footer/Footer';

function Home() {
    useEffect(() => {
        const trackingID = 'GTM-PVCFKMZF'; // Replace with your actual GA Tracking ID
        ReactGA.initialize(trackingID);
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }, []);

    return (
        <div>
            <Navbar />
            <main>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Hero />
                </motion.div>
                <About />
                <WhatWeDo />
                <SolutionSection />
                <OfficeLabsSection />
                <ImmersiveSection />
                <ExperienceSection />
                <CraftersAssemblySection />
                <WhyItMattersSection />
                <ImpactSection />
                <PartnersSection />
                <Footer />
            </main>
        </div>
    );
}

export default Home;
