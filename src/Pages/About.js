import React, { memo } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const team = [
  {
    name: "Vigneshwaran C.J.",
    title: "Researcher & Developer",
    linkedin: "https://www.linkedin.com/in/vigneshwarancj",
    email: "vigneshwarancj@gmail.com",
  },
  {
    name: "Joyce Hellen Sathya",
    title: "Mentor",
    linkedin: "https://www.linkedin.com/in/joycehellensathya",
    email: "joycehellensathyad@gmail.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const About = () => {
  return (
    <section className="min-h-screen text-white pt-32 pb-16 px-4">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet The Innovators
        </motion.h2>
        <motion.p
          className="italic text-lg text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "Alone we can do so little; together we can do so much." – Helen
          Keller
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {team.map(({ name, title, linkedin, email }, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900/40 backdrop-blur-md border-t-4 border-teal-400/60 rounded-2xl w-80 p-6 text-center shadow-lg transition-all duration-300 hover:border-teal-300 hover:-translate-y-2"
          >
            {/* Avatar */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-teal-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
              {getInitials(name)}
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-teal-300 font-medium mb-4">{title}</p>

            <div className="flex justify-center mt-4 space-x-5 text-2xl">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`${name}'s LinkedIn`}
                >
                  <FaLinkedin />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  aria-label={`Email ${name}`}
                >
                  <FaEnvelope />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(About);
