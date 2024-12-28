// import React from 'react'
import { motion } from 'framer-motion';

import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import SolutionSection from '../components/Solution/SolutionSection';
import OfficeLabsSection from '../components/OfficeLabs/OfficeLabsSection';

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

    </div>
  )
}

export default Home