// src/App.js
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
import { AnimatePresence } from "framer-motion";
import "../index.css";

// Components & Pages
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import MaterialsAndMethodsPage from "./Pages/MaterialsAndMethodsPage/MaterialsAndMethodsPage";
import Prediction from "./Pages/Prediction";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Animated route wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/methodology" element={<MaterialsAndMethodsPage />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

// Main App component
const App = () => (
  <Router>
    <div className="bg-gray-900 min-h-screen flex flex-col relative text-white">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-900 to-teal-900/40 -z-10" />
      <Header />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  </Router>
);

// ReactDOM entry point
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
