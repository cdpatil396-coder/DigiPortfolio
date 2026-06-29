import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="page-shell flex items-center">
      <div className="page-container">
        <div className="about-card text-center">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-300">
            <FaSearch />
          </div>

          <p className="page-eyebrow">404</p>

          <h1 className="page-title">
            Page{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              not found
            </span>
          </h1>

          <p className="page-subtitle">
            The page you opened does not exist. Let&apos;s get you back to a
            valid section of the portfolio.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaHome />
              Back Home
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 px-6 py-3 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <FaArrowLeft />
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
