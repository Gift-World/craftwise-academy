import { motion } from 'framer-motion';

const links = {
  "Programs": [
    { name: "Rising Professionals", href: "/programs#rising-professionals" },
    { name: "New Managers", href: "/programs#new-managers" },
    { name: "Emerging Leaders", href: "/programs#emerging-leaders" },
    { name: "Legacy Leaders", href: "/programs#legacy-leaders" }
  ],
  "Company": [
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" }
  ],
  "Resources": [
    { name: "Success Stories", href: "#" },
    { name: "Events", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Support", href: "#" }
  ]
};

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {Object.entries(links).map(([category, items], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.2 }}
        >
          <h3 className="text-lg font-semibold text-orange-500 mb-4">{category}</h3>
          <ul className="space-y-2">
            {items.map((item, itemIndex) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
              >
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterLinks;