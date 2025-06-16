import { Link } from "react-scroll";
import LandingMap from "../../../ui_components/home_route/landing/LandingMap";
import Globe from "../../../ui_components/home_route/landing/globe/Globe";
import useIsLandscape from "../../../../hooks/useIsLandscape";

const Landing = () => {
  const isLandscape = useIsLandscape();
  return (
    <>
      <div className="w-[calc(100%_-_2rem)] md:w-full h-[calc(100dvh_-_64px)] flex flex-col-reverse md:flex-row">
        <div className="md:ml-[10%] flex-1">
          <div className="h-[calc((100dvh_-_64px)_/_2)] md:h-[calc(100dvh_-_64px)] flex flex-col justify-center items-center md:items-start gap-4">
            <h1 className="font-bold text-5xl leading-tight text-center md:text-left">
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
            <p className="leading-relaxed text-center md:text-left text-xl">
              More than just footage after the fact.
              <br />
              Proactive security and intelligent monitoring in real time.
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass=""
              className=""
            >
              <button className="btn btn-primary text-base-content">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          {isLandscape ? <Globe /> : <LandingMap className="w-full h-auto" />}
        </div>
      </div>
    </>
  );
};

export default Landing;
