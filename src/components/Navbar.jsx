import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500 focus:outline-none">
              CraftWise Academy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/benefits"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </Link>
              <Link
                to="/programs"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;