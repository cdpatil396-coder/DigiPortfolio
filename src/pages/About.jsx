import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaServer,
} from "react-icons/fa";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
];

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "I create responsive and clean user interfaces using React, Tailwind CSS and modern JavaScript.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "I build server-side logic, APIs and application features using Node.js and Express.js.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Handling",
    description:
      "I work with MongoDB to store, manage and connect application data with backend services.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description:
      "I like turning messy requirements into practical, maintainable solutions that are easy to ship.",
  },
];

const education = [
  {
    title: "Bachelor Graduation",
    school: "North Maharashtra University",
    period: "2022 - 2025",
    description:
      "Successfully completed graduation with a strong foundation in programming, databases, web development and software engineering.",
  },
  {
    title: "Master of Computer Applications (MCA)",
    school: "2025 - 2027",
    period: "First Year Completed • Second Year Pursuing",
    description:
      "Currently pursuing MCA while focusing on Full Stack MERN Development, software architecture and modern web technologies.",
  },
];

const About = () => {
  return (
    <section className="page-shell">
      <div className="page-container flex flex-col gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-heading"
        >
          <p className="page-eyebrow">Get to know me</p>

          <h1 className="page-title">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="page-subtitle">
            I&apos;m a full stack developer who enjoys building practical MERN
            stack projects with thoughtful UI, clean code and reliable backend
            logic.
          </p>
        </motion.div>

        <div className="about-top-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="about-icon-box">
                <FaCode />
              </div>

              <h2 className="about-card-title">Who I Am</h2>
            </div>

            <div className="about-card-text space-y-4">
              <p>
                My name is Chetan Patil. I enjoy creating web applications that
                look good, work smoothly and solve real problems. I am learning
                and building projects with React, Node.js, Express.js and
                MongoDB.
              </p>

              <p>
                I like turning ideas into complete websites with clean layouts,
                reusable components and responsive design. My goal is to become
                a strong full stack developer and keep improving by building
                practical projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-card"
          >
            <h2 className="about-card-title mb-4">My Skills</h2>

            <p className="text-slate-400 leading-7">
              Tools and technologies I use while building small products,
              backend services and responsive interfaces.
            </p>

            <div className="skills-list mt-6">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-500/10 bg-[#13203a] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  MERN architecture, authentication flows and UI polish.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/10 bg-[#13203a] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Working style
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Reusable components, fast feedback loops and responsive
                  layouts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-feature-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="about-feature-card"
            >
              <div className="about-feature-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="about-icon-box">
                <FaGraduationCap />
              </div>

              <h2 className="about-card-title">Education</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cyan-500/10 bg-[#13203a] p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white font-medium">{item.school}</p>

                  <p className="text-gray-400 mt-2">{item.period}</p>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
