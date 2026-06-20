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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] text-white px-5 pt-32 pb-20 sm:px-6 lg:pt-36">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-8 text-3xl z-50"
      >
        <a
          href="https://github.com/cdpatil396-coder"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/chetan-patil-128a55389"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 hover:scale-125 transition-all duration-300"
        >
          <FaInstagram />
        </a>
      </motion.div>

      <div className="relative z-10 max-w-4xl pt-20 text-center sm:pt-24">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm sm:text-base text-cyan-400 uppercase tracking-[5px] mb-6"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight"
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
          className="text-2xl sm:text-4xl font-semibold mb-8 text-cyan-300 min-h-[70px]"
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
          className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12"
        >
          I build modern, scalable and user-friendly web applications using
          the MERN Stack. My focus is creating responsive, high-performance
          digital experiences with clean code, elegant UI and modern web
          technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center items-center !gap-6 sm:!gap-8"
        >
          <button
            onClick={() => navigate("/projects")}
            style={{ padding: "16px 40px", fontSize: "18px", marginRight: "0px" }}
            className="!px-10 !py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold !text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            style={{ padding: "16px 40px", fontSize: "18px" }}
            className="!px-10 !py-4 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black font-bold !text-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1,
          }}
          className="flex justify-center pt-24"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl scale-125"></div>

            <img
              src={profileImg}
              alt="Chetan Patil"
              className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
