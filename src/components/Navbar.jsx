import { motion } from 'framer-motion';

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl font-bold text-orange-500 focus:outline-none"
            >
              CraftWise Academy
            </button>
          </div>
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              How We Work
            </button>
            <button
              onClick={() => scrollToSection('programmes')}
              className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Programmes
            </button>
           
              
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
