import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import profileImg from "../assets/profile.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    // Changed py-28 to safety margins: pt-36 pb-28 sm:pt-40 lg:pt-48 to cleanly clear your header
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-[#050816] text-white px-4 pt-36 pb-28 sm:px-6 sm:pt-40 lg:pt-48 lg:pb-40">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="absolute top-10 left-4 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/10 md:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-10 right-4 w-48 h-48 md:w-64 md:h-64 bg-blue-500/10 md:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl w-full text-center mx-auto flex flex-col items-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-cyan-400 uppercase tracking-[4px] sm:tracking-[6px] mb-6 sm:mb-8"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10 leading-tight px-2"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Chetan Patil
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 text-cyan-300 min-h-[60px] sm:min-h-[70px] px-4"
        >
          <TypeAnimation
            sequence={[
              "Full Stack MERN Developer",
              2000,
              "React Developer",
              2000,
              "Node.js Developer",
              2000,
              "Web Application Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl lg:max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          I build modern, scalable and user-friendly web applications using
          the MERN Stack. My focus is creating responsive, high-performance
          digital experiences with clean code, elegant UI and modern web
          technologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8 w-full sm:w-auto px-6 sm:px-0"
        >
          <button
            onClick={() => navigate("/projects")}
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto px-10 py-4 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Global Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center items-center gap-10 text-3xl pt-24 md:pt-32"
        >
          <a
            href="https://github.com/cdpatil396-coder"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-cyan-400 hover:scale-125 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/chetan-patil-128a55389"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-400 hover:scale-125 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-pink-500 hover:scale-125 transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1,
          }}
          className="flex justify-center pt-8 md:pt-10"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl scale-110 md:scale-125"></div>

            <img
              src={profileImg}
              alt="Chetan Patil"
              className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] md:shadow-[0_0_50px_rgba(34,211,238,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;