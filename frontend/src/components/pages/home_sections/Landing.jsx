import { Link } from "react-scroll";
import LandingMap from "../../ui_components/LandingMap";

const Landing = () => {
  return (
    <>
      <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-[calc(100dvh_-_64px)] flex flex-col-reverse md:flex-row md:gap-4">
        <div className="flex-1">
          <div className="h-[calc((100dvh_-_64px)_/_2)] md:h-[calc(100dvh_-_64px)] flex flex-col justify-center items-center md:items-start gap-4">
            <h1 className="font-bold text-5xl leading-tight text-center md:text-left">
              Every <span className="text-primary font-semibold">Angle</span>{" "}
              <br />
              <span className="text-primary font-semibold">Every</span> Moment
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
        <div className="flex-1 flex items-center justify-center">
          <LandingMap className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Landing;
