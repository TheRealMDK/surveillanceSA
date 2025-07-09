import { useEffect } from "react";
import ThemeSwitch from "../../ThemeSwitch";
import useHasScrolled from "../../../../hooks/useHasScrolled";

const NavBar = ({ content }) => {
  const hasScrolled = useHasScrolled();

  useEffect(() => {
    const allNavLinks = document.querySelectorAll('.menu a[href^="#"]');
    const landingLinks = document.querySelectorAll('.menu a[href="#landing"]');

    if (!hasScrolled) {
      allNavLinks.forEach((link) => link.classList.remove("menu-active"));
      landingLinks.forEach((link) => link.classList.add("menu-active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const navLinks = document.querySelectorAll(`.menu a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.add("menu-active"));
            if (id.startsWith("service_")) {
              const servicesLinks = document.querySelectorAll(
                '.menu a[href="#services"]',
              );
              servicesLinks.forEach((link) =>
                link.classList.add("menu-active"),
              );
            }
          } else {
            navLinks.forEach((link) => link.classList.remove("menu-active"));
            if (id.startsWith("service_")) {
              const servicesLinks = document.querySelectorAll(
                '.menu a[href="#services"]',
              );
              const anyServiceActive = document.querySelector(
                '.menu a[href^="#service_"].menu-active',
              );
              if (!anyServiceActive) {
                servicesLinks.forEach((link) =>
                  link.classList.remove("menu-active"),
                );
              }
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    const links = document.querySelectorAll('.menu a[href^="#"]');
    const sectionIds = new Set(
      Array.from(links).map((l) => l.getAttribute("href").substring(1)),
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [hasScrolled]);

  return (
    <div id="top" className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle z-30" />
      <div className="drawer-content flex flex-col scroll-smooth">
        {/* Navbar */}
        <div
          className={`navbar bg-base-300 w-full fixed top-0 z-10 ${hasScrolled ? "shadow-md dark:shadow-none shadow-neutral-400 dark:border-1 border-neutral-800" : "border-0 shadow-none"}`}
        >
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <a
              href={hasScrolled ? "#landing" : "#footer"}
              className="btn btn-ghost text-xl"
            >
              Surveillance SA
            </a>
          </div>
          <div className="navbar-center">
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal gap-2">
                {/* Navbar menu content here */}
                <li>
                  <a
                    href="#landing"
                    className="transition-all duration-300 ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition-all duration-300 ease-in-out"
                  >
                    About
                  </a>
                </li>
                <li className="dropdown dropdown-center">
                  <a
                    tabIndex="0"
                    href="#services"
                    className="transition-all duration-300 ease-in-out"
                  >
                    Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <ul
                    tabIndex="0"
                    className="menu mt-3 dropdown-content min-w-max bg-base-100 rounded-box w-52 p-2 shadow gap-1"
                  >
                    <li>
                      <a
                        href="#service_1"
                        className="transition-all duration-300 ease-in-out text-wrap"
                      >
                        Surveillance and System Health Monitoring
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service_2"
                        className="transition-all duration-300 ease-in-out text-wrap"
                      >
                        Facial Recognition with Alert Tagging
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service_3"
                        className="transition-all duration-300 ease-in-out text-wrap"
                      >
                        License Plate Recognition (LPR)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service_4"
                        className="transition-all duration-300 ease-in-out text-wrap"
                      >
                        Perimeter Control
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="transition-all duration-300 ease-in-out"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-all duration-300 ease-in-out"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end pr-2">
            <ThemeSwitch />
          </div>
        </div>
        {/* Page content goes here */}
        {content}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Mobile Drawer Menu */}
        <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-2 top-[64px]">
          {/* Navbar menu content here */}
          <li>
            <a
              href="#landing"
              className="transition-all duration-300 ease-in-out"
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="transition-all duration-300 ease-in-out"
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="transition-all duration-300 ease-in-out"
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 place-self-end"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <ul className="menu mt-2 p-2 gap-1">
              <li>
                <a
                  href="#service_1"
                  className="transition-all duration-300 ease-in-out text-wrap"
                  onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;
                  }}
                >
                  Surveillance and System Health Monitoring
                </a>
              </li>
              <li>
                <a
                  href="#service_2"
                  className="transition-all duration-300 ease-in-out text-wrap"
                  onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;
                  }}
                >
                  Facial Recognition with Alert Tagging
                </a>
              </li>
              <li>
                <a
                  href="#service_3"
                  className="transition-all duration-300 ease-in-out text-wrap"
                  onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;
                  }}
                >
                  License Plate Recognition (LPR)
                </a>
              </li>
              <li>
                <a
                  href="#service_4"
                  className="transition-all duration-300 ease-in-out text-wrap"
                  onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;
                  }}
                >
                  Perimeter Control
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#gallery"
              className="transition-all duration-300 ease-in-out"
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-all duration-300 ease-in-out"
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
