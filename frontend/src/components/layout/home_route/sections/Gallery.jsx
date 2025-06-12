import { useEffect } from "react";
import useIsLandscape from "../../../../hooks/useIsLandscape.js";

const Gallery = () => {
  const isLandscape = useIsLandscape();
  useEffect(() => {
    const buttons = document.querySelectorAll(".carousel-nav a");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the vertical page scroll

        const targetId = btn.getAttribute("href")?.replace("#", "");
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          targetEl.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest", // Avoid vertical scroll
          });
        }
      });
    });

    // Cleanup to avoid memory leaks
    return () => {
      buttons.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true)); // Remove listeners safely
      });
    };
  }, []);
  return (
    <>
      {isLandscape ? (
        <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-[calc(100dvh_-_150px)] rounded-sm overflow-hidden carousel carousel-center bg-neutral space-x-4">
          <div
            id="slide1"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/1.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide10"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/2.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide1"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/3.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide2"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/4.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide3"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide5"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide5"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/5.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide4"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide6"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide6"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/6.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide5"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide7"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide7"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/7.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide6"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide8"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide8"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/8.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide7"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide9"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide9"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/9.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide8"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide10"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide10"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/desktop/1.jpg"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide9"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-[calc(100dvh_-_150px)] carousel carousel-center bg-neutral space-x-4">
          <div
            id="slide1"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/mobile/1.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide10"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/mobile/2.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide1"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/mobile/3.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide2"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/mobile/4.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide3"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide5"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide5"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/mobile/5.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide4"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide6"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide6"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/mobile/6.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide5"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide7"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide7"
            className="relative carousel-item w-full flex items-center justify-center"
          >
            <img
              src="/gallery/mobile/7.png"
              className="w-full h-full object-fit"
            />
            <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide6"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle hover:bg-cyber_teal hover:border-cyber_teal"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
