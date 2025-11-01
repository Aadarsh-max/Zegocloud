import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaComments,
  FaCloud,
  FaUsers,
  FaHeadset,
  FaCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <FaVideo className="text-3xl" />,
      title: "Video & Voice Calls",
      desc: "Add 1-on-1 or group video calls easily with ZegoCloud's fast, reliable, and scalable APIs.",
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: "In-App Chat",
      desc: "Enable real-time messaging for your users with secure and scalable chat functionality.",
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: "Live Streaming",
      desc: "Stream content globally with low-latency interactive video experiences.",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Video Conferences",
      desc: "Host meetings and webinars with group video, audio, and chat features.",
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "Telehealth & Tutoring",
      desc: "Create virtual healthcare or tutoring platforms with screen sharing and communication tools.",
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Free UI Kits & SDKs",
      desc: "Start your app instantly using ZegoCloud's free prebuilt UI kits and SDKs with customizable designs.",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-16 transition-colors duration-500 relative overflow-hidden ${
        theme === "dark"
          ? "bg-linear-to-br from-gray-900 via-purple-900 to-gray-900"
          : "bg-linear-to-br from-violet-50 via-purple-50 to-pink-50"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-20 -right-20 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-linear-to-br from-violet-600 to-fuchsia-600"
              : "bg-linear-to-br from-violet-400 to-fuchsia-400"
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`absolute bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-linear-to-tr from-cyan-600 to-blue-600"
              : "bg-linear-to-tr from-cyan-400 to-blue-400"
          }`}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
            theme === "dark"
              ? "bg-violet-500/20 border-violet-500/50"
              : "bg-violet-200/50 border-violet-300"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                theme === "dark" ? "bg-violet-400" : "bg-violet-400"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                theme === "dark" ? "bg-violet-500" : "bg-violet-500"
              }`}
            />
          </span>
          <span
            className={`text-sm font-medium ${
              theme === "dark" ? "text-violet-300" : "text-violet-700"
            }`}
          >
            Powered by ZegoCloud
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Our Project
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`max-w-3xl text-center text-lg sm:text-xl leading-relaxed mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          This project leverages{" "}
          <span
            className={`font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent`}
          >
            ZegoCloud's free API and UI Kits
          </span>{" "}
          to provide seamless, high-quality video calls and chat experiences —
          all wrapped in a clean, responsive design that supports both dark and
          light modes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`max-w-3xl text-center text-lg sm:text-xl leading-relaxed mb-12 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Start building your own app today using{" "}
          <span
            className={`font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent`}
          >
            ZegoCloud's ready-to-use UI components
          </span>{" "}
          to accelerate development and enhance user experience.
        </motion.p>

        <Link to='https://www.zegocloud.com'>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer mb-16 px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:shadow-2xl ${
            theme === "dark"
            ? "hover:shadow-violet-500/50"
            : "hover:shadow-violet-400/50"
            }`}
            >
          Get Started with ZegoCloud
        </motion.button>
          </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`flex flex-col items-center text-center p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20"
                  : "bg-white/50 border-white/50 hover:bg-white/80 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-300/30"
              }`}
            >
              <div
                className={`mb-4 p-4 rounded-full bg-linear-to-br transition-transform duration-300 ${
                  theme === "dark"
                    ? "from-violet-500/20 to-fuchsia-500/20 text-violet-400"
                    : "from-violet-200 to-fuchsia-200 text-violet-600"
                }`}
              >
                {item.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-base ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className={`mt-16 text-center text-md ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Enabling seamless real-time communication for modern web and mobile
          apps with{" "}
          <span className="font-semibold bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            ZegoCloud
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
