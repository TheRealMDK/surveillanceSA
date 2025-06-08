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
                className="md:h-[calc(100dvh_-_64px)] flex items-center justify-center"
              >
                <ContactUs />
              </div>
            </Element>
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
