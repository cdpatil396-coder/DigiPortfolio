import { Link, useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-cyan-500/20 bg-[#070b18]/95 shadow-lg shadow-cyan-500/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <FaCode className="text-3xl text-cyan-400 group-hover:rotate-12 transition duration-300" />

            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-3 md:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative
                  rounded-lg
                  px-2.5
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  sm:px-4
                  sm:text-base
                  md:text-lg
                  ${
                    location.pathname === link.path
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5"
                  }
                `}
              >
                {link.name}

                {location.pathname === link.path && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-[2px] bg-cyan-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
