import { facilityBriefData } from "../data/local.data";
import { facilityConcepts, facilityLevel } from "../data/tower.data";
import useLazyLoad from "../hook/useLazyLoad";

const FacilityBrief: React.FC = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const topSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-128"}
  `;

  return (
    <section className="bg-background-700 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        {facilityBriefData.map((item, index) => (
          <div key={index} className={`relative group overflow-hidden aspect-16/10 ${topSlide}`}>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-linear-to-bl from-background-700 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h3 className="text-secondary-300 font-serif text-3xl md:text-4xl mb-2">
                {item.title}
              </h3>
              <p className="text-background-100 font-serif text-lg max-w-xs leading-snug italic opacity-90">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FacilitiesList: React.FC = () => {
      const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const topSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-128"}
  `;

        const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

      const leftSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-128"}
  `;


  let globalIndex = 1;

  return (
    <section className="bg-background-200 py-20 px-6 lg:px-20 font-serif">
      <div className="max-w-7xl mx-auto" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-8">
          <div className={rightSlide}>
            <h2 className="text-primary-800 text-3xl md:text-4xl uppercase tracking-tighter leading-tight">
              Curated for <br /> Holistic Living
            </h2>
            <p className="text-primary-900 font-bold uppercase tracking-widest mt-2">
              Landscaped Facilities
            </p>
          </div>
          
          <div className={`grid grid-cols-4 gap-4 md:gap-10 ${leftSlide}`}>
            {facilityConcepts.map((concept) => (
              <div key={concept.name} className="flex flex-col items-center gap-2">
                <img src={concept.icon} alt={concept.name} className="w-12 h-12 md:w-16 md:h-16 opacity-80" />
                <span className="text-primary-800 text-xs md:text-sm uppercase tracking-widest">{concept.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 ${topSlide}`}>
          
          <div className="lg:col-span-4 space-y-6">
            {Object.entries(facilityLevel).filter(([level]) => level !== "LEVEL 8").map(([level, items]) => {
                console.log(facilityLevel)
                return(
              <div key={level}>
                <h3 className="text-primary-700 text-xl font-bold border-b border-primary-900/20 pb-2 mb-4 tracking-widest uppercase">
                  {level}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex gap-4 text-primary-800 text-lg">
                      <span className="text-secondary-500 font-mono w-4">{globalIndex++}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )})}
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-primary-700 text-xl font-bold border-b border-primary-900/20 pb-2 mb-4 tracking-widest uppercase">
              LEVEL 8
            </h3>
            <div className="columns-1 md:columns-2 gap-8 space-y-2">
              {facilityLevel["LEVEL 8"].map((item) => (
                <div key={item} className="flex gap-4 text-primary-800 break-inside-avoid pb-2 text-lg">
                  <span className="text-secondary-500 font-mono w-6 text-right">{globalIndex++}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FacilitiesHero: React.FC = () => {
  return (
    <>
      <FacilityBrief />
      <FacilitiesList />
    </>
  );
};

export default FacilitiesHero;