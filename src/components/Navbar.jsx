import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">
              CraftWise Academy
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              to="/about"
              className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/what-we-do"
              className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors"
            >
              What We Do
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;