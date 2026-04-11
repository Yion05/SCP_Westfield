import ReactPlayer from "react-player";

export default function Overview() {
  return (
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
  );
}
