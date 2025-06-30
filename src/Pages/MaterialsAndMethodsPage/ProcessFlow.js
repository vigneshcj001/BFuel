import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// A new component for the animated SVG arrow
const AnimatedArrow = ({ direction }) => {
  const isDown = direction === "down";
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
  };
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      width={isDown ? "24" : "48"}
      height={isDown ? "48" : "24"}
      viewBox={isDown ? "0 0 24 48" : "0 0 48 24"}
      className={
        isDown
          ? "text-teal-400 my-4 md:hidden"
          : "text-teal-400 mx-6 hidden md:block"
      }
      variants={svgVariants}
    >
      <motion.path
        d={
          isDown
            ? "M 12 0 V 40 L 6 34 M 12 40 L 18 34"
            : "M 0 12 H 40 L 34 6 M 40 12 L 34 18"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

const ProcessFlow = ({ steps }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-0 my-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center my-6"
        >
          <motion.div
            className="flex items-center gap-4 bg-gray-800/70 border-2 border-teal-500/50 rounded-xl px-6 py-4 text-center shadow-lg hover:shadow-teal-500/20 hover:border-teal-500 hover:scale-105 transition-all duration-300 w-64 md:w-auto"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 bg-teal-500 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              {index + 1}
            </div>
            <p className="text-lg font-semibold text-white text-left">{step}</p>
          </motion.div>

          {index < steps.length - 1 && (
            <motion.div variants={itemVariants} className="flex items-center">
              <AnimatedArrow direction="down" />
              <AnimatedArrow direction="right" />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default ProcessFlow;
