import { Link } from "react-scroll";
import ThemeSwitch from "../../components/ui_components/ThemeSwitch";

const NavBar = ({ content }) => {
  return (
    <div id="top" className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle z-30" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full fixed top-0 z-10">
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
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass="menu-active"
              className="btn btn-ghost text-xl"
            >
              Surveillance SA
            </Link>
          </div>
          <div className="navbar-center">
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal gap-2">
                {/* Navbar menu content here */}
                <li>
                  <Link
                    to="landing"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    activeClass="menu-active"
                    className=""
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    activeClass="menu-active"
                    className=""
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    activeClass="menu-active"
                    className=""
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    activeClass="menu-active"
                    className=""
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    activeClass="menu-active"
                    className=""
                  >
                    Contact Us
                  </Link>
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
            <Link
              to="landing"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass="menu-active"
              className=""
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass="menu-active"
              className=""
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass="menu-active"
              className=""
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass="menu-active"
              className=""
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
              activeClass="menu-active"
              className=""
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
