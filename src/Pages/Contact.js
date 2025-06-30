import React, { memo } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaFlask } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCard = ({ icon: Icon, title, content, link }) => (
  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
    <Icon className="text-2xl text-teal-400 mr-4" />
    <div>
      <h3 className="font-semibold text-xl">{title}</h3>
      {link ? (
        <a
          href={link}
          className="text-gray-300 hover:text-teal-300 transition-colors"
          aria-label={title}
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-300">{content}</p>
      )}
    </div>
  </div>
);

const Contact = () => (
  <section className="text-white min-h-screen flex items-center justify-center pt-24 px-4">
    <motion.div
      className="bg-gray-900/40 backdrop-blur-md border border-teal-400/20 rounded-2xl shadow-lg shadow-black/30 p-8 md:p-12 max-w-3xl w-full text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-6">
        <FaFlask className="text-5xl text-teal-300" aria-hidden="true" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400">
        Get In Touch
      </h1>

      <p className="text-lg text-gray-300 mb-8">
        We are passionate about advancing sustainable energy. For
        collaborations, research inquiries, or any questions, please reach out.
      </p>

      <div className="space-y-6 text-left mx-auto max-w-md">
        <ContactCard
          icon={FaEnvelope}
          title="Email Us"
          content="bfuel2023@gmail.com"
          link="mailto:bfuel2023@gmail.com"
        />
        <ContactCard
          icon={FaMapMarkerAlt}
          title="Based In"
          content="Prathyusha Engineering College, India"
        />
      </div>
    </motion.div>
  </section>
);

export default memo(Contact);
