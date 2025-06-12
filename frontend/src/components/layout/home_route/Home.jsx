import { Element } from "react-scroll";
import NavBar from "../../ui_components/home_route/navbar/NavBar";
import Footer from "../../ui_components/home_route/footer/Footer";
import Landing from "../home_route/sections/Landing";
import About from "../home_route/sections/About";
import Services from "../home_route/sections/Services";
import Gallery from "../home_route/sections/Gallery";
import ContactUs from "../home_route/sections/ContactUs";
import Grid from "../../ui_components/Grid";

const Home = () => {
  return (
    <>
      <NavBar
        content={
          <div className="flex flex-col">
            {/* <div className="fixed inset-0 w-full h-full -z-20 bg-clip-padding bg-[linear-gradient(#009a99_1.4px,_transparent_1.4px),linear-gradient(to_right,_#009a99_1.4px,_transparent_1.4px)] bg-[size:75px_75px] dark:bg-[size:60px_60px]"></div> */}
            <div className="fixed inset-0 w-full h-full -z-20 bg-clip-padding">
              <Grid />
            </div>
            <div className="fixed inset-0 w-full h-full -z-10 bg-base/20 dark:bg-base-300/20 backdrop-blur-sm dark:backdrop-blur-md"></div>
            <div className="h-[64px]"></div>
            <Element
              name="landing"
              className="active md:bg-gradient-to-r from-base-200 to-base-200/0 md:via-base-200/20"
            >
              <div className="bg-gradient-to-b from-base-300 to-base-200 via-base-200/0 h-[calc(100dvh_-_64px)] flex items-center justify-center">
                <Landing />
              </div>
            </Element>
            <div className="">
              <Element
                name="about"
                className="bg-gradient-to-b md:bg-gradient-to-r from-base-200/0 to-base-200 via-base-200/50 md:via-base-200/80"
              >
                <div className="bg-gradient-to-b from-base-200 to-base-200 via-base-200/0 h-[calc(100dvh_-_64px)] flex items-center justify-center">
                  <About />
                </div>
              </Element>
              <Element name="services" className="">
                <div className="bg-gradient-to-b from-base-200 to-base-200 via-base-200/0 h-[calc(100dvh_-_64px)] flex items-center justify-center">
                  <Services />
                </div>
              </Element>
              <Element name="gallery" className="">
                <div className="bg-gradient-to-b from-base-200 to-base-200 via-base-200/0 h-[calc(100dvh_-_64px)] flex items-center justify-center">
                  <Gallery />
                </div>
              </Element>
              <Element name="contact" className="">
                <div
                  id="contact"
                  className="bg-gradient-to-b from-base-200 to-base-300 via-base-200/0 md:h-[calc(100dvh_-_64px)] flex items-center justify-center"
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
