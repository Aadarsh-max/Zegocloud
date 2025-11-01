import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FaVideo, FaComments } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center max-w-xl space-y-6 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span
            className={`block ${
              theme === "dark" ? "text-violet-400" : "text-violet-700"
            }`}
          >
            Video Calls & Chats
          </span>
          <span className="block mt-2">at your fingertips</span>
        </h1>

        <p
          className={`text-lg sm:text-xl leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          In association with{" "}
          <span
            className={`font-semibold ${
              theme === "dark" ? "text-violet-400" : "text-violet-700"
            }`}
          >
            ZegoCloud
          </span>
          , build your own video call and chat app effortlessly using their
          powerful UI Kits.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {/* Call Page Button */}
          <NavLink
            to="/call"
            className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md
              ${
                theme === "dark"
                  ? "bg-violet-600 hover:bg-violet-700 text-white"
                  : "bg-violet-600 hover:bg-violet-700 text-white"
              }`}
          >
            <FaVideo className="text-white" />
            Make a Call
          </NavLink>
        </div>
      </motion.div>

      {/* Right Section — Larger & Taller Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 md:mt-0 flex justify-center md:justify-end w-full md:w-[60%]"
      >
        <img
          src="/image.png"
          alt="Video Call Preview"
          className={`w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] 
                h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[520px]
                rounded-2xl object-cover shadow-2xl border-2 transition-all duration-500
                ${
                  theme === "dark"
                    ? "border-violet-700 bg-gray-700"
                    : "border-violet-300 bg-violet-50"
                }`}
        />
      </motion.div>
    </div>
  );
};

export default Home;
