const Services = () => {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-[calc(100dvh_-_150px)] flex items-center justify-center">
        <div className="tabs tabs-lift w-full">
          <label className="tab has-[input:checked]:text-cyber_teal">
            <input className="" type="radio" name="my_tabs_4" defaultChecked />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 me-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Tab 1
          </label>
          <div className="tab-content h-[calc(100dvh_-_150px_-_40px)] bg-base-100 border-base-300 p-6 md:bg-[url('/services/desktop/service1ll.png')] dark:md:bg-[url('/services/desktop/service1ld.png')] bg-cover bg-center bg-no-repeat bg-clip-border">
            <div className="w-full h-[calc(100dvh_-_150px_-_40px)]  flex justify-center items-center">
              Tab content 1
            </div>
          </div>

          <label className="tab has-[input:checked]:text-cyber_teal">
            <input className="" type="radio" name="my_tabs_4" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 me-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Tab 2
          </label>

          <div className="tab-content h-[calc(100dvh_-_150px_-_40px)] bg-base-100 border-base-300 p-6 md:bg-[url('/services/desktop/service1ll.png')] dark:md:bg-[url('/services/desktop/service1ld.png')] bg-cover bg-center bg-no-repeat bg-clip-border">
            <div className="w-full h-[calc(100dvh_-_150px_-_40px)]  flex justify-center items-center">
              Tab content 2
            </div>
          </div>

          <label className="tab has-[input:checked]:text-cyber_teal">
            <input className="" type="radio" name="my_tabs_4" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 me-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Tab 3
          </label>

          <div className="tab-content h-[calc(100dvh_-_150px_-_40px)] bg-base-100 border-base-300 p-6 md:bg-[url('/services/desktop/service1ll.png')] dark:md:bg-[url('/services/desktop/service1ld.png')] bg-cover bg-center bg-no-repeat bg-clip-border">
            <div className="w-full h-[calc(100dvh_-_150px_-_40px)]  flex justify-center items-center">
              Tab content 3
            </div>
          </div>

          <label className="tab has-[input:checked]:text-cyber_teal">
            <input className="" type="radio" name="my_tabs_4" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 me-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Tab 4
          </label>

          <div className="tab-content h-[calc(100dvh_-_150px_-_40px)] bg-base-100 border-base-300 p-6 md:bg-[url('/services/desktop/service1ll.png')] dark:md:bg-[url('/services/desktop/service1ld.png')] bg-cover bg-center bg-no-repeat bg-clip-border">
            <div className="w-full h-[calc(100dvh_-_150px_-_40px)]  flex justify-center items-center">
              Tab content 4
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
