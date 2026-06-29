import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaCopy,
} from "react-icons/fa";

const contactEmail = "cdpatil396@gmail.com";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactDetails = [
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: null,
    icon: <FaPhone />,
  },
  {
    label: "Location",
    value: "Maharashtra, India",
    href: null,
    icon: <FaMapMarkerAlt />,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [feedback, setFeedback] = useState({
    type: "idle",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const buildMailtoLink = () => {
    const subject =
      formData.subject.trim() ||
      `Portfolio enquiry from ${formData.name.trim() || "a visitor"}`;

    const body = [
      `Hi Chetan,`,
      "",
      formData.message.trim(),
      "",
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setFeedback({
        type: "success",
        message: "Email copied to your clipboard.",
      });

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setFeedback({
        type: "error",
        message: "Copy failed. You can still use the email address shown above.",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({
        type: "error",
        message: "Please fill in your name, email and message before sending.",
      });
      return;
    }

    setFeedback({
      type: "success",
      message: "Your email draft is ready. Opening your mail app now.",
    });

    const mailtoLink = buildMailtoLink();
    setFormData(initialForm);
    window.location.href = mailtoLink;
  };

  return (
    <section className="page-shell">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-heading"
        >
          <p className="page-eyebrow">Get in touch</p>

          <h1 className="page-title">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="page-subtitle">
            Have a project idea, internship opportunity or collaboration in
            mind? Send me a message and I&apos;ll get back to you as soon as
            possible.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-card"
          >
            <h2 className="about-card-title mb-6">Let&apos;s Connect</h2>

            <p className="text-slate-400 leading-7">
              I&apos;m happy to talk about internships, freelance work,
              collaborations or ideas for new web apps. The form below opens a
              prefilled email draft, so you can reach me without needing a
              backend service.
            </p>

            <div className="mt-8 space-y-5">
              {contactDetails.map((detail) => {
                const sharedClasses =
                  "flex items-center gap-4 rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-4 transition hover:border-cyan-400/20 hover:bg-cyan-500/10";

                if (detail.href) {
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className={sharedClasses}
                    >
                      <div className="about-icon-box">{detail.icon}</div>

                      <div>
                        <p className="text-sm text-slate-400">{detail.label}</p>
                        <p className="text-white">{detail.value}</p>
                      </div>
                    </a>
                  );
                }

                return (
                  <div key={detail.label} className={sharedClasses}>
                    <div className="about-icon-box">{detail.icon}</div>

                    <div>
                      <p className="text-sm text-slate-400">{detail.label}</p>
                      <p className="text-white">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-white/5 px-5 py-3 font-bold text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaCopy />
                {copied ? "Copied" : "Copy email"}
              </button>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <FaEnvelope />
                Open email app
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#13203a] p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                Reply note
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                I usually respond through email, so include your project
                details, timeline and any links you want me to review.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="about-card"
          >
            <h2 className="about-card-title mb-8">Send Message</h2>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-cyan-500/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-cyan-500/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project enquiry, internship, collaboration..."
                  className="w-full rounded-xl border border-cyan-500/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300">
                  Your Message
                </span>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or the help you need..."
                  className="w-full resize-none rounded-xl border border-cyan-500/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  required
                />
              </label>

              {feedback.message && (
                <p
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    feedback.type === "success"
                      ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-400/20 bg-rose-500/10 text-rose-200"
                  }`}
                  aria-live="polite"
                >
                  {feedback.message}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                <FaPaperPlane />
                Send via Email
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
