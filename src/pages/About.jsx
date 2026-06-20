import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaGraduationCap,
} from "react-icons/fa";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST API",
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
];

const About = () => {
  return (
    <section className="page-shell">
      <div className="page-container flex flex-col gap-16 md:gap-24">
        {/* Heading */}
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
            I Am Full Stack Web Developer passionate about building scalable and user-friendly web applications.

I work primarily with JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy developing REST APIs, responsive frontend interfaces, and solving real-world development problems.

During my internship at SyntexHub, I worked on backend development projects including user management REST APIs with authentication and CRUD operations. I have also built projects like a Notes App and personal portfolio website.

Currently, I am improving my DSA, backend architecture, and full-stack development skills while actively building projects and learning industry best practices.

Open to internships, collaborations, and opportunities in web development.
          </p>
        </motion.div>

        {/* Top Cards */}
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

            <div className="about-card-text">
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
            <h2 className="about-card-title mb-6">My Skills</h2>

            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
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

        {/* Education Section */}
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
              {/* Graduation */}
              <div className="bg-[#13203a] rounded-2xl p-6 border border-cyan-500/10">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  Bachelor Graduation
                </h3>

                <p className="text-white font-medium">
                  North Maharashtra University
                </p>

                <p className="text-gray-400 mt-2">2022 - 2025</p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Successfully completed graduation with a strong foundation in
                  programming, databases, web development and software
                  engineering.
                </p>
              </div>

              {/* MCA */}
              <div className="bg-[#13203a] rounded-2xl p-6 border border-cyan-500/10">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  Master of Computer Applications (MCA)
                </h3>

                <p className="text-white font-medium">2025 - 2027</p>

                <p className="text-gray-400 mt-2">
                  First Year Completed • Second Year Pursuing
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Currently pursuing MCA while focusing on Full Stack MERN
                  Development, software architecture and modern web
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;