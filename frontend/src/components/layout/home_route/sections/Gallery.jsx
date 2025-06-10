import { useEffect } from "react";
import image1 from "../../../../../public/gallery/desktop/1.png";
import image2 from "../../../../../public/gallery/desktop/2.png";
import image3 from "../../../../../public/gallery/desktop/3.png";
import image4 from "../../../../../public/gallery/desktop/4.png";
import image5 from "../../../../../public/gallery/desktop/5.png";
import image6 from "../../../../../public/gallery/desktop/6.png";
import image7 from "../../../../../public/gallery/desktop/7.png";
import image8 from "../../../../../public/gallery/desktop/8.png";
import image9 from "../../../../../public/gallery/desktop/9.png";
import image10 from "../../../../../public/gallery/desktop/1.jpg";

const Gallery = () => {
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
      <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-[calc(100dvh_-_150px)] carousel carousel-center bg-neutral space-x-4">
        <div
          id="slide1"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image1} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide7" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image2} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image3} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image4} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image5} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide6"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image6} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide7" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide7"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image7} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide8" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide8"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image8} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide7" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide9" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide9"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image9} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide8" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide10" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide10"
          className="relative carousel-item w-full flex items-center justify-center"
        >
          <img src={image10} className="w-full h-full object-fit" />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide9" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
