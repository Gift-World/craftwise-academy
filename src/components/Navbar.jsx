import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Use Lucide React for icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://i.imgur.com/XcKmpWW.png"
                alt="logo"
                className="h-auto w-56 p-2"
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Home
            </Link>
            <Link
              to="/benefits"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Benefits
            </Link>
            <Link
              to="/programs"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 space-y-4 bg-white shadow-lg p-4 rounded-md"
          >
            <Link
              to="/"
              className="block font-montserrat font-medium text-[15px] text-gray-700 hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/benefits"
              className="block font-montserrat font-medium text-[15px] text-gray-700 hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Benefits
            </Link>
            <Link
              to="/programs"
              className="block font-montserrat font-medium text-[15px] text-gray-700 hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className="block font-montserrat font-medium text-[15px] text-gray-700 hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
