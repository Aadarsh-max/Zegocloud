import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaShieldAlt, FaBolt, FaGlobe } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <FaBolt className="text-3xl" />,
      title: "Ultra Low Latency",
      description: "Real-time communication with <300ms latency globally",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Enterprise Security",
      description: "End-to-end encryption with GDPR compliance",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Global Infrastructure",
      description: "200+ data centers across 6 continents",
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-linear-to-br from-gray-900 via-purple-900 to-gray-900"
          : "bg-linear-to-br from-violet-50 via-purple-50 to-pink-50"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark"
              ? "bg-linear-to-r from-violet-600 to-fuchsia-600"
              : "bg-linear-to-r from-violet-400 to-fuchsia-400"
          }`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            theme === "dark"
              ? "bg-linear-to-r from-cyan-600 to-blue-600"
              : "bg-linear-to-r from-cyan-400 to-blue-400"
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-5xl space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border ${
              theme === "dark"
                ? "bg-violet-500/20 border-violet-500/50 text-violet-300"
                : "bg-violet-200/50 border-violet-300 text-violet-700"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Powered by ZegoCloud
          </motion.div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="inline-block bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Video Calls & Chats
            </span>
            <br />
            <span className="block mt-2">at your fingertips</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl sm:text-2xl leading-relaxed max-w-3xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Experience crystal-clear video calls and seamless chat with{" "}
            <span className="font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              ZegoCloud's
            </span>{" "}
            enterprise-grade infrastructure. Build your communication platform
            in minutes with powerful, ready-to-use UI Kits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => (window.location.href = "/call")}
              className="cursor-pointer group relative inline-flex items-center gap-3 px-8 py-4 text-xl font-bold text-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50"
            >
              <div className="absolute inset-0 bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-600 animate-gradient"></div>
              <div className="absolute inset-0 bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              <FaVideo className="relative z-10 text-2xl" />
              <span className="relative z-10">Start Video Call</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                →
              </motion.span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-violet-500/50"
                    : "bg-white/50 border-white/50 hover:bg-white/80 hover:border-violet-300"
                }`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 bg-linear-to-br ${
                    theme === "dark"
                      ? "from-violet-500/20 to-fuchsia-500/20 text-violet-400"
                      : "from-violet-200 to-fuchsia-200 text-violet-600"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
