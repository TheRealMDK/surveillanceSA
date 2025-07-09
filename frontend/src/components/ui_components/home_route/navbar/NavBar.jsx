import ThemeSwitch from "../../ThemeSwitch";
import useHasScrolled from "../../../../hooks/useHasScrolled";

const NavBar = ({ content }) => {
  const hasScrolled = useHasScrolled();

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
                <li>
                  <details>
                    <summary>
                      <a
                        href="#services"
                        className="transition-all duration-300 ease-in-out"
                      >
                        Services
                      </a>
                    </summary>
                    <ul className="p-2 min-w-max">
                      <li>
                        <a
                          href="#service_1"
                          className="transition-all duration-300 ease-in-out"
                        >
                          Submenu 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#service_2"
                          className="transition-all duration-300 ease-in-out"
                        >
                          Submenu 2
                        </a>
                      </li>
                    </ul>
                  </details>
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
            </a>
            <ul className="p-2">
              <li>
                <a
                  href="#service_1"
                  className="transition-all duration-300 ease-in-out"
                  onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;
                  }}
                >
                  Surveillance and System Health Monitoring
                </a>
              </li>
              <li>
                <a>Submenu 2</a>
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
