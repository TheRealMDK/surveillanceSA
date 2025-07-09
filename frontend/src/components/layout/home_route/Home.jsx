import { Suspense, useEffect, useState } from "react";
import LoadingScreen from "../../../components/ui_components/LoadingScreen";
import NavBar from "../../ui_components/home_route/navbar/NavBar";
import Footer from "../../ui_components/home_route/footer/Footer";
import Landing from "../home_route/sections/Landing";
import About from "../home_route/sections/About";
import Services from "../home_route/sections/Services";
import Gallery from "../home_route/sections/Gallery";
import ContactUs from "../home_route/sections/ContactUs";
import Grid from "../../ui_components/Grid";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // fake delay for smoother loading
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <NavBar
        content={
          <div className="flex flex-col">
            <div className="fixed inset-0 w-full h-full -z-20 bg-clip-padding">
              <Grid />
              <Grid className="landscape:hidden" />
            </div>
            <div className="fixed inset-0 w-full h-full -z-10 bg-base-300/20 landscape:backdrop-blur-sm backdrop-blur-xs dark:landscape:backdrop-blur-md"></div>
            <div className="h-[64px]"></div>
            <Suspense fallback={null}>
              <section
                id="landing"
                className="active bg-gradient-to-r from-base-200 to-base-200/0 via-base-200/20"
              >
                <div className="bg-gradient-to-b from-base-300 to-base-200 via-base-200/0 h-[calc(100dvh_-_64px)] flex items-center justify-center">
                  <Landing />
                </div>
              </section>
              <section
                id="about"
                className="bg-gradient-to-b landscape:bg-gradient-to-r from-base-200/0 to-base-200 via-base-200/50 landscape:via-base-200/80"
              >
                <div className="bg-gradient-to-b from-base-200 to-base-200 via-base-200/0 h-[calc(100dvh_-_64px)] flex items-center justify-center">
                  <About />
                </div>
              </section>
              <div className="bg-base-200 landscape:hidden">
                <div className="w-[90%] h-0.5 ml-[5%] bg-cyber_teal"></div>
              </div>
              <section id="services" className="">
                <div className="bg-gradient-to-b from-base-200 to-base-200 via-base-200/0  min-h-[calc(100dvh_-_64px)] flex items-center justify-center">
                  <Services />
                </div>
              </section>
              <div className="bg-base-200 landscape:hidden">
                <div className="w-[90%] h-0.5 ml-[5%] bg-cyber_teal"></div>
              </div>
              <section id="gallery" className="relative">
                <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-opacity-70 h-[calc(100dvh_-_64px)] hidden landscape:flex items-center justify-center w-full"></div>
                <div className="bg-gradient-to-b from-base-200 to-base-200 via-base-200/0 landscape:from-cyber_teal_shade/70 landscape:to-cyber_teal_shade/70 landscape:via-cyber_teal_shade/70 h-[calc(100dvh_-_64px)] flex items-center justify-center">
                  <Gallery />
                </div>
              </section>
              <section id="contact" className="">
                <div
                  id="contact"
                  className="bg-gradient-to-b from-base-200 to-base-300 via-base-200/0 landscape:h-[calc(100dvh_-_64px)] flex items-center justify-center"
                >
                  <ContactUs />
                </div>
              </section>
            </Suspense>
          </div>
        }
      />
      <section id="footer" className="">
        <Footer />
      </section>
    </>
  );
};

export default Home;
