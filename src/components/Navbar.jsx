import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-2xl font-bold text-orange-500 focus:outline-none">
              <img src="https://i.imgur.com/XcKmpWW.png" alt="logo" className='h-56 w-64 p-7'  />
            </Link>
          </div>
          
          <div className="flex space-x-8">
          <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Home
            </Link>
            
            
            <Link to="/benefits" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Benefits
            </Link>
            <Link to="/programs" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Programs
            </Link>
            <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;