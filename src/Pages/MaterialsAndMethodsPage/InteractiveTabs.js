import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InteractiveTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-700 mb-6 space-x-2 md:space-x-4">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-4 text-base md:text-lg font-medium transition-colors duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-t-md ${
              activeTab === tab.id
                ? "text-teal-300"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-[-1px] left-0 right-0 h-1 bg-teal-400 rounded-full"
                layoutId="underline"
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="p-2"
        >
          {tabsData.find((tab) => tab.id === activeTab).content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InteractiveTabs;
