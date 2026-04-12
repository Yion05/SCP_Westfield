import React from "react";
import useLazyLoad from "../hook/useLazyLoad";

export const HeroFour = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>} className={`${rightSlide} overflow-hidden`}>
      <img
        src="https://scpwestfield.com.my/wp-content/webp-express/webp-images/uploads/2026/03/grid-slide-banner.jpg.webp"
        alt="balance_grwoth_inspiring_image"
        className="object-contain"
      />
    </div>
  );
};

export const HeroFourText = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const leftSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-128"}
  `;

  return (
    <h1
      className={`absolute text-7xl bottom-20 left-56 max-w-xl text-background-700 ${leftSlide} overflow-hidden`}
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      CURATED FOR HOLISTIC LIVING
    </h1>
  );
};
