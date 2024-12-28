import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id='what-we-do' className="min-h-screen pt-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're an aspiring manager, a seasoned leader, or an HR professional seeking innovative training solutions, CraftWise Academy is crafted just for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Ambitious Professionals"
            description="Looking to elevate their careers through practical, hands-on learning experiences."
            icon={<span className="text-2xl">👥</span>}
            delay={0.2}
          />
          <ServiceCard
            title="Corporate Leaders"
            description="Who want to build high-performing teams and drive organizational success."
            icon={<span className="text-2xl">💼</span>}
            delay={0.4}
          />
          <ServiceCard
            title="Organizations"
            description="Committed to fostering a culture of continuous growth and collaboration."
            icon={<span className="text-2xl">🎯</span>}
            delay={0.6}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800"
              alt="Training session"
              className="rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Challenge</h3>
              <p className="text-gray-600 mb-4">
                Most corporate training is stale, forgettable, and disconnected from the realities of the job.
              </p>
              <p className="text-gray-600">
                Employees leave uninspired, and companies see minimal impact on engagement, performance, and career fulfillment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;