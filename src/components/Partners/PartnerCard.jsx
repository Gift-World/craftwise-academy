import { motion } from 'framer-motion';

const PartnerCard = ({ logo, name, rating, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center"
    >
      <div className="bg-white w-48 h-48 rounded-full flex items-center justify-center p-6 shadow-lg hover:shadow-xl transition-shadow">
        <img src={logo} alt={name} className="w-32 h-32 object-contain" />
      </div>
      <div className="flex mt-4 space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + (i * 0.1) }}
            className="text-2xl text-yellow-400"
          >
            ⭐
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default PartnerCard;