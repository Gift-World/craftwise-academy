import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-secondary via-secondary to-primary overflow-hidden">
      {/* Background Animated Shape */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.8 }}
          className="absolute right-0 top-0 w-2/3 h-full bg-accent rounded-bl-[100%] opacity-80]"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <motion.div
          ref={ref}
          className="md:w-1/2 text-white z-10 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-nexaBoldItalic leading-tight">
            <span className="text-yellow-300">Transform</span> Your Learning<br />
            With <span style={{ fontFamily: 'Nexa ' }} className="text-pink-300 ">Craftwise Academy</span>
            </h1>

          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1.8 }}
            style={{ fontFamily: 'Nexa ' }}>
A REVOLUTION IN  EXPERIENTIAL LEARNING </motion.p>

          <Link to="/programs">
            <motion.button
              className="relative flex items-center justify-center gap-2 px-5 py-2.5 text-white font-bold text-sm bg-accent border border-white/30 rounded-full shadow-lg overflow-hidden hover:scale-105 hover:border-white/60 transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                ></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Section */}
        <motion.div
  className="md:w-1/2 flex justify-center items-center z-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://i.imgur.com/ps8PhDG.jpeg')",
    height: "450px", // Adjust height as needed
    width: "500px",  // Adjust width as needed
    borderRadius: "1rem",
     // For rounded corners
  }}
  initial={{ x: 100, opacity: 0 }}
  animate={inView ? { x: 0, opacity: 1 } : {}}
  transition={{ duration: 0.8 }}
>
<img
            src="https://i.imgur.com/W0hWztN.png"
            alt="Students"
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-lg shadow-2xl "
          />
  {/* You can add any content inside this block if needed */}
</motion.div>

      </div>
    </div>
  );
}
