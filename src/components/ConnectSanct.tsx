import type React from "react";
import { connectionService, quietEnclaveInfo } from "../data/connect.data";
import useLazyLoad from "../hook/useLazyLoad";

const AmenitiesSection: React.FC = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

  return (
    <section className="bg-background-200 py-20 px-4 font-serif overflow-hidden">
      <div
        className={`max-w-6xl mx-auto ${rightSlide}`}
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        <div className="flex flex-wrap justify-center gap-y-16 gap-x-8">
          {connectionService.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[320px] w-full md:w-[calc(45%-2rem)] lg:w-[calc(30%-2rem)]"
            >
              <div className="mb-6 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain rounded-lg opacity-80"
                />
              </div>

              <h3
                className={`text-primary-700 text-xl md:text-2xl font-bold uppercase tracking-widest leading-tight mb-3 ${service.title === "Education Hub" ? "wrap-break-word" : ""}`}
              >
                {service.title}
              </h3>
              <p className="text-primary-800 text-base md:text-lg leading-relaxed max-w-70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuietEnclaveSection: React.FC = () => {
    const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-128"}
  `;

    const leftSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-128"}
  `;

  return (
    <section className="bg-background-700 text-background-50 font-serif py-16 px-6 lg:px-20 overflow-hidden">
      <div className={`max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start`} ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className={`${rightSlide} relative w-full aspect-4/3 lg:col-span-2 lg:aspect-square bg-background-800 rounded-sm overflow-hidden flex items-center justify-center border border-background-700`}>
          <div className="text-background-500 text-center p-4">
            <p className="uppercase tracking-widest mb-2 opacity-50">
              Map Preview Placeholder
            </p>
            <div className="w-full h-px bg-background-700 my-4"></div>
            <img
              src="https://scpwestfield.com.my/wp-content/webp-express/webp-images/uploads/2026/03/location-map2.jpg.webp"
              alt="location_map, subang jaya, petaling jaya, puchong, usj1"
            />
          </div>
        </div>

        <div className={`flex flex-col gap-10 lg:col-span-1 ${leftSlide}`}>
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl uppercase tracking-widest">
              A Quiet Enclave <br /> In Vibrant USJ 1
            </h2>
          </div>

          <div className="space-y-8">
            {Object.keys(quietEnclaveInfo).map((category) => (
              <div key={category} className="group">
                <h3 className="text-secondary-300 font-semibold uppercase tracking-widest text-lg mb-3 border-b border-background-800 pb-1 inline-block">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {quietEnclaveInfo[category].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-baseline gap-4 text-sm md:text-base"
                    >
                      <span className="text-background-100">
                        {item.placename}
                      </span>
                      <span className="text-secondary-300 font-medium whitespace-nowrap">
                        ({item.distance})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ConnectSanct: React.FC = () => {
  return (
    <>
      <AmenitiesSection />
      <QuietEnclaveSection />
    </>
  );
};

export default ConnectSanct;
