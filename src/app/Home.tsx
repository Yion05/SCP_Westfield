import ReactPlayer from "react-player";
import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";
import { HeroFour, HeroFourText } from "./HeroFour";
import { HeroFive, HeroFiveNext } from "./HeroFive";
import { MapHero } from "./Map";

export default function Home() {
  return (
    <div className=" font-family overflow-hidden">
      <section>
        <div className={`bg-background-200 pb-24`}>
          <ReactPlayer
            className=""
            src="https://westfield.webfx.com.my/wp-content/uploads/2026/03/Westfield-Website-Landing-Video-Desktop-Version.mp4"
            loop={true}
            playing={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>
      </section>

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
