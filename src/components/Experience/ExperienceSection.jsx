import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "IN-PERSON",
    description: "Fully immersive, hands-on workshops at our Office Labs or at your custom location.",
    icon: "🎓",
    delay: 0.2
  },
  {
    title: "ONLINE",
    description: "Engaging virtual training with interactive simulations and expert facilitator-led sessions.",
    icon: "💻",
    delay: 0.4
  },
  {
    title: "HYBRID",
    description: "A combination of in-person and online experiences to maximize learning impact.",
    icon: "🔄",
    delay: 0.6
  }
];

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">FLEXIBLE TRAINING</h2>
          <h3 className="text-2xl text-orange-500 mb-12">FORMATS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;