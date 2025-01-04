import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PartnerCard from './PartnerCard';

const partners = [
  {
    name: "Inuka",
    logo: "/partners/inuka-logo.png",
    delay: 0.2
  },
  {
    name: "Career Kickstart KE",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE-x0yP7DJVag/company-logo_200_200/company-logo_200_200/0/1630560839614?e=2147483647&v=beta&t=cL61HW_DLGGeKt3W0ACUCXSm9u_p8h-O5rCq0oKZTDs",
    delay: 0.4
  },
  {
    name: "Ultra Events",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV7FhM9Tr70m88wqKnvSos1JkeYoafZdYMg&s",
    delay: 0.6
  }
];

const PartnersSection = () => {
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
          className="text-center"
        >
          <motion.h2 
            className="text-5xl font-bold text-orange-500 mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            PARTNERS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>

          <motion.div
            className="absolute left-0 right-0 h-1 bg-orange-500 mt-12"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersSection;