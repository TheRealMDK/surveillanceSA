// import aboutBgLandscape from "../../../assets/temp/aboutBgLandscape.png";
import CertifiedInstallerIcon from "../../ui_components/icons/CertifiedInstallerIcon";
import SolarAndRemoteIcon from "../../ui_components/icons/SolarAndRemoteIcon";
import HumanAndVehicleAiIcon from "../../ui_components/icons/HumanAndVehicleAiIcon";
import LiveMonitoringIcon from "../../ui_components/icons/LiveMonitoringIcon";

const About = () => {
  return (
    <>
      <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-[calc(100dvh_-_150px)] flex md:flex-row flex-col gap-4 md:gap-0">
        <div className="flex-1 flex justify-center items-center md:px-8 px-4">
          <div className="h-full w-auto flex items-center justify-center">
            <CertifiedInstallerIcon className="w-auto h-full aspect-square" />
            {/* <SolarAndRemoteIcon className="w-auto h-full aspect-square" /> */}
            {/* <HumanAndVehicleAiIcon className="w-auto h-full aspect-square" /> */}
            {/* <LiveMonitoringIcon className="w-auto h-full aspect-square" /> */}
            {/* <img */}
            {/*   src={aboutBgLandscape} */}
            {/*   className="w-full h-auto" */}
            {/*   alt="background_image" */}
            {/* /> */}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center md:px-8 px-4">
          <div className="max-h-full w-full grow flex items-center justify-center">
            <p className="overflow-y-scroll grow md:max-h-[calc(100dvh_-_150px)] max-h-[calc((100dvh_-_150px)_/_2)] leading-relaxed">
              Surveillance SA is a cutting-edge security technology company
              based in Mossel Bay, South Africa. As certified Dahua Technology
              partners, we specialize in intelligent CCTV systems and proactive
              surveillance solutions that go far beyond traditional security.
              <br />
              <br />
              We’re trusted by homeowners, businesses, estates, and retail
              centers for one reason: we don’t just watch — we predict, alert,
              and respond in real time.
              <br />
              <br />
              At Surveillance SA, we believe that real security means being
              present in every moment. Our systems use advanced AI to detect and
              deter threats before they escalate, offering tailored solutions
              built for the unique challenges of the South African environment.
              From smart human and vehicle detection to license plate
              recognition and system health monitoring, every detail is designed
              to protect people, property, and peace of mind.
              <br />
              <br />
              Whether it’s preventing crime before it happens, responding
              instantly during an incident, or retrieving crystal-clear evidence
              after the fact — Surveillance SA delivers intelligent protection,
              24/7.
              <br />
              <br />
              Surveillance SA — Security that sees what matters, before it
              happens.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
