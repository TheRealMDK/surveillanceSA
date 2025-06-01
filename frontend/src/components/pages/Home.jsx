import { Element } from "react-scroll";
import Landing from "../pages/home_sections/Landing";
import About from "../pages/home_sections/About";
import Services from "../pages/home_sections/Services";
import Gallery from "../pages/home_sections/Gallery";
import ContactUs from "../pages/home_sections/ContactUs";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-[64px]"></div>
        <Element name="landing" className="active">
          <div className="h-[calc(100dvh_-_64px)] flex items-center justify-center">
            <Landing />
          </div>
        </Element>
        <Element name="about" className="">
          <div className="h-[calc(100dvh_-_64px)] flex items-center justify-center">
            <About />
          </div>
        </Element>
        <Element name="services" className="">
          <div className="h-[calc(100dvh_-_64px)] flex items-center justify-center">
            <Services />
          </div>
        </Element>
        <Element name="gallery" className="">
          <div className="h-[calc(100dvh_-_64px)] flex items-center justify-center">
            <Gallery />
          </div>
        </Element>
        <Element name="contact" className="">
          <div
            id="contact"
            className="landscape:h-[calc(100dvh_-_64px)] flex items-center justify-center"
          >
            <ContactUs />
          </div>
        </Element>
      </div>
    </>
  );
};

export default Home;
