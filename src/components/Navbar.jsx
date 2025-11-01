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
      ? "bg-gray-800 border-b border-violet-800/40"
      : "bg-white border-b border-violet-200";

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Hover trigger zone only on call page */}
      {isCallPage && (
        <div
          className="fixed top-0 left-0 w-full h-6 z-60"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      )}

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{
          y: isCallPage ? (hovered ? 0 : -60) : 0,
          opacity: isCallPage ? (hovered ? 1 : 0) : 1,
        }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-lg transition-all duration-500 ${navbarBg}`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 sm:py-4 overflow-x-hidden">
          {/* App Name */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <NavLink
              to="/"
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                theme === "dark"
                  ? "text-violet-400 hover:text-violet-300"
                  : "text-violet-700 hover:text-violet-800"
              }`}
            >
              VidConnect
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-wrap gap-2 lg:gap-3">
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
                    `px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 relative
                    ${
                      isActive
                        ? theme === "dark"
                          ? "text-violet-400 bg-violet-950"
                          : "text-violet-700 bg-violet-100"
                        : theme === "dark"
                        ? "text-gray-300 hover:text-violet-400 hover:bg-violet-950/40"
                        : "text-gray-700 hover:text-violet-700 hover:bg-violet-50"
                    }`
                  }
                >
                  {name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-violet-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3 mt-2 md:mt-0">
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.85, rotate: 20 }}
              whileHover={{ scale: 1.1 }}
              className={`p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer
                ${
                  theme === "dark"
                    ? "bg-violet-900 text-white hover:shadow-violet-600/30"
                    : "bg-violet-100 text-violet-700 hover:shadow-violet-200"
                }`}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0, scale: 0 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 180, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <BsSun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0, scale: 0 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -180, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <BsMoon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.85 }}
              className={`md:hidden p-2.5 rounded-lg transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-violet-950 text-violet-300 hover:bg-violet-900"
                    : "bg-violet-50 text-violet-700 hover:bg-violet-100"
                }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden border-t transition-colors duration-300
                ${
                  theme === "dark"
                    ? "border-violet-800/40 bg-gray-800/95"
                    : "border-violet-200 bg-white/95"
                }`}
            >
              <ul className="flex flex-col gap-2 px-5 sm:px-6 py-4 w-full">
                {navLinks.map(({ name, path }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 sm:px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-center
                        ${
                          isActive
                            ? theme === "dark"
                              ? "text-violet-400 bg-violet-950"
                              : "text-violet-700 bg-violet-100"
                            : theme === "dark"
                            ? "text-gray-300 hover:text-violet-400 hover:bg-violet-950/40"
                            : "text-gray-700 hover:text-violet-700 hover:bg-violet-50"
                        }`
                      }
                    >
                      {name}
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
