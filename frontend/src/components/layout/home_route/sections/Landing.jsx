import LandingMap from "../../../ui_components/home_route/landing/LandingMap";
import Globe from "../../../ui_components/home_route/landing/globe/Globe";
import useIsLandscape from "../../../../hooks/useIsLandscape";

const Landing = () => {
  const isLandscape = useIsLandscape();
  return (
    <>
      <div
        id="landing"
        className="w-[calc(100%_-_2rem)] landscape:w-[80vw] h-[calc(100dvh_-_64px)] flex flex-col-reverse landscape:flex-row"
      >
        <div className="flex-1">
          <div className="h-[calc((100dvh_-_64px)_/_2)] landscape:h-[calc(100dvh_-_64px)] flex flex-col justify-center items-center landscape:items-start gap-4">
            <h1 className="font-bold text-4xl md:text-5xl 2xl:text-7xl leading-tight text-center landscape:text-left">
              <span className="text-shadow-sm text-shadow-white">Every </span>
              <span className="text-cyber_teal text-shadow-sm text-shadow-cyber_teal_tint">
                Angle
              </span>
              <br />
              <span className="text-cyber_teal text-shadow-sm text-shadow-cyber_teal_tint">
                Every
              </span>{" "}
              <span className="text-shadow-sm text-shadow-black dark:text-shadow-white">
                Moment
              </span>
            </h1>
            <p className="leading-relaxed text-center landscape:text-left text-md md:text-xl 2xl:text-3xl">
              More than just footage after the fact.
              <br />
              Proactive security and intelligent monitoring in real time.
            </p>
            <a href="#contact" className="">
              <button className="btn btn-primary text-base-content">
                Get Started
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Globe />
          {/* {isLandscape ? <Globe /> : <LandingMap className="w-full h-auto" />} */}
        </div>
      </div>
    </>
  );
};

export default Landing;
