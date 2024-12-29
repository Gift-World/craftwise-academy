import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A1011] to-orange-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-orange-500 mb-4">Contact Us</h2>
          <p className="text-xl text-orange-200 max-w-2xl mx-auto">
            Ready to transform your career? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          
          <div className="bg-gradient-to-br from-orange-900 to-orange-800 p-8 rounded-2xl shadow-xl">
            <ContactForm />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-orange-500 text-center mb-8">
            Connect With Us
          </h3>
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;