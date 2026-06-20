import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
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
            Get In Touch
          </p>

          <h1 className="page-title">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="page-subtitle">
            Have a project idea, question or opportunity? Send me a
            message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-card"
          >
            <h2 className="about-card-title mb-8">
              Let's Connect
            </h2>

            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-4">
                <div className="about-icon-box">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p className="text-white">
                    cdpatil396@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-4">
                <div className="about-icon-box">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <p className="text-white">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-4">
                <div className="about-icon-box">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p className="text-white">
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-card"
          >
            <h2 className="about-card-title mb-8">
              Send Message
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  px-5
                  py-4
                  bg-[#111827]
                  border
                  border-cyan-500/10
                  rounded-xl
                  outline-none
                  focus:border-cyan-400
                  transition-all
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  px-5
                  py-4
                  bg-[#111827]
                  border
                  border-cyan-500/10
                  rounded-xl
                  outline-none
                  focus:border-cyan-400
                  transition-all
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  px-5
                  py-4
                  bg-[#111827]
                  border
                  border-cyan-500/10
                  rounded-xl
                  outline-none
                  resize-none
                  focus:border-cyan-400
                  transition-all
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  font-bold
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;