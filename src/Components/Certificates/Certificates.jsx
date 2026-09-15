import React from "react";
import { IoRibbonOutline, IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Replace `link` with the actual verification URL or a PDF you host
// (e.g. in /public/certificates/xyz.pdf) for each credential.
const certificates = [
  {
    title: "Meta Frontend Developer Certificate",
    issuer: "Coursera",
    date: "2025",
    link: "#",
  },
  {
    title: "React Essentials",
    issuer: "LinkedIn Learning",
    date: "2025",
    link: "#",
  },
  {
    title: "AWS Basics",
    issuer: "LearnKart",
    date: "2025",
    link: "#",
  },
  {
    title: "Post Graduate Certificate, Cloud Computing and Blockchain",
    issuer: "Academic Institution",
    date: "2024",
    link: "#",
  },
  {
    title: "Post Graduate Certificate, IT Project Management",
    issuer: "Academic Institution",
    date: "2024",
    link: "#",
  },
  {
    title: "Bachelor's Degree, Computer Science",
    issuer: "Academic Institution",
    date: "2023",
    link: "#",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="px-6 py-20 text-white md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-sm md:p-12"
      >
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Credentials
          </p>
          <h2
            id="certificates-heading"
            className="text-3xl font-bold md:text-5xl"
          >
            Certificates and Education
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-400/50 hover:bg-white/10"
            >
              <div>
                <IoRibbonOutline
                  size={28}
                  className="mb-4 text-blue-400"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold leading-6">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {cert.issuer} · {cert.date}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-400 opacity-80 transition group-hover:opacity-100">
                View certificate
                <IoOpenOutline size={16} aria-hidden="true" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Certificates;