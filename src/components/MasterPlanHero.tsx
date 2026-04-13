import { useState } from "react";
import { masterPlanType } from "../data/tower.data";
import useLazyLoad from "../hook/useLazyLoad";
import TowerType from "../ui/TowerType";

const MasterplanSection: React.FC = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const topSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-y-128"}
  `;

  return (
    <section className="bg-background-200 py-16 px-4 md:px-8 font-serif overflow-hidden">
      <div className={`max-w-7xl mx-auto ${topSlide} overflow-hidden`} ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-primary-900 text-3xl md:text-4xl uppercase tracking-tighter font-bold">
            Masterplan
          </h2>
          <p className="text-secondary-500 text-lg md:text-xl uppercase tracking-widest mt-1">
            (Level 9 - 44)
          </p>
        </div>

        <div className="relative w-full bg-white/30 backdrop-blur-sm rounded-xl border border-white/50 shadow-2xl p-4 md:p-8 lg:p-12">
          <div className="relative aspect-video w-full flex items-center justify-center">
            <img
              src="assets/masterplan.png"
              alt="Property Masterplan Level 9 to 44"
              className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-500 hover:opacity-100 opacity-90"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-primary-900 font-bold uppercase tracking-widest block text-sm">
                Tower B
              </span>
              <span className="text-background-500 text-xs uppercase italic">
                South-West
              </span>
            </div>

            <div className="hidden md:flex justify-center items-center gap-4">
              <div className="h-px w-12 bg-secondary-400"></div>
              <span className="text-secondary-500 font-bold uppercase text-xs tracking-[0.2em]">
                Orientation
              </span>
              <div className="h-px w-12 bg-secondary-400"></div>
            </div>

            <div className="text-center md:text-right">
              <span className="text-primary-900 font-bold uppercase tracking-widest block text-sm">
                Tower A
              </span>
              <span className="text-background-500 text-xs uppercase italic">
                North-West
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-4 text-[10px] md:text-xs uppercase tracking-widest text-background-600 opacity-70">
          <p>Approx. 180m to BRT South Quay USJ 1</p>
          <p>Persiaran Subang Permai</p>
          <p>Approx. 600m to LRT USJ 7</p>
        </div>
      </div>
    </section>
  );
};

const UnitLayoutGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-background-200 py-16 px-4 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        {masterPlanType.map((unit, index) => (
          <TowerType
            type={unit.type}
            builtUp={unit.builtUp}
            layout={unit.layout}
            layoutImage={unit.layoutImage}
            locationTower={unit.locationTower}
            index={index}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background-950/90 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              className="absolute -top-12 right-0 text-white text-sm uppercase tracking-widest hover:text-secondary-400"
              onClick={() => setSelectedImage(null)}
            >
              Close [X]
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Layout"
              className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
};

const MasterPlanHero = () => {
  return (
    <>
      <MasterplanSection />
      <UnitLayoutGrid />
    </>
  );
};

export default MasterPlanHero;
