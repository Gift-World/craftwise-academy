import { motion } from 'framer-motion';

const ContactItem = ({ icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ x: 10 }}
    className="flex items-start space-x-4 mb-8 p-4 bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-colors"
  >
    <div className="text-2xl bg-orange-500/20 p-3 rounded-full">{icon}</div>
    <div>
      <h3  className="text-white font-semibold mb-1">{title}</h3>
      <p  className="text-orange-200">{content}</p>
    </div>
  </motion.div>
);

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl shadow-xl relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"
        animate={{ 
          x: [0, 100, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12"
        >
          Get in Touch
        </motion.h2>

        <ContactItem
          icon="📍"
          title="Visit Us"
          content="NAIROBI, KENYA"
          delay={0.2}
        />
        
        <ContactItem
          icon="📞"
          title="Call Us"
          content="+254 715 208 322"
          delay={0.4}
        />
        
        <ContactItem
          icon="🌐"
          title="Website"
          content="WWW.CRAFTWISEACADEMY.COM"
          delay={0.6}
        />
        
        <ContactItem
          icon="✉️"
          title="Email Us"
          content="INFO@CRAFTWISEACADEMY.COM"
          delay={0.8}
        />
      </div>
    </div>
  );
};

export default ContactInfo;