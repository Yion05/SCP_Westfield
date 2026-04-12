import useLazyLoad from "../hook/useLazyLoad";
import type { MasterPlan } from "../types/data.types";

interface TowerTypeProps extends MasterPlan {
  index: number;
  setSelectedImage: (image: string | null) => void;
}

const TowerType: React.FC<TowerTypeProps> = ({
  type,
  layoutImage,
  setSelectedImage,
}) => {


  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const topSlide = `
    transition-all duration-500 ease-in-out
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-y-128"}
  `;

  return (
    <div className={`gap-8 lg:gap-4 mt-4`} ref={sectionRef as React.RefObject<HTMLDivElement>}>
      <div
        key={type}
        className={` flex flex-row md:flex-column col-span-2 gap-4 ${topSlide}`}
      >

        <div
          className="cursor-zoom-in group relative bg-white border border-background-300 rounded-sm p-4 shadow-sm hover:shadow-md transition-shadow grow"
          onClick={() => setSelectedImage(layoutImage)}
        >
          <img
            src={layoutImage}
            alt={`Type ${type} Layout`}
            className="aspect-video object-contain transition-transform group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
            <span className="bg-primary-900 text-white text-[10px] uppercase px-3 py-1 tracking-widest">
              View Floorplan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TowerType;
