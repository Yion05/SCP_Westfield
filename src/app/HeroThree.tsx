import React from "react";
import { heroData } from "../data/hero.data";
import useLazyLoad from "../hook/useLazyLoad";

const HeroThree = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const leftSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-128"}
  `;

    const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

  return (
    <>
      <div className={`grid grid-cols-3 gap-24 items-stretch max-w-5xl mt-24 ${leftSlide}`} ref={sectionRef as React.RefObject<HTMLDivElement>}>
        {heroData.slice(0, 3).map((data, index) => {
          const sentenceSplit = data.content.split("\n");
          return (
            <div key={index} className="flex flex-col items-center">
              {sentenceSplit.map((data) => (
                <h1
                  key={data}
                  className="text-2xl font-bold text-primary-800 uppercase text-center"
                >
                  {data}
                </h1>
              ))}
              <img
                src={data.image}
                alt={data.content}
                className="object-contain aspect-auto"
              />
            </div>
          );
        })}
      </div>
      <div className={`grid grid-cols-3 gap-24 items-stretch max-w-5xl my-24 ${rightSlide}`} ref={sectionRef as React.RefObject<HTMLDivElement>}>
        {heroData.slice(3, 6).map((data, index) => {
          const sentenceSplit = data.content.split("\n");
          return (
            <div key={index} className="flex flex-col items-center">
              {sentenceSplit.map((data) => (
                <h1
                  key={data}
                  className="text-2xl font-bold text-primary-800 uppercase text-center"
                >
                  {data}
                </h1>
              ))}
              <img
                src={data.image}
                alt={data.content}
                className="object-contain aspect-auto"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroThree;
