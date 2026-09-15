import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projectcard = ({
  title,
  main,
  image,
  category = "Web Application",
  technologies = [],
  demoUrl,
  githubUrl,
}) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
    >
      {/* Project image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
        />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-white md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 line-clamp-4 text-base leading-7 text-gray-400">
          {main}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-auto flex gap-3 pt-6">
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${title}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <FaExternalLinkAlt size={12} aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-500">
              Demo Soon
            </span>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title} on GitHub`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <FaGithub size={14} aria-hidden="true" />
              Source Code
            </a>
          ) : (
            <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-500">
              Code Soon
            </span>
          )}
        </div>
      </div>

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
      />
    </motion.article>
  );
};

export default Projectcard;