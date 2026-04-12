import {
  environment,
  livability,
  quality,
  safetySecurity,
} from "../data/sustainable";
import type { FeatureItem } from "../types/data.types";

const FeatureCard: React.FC<FeatureItem> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 max-w-70">
    <div className="mb-4 p-3 rounded-full bg-secondary-50/50">
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
        <div className="relative flex flex-col items-center mb-20">
          <h2 className="text-primary-900 text-center">
            <span className="block text-sm uppercase tracking-[0.4em] mb-2 opacity-70">
              For
            </span>
            <span className="text-3xl md:text-5xl uppercase tracking-tighter font-bold">
              A Sustainable Future
            </span>
          </h2>

          <div className="mt-6 md:absolute md:top-0 md:right-0">
            <img
              src="https://placehold.co/180x60/2e3830/60a345?text=GreenBuildingIndex"
              alt="Green Building Index"
              className="h-12 md:h-14 object-contain"
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
