// import React from 'react'
import { motion } from 'framer-motion';

import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';

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

    </div>
  )
}

export default Home