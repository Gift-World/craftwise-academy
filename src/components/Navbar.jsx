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
        <div className="flex-shrink-12 flex items-center">
            <Link to="/" >
              <img src="https://i.imgur.com/XcKmpWW.png" alt="logo" className='h-auto w-56 p-5 font-bold'  />
            </Link>
          </div>
          
          <div className="flex space-x-8">
          <Link to="/"  className=" font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Home
            </Link>
            
            
            <Link to="/benefits"  className="font-montserrat font-medium text-[15px]  inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Benefits
            </Link>
            <Link to="/programs"  className=" font-montserrat font-medium text-[15px]  inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Programs
            </Link>
            <Link to="/contact"  className=" font-montserrat font-medium text-[15px]  inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;