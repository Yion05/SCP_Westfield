import { FiChevronDown } from "react-icons/fi";
import type { AccordionItemProps, AccordionWrapperProps } from "../types/types";
import { useState } from "react";

const AccordionItem = ({ item, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border-b border-lavender-grey/30 last:border-none">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-300
          ${isOpen ? "bg-pale-sky/20" : "hover:bg-parchment"}
        `}
      >
        <span
          className={`font-semibold text-lg ${isOpen ? "text-slate-indigo" : "text-dusty-grape"}`}
        >
          {item.title}
        </span>

        <span
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {item.customArrow ? (
            item.customArrow
          ) : (
            <FiChevronDown className="text-slate-indigo" size={24} />
          )}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 flex flex-col md:flex-row gap-4">
            {item.image && (
              <div className="shrink-0 w-full md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg shadow-sm border border-lavender-grey/50"
                />
              </div>
            )}

            <div className="flex-1 text-dusty-grape leading-relaxed">
              {Array.isArray(item.content) ? (
                <ul className="list-disc list-inside space-y-2">
                  {item.content.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Accordion({ data, allowMultiple = false }: AccordionWrapperProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white/50 backdrop-blur-sm rounded-md shadow-lg border border-lavender-grey/40 overflow-hidden">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={
            allowMultiple ? openIndices.includes(index) : openIndex === index
          }
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
