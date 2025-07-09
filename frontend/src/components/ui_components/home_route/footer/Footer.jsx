import Logo from "../../Logo";
import fbLogo from "../../../../assets/logos/socials/Facebook_Logo_Primary.png";
import igLogo from "../../../../assets/logos/socials/Instagram_Glyph_Gradient.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer flex-col landscape:flex-row bg-base-300 text-neutral-content p-8 landscape:p-4 flex items-center justify-around"
    >
      <aside>
        <Logo className="h-[100px] w-auto" />
      </aside>
      <div className="text-center">
        <p className="text-base-content">
          <span className="text-xl font-bold text-cyber_teal">Contact Us</span>
          <br />
          8 Rooken Smith Street
          <br />
          Die Voorbaai
          <br />
          Tel: (061) 540 - 9455
          <br />
          Email: info@surveillancesa.co.za
        </p>
      </div>
      <nav className="flex flex-col justify-center items-center">
        <p className="text-center text-xl text-cyber_teal font-bold w-full h-full">
          Socials
        </p>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61576624582725"
            target="_blank"
          >
            <img
              className="h-[36px] w-auto animate-pulse transition-all duration-500 ease-in-out"
              src={fbLogo}
              alt="facebook logo"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576624582725"
            target="_blank"
          >
            <img
              className="h-[36px] w-auto animate-pulse transition-all duration-500 ease-in-out"
              src={igLogo}
              alt="instagram logo"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
