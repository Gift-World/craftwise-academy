import { motion } from 'framer-motion';

const socialLinks = [
  { icon: "📱", label: "Twitter", url: "#", delay: 0.2 },
  { icon: "💼", label: "LinkedIn", url: "#", delay: 0.3 },
  { icon: "📸", label: "Instagram", url: "#", delay: 0.4 },
  { icon: "📘", label: "Facebook", url: "#", delay: 0.5 }
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: social.delay }}
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-2xl hover:bg-orange-500/30 transition-colors"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;