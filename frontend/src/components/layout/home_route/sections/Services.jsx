import CamerasOnPoleIcon from "../../../ui_components/icons/CamerasOnPoleIcon";
import Service1Icon1 from "../../../ui_components/home_route/services/icons/Service1Icon1";
import Service1Icon2 from "../../../ui_components/home_route/services/icons/Service1Icon2";
import Service1Icon3 from "../../../ui_components/home_route/services/icons/Service1Icon3";
import Service1Icon4 from "../../../ui_components/home_route/services/icons/Service1Icon4";
import Service2Icon1 from "../../../ui_components/home_route/services/icons/Service2Icon1";
import Service2Icon2 from "../../../ui_components/home_route/services/icons/Service2Icon2";
import Service2Icon3 from "../../../ui_components/home_route/services/icons/Service2Icon3";
import Service2Icon4 from "../../../ui_components/home_route/services/icons/Service2Icon4";
import Service3Icon1 from "../../../ui_components/home_route/services/icons/Service3Icon1";
import Service3Icon2 from "../../../ui_components/home_route/services/icons/Service3Icon2";
import Service3Icon3 from "../../../ui_components/home_route/services/icons/Service3Icon3";
import Service3Icon4 from "../../../ui_components/home_route/services/icons/Service3Icon4";
import Service4Icon1 from "../../../ui_components/home_route/services/icons/Service4Icon1";
import Service4Icon2 from "../../../ui_components/home_route/services/icons/Service4Icon2";
import Service4Icon3 from "../../../ui_components/home_route/services/icons/Service4Icon3";
import Service4Icon4 from "../../../ui_components/home_route/services/icons/Service4Icon4";

