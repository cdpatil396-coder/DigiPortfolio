import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Swami Coaching Classes Management System",
    description:
      "A full-stack coaching institute management system that allows students to register, log in, and submit admission forms online. Features secure JWT authentication, session management, and a robust admin dashboard to Add, Edit, and Delete student records.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind CSS"],
    demo: "https://coaching-class.vercel.app/",
    github: "#",
  },
  {
    id: "02",
    title: "Portfolio Website",
    description:
      "Modern portfolio website built using React, Tailwind CSS and Framer Motion with responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    github: "#",
  },
  {
    id: "03",
    title: "Task Manager App",
    description:
      "Task management application with JWT authentication, CRUD operations and REST API integration.",
    tech: ["MERN", "JWT", "REST API"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="page-shell">
      <div className="page-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-heading"
        >
          <p className="page-eyebrow">
            My Recent Work
          </p>

          <h1 className="page-title">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="page-subtitle">
            Explore some of my recent projects showcasing my skills in
            Full Stack MERN Development, UI/UX Design and modern web
            technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="about-card flex flex-col overflow-hidden"
            >
              {/* Project Preview */}
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-cyan-900/40 to-blue-900/30 rounded-xl mb-6">
                <span className="text-8xl font-bold text-white/10">
                  {project.id}
                </span>
              </div>

              {/* Title */}
              <h2 className="about-card-title mb-4">
                {project.title}
              </h2>

              {/* Description */}
              <p className="about-card-text mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="skill-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-3
                    rounded-xl
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-black
                    font-bold
                    transition-all
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-3
                    rounded-xl
                    border
                    border-cyan-400
                    hover:bg-cyan-400
                    hover:text-black
                    font-bold
                    transition-all
                  "
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;