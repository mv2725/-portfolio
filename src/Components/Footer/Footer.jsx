import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 px-6 py-16 text-white md:px-20"
    >
      {/* Decorative divider */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          {/* Contact introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">
              Let&apos;s build something useful together.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
              I am open to junior frontend, full-stack, application support,
              and technical opportunities. If you are working on an interesting
              project or hiring for a technical role, I would be happy to
              connect.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:meetvyas416@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-medium transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <FaEnvelope aria-hidden="true" />
                Email Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaFileDownload aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Contact details and links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold">Find me online</h3>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:meetvyas416@gmail.com"
                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <span className="rounded-full bg-blue-500/15 p-3 text-blue-400">
                  <FaEnvelope aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-sm text-gray-400">Email</span>
                  <span className="break-all text-sm text-gray-200">
                    meetvyas416@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-xl p-3">
                <span className="rounded-full bg-green-500/15 p-3 text-green-400">
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-sm text-gray-400">Location</span>
                  <span className="text-sm text-gray-200">
                    Regina, Saskatchewan, Canada
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="mb-4 text-sm text-gray-400">
                Professional profiles
              </p>

              <nav aria-label="Professional social links" className="flex gap-3">
                <a
                  href="https://github.com/yourgithubusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Meet Vyas on GitHub, opens in a new tab"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl transition hover:-translate-y-1 hover:border-purple-400/70 hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <FaGithub aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/in/yourlinkedinusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Meet Vyas on LinkedIn, opens in a new tab"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl transition hover:-translate-y-1 hover:border-blue-400/70 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
              </nav>
            </div>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              © {currentYear} Meet Vyas. All rights reserved.
            </p>

            <p className="mt-1">
              Built with React, Tailwind CSS, and Framer Motion.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to the top of the page"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-gray-300 transition hover:border-blue-400/60 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <FaArrowUp size={12} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;