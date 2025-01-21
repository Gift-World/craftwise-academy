import { motion } from 'framer-motion';
import { scrollToSection } from './scrollUtils';

const links = {
  "Quick Links": [
    { name: "Facebook", url: "https://web.facebook.com/profile.php?id=61571583696663" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/craftwise-academyke/?viewAsMember=true" },
    { name: "Instagram", url: "https://www.instagram.com/craftwiseke?igsh=MWxyZmJsemFzeGRkdg==" }
  ],
  "Programs": [
    { name: "Rising Professionals", sectionId: "rising-professionals" },
    { name: "New Managers", sectionId: "new-managers" },
    { name: "Emerging Leaders", sectionId: "emerging-leaders" },
    { name: "Legacy Leaders", sectionId: "legacy-leaders" }
  ],
  "Company": [
    { name: "About Us", sectionId: "about" },
    { name: "How we work", sectionId: "what-we-do" },
    { name: "Crafters Assembly", sectionId: "crafters" },
    { name: "Partners", sectionId: "partners" }
  ],
  "Contact Info": [
    { name: "info@craftwiseacademy.com", sectionId: "email" },
    { name: "+254 715 208", sectionId: "phone" },
    { name: "Nairobi , Kenya", sectionId: "address-2" }
  ]
};

const FooterLinks = () => {
  const handleClick = (e, sectionId) => {
    if (sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full text-center">
      {Object.entries(links).map(([category, items], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.2 }}
          className="flex flex-col items-center"
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
                  href={item.url ? item.url : `#${item.sectionId}`}
                  onClick={(e) => item.sectionId && handleClick(e, item.sectionId)}
                  target={item.url ? "_blank" : "_self"}
                  rel={item.url ? "noopener noreferrer" : ""}
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
