// import React from 'react'
import { motion } from 'framer-motion';

import Hero from '../components/Hero'
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
  return (
    <div>
      <Navbar />


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
    <ImmersiveSection/>
    <ExperienceSection />
    <CraftersAssemblySection />
    <WhyItMattersSection />
    <ImpactSection />
    <PartnersSection />
   
    <Footer />
    </div>
  )
}

export default Home