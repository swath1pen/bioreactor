import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="https://furstlab.github.io/BioEchemBuilds/" className="font-mono text-xl font-bold text-white">
            BioEchem
            <span className="font-bold mb-3 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            ⚡Builds
            </span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Usage
            </a>
            <a
              href="#custom"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Customization
            </a>
            <Link
              to="/model"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Explore 3D Model
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
