import React from "react";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiGithubactions,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { IoArrowForward, IoSparkles } from "react-icons/io5";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive, accessible, and reusable interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "React", icon: <FaReact />, color: "text-cyan-300" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-cyan-400",
      },
    ],
  },
  {
    title: "Backend and Data",
    description: "Creating APIs, server-side logic, and database integrations.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-200" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "REST APIs", icon: <IoArrowForward />, color: "text-pink-400" },
      {
        name: "AI API Integration",
        icon: <IoSparkles />,
        color: "text-purple-400",
      },
    ],
  },
  {
    title: "Tools and Deployment",
    description: "Using professional development and delivery workflows.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions />,
        color: "text-blue-400",
      },
      { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
      { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
      { name: "Jenkins", icon: <SiJenkins />, color: "text-red-400" },
      { name: "Figma", icon: <FaFigma />, color: "text-pink-400" },
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="px-6 py-20 text-white md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Skills & Experience
          </p>

          <h2
            id="experience-heading"
            className="text-3xl font-bold md:text-5xl"
          >
            The tools I use to build
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300">
            My technical skills are supported by hands-on projects,
            professional experience, and a continuous focus on learning
            reliable development practices.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold">{group.title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {group.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <span
                      className={`text-2xl ${skill.color}`}
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </span>

                    <span className="text-sm text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Professional Experience
            </p>

            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              Experience that supports my technical work
            </h3>
          </div>

          <article className="relative rounded-2xl border border-blue-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl md:p-8">
            <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-2xl bg-blue-500" />

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-blue-400">
                  Web Development
                </p>

                <h4 className="mt-2 text-2xl font-semibold">
                  Web Developer Intern
                </h4>

                <p className="mt-1 text-lg text-gray-300">
                  Archie Softronix
                </p>
              </div>

              <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                January 2022 – July 2022
              </p>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-gray-300">
              Contributed to responsive web applications while developing
              practical experience with frontend components, backend APIs,
              version control, and collaborative development workflows.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex gap-3">
                <IoArrowForward
                  className="mt-1 shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-gray-300">
                  Built responsive interfaces using HTML, CSS, JavaScript,
                  React, and Tailwind CSS.
                </p>
              </div>

              <div className="flex gap-3">
                <IoArrowForward
                  className="mt-1 shrink-0 text-pink-400"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-gray-300">
                  Created reusable React components to improve consistency and
                  maintainability.
                </p>
              </div>

              <div className="flex gap-3">
                <IoArrowForward
                  className="mt-1 shrink-0 text-yellow-400"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-gray-300">
                  Worked with REST APIs, Node.js, MongoDB, and backend business
                  logic.
                </p>
              </div>

              <div className="flex gap-3">
                <IoArrowForward
                  className="mt-1 shrink-0 text-green-400"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-gray-300">
                  Used Git, Docker, and GitHub Actions while participating in
                  collaborative development workflows.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
                "Git",
                "Docker",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        </motion.div>

        {/* Portfolio message */}
      
      </div>
    </section>
  );
}

export default Experience;