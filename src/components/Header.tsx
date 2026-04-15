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
    </header>
  );
}
