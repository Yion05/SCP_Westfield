import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";
import { HeroFour, HeroFourText } from "./HeroFour";
import { HeroFive, HeroFiveNext } from "./HeroFive";
import { MapHero } from "./Map";
import Overview from "../components/Overview";

export default function Home() {
  return (
    <div className=" font-family overflow-hidden">
      <Overview />

      <section className="bg-background-200 flex flex-col items-center max-w-full">
        <HeroTwo></HeroTwo>
        <HeroThree></HeroThree>
      </section>

      <section className="bg-background-200 flex flex-col items-center max-w-full relative py-24">
        <HeroFour></HeroFour>
        <HeroFourText></HeroFourText>
      </section>
      <section>
        <HeroFive></HeroFive>
      </section>
      <section>
        <HeroFiveNext></HeroFiveNext>
      </section>
      <section>
        {/* on click, show image enlarged/zoomable/movable */}
        <MapHero></MapHero>
      </section>
      {/* <Carousel
            autoSlide={true}
            autoSlideInterval={3000}
        >
            {homeSlide}
        </Carousel>
        <Accordion data={accordionData}></Accordion>
        <Collapse items={collapseData} allowMultiple={false} defaultOpenIndices={[2]} />
        <Dropdown title="More Info" links={profileLinks}/> */}
    </div>
  );
}
