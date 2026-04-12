import useLazyLoad from "../hook/useLazyLoad";

const UniversityGrids: React.FC = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

  const leftSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-128"}
  `;

  return (
    <section className="bg-background-200 py-20 px-4 md:px-8 font-serif">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-9 gap-6 items-stretch"
          ref={sectionRef as React.RefObject<HTMLDivElement>}
        >
          <div className="lg:col-span-5 flex items-start mb-4">
            <h2 className="text-primary-600 p-6 text-justify text-lg md:text-xl lg:text-2xl uppercase font-medium leading-snug max-w-5xl">
              A{" "}
              <span className="text-secondary-500 font-bold">
                large student population{" "}
              </span>
              boosts the local economy through spending on housing, food, and
              services, driving strong demand for residential units.
            </h2>
          </div>

          <div
            className={`lg:col-span-4 flex flex-col h-full gap-2 ${rightSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x600/2e3830/abbaae?text=Sunway+University"
                alt="Sunway"
                className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                Sunway University
              </h3>
              <p className="text-background-600 text-sm">30,000+ students</p>
            </div>
          </div>

          <div
            className={`lg:col-span-5 flex flex-col h-full gap-2 ${leftSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x600/2e3830/abbaae?text=The+One+Academy"
                alt="The One"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                The One Academy
              </h3>
              <p className="text-background-600 text-sm">2,500+ students</p>
            </div>
          </div>

          <div
            className={`lg:col-span-2 flex flex-col h-full gap-2 ${leftSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x450/2e3830/abbaae?text=INTI"
                alt="INTI"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                INTI International
              </h3>
              <p className="text-background-600 text-sm">13,000+ students</p>
            </div>
          </div>

          <div
            className={`lg:col-span-2 flex flex-col h-full gap-2 ${rightSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/600x800/2e3830/abbaae?text=SEGi+College"
                alt="SEGi"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                SEGi College
              </h3>
              <p className="text-background-600 text-sm">6,500+ students</p>
            </div>
          </div>

          <div
            className={`lg:col-span-4 flex flex-col h-full gap-2 ${leftSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x450/2e3830/abbaae?text=Monash+Malaysia"
                alt="Monash"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                Monash University Malaysia
              </h3>
              <p className="text-background-600 text-sm">11,000+ students</p>
            </div>
          </div>

          <div
            className={`lg:col-span-5 flex flex-col h-full gap-2 ${rightSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x450/2e3830/abbaae?text=Taylor's+Lakeside"
                alt="Taylors"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                Taylor’s University Lakeside
              </h3>
              <p className="text-background-600 text-sm">15,000+ students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MallBenefitsSection: React.FC = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

  const leftSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-128"}
  `;

  return (
    <section className="bg-background-200 py-16 px-4 md:px-8 font-serif">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-9 gap-6 items-stretch"
          ref={sectionRef as React.RefObject<HTMLDivElement>}
        >
          <div className="lg:col-span-5 flex items-start mb-6">
            <h2 className="text-primary-600 text-lg p-6 text-justify md:text-xl lg:text-2xl uppercase font-medium leading-snug">
              <span className="text-secondary-500 font-bold">
                Malls benefit significantly
              </span>{" "}
              from this demand, becoming key social and lifestyle hubs where
              students dine, shop, and unwind, further energizing the local
              economy.
            </h2>
          </div>

          <div
            className={`lg:col-span-4 flex flex-col h-full gap-2 ${rightSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x600/2e3830/abbaae?text=Easyhome+Mall"
                alt="Easyhome Mall"
                className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                Easyhome Mall
              </h3>
            </div>
          </div>

          <div
            className={`lg:col-span-4 flex flex-col h-full gap-2 ${leftSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x600/2e3830/abbaae?text=Nu+Empire"
                alt="Nu Empire"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">Nu Empire</h3>
            </div>
          </div>

          <div
            className={`lg:col-span-5 flex flex-col h-full gap-2 ${rightSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x450/2e3830/abbaae?text=Subang+Parade"
                alt="Subang Parade"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                Subang Parade
              </h3>
            </div>
          </div>

          <div
            className={`lg:col-span-5 flex flex-col h-full gap-2 ${leftSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/800x450/2e3830/abbaae?text=Mydin"
                alt="Mydin"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">Mydin</h3>
            </div>
          </div>

          <div
            className={`lg:col-span-4 flex flex-col h-full gap-2 ${rightSlide}`}
          >
            <div className="relative aspect-video w-full bg-background-800 border border-background-300 overflow-hidden flex-1">
              <img
                src="https://placehold.co/1200x600/2e3830/abbaae?text=Sunway+Pyramid"
                alt="Sunway Pyramid"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="mt-auto">
              <h3 className="text-primary-900 font-bold text-lg">
                Sunway Pyramid
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocalHero = () => {
  return (
    <>
      <UniversityGrids />
      <MallBenefitsSection />
    </>
  );
};

export default LocalHero;
