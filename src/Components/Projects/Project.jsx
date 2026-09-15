import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Projectcard from "./Projectcard";

import ecommerce from "../../assets/E_commerce.png";
import portfolio from "../../assets/Portfolio.png";
import chatapp from "../../assets/Sps.png";
import blog from "../../assets/Sps.png";

const projectList = [
  {
    id: "ecommerce-web-app",
    title: "E-commerce Web Application",
    category: "Full-Stack Application",
    main:
      "A full-stack e-commerce application with product browsing, cart functionality, Stripe payment integration, and CMS-managed content.",
    image: ecommerce,
    technologies: ["Next.js", "Stripe", "CMS"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    category: "Frontend Application",
    main:
      "A responsive portfolio website built to present my development skills, experience, projects, and AI integration work.",
    image: portfolio,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "real-time-chat-app",
    title: "Real-Time Chat Application",
    category: "Full-Stack Application",
    main:
      "A real-time messaging application with live communication, user interaction, and backend data management.",
    image: chatapp,
    technologies: ["Node.js", "Socket.io", "MongoDB"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "blog-platform",
    title: "Multi-User Blog Platform",
    category: "Web Application",
    main:
      "A multi-user blogging platform with content management, markdown rendering, and a responsive reading experience.",
    image: blog,
    technologies: ["Next.js", "Markdown", "JavaScript"],
    demoUrl: "",
    githubUrl: "",
  },

  // Add more projects here later — pagination adapts automatically.
];

function Project() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const totalPages = Math.max(
    Math.ceil(projectList.length / cardsPerView),
    1
  );

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(totalPages - 1);
    }
  }, [cardsPerView, currentPage, totalPages]);

  const startIndex = currentPage * cardsPerView;
  const visibleProjects = projectList.slice(
    startIndex,
    startIndex + cardsPerView
  );

  const handlePrevious = () => {
    setCurrentPage((previousPage) => Math.max(previousPage - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((previousPage) =>
      Math.min(previousPage + 1, totalPages - 1)
    );
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-5 py-20 text-white md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Portfolio
          </p>

          <h2
            id="projects-heading"
            className="text-3xl font-bold md:text-5xl"
          >
            Selected Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300">
            A selection of projects that demonstrate my experience with
            responsive interfaces, full-stack applications, APIs, databases,
            and modern development workflows.
          </p>
        </div>

        {/* Carousel controls */}
        {totalPages > 1 && (
          <div className="mb-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentPage === 0}
              aria-label="Show previous projects"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-400/60 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Show next projects"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-400/60 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Project cards */}
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {visibleProjects.map((project) => (
            <Projectcard
              key={project.id}
              title={project.title}
              main={project.main}
              image={project.image}
              category={project.category}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* Carousel position */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`Show project page ${index + 1}`}
                aria-current={currentPage === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  currentPage === index
                    ? "w-8 bg-blue-400"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

        <p className="mt-6 text-center text-sm text-gray-500">
          More projects and source code are available on my GitHub profile.
        </p>
      </div>
    </section>
  );
}

export default Project;