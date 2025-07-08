import React from "react";
import { NavLink } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Methodology", path: "/methodology" },
  { name: "Prediction", path: "/prediction" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },

];

const Header = () => (
  <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 z-50 bg-gray-900/60 backdrop-blur-lg border-b border-white/10">
    <nav className="flex items-center justify-between text-white max-w-7xl mx-auto">
      <NavLink
        to="/"
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500"
      >
        BFuel
      </NavLink>
      <ul className="hidden md:flex items-center gap-6 text-lg">
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-all duration-300 relative ${
                  isActive
                    ? "text-teal-300"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-teal-400 rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
