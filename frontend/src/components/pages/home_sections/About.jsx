// import useIsLandscape from "../../../hooks/useIsLandscape.js";
import aboutBgLandscape from "../../../assets/aboutBgLandscape.png";
// import aboutBgPortrait from "../../../assets/aboutBgPortrait.png";

const About = () => {
  return (
    <>
      <div className="w-[80vw] h-full flex landscape:flex-row portrait:flex-col">
        <div className="flex-1 flex justify-center items-center landscape:p-8 portrait:p-4">
          <div className="h-full w-full">
            <img
              src={aboutBgLandscape}
              className="w-full h-full"
              alt="background_image"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center p-8 portrait:p-4">
          <div className="max-h-full w-full grow flex items-center justify-center">
            <p className="overflow-y-scroll grow landscape:h-full portrait:h-[calc((100dvh_-_150px)_/_2)] leading-relaxed">
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

// const About = () => {
//   // const isLandscape = useIsLandscape();
//   return (
//     <div className="w-[80vw] flex grow landscape:flex-row portrait:flex-col portrait:py-8 gap-16">
//       <div className="flex-1">
//         <div className="h-[calc(100dvh_-_150px)] w-full flex justify-center items-center">
//           <img
//             src={aboutBgLandscape}
//             className="w-full h-full"
//             alt="background_image"
//           />
//         </div>
//       </div>
//       <div className="flex-1 grow">
//         <p className="w-full h-[calc(100dvh_-_150px)] overflow-y-scroll grow">
//           Surveillance SA is a cutting-edge security technology company based in
//           Mossel Bay, South Africa. As certified Dahua Technology partners, we
//           specialize in intelligent CCTV systems and proactive surveillance
//           solutions that go far beyond traditional security.
//           <br />
//           <br />
//           We’re trusted by homeowners, businesses, estates, and retail centers
//           for one reason: we don’t just watch — we predict, alert, and respond
//           in real time.
//           <br />
//           <br />
//           At Surveillance SA, we believe that real security means being present
//           in every moment. Our systems use advanced AI to detect and deter
//           threats before they escalate, offering tailored solutions built for
//           the unique challenges of the South African environment. From smart
//           human and vehicle detection to license plate recognition and system
//           health monitoring, every detail is designed to protect people,
//           property, and peace of mind.
//           <br />
//           <br />
//           Whether it’s preventing crime before it happens, responding instantly
//           during an incident, or retrieving crystal-clear evidence after the
//           fact — Surveillance SA delivers intelligent protection, 24/7.
//           <br />
//           <br />
//           Surveillance SA — Security that sees what matters, before it happens.
//         </p>
//       </div>
//     </div>
//   );
// };
//
// export default About;
