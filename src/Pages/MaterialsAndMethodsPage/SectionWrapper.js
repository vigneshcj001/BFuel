import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SectionWrapper = ({ title, children, id }) => {
  return (
    <motion.section
      id={id}
      className="bg-gray-900/40 backdrop-blur-md border border-teal-400/20 rounded-2xl shadow-lg shadow-black/30 p-6 md:p-10 mb-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-teal-300 mb-6 border-b-2 border-teal-300/20 pb-4">
        {title}
      </h2>
      <div className="text-gray-300 text-lg leading-relaxed space-y-6">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
