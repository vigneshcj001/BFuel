import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const BiomassList = ({ items }) => {
  return (
    <motion.ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-center"
          variants={itemVariants}
        >
          <FaLeaf className="text-teal-400 mr-4 flex-shrink-0 text-xl" />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default BiomassList;
