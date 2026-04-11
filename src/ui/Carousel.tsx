import { useEffect, useState } from "react";
import type { CarouselProps } from "../types/types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = ({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
  leftControl,
  rightControl,
}: CarouselProps) => {
  const [curr, setCurr] = useState(0);

//   previous slide
  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));

//   next slide
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

//  auto slide effect
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, autoSlide, autoSlideInterval]); 

  return (
    <div className="overflow-hidden relative group w-full max-w-xl mx-auto">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="shrink-0 w-full">
            {child}
          </div>
        ))}
      </div>

{/* arrow */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
        >
          {leftControl ? leftControl : <FiChevronLeft size={30} />}
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
        >
          {rightControl ? rightControl : <FiChevronRight size={30} />}
        </button>
      </div>

{/* indicator */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;