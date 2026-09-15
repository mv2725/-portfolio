import React from "react";
import about from "../../assets/About.png";
import { IoArrowForward, IoSparkles, IoRibbonOutline, IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";



const strengths = [
  {
    title: "Frontend Development",
    icon: IoArrowForward,
    color: "text-blue-400",
    description:
      "Responsive, accessible interfaces built with React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Full-Stack Development",
    icon: IoArrowForward,
    color: "text-pink-400",
    description:
      "REST APIs and applications using Node.js, Express, Python, and MongoDB with proper auth and error handling.",
  },
  {
    title: "AI and API Integration",
    icon: IoSparkles,
    color: "text-purple-400",
    description:
      "Practical AI features and API integrations, connected securely through a backend layer.",
  },
  {
    title: "AI-Assisted Development",
    icon: IoSparkles,
    color: "text-yellow-400",
    description:
      "Using AI tools to speed up prototyping, debugging, and writing cleaner, well-documented code.",
  },
  {
    title: "Problem Solving and Debugging",
    icon: IoArrowForward,
    color: "text-green-400",
    description:
      "I approach every bug and build methodically — breaking problems down, testing assumptions, and shipping clean, maintainable solutions.",
  },
];


const certificates = [
  {
    title: "Meta Frontend Developer Certificate",
    issuer: "Coursera",
    link: "/Cetificates/Meta_Frontend_Developer_Certificate.pdf",
  },
 {
  title: "React Essentials",
  issuer: "LinkedIn Learning",
  link: "/Cetificates/React_Esstential.pdf",
},
  {
    title: "AWS Basics",
    issuer: "LearnKart",
    link: "/Cetificates/AWS_Basics.pdf",
  },
  {
    title: "Cloud Computing and Blockchain",
    issuer: "Post Graduate Certificate",
    link: "/Cetificates/cloud_computing_certificate.pdf",
  },
  {
    title: "IT Project Management",
    issuer: "Post Graduate Certificate",
    link: "/Cetificates/project_certificate.pdf",
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 py-20 text-white md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-sm md:p-12"
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 id="about-heading" className="text-3xl font-bold md:text-5xl">
            Building modern, full-stack web experiences
          </h2>
        </div>

        {/* Image and introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <img
              src={about}
              alt="Portrait of Meet Vyas"
              className="h-auto w-full max-w-md rounded-2xl border border-white/10 object-cover shadow-xl"
            />
          </motion.div>

          <div>
          

            {/* Strengths */}
            <div className="space-y-6">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <Icon
                      size={26}
                      className={`mt-1 shrink-0 ${strength.color}`}
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="text-xl font-semibold md:text-2xl">
                        {strength.title}
                      </h3>

                      <p className="mt-2 text-base leading-7 text-gray-300">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <h3 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
            Certificates and Education
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/50 hover:bg-white/10"
              >
                <div>
                  <IoRibbonOutline
                    size={24}
                    className="mb-3 text-blue-400"
                    aria-hidden="true"
                  />
                  <h4 className="text-base font-semibold leading-6">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-400">{cert.issuer}</p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-400 opacity-80 transition group-hover:opacity-100">
                  View certificate
                  <IoOpenOutline size={14} aria-hidden="true" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

 
      </motion.div>
    </section>
  );
}

export default About;