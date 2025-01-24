import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id='about' className="min-h-screen pt-16 bg-gradient-to-b from-white to-orange-50">
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
              className="text-5xl font-bold text-gray-600 mb-7 font-montserrat  "
              initial={{ opacity: 0.4, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              About us
            </motion.h1>
            <motion.h1 
              className="text-4xl font-semibold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              CraftWise Academy:
              <span className="block text-orange-500">A Revolution in Experiential Learning</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8 font-montserrat"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
Craftwise Academy is a leading training centre. We craft high-performing professionals to excel through hands-on learning, practical tools, and expert guidance that build confidence, spark innovation, and deliver real results            </motion.p>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
Our expert-led training programs are designed to empower entrepreneurs, professionals, and students with hands-on experience in the latest digital tools and strategies to help them thrive in today’s competitive market. Whether you’re looking to boost your career, grow your business, or enhance your online presence, Craftwise Academy provides affordable, high-quality training tailored to the Kenyan market. Join thousands of learners who have transformed their digital skills with us and take the next step in your professional journey.            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://i.imgur.com/zQOstOI.jpeg"
              alt="Professional training session"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-500 rounded-full opacity-10" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;