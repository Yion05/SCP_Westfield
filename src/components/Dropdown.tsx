import React, { useEffect, useRef, useState } from "react";
import type { DropdownsProp } from "../types/types";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router";

function Dropdown({ title, links }: DropdownsProp) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-right" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200
          ${
            isOpen
              ? "bg-slate-indigo text-white shadow-inner"
              : "bg-white text-dusty-grape border border-lavender-grey/30 hover:border-slate-indigo"
          }
        `}
      >
        {title}
        <FiChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        className={`
          absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-xl border border-lavender-grey/20 z-50
          transition-all duration-200 ease-out
          ${
            isOpen
              ? "transform opacity-100 scale-100 visible"
              : "transform opacity-0 scale-95 invisible"
          }
        `}
      >
        <div className="py-2">
          {links.map((item, index) => (
            <React.Fragment key={index}>
              {item.hasDivider && (
                <div className="my-1 border-t border-lavender-grey/20" />
              )}

              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-sm text-dusty-grape hover:bg-pale-sky/20 hover:text-slate-indigo transition-colors"
              >
                {item.header}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
