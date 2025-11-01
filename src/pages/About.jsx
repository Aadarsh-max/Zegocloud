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

const About = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <FaVideo className="text-3xl" />,
      title: "Video & Voice Calls",
      desc: "Add 1-on-1 or group video calls easily with ZegoCloud’s fast, reliable, and scalable APIs.",
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
      desc: "Start your app instantly using ZegoCloud’s free prebuilt UI kits and SDKs with customizable designs.",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-16 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl sm:text-5xl font-extrabold text-center mb-6 ${
          theme === "dark" ? "text-violet-400" : "text-violet-700"
        }`}
      >
        About Our Project
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`max-w-3xl text-center text-lg sm:text-xl leading-relaxed mb-12 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        This project leverages{" "}
        <span
          className={`font-semibold ${
            theme === "dark" ? "text-violet-400" : "text-violet-700"
          }`}
        >
          ZegoCloud’s free API and UI Kits
        </span>{" "}
        to provide seamless, high-quality video calls and chat experiences — all
        wrapped in a clean, responsive design that supports both dark and light
        modes. Start building your own app today using{" "}
        <span
          className={`font-semibold ${
            theme === "dark" ? "text-violet-400" : "text-violet-700"
          }`}
        >
          ZegoCloud’s ready-to-use UI components
        </span>{" "}
        to accelerate development and enhance user experience.
      </motion.p>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col items-center text-center p-6 rounded-2xl shadow-lg transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-violet-50"
            }`}
          >
            <div
              className={`mb-4 p-4 rounded-full ${
                theme === "dark"
                  ? "bg-violet-700 text-white"
                  : "bg-violet-100 text-violet-700"
              }`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className={`mt-16 text-center text-md ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Powered by{" "}
        <span className="font-semibold text-violet-500">ZegoCloud</span> —
        enabling seamless real-time communication for modern web and mobile
        apps.
      </motion.p>
    </div>
  );
};

export default About;
