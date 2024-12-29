import { motion } from 'framer-motion';
import { useState } from 'react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="mt-8 md:mt-0"
    >
      <h3 className="text-lg font-semibold text-orange-500 mb-4">Stay Updated</h3>
      <p className="text-gray-300 mb-4">
        Subscribe to our newsletter for the latest updates and insights.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500 text-white"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default FooterNewsletter;