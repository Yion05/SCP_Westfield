import { Link } from "react-router";
import { headerNav } from "../data/header.data";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-parchment shadow-sm border-b border-lavender-grey/30 bg-background-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="https://westfield.webfx.com.my/wp-content/webp-express/webp-images/uploads/2026/03/top-logo.png.webp"
                alt="Company Logo"
                className="w-24 object-contain"
              />
          </div>

          {/* desktop */}
          <nav className="hidden md:flex space-x-8">
            {headerNav.map((data, index) => (
              <Link
                key={index}
                to={data.path}
                className="text-background-100 hover:text-slate-indigo px-3 py-2 rounded-md text-md font-medium transition-colors duration-200 ease-in-out relative group"
              >
                {data.header}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-indigo transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-background-100 hover:text-slate-indigo focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 bg-parchment border-t border-lavender-grey/20 shadow-lg">
          {headerNav.map((data, index) => (
            <Link
              key={index}
              to={data.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-dusty-grape hover:bg-pale-sky/20 hover:text-slate-indigo transition-colors"
            >
              {data.header}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
