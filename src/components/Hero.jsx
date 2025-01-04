import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-secondary via-secondary to-primary overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-0 w-3/4 h-full bg-accent rounded-bl-[100%] opacity-80"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 flex flex-col md:flex-row items-center">
        <motion.div
          ref={ref}
          className="md:w-1/2 text-white z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            CRAFTWISE<br />ACADEMY
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            EXPERIENCE LEARNING THAT<br />CHANGES EVERYTHING.
          </motion.p>

        
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Students"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}