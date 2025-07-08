import React, { memo } from "react";
import { Link } from "react-router";
import { FaPaperPlane } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Methodology", path: "/methodology" },
  { name: "Prediction", path: "/prediction" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-28 pb-10 px-6 md:px-12 relative mt-20">
    {/* Decorative Top Curve */}
    <div
      className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent"
      style={{ clipPath: "ellipse(100% 55% at 50% 100%)" }}
    ></div>

    {/* Main Footer Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
      {/* About Section */}
      <div>
        <h2 className="text-3xl font-bold text-teal-300">BFuel</h2>
        <p className="mt-2 text-gray-400">
          Innovating sustainable energy solutions through advanced bio-ethanol
          production techniques and machine learning.
        </p>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-teal-300">Team</h3>
        <p className="text-gray-400">Vigneshwaran C.J.</p>
        <p className="text-gray-400">Joyce Hellen Sathya</p>
        <p className="mt-4">
          <a
            href="mailto:bfuel2023@gmail.com"
            className="text-teal-400 hover:text-white transition-colors"
            aria-label="Email BFuel Team"
          >
            bfuel2023@gmail.com
          </a>
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-teal-300">
          Quick Links
        </h3>
        <ul className="space-y-2">
          {quickLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="text-gray-400 hover:text-teal-300 transition-colors"
                aria-label={`Go to ${name}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section (was Newsletter) */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-teal-300">Contact Us</h3>
        <p className="text-gray-400 mb-4">
          Have questions? Reach out to us directly via email.
        </p>
        <form
          className="flex items-center bg-gray-800 rounded-md p-1 border border-gray-700 focus-within:border-teal-400 transition-colors"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Contact Form"
        >
          <input
            type="email"
            placeholder="your-email@address.com"
            aria-label="Email address"
            className="bg-transparent outline-none text-white w-full px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 rounded-md p-3 transition-colors"
            aria-label="Send Message"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-8 border-gray-700" />

    {/* Copyright */}
    <p className="text-center text-gray-500">
      BFuel © {new Date().getFullYear()} – All Rights Reserved
    </p>
  </footer>
);

export default memo(Footer);