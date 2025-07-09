import CamerasOnPoleIcon from "../../../ui_components/icons/CamerasOnPoleIcon";

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
                Surveillance and System Health Monitoring
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
                <CamerasOnPoleIcon className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  REDUNDANT FOOTAGE BACKUP
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <CamerasOnPoleIcon className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  LIVE SYSTEM HEALTH MONITORING
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <CamerasOnPoleIcon className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">
                  LESS DOWNTIME GUARANTEE
                </h3>
              </div>
              <div className="flex w-full flex-row justify-start items-center gap-4">
                <CamerasOnPoleIcon className="w-[48px] h-[48px]" />
                <h3 className="text-xl font-semibold">TRUE PEACE OF MIND</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-200/20 backdrop-blur-xs">
          <div className="w-[90%] landscape:w-full h-0.5 ml-[5%] landscape:ml-0 bg-cyber_teal"></div>
        </div>
      </div>
    </>
  );
};

export default Services;
