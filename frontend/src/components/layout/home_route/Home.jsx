import { Element } from "react-scroll";
import NavBar from "../../ui_components/home_route/navbar/NavBar";
import Footer from "../../ui_components/home_route/footer/Footer";
import Landing from "../home_route/sections/Landing";
import About from "../home_route/sections/About";
import Services from "../home_route/sections/Services";
import Gallery from "../home_route/sections/Gallery";
import ContactUs from "../home_route/sections/ContactUs";

const Home = () => {
  return (
    <>
      <NavBar
        content={
          <div className="flex flex-col relative">
            <div className="absolute inset-0 w-full h-full -z-20 bg-clip-padding bg-[linear-gradient(#009a99_1.4px,_transparent_1.4px),linear-gradient(to_right,_#009a99_1.4px,_transparent_1.4px)] bg-[size:60px_60px]"></div>
            <div className="absolute inset-0 w-full h-full -z-10 bg-white/20 dark:bg-base-300/20 backdrop-blur-xs dark:backdrop-blur-sm"></div>
            <div className="h-[64px]"></div>
            <Element name="landing" className="active">
              <div className="h-[calc(100dvh_-_64px)] flex items-center justify-center">
                <Landing />
              </div>
            </Element>
            <div className="bg-base-200">
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
                  className="md:h-[calc(100dvh_-_64px)] flex items-center justify-center"
                >
                  <ContactUs />
                </div>
              </Element>
            </div>
          </div>
        }
      />
      <Element name="footer" className="">
        <Footer />
      </Element>
    </>
  );
};

export default Home;
