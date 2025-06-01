import useIsLandscape from "../../../hooks/useIsLandscape.js";
import { Link } from "react-scroll";
import landingBgLandscape from "../../../assets/images/sections/landing/landingBgLandscape.png";
import landingBgPortrait from "../../../assets/images/sections/landing/landingBgPortrait.png";

const Landing = () => {
  const isLandscape = useIsLandscape();
  return (
    <>
      <div className="hero h-[calc(100dvh_-_64px)] w-screen relative">
        <img
          src={isLandscape ? landingBgLandscape : landingBgPortrait}
          className={`absolute inset-0 h-[calc(100dvh_-_64px)] object-contain  max-w-none ${
            isLandscape ? "object-right w-full" : "object-top w-screen"
          }`}
          alt="background_image"
        />
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-base-content w-full portrait:text-center portrait:absolute portrait:bottom-0 portrait:left-0 portrait:mb-[33%]">
          <div className="w-[100%]">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-left leading-relaxed">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
      </div>
    </>
  );
};

export default Landing;
