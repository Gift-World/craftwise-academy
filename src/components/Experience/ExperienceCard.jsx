import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ExperienceCard = ({ title, description, icon, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="relative"
    >
      <motion.div
        className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-4xl">{icon}</span>
      </motion.div>
      
      <motion.div
        className="text-center"
        animate={{ y: isExpanded ? -10 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-orange-500 hover:text-orange-600 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="mt-4 text-center text-gray-600 overflow-hidden"
      >
        <p>{description}</p>
      </motion.div>
      <Link to ="/programs"><button className="relative flex items-center justify-center gap-2 px-5 py-2.5 text-white font-bold text-sm bg-yellow-500 border border-white/30 rounded-full shadow-lg overflow-hidden hover:scale-105 hover:border-white/60 transition-transform duration-300 ease-in-out  mx-auto    ">
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

    </motion.div>
  );
};

export default ExperienceCard;