import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
            <img src="src/assets/CRAFTWISEWHITE.png" alt="Students" className="w-64 h-64 p-1 " />   
          </motion.h1>
          <Link to ="/programs"><button className="relative flex items-center justify-center gap-2 px-5 py-2.5 text-white font-bold text-sm bg-yellow-500 border border-white/30 rounded-full shadow-lg overflow-hidden hover:scale-105 hover:border-white/60 transition-transform duration-300 ease-in-out">
  Apply Now
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
    ></path>
  </svg>
  <div
    className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 -translate-x-[100px] animate-shine"
  ></div>
</button>
</Link>
          
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