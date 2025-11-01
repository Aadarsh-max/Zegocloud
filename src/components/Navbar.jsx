import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Call", path: "/call" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isCallPage = location.pathname === "/call";

  const navbarBg =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-900 via-purple-900/50 to-gray-900 border-b border-violet-500/30"
      : "bg-gradient-to-r from-violet-50 via-purple-50 to-pink-50 border-b border-violet-300/50";

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      {isCallPage && (
        <div
          className="fixed top-0 left-0 w-full h-8 z-60"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      )}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isCallPage ? (hovered ? 0 : -80) : 0,
          opacity: isCallPage ? (hovered ? 1 : 0) : 1,
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl shadow-2xl transition-all duration-500 ${navbarBg}`}
        style={{
          boxShadow:
            theme === "dark"
              ? "0 8px 32px rgba(139, 92, 246, 0.15)"
              : "0 8px 32px rgba(139, 92, 246, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 sm:py-5 overflow-x-hidden">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer relative group flex items-center gap-2 sm:gap-3"
          >
            <NavLink
              to="/"
              className="relative z-10 flex items-center gap-2 sm:gap-3"
            >
              <motion.img
                src="/image.png"
                alt="VidConnect Logo"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-md shadow-md"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span
                className={`text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r transition-all duration-300 ${
                  theme === "dark"
                    ? "from-violet-400 via-fuchsia-400 to-pink-400 group-hover:from-violet-300 group-hover:via-fuchsia-300 group-hover:to-pink-300"
                    : "from-violet-600 via-fuchsia-600 to-pink-600 group-hover:from-violet-700 group-hover:via-fuchsia-700 group-hover:to-pink-700"
                }`}
              >
                VidConnect
              </span>
            </NavLink>

            <motion.div
              className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 ${
                theme === "dark" ? "bg-violet-500/50" : "bg-violet-400/40"
              }`}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-wrap gap-3 lg:gap-4">
            {navLinks.map(({ name, path }, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 block overflow-hidden group
                    ${
                      isActive
                        ? theme === "dark"
                          ? "text-white"
                          : "text-violet-700"
                        : theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-violet-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <motion.span
                        className={`absolute inset-0 rounded-xl ${
                          theme === "dark"
                            ? "bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-600"
                            : "bg-linear-to-r from-violet-200 via-fuchsia-200 to-pink-200"
                        }`}
                        initial={{ opacity: isActive ? 1 : 0, scale: 0.8 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.8,
                        }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Shine effect */}
                      <motion.span
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <span className="relative z-10">{name}</span>

                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className={`absolute -bottom-1 left-1/2 h-1 w-1/2 rounded-full ${
                            theme === "dark" ? "bg-violet-400" : "bg-violet-600"
                          }`}
                          style={{ x: "-50%" }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3 mt-2 md:mt-0">
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.85, rotate: 15 }}
              whileHover={{ scale: 1.15 }}
              className={`relative p-3 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden group
                ${
                  theme === "dark"
                    ? "bg-linear-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/50"
                    : "bg-linear-to-br from-violet-400 to-fuchsia-400 text-white shadow-lg shadow-violet-400/50"
                }`}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0, scale: 0 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 180, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="relative z-10"
                  >
                    <BsSun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0, scale: 0 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -180, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="relative z-10"
                  >
                    <BsMoon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              className={`md:hidden relative p-3 rounded-xl transition-all duration-300 overflow-hidden
                ${
                  theme === "dark"
                    ? "bg-violet-950/80 text-violet-300 border border-violet-500/30"
                    : "bg-white/80 text-violet-700 border border-violet-300/50"
                }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              className={`md:hidden overflow-hidden border-t backdrop-blur-2xl transition-colors duration-300
                ${
                  theme === "dark"
                    ? "border-violet-500/30 bg-gray-900/95"
                    : "border-violet-300/50 bg-white/95"
                }`}
            >
              <ul className="flex flex-col gap-2 px-5 sm:px-6 py-5 w-full">
                {navLinks.map(({ name, path }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `relative block px-4 sm:px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-center overflow-hidden group
                        ${
                          isActive
                            ? theme === "dark"
                              ? "text-white"
                              : "text-violet-700"
                            : theme === "dark"
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-700 hover:text-violet-700"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <motion.span
                            className={`absolute inset-0 rounded-xl ${
                              theme === "dark"
                                ? "bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-600"
                                : "bg-linear-to-r from-violet-200 via-fuchsia-200 to-pink-200"
                            }`}
                            initial={{ opacity: isActive ? 1 : 0 }}
                            animate={{ opacity: isActive ? 1 : 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10">{name}</span>
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
