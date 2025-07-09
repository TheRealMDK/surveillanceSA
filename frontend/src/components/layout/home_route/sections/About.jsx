import CamerasOnPoleIcon from "../../../ui_components/icons/CamerasOnPoleIcon";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-[calc(100%_-_2rem)] landscape:w-[80vw] h-[calc(100dvh_-_150px)] flex landscape:flex-row flex-col gap-4 landscape:gap-0"
      >
        <div className="flex-1 flex justify-center items-center landscape:px-8 px-4">
          <div className="max-h-full w-full grow flex items-center justify-center">
            <p className="overflow-y-scroll scroll-smooth grow landscape:max-h-[calc(100dvh_-_150px)] max-h-[calc((100dvh_-_150px)_/_2)] leading-relaxed">
              <span className="text-cyber_teal font-semibold text-shadow-sm text-shadow-cyber_teal_tint">
                Surveillance SA{" "}
              </span>
              is a cutting-edge security technology company based in Mossel Bay,
              South-Africa. As certified Dahua Technology partners, we
              specialize in intelligent CCTV systems and proactive surveillance
              solutions that go far beyond traditional security. We're trusted
              by homeowners, businesses, estates and retail centers for one
              reaseon: we don't just watch - we predict, alert and respond in
              real time.
              <br />
              <br />
              At
              <span className="text-cyber_teal font-semibold text-shadow-sm text-shadow-cyber_teal_tint">
                {" "}
                Surveillance SA
              </span>
              , we believe that real security means being present in every
              moment. Our systems use advanced AI to detect and deter threats
              before they escalate, offering tailored solutions built for the
              unique challenges of the South-African environment. From smart
              humand and vehicle detection to license plate recognition and
              system health monitoring, every detail is designed to protect
              people, property and peace of mind.
              <br />
              <br />
              Whether it's preventing crime before it happens, responding
              instantly during an incident or retrieving crystal-clear evidence
              after the fact -
              <span className="text-cyber_teal font-semibold text-shadow-sm text-shadow-cyber_teal_tint">
                {" "}
                Surveillance SA{" "}
              </span>
              delivers intelligent protection, 24/7.
              <br />
              <br />
              <span className="text-cyber_teal font-semibold text-shadow-sm text-shadow-cyber_teal_tint">
                Surveillance SA{" "}
              </span>
              - Security that sees what matters, before it happens.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center landscape:px-8 px-4">
          <div className="h-full w-auto flex items-center justify-center">
            <CamerasOnPoleIcon className="w-auto h-full aspect-square" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
