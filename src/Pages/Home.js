import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

// Floating blob component
const Blob = ({ className }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{
      x: [0, 20, -10, 30, 0],
      y: [0, -15, 25, -20, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      rotate: [0, 5, -10, 5, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
  />
);

// Animation variants
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black text-white px-6">
      {/* Background blobs */}
      <Blob className="w-96 h-96 bg-teal-500 top-1/4 left-1/4" />
      <Blob className="w-80 h-80 bg-cyan-500 bottom-1/4 right-1/4" />

      <motion.div
        className="text-center z-10"
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold"
          custom={0}
          variants={variants}
        >
          <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Powering Tomorrow with
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400">
            Bio-Innovation
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
          custom={1}
          variants={variants}
        >
          BFuel is a pioneering research project focused on producing
          sustainable bioethanol from lignocellulosic waste, leveraging
          nanoparticle catalysis and predictive machine learning.
        </motion.p>

        {/* Button */}
        <motion.div custom={2} variants={variants}>
          <Link
            to="/methodology"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-white font-bold text-lg rounded-full shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:scale-105 transition-transform duration-300"
          >
            Explore Our Research <FaArrowRight />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
