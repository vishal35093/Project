import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navitems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/Searchpage" },
    { name: "Training & Placement Cell", path: "/TPC" },
    { name: "About", path: "/Aboutus" },
    { name: "Contact", path: "/Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 bg-opacity-80 shadow-lg fixed w-full left-0 top-0 z-10 backdrop-blur-lg transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <img className="w-20" src="https://recbanda.ac.in/wp-content/uploads/2016/11/about_logo.png" alt="" />
        <div>
          <Link to="/" className="text-white text-3xl font-bold tracking-wide">
            Rajkiya Engineering College Banda
          </Link>
          <span className="block text-sm text-gray-300 italic">
            (APPROVED BY AICTE & AFFILIATED TO DR. A.P.J. ABDUL KALAM TECHNICAL
            UNIVERSITY, U.P., LUCKNOW. COLLEGE CODE 734)
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 pl-10">
          {navitems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white font-medium text-lg hover:text-yellow-400 hover:underline underline-offset-4 decoration-yellow-400 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-700 to-purple-900 text-white bg-opacity-95">
          <div className="px-4 py-6 space-y-4">
            {navitems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-lg font-medium hover:text-yellow-300 hover:translate-x-2 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
