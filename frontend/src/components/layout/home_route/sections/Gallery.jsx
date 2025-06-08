import { useEffect } from "react";

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
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="w-full h-full object-cover"
          />
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="w-full h-full object-cover"
          />
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="w-full h-full object-cover"
          />
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="w-full h-full object-cover"
          />
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="w-full h-full object-cover"
          />
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="w-full h-full object-cover"
          />
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="w-full h-full object-cover"
          />
          <div className="carousel-nav absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle">
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
