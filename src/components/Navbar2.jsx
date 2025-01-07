import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-1 py-4 flex justify-between ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
 <Link to="/" className="text-2xl font-bold text-orange-500 focus:outline-none">
              CraftWise Academy
            </Link>        </motion.div>
        
        <nav className="flex items-center gap-6">
           <Link to="/" className="text-textPrimary hover:text-white transition-colors">
                       Home
                     </Link>
                     
                     
                     <Link to="/benefits" className="text-textPrimary hover:text-white transition-colors">
                       Benefits
                     </Link>
                     <Link to="/programs" className="text-textPrimary hover:text-white transition-colors">
                       Programs
                     </Link>
                     {/* <Link to="/contact" className="text-textPrimary hover:text-white transition-colors">
                       Contact us
                     </Link> */}
          
          {/* <div className="flex gap-4">
            <a href="https://github.com/Gift-World" target="_blank" rel="noopener noreferrer" className="text-textPrimary hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/charles-ang-ila-b83b2733a/" target="_blank" rel="noopener noreferrer" className="text-textPrimary hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            
          </div> */}
        </nav>
      </div>
    </header>
  );
}