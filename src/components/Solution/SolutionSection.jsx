import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ApproachCard from './ApproachCard';

const approaches = [
  {
    title: "High-stakes simulations",
    icon: "🎯",
    delay: 0.2
  },
  {
    title: "Strategic decision-making exercises",
    icon: "🧩",
    delay: 0.4
  },
  {
    title: "Cross-functional adventures",
    icon: "🔄",
    delay: 0.6
  }
];

const SolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h1 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              SOLUTION
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Breaking away from the traditional, overcrowded training market!
            </motion.p>
            
            <motion.h2
              className="text-2xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              CraftWise's Unique Approach:
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approaches.map((approach, index) => (
                <ApproachCard key={index} {...approach} />
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=800"
              alt="Innovative learning"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 text-4xl">💡</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionSection;