import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Rising Professionals",
    description: "Empowering Early Career Success",
    path: "/programs#rising-professionals"
  },
  {
    title: "New Managers",
    description: "Transitioning from Individual Contributor to Leader",
    path: "/programs#new-managers"
  },
  {
    title: "Emerging Leaders",
    description: "Preparing for Senior Leadership Roles",
    path: "/programs#emerging-leaders"
  },
  {
    title: "Legacy Leaders",
    description: "Shaping Organizational Transformation",
    path: "/programs#legacy-leaders"
  }
];

const ProgramsDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg overflow-hidden"
    >
      {programs.map((program, index) => (
        <Link
          key={index}
          to={program.path}
          className="block p-4 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-none"
        >
          <h3 className="font-semibold text-gray-800">{program.title}</h3>
          <p className="text-sm text-gray-600">{program.description}</p>
        </Link>
      ))}
    </motion.div>
  );
};

export default ProgramsDropdown;