import { FiMinus, FiPlus } from "react-icons/fi";
import type { CollapseWrapperProps } from "../types/types";
import { useState } from "react";

function Collapse({ 
  items, 
  allowMultiple = true, 
  defaultOpenIndices = []
}: CollapseWrapperProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(defaultOpenIndices);

  const toggleCollapse = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div 
            key={index} 
            className="rounded-md border border-lavender-grey/30 bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleCollapse(index)}
              className="w-full flex items-center justify-between p-5 text-left bg-parchment/30 hover:bg-pale-sky/10 transition-colors"
            >
              <span className={`font-bold transition-colors ${isOpen ? "text-slate-indigo" : "text-dusty-grape"}`}>
                {item.title}
              </span>
              <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                {isOpen ? (
                  <FiMinus className="text-slate-indigo" size={20} />
                ) : (
                  <FiPlus className="text-lavender-grey" size={20} />
                )}
              </div>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 text-dusty-grape leading-relaxed border-t border-lavender-grey/10 bg-white">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Collapse;