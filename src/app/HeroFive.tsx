import React from "react";
import useLazyLoad from "../hook/useLazyLoad";

export const HeroFive = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px 0px 0px",
  });

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`${rightSlide}`}
    >
      <img
        src="https://scpwestfield.com.my/wp-content/webp-express/webp-images/uploads/2026/03/living-slide-banner.jpg.webp"
        alt="living slide"
        className={`object-contain`}
      />
    </div>
  );
};

export const HeroFiveNext = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const leftSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-128"}
  `;

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`${leftSlide}`}
    >
      <img
        src="https://scpwestfield.com.my/wp-content/uploads/2026/03/ezgif.com-animated-gif-maker-1.gif"
        alt="living slide"
        className={`object-contain`}
      />
    </div>
  );
};
