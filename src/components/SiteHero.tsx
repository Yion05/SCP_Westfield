import { BriefInfo, TowerInfoA, TowerInfoB } from "../data/tower.data";
import useLazyLoad from "../hook/useLazyLoad";
import type { TowerData } from "../types/data.types";

const SiteHero: React.FC = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const topSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-128"}
  `;

  const InfoTable = ({ title, data }: { title: string; data: TowerData[] }) => (
    <div className={`flex flex-col w-full overflow-hidden ${topSlide}`}  ref={sectionRef as React.RefObject<HTMLDivElement>}>
      <h3 className="text-secondary-300 text-center font-bold mb-2 tracking-widest uppercase">
        {title}
      </h3>
      <table className="w-full border-collapse text-xs md:text-sm text-background-100">
        <thead>
          <tr className="bg-secondary-800 text-secondary-200">
            <th className="border border-background-600 p-2 uppercase">Type</th>
            <th className="border border-background-600 p-2 uppercase">
              GFA (sq.ft.)
            </th>
            <th className="border border-background-600 p-2 uppercase">Unit</th>
            <th className="border border-background-600 p-2 uppercase">Room</th>
            <th className="border border-background-600 p-2 uppercase">
              Car Park
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-background-800/50 transition-colors"
            >
              <td className="border border-background-600 p-2 text-center">
                {item.type}
              </td>
              <td className="border border-background-600 p-2 text-center">
                {item.gfa}
              </td>
              <td className="border border-background-600 p-2 text-center">
                {item.unit}
              </td>
              <td className="border border-background-600 p-2 text-center">
                {item.room}
              </td>
              <td className="border border-background-600 p-2 text-center">
                {item.carPark}
              </td>
            </tr>
          ))}
          <tr className="font-bold bg-background-900">
            <td className="border border-background-600 p-2">Total</td>
            <td className="border border-background-600 p-2"></td>
            <td className="border border-background-600 p-2 text-center">
              {data.reduce((sum, i) => sum + i.unit, 0)}
            </td>
            <td className="border border-background-600 p-2"></td>
            <td className="border border-background-600 p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="bg-accent-700 font-serif p-8 md:p-16 text-background-100 min-h-screen">
      <div className={`max-w-6xl mx-auto ${topSlide}`}  ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-secondary-300 uppercase tracking-tighter mb-4">
            Property Tower Specifications
          </h2>
          <p className="italic text-background-300">
            Integrated Smart Connectivity, Natural Peace, and Wellness-Centred
            Design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-center border-b border-background-800 pb-8">
          <div>
            <p className="text-secondary-400 text-xs uppercase mb-1">Tenure</p>
            <p className="font-bold">{BriefInfo.tenure}</p>
          </div>
          <div>
            <p className="text-secondary-400 text-xs uppercase mb-1">
              Site Area
            </p>
            <p className="font-bold">{BriefInfo.SiteArea} acres</p>
          </div>
          <div>
            <p className="text-secondary-400 text-xs uppercase mb-1">
              Total Units
            </p>
            <p className="font-bold">{BriefInfo.totalUnits} units</p>
          </div>
          <div>
            <p className="text-secondary-400 text-xs uppercase mb-1">
              Number of Towers
            </p>
            <p className="font-bold">
              {BriefInfo.towerCounts} Towers ({BriefInfo.towerStorey} Storeys
              each)
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-secondary-400 text-xs uppercase mb-1">
              Unit Sizes
            </p>
            <p className="font-bold">
              {BriefInfo.unitSizeMin} sq.ft. to {BriefInfo.unitSizeMax} sq.ft.
            </p>
          </div>
        </div>

        {/* Towers Tables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <InfoTable title="Tower A" data={TowerInfoA} />
          <InfoTable title="Tower B" data={TowerInfoB} />
        </div>

        {/* Grand Total Table */}
        <div className="max-w-3xl mx-auto mt-16">
          <InfoTable
            title={`Grand Total (Tower A + Tower B)`}
            data={TowerInfoA.map((item, idx) => ({
              ...item,
              unit: item.unit + TowerInfoB[idx].unit,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default SiteHero;
