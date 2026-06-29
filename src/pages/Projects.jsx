import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Coaching Classes Management System",
    category: "Full Stack",
    status: "Live",
    preview: "Admissions, authentication and admin workflows",
    description:
      "A full-stack coaching institute management system that allows students to register, log in, and submit admission forms online. It includes JWT authentication, session handling and an admin dashboard for managing student records.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Tailwind CSS",
    ],
    demo: "https://coaching-class.vercel.app/",
    code: null,
    gradient:
      "linear-gradient(135deg, rgba(34, 211, 238, 0.24), rgba(59, 130, 246, 0.12), rgba(15, 23, 42, 0.08))",
  },
  {
    id: "02",
    title: "Portfolio Website",
    category: "Frontend",
    status: "Showcase",
    preview: "Responsive personal brand site",
    description:
      "Modern portfolio website built using React, Tailwind CSS and Framer Motion with responsive layouts, smooth transitions and a more intentional visual system.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "/",
    code: null,
    gradient:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.24), rgba(34, 211, 238, 0.12), rgba(15, 23, 42, 0.08))",
  },
  {
    id: "03",
    title: "Task Manager App",
    category: "Practice",
    status: "Prototype",
    preview: "CRUD tasks and auth flows",
    description:
      "Task management application with JWT authentication, CRUD operations and REST API integration for productivity workflows.",
    tech: ["MERN", "JWT", "REST API"],
    demo: null,
    code: null,
    gradient:
      "linear-gradient(135deg, rgba(168, 85, 247, 0.24), rgba(34, 211, 238, 0.12), rgba(15, 23, 42, 0.08))",
  },
];

const statusClasses = {
  Live: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Showcase: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  Prototype: "border-amber-400/20 bg-amber-400/10 text-amber-200",
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const visibleProjects = projects.filter((project) => {
    const query = searchTerm.trim().toLowerCase();
    const haystack = [
      project.title,
      project.description,
      project.status,
      project.category,
      project.tech.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return query === "" || haystack.includes(query);
  });

  const stats = [
    { label: "Projects listed", value: projects.length },
    { label: "Live demos", value: projects.filter((project) => project.demo).length },
    { label: "Visible now", value: visibleProjects.length },
  ];

  return (
    <section className="page-shell">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-heading"
        >
          <p className="page-eyebrow">My Recent Work</p>

          <h1 className="page-title">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="page-subtitle">
            Explore a few projects that show how I approach frontend polish,
            backend logic and practical full stack problem solving.
          </p>
        </motion.div>

        <div className="mb-8">
          <label className="flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-[#0f172a] px-4 py-3 shadow-lg shadow-cyan-500/5">
            <FaSearch className="text-cyan-300" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search title, tech or status"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="about-card py-6">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-black text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="about-card flex h-full flex-col overflow-hidden"
            >
              <div
                className="relative mb-6 overflow-hidden rounded-[1.6rem] border border-white/5 p-5"
                style={{ backgroundImage: project.gradient }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_45%)]" />

                <div className="relative z-10 flex h-52 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">
                        {project.category}
                      </p>
                      <h2 className="mt-3 text-4xl font-black text-white/85">
                        {project.id}
                      </h2>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="max-w-[18rem] text-sm leading-7 text-slate-200/90">
                    {project.preview}
                  </p>
                </div>
              </div>

              <h3 className="about-card-title mb-4">{project.title}</h3>

              <p className="about-card-text mb-6">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="skill-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto grid gap-3 sm:grid-cols-2">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 transition duration-300 hover:bg-cyan-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-400">
                    Demo private
                  </span>
                )}

                {project.code ? (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 px-4 py-3 font-bold text-cyan-200 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 font-semibold text-cyan-100/70">
                    Private source
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="about-card mt-10 text-center">
            <h2 className="about-card-title mb-4">No projects found</h2>
            <p className="text-slate-400">
              Try a different search term or switch back to the full project
              list.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
