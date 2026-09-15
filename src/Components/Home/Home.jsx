import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";
import man from "../../assets/man-laptop.png";
import ParticleBackground from "../Background/ParticleBackground";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 text-white md:px-20"
    >
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400 md:text-base"
          >
            Junior Full-Stack Developer
          </motion.p>

          <motion.h1
            id="home-heading"
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Vyas
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg"
          >
            I build responsive web applications with React, TypeScript, Node.js, Express,
and MongoDB. I focus on clean frontend experiences, reliable API integration,
and practical AI-powered features.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <IoMailOutline aria-hidden="true" />
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: [1, 1.03, 1] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.6 }
              : {
                  opacity: { duration: 0.8 },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }
          }
          whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
            />
            <img
              src={man}
              alt="Developer working on a laptop"
              className="relative w-72 drop-shadow-2xl sm:w-80 md:w-96"
            />
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-black/60 px-4 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs text-gray-400">Currently building</p>
              <p className="text-sm font-semibold text-white">
                Full-Stack &amp; AI Apps
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/20 px-4 py-2 text-xs text-gray-400 transition hover:border-blue-400 hover:text-blue-300 md:block"
      >
        Scroll to explore
      </motion.a>
    </section>
  );
}

export default Home;