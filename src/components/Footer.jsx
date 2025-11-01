import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaYoutube, FaGlobe, FaCloud } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full mt-10 border-t ${
        isDark ? "border-gray-700 bg-black text-gray-300" : "border-gray-200 bg-white text-gray-700"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div>
          <h2 className="text-lg font-semibold">Aadarsh Shrivastav</h2>
          <p className="text-sm opacity-75">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="https://www.youtube.com/@SkillCoder-By_Aadarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 hover:text-red-500 transition"
          >
            <FaYoutube className="text-lg" />
            Youtube : @SkillCoder-By_Aadarsh
          </a>

          <a
            href="https://aadarsh-portfolio-delta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 hover:text-blue-500 transition"
          >
            <FaGlobe className="text-lg" />
            Portfolio : aadarsh-portfolio-delta.vercel.app
          </a>
        </div>

        <div className="flex items-center gap-2 justify-center md:justify-end">
          <FaCloud className="text-xl text-cyan-500" />
          <a
            href="https://www.zegocloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition"
          >
            In association with ZegoCloud
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
