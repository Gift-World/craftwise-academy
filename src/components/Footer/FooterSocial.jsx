import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', icon: '🐦', href: '#', color: 'bg-blue-400' },
  { name: 'LinkedIn', icon: '💼', href: '#', color: 'bg-blue-600' },
  { name: 'Instagram', icon: '📸', href: '#', color: 'bg-pink-500' },
  { name: 'Facebook', icon: '📘', href: '#', color: 'bg-blue-500' }
];

const FooterSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="flex justify-center space-x-4 mt-8"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + (index * 0.1) }}
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.6 }
          }}
          className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity`}
        >
          <span className="text-lg">{social.icon}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FooterSocial;