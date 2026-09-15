import React, { useEffect, useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/me.jpg";

const navLinks = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Experience", path: "#experience" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.path))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveLink(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavigate = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-20"
      >
        <a
          href="#home"
          onClick={() => handleNavigate("#home")}
          className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <div className="relative">
            <img
              src={profile}
              alt="Meet Vyas"
              className="h-10 w-10 rounded-full border-2 border-white/20 object-cover ring-2 ring-blue-400/50"
            />
            <span
              aria-label="Available for opportunities"
              className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-green-400"
            />
          </div>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-lg font-bold tracking-wide text-transparent md:text-xl">
            Meet Vyas
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeLink === link.path;
            return (
              <li key={link.path} className="relative">
                <a
                  href={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`rounded-md px-1 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-300 lg:text-base ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="active-navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300 md:hidden"
        >
          {menuOpen ? (
            <RiCloseLine size={28} aria-hidden="true" />
          ) : (
            <RiMenu2Line size={28} aria-hidden="true" />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto max-w-7xl px-6 py-4">
              {navLinks.map((link, index) => {
                const isActive = activeLink === link.path;
                return (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <a
                      href={link.path}
                      onClick={() => handleNavigate(link.path)}
                      className={`block rounded-lg px-4 py-3 text-center font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                        isActive
                          ? "bg-blue-500/15 text-blue-300"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;