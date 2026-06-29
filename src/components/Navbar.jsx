import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b18]/90 shadow-lg shadow-cyan-500/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <FaCode className="text-2xl" />
          </span>

          <span className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent sm:text-2xl">
              Portfolio
            </span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
              Full Stack Developer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
        >
          {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#070b18]/95 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
