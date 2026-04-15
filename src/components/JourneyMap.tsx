import {
  environment,
  livability,
  quality,
  safetySecurity,
} from "../data/sustainable";
import type { FeatureItem } from "../types/data.types";

const FeatureCard: React.FC<FeatureItem> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 max-w-70">
    <div className="mb-4 p-3 rounded-full border-background-300 hover:border hover:scale-105 group transition-all duration-300">
      <img src={icon} alt={title} className="w-12 h-12 object-contain" />
    </div>
    <h4 className="text-primary-700 font-bold uppercase text-base tracking-widest mb-2 leading-tight">
      {title}
    </h4>
    <p className="text-primary-700 text-sm leading-relaxed opacity-80">
      {description}
    </p>
  </div>
);

const FeatureCategory: React.FC<{ title: string; items: FeatureItem[] }> = ({
  title,
  items,
}) => (
  <div className="mb-4 last:mb-0 overflow-hidden">
    <div className="flex items-center gap-4 mb-10">
      <div className="h-px flex-1 bg-primary-700/10"></div>
      <h3 className="text-background-500 uppercase tracking-[0.3em] text-lg font-bold">
        {title}
      </h3>
      <div className="h-px flex-1 bg-primary-700/10"></div>
    </div>

    <div className="flex flex-wrap justify-center gap-y-10 gap-x-4 md:gap-x-8">
      {items.map((item, idx) => (
        <FeatureCard key={idx} {...item} />
      ))}
    </div>
  </div>
);

const SustainableFuture: React.FC = () => {
  return (
    <section className="bg-background-200 py-20 px-4 md:px-8 font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col items-center mb-10">
          <h2 className="text-primary-900 text-center mt-4 md:mt-5">
            <span className="block text-sm md:text-base uppercase tracking-[0.4em] mb-2 opacity-70">
              For
            </span>
            <span className="text-sm md:text-2xl uppercase tracking-wide">
              A Sustainable Future
            </span>
          </h2>

          <div className="mt-0 md:absolute md:top-0 md:right-0">
            <img
              src="/greenlogo.png"
              alt="Green Building Index"
              className="h-18 md:h-22 object-contain"
            />
          </div>
        </div>

        <FeatureCategory title="LIVABILITY" items={livability} />
        <FeatureCategory title="ENVIRONMENT" items={environment} />
        <FeatureCategory title="QUALITY" items={quality} />
        <FeatureCategory title="SAFETY & SECURITY" items={safetySecurity} />
      </div>
    </section>
  );
};

const JourneyMap = () => {
  return (
    <>
      <SustainableFuture />
    </>
  );
};

export default JourneyMap;
