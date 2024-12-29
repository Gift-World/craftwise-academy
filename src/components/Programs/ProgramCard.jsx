import { motion } from 'framer-motion';
import { useState } from 'react';

const ProgramCard = ({ title, description, image, tools, outcomes, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <motion.div
          layout
          className="space-y-4"
          initial={false}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? 'auto' : 0
            }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Tools & Resources:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-200 mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Outcome:</h4>
              <p className="text-gray-600">{outcomes}</p>
            </div>
          </motion.div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 text-orange-500 hover:text-orange-600 transition-colors font-semibold"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;