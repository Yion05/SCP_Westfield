import useLazyLoad from "../hook/useLazyLoad";

const HeroTwo = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const fadeAnimation = `
    transition-all duration-1000 ease-out
    ${isVisible ? "scale-100" : "scale-0"}
  `;

  const topSlide = `
    transition-all duration-1000 ease-out
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
  `;

  return (
    <div className="flex flex-col items-center text-center max-w-4xl">
      <h1
        className={`text-6xl text-primary-700 my-6 ${fadeAnimation}`}
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        ROOTED IN HARMONY
      </h1>
      <h1
        className={`text-2xl text-primary-800 font-extrabold mb-6 ${topSlide}`}
      >
        EXPERIENCE REDEFINED CITY LIVING WITH INTEGRATED SMART CONNECTIVITY,
        NATURAL PEACE, AND WELLNESS-CENTRED DESIGN.
      </h1>
      <p className={`text-2xl font-normal text-primary-800 mb-8 ${topSlide}`}>
        SCP Westfield Residences combines the dynamic energy of urban living in
        USJ 1 with the restorative benefits of biophilic wellness. Thoughtfully
        designed landscapes, open green spaces, and community-focused amenities
        invite residents to connect, unwind, and thrive. Strategically located
        within walking distance of LRT and BRT stations, every aspect of the
        development ensures effortless access to the city while maintaining a
        serene retreat at home.
      </p>
      <p className={`text-2xl font-normal text-primary-800 ${topSlide}`}>
        From modern architectural touches to tranquil outdoor spaces, SCP
        Westfield Residences creates a lifestyle where convenience meets calm,
        and connectivity is balanced with well-being, offering a truly holistic
        urban experience.
      </p>
    </div>
  );
};

export default HeroTwo;