const Services = () => {
  return (
    <>
      <div className="flex flex-col">
        <div
          id="service_1"
          className="w-full h-[calc(100dvh_-_64px)] bg-base-200/20 backdrop-blur-xs landscape:bg-[url('/services/desktop/service1ll.png')] dark:landscape:bg-[url('/services/desktop/service1ld.png')] bg-cover bg-center bg-no-repeat flex justify-center"
        >
          <div className="w-[80%] flex flex-col justify-evenly">
            <div className="flex flex-col items-center landscape:items-start justify-center gap-4">
              <h2 className="text-cyber_teal landscape:text-base-content landscape:dark:text-cyber_teal font-bold text-4xl md:text-5xl text-center landscape:text-left leading-tight">
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  [{" "}
                </span>
                SURVEILLANCE AND SYSTEM HEALTH MONITORING
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  {" "}
                  ]
                </span>
              </h2>
              <p className="text-md landscape:max-w-[70%] text-center landscape:text-left leading-tight tracking-wide">
                We provide uninterrupted protection and peace of mind. Ensuring
                that even if the camera is stolen, damaged or loses connection,
                your footage is always safe and your system is always under
                watch.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service1Icon1 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  REDUNDANT FOOTAGE BACKUP
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service1Icon2 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  LIVE SYSTEM HEALTH MONITORING
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service1Icon3 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  LESS DOWNTIME GUARANTEE
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service1Icon4 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">TRUE PEACE OF MIND</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-200/20 backdrop-blur-xs">
          <div className="w-[90%] landscape:w-full h-0.5 ml-[5%] landscape:ml-0 bg-cyber_teal"></div>
        </div>

        <div
          id="service_2"
          className="w-full h-[calc(100dvh_-_64px)] bg-base-200/20 backdrop-blur-xs landscape:bg-[url('/services/desktop/service2ll.png')] dark:landscape:bg-[url('/services/desktop/service2ld.png')] bg-cover bg-center bg-no-repeat flex justify-center"
        >
          <div className="w-[80%] flex flex-col justify-evenly">
            <div className="flex flex-col items-center landscape:items-start justify-center gap-4">
              <h2 className="text-cyber_teal landscape:text-base-content landscape:dark:text-cyber_teal font-bold text-4xl md:text-5xl text-center landscape:text-left leading-tight">
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  [{" "}
                </span>
                FACIAL RECOGNITION WITH ALERT{" "}
                <br className="hidden landscape:block" />
                TAGGING
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  {" "}
                  ]
                </span>
              </h2>
              <p className="text-md landscape:max-w-[50%] text-center landscape:text-left leading-tight tracking-wide">
                Enhance your security with intelligent facial recognition
                technology that doesn't just detect - it identifies. Our
                advanced Facial recognition with Alert Tagging Services allows
                your CCTV system to automatically recognize and match faces
                captured on camera with pre-stored profiles, such as residents,
                staff or even blacklisted individuals.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service2Icon1 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  AUTOMATIC IDENTIFICATION
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service2Icon2 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">REAL-TIME ALERTS</h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service2Icon3 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">SMART SEARCH AND TAG</h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service2Icon4 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  IMPROVED ACCESS CONTROL
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-200/20 backdrop-blur-xs">
          <div className="w-[90%] landscape:w-full h-0.5 ml-[5%] landscape:ml-0 bg-cyber_teal"></div>
        </div>

        <div
          id="service_3"
          className="w-full h-[calc(100dvh_-_64px)] bg-base-200/20 backdrop-blur-xs landscape:bg-[url('/services/desktop/service3ll.png')] dark:landscape:bg-[url('/services/desktop/service3ld.png')] bg-cover bg-center bg-no-repeat flex justify-center"
        >
          <div className="w-[80%] flex flex-col justify-evenly">
            <div className="flex flex-col items-center landscape:items-start justify-center gap-4">
              <h2 className="text-cyber_teal landscape:text-base-content landscape:dark:text-cyber_teal font-bold text-4xl md:text-5xl text-center landscape:text-left leading-tight">
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  [{" "}
                </span>
                LICENSE PLATE RECOGNITION (LPR)
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  {" "}
                  ]
                </span>
              </h2>
              <p className="text-md landscape:max-w-[70%] text-center landscape:text-left leading-tight tracking-wide">
                Monitor, capture and find vehicle activity with ease. Our
                License Plate Recognition (LRP) system is designed to
                automatically capture and record license plates as vehicles
                enter or exits your premises. Every plate is stored with time,
                date and camera location - making it easy to search and review
                past activity.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service3Icon1 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">HIGH-ACCURACY CAPTURE</h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service3Icon2 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">SEARCHABLE HISTORY</h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service3Icon3 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">EVENT LOGS</h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service3Icon4 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">SMART ALERTS</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-200/20 backdrop-blur-xs">
          <div className="w-[90%] landscape:w-full h-0.5 ml-[5%] landscape:ml-0 bg-cyber_teal"></div>
        </div>

        <div
          id="service_4"
          className="w-full h-[calc(100dvh_-_64px)] bg-base-200/20 backdrop-blur-xs landscape:bg-[url('/services/desktop/service4ll.png')] dark:landscape:bg-[url('/services/desktop/service4ld.png')] bg-cover bg-center bg-no-repeat flex justify-center"
        >
          <div className="w-[80%] flex flex-col justify-evenly">
            <div className="flex flex-col items-center landscape:items-start justify-center gap-4">
              <h2 className="text-cyber_teal landscape:text-base-content landscape:dark:text-cyber_teal font-bold text-4xl md:text-5xl text-center landscape:text-left leading-tight">
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  [{" "}
                </span>
                PERIMETER CONTROL
                <span className="text-base-content landscape:text-cyber_teal landscape:dark:text-base-content">
                  {" "}
                  ]
                </span>
              </h2>
              <p className="text-md landscape:max-w-[70%] text-center landscape:text-left leading-tight tracking-wide">
                Perimeter control is your first line of defence - and we make
                sure it's a strong one. Our Perimeter Control solutions are
                designed to monitor and secure the outer boundaries of your
                property using intelligent surveillance technology. Whether it's
                fencing, walls or access points, we combine high-resolution
                cameras, motion detection, infrared sensors and AI driven
                analytics to detect threats before the reach your doorstep.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service4Icon1 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  EARLY THREAT DETECTION
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service4Icon2 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  CUSTOM ZONES AND RULES
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service4Icon3 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">SMART VIDEO ANALYTICS</h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <Service4Icon4 className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  REAL TIME INTRUSION ALERTS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
