const Services = () => {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-[calc(100dvh_-_150px)] flex items-center justify-center">
        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 1"
          />
          <div className="tab-content min-h-[calc(100dvh_-_150px)] bg-base-100 border-base-300 p-6">
            <div className="flex justify-center items-center h-full">
              Tab content 1
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <div className="tab-content min-h-[calc(100dvh_-_150px)] bg-base-100 border-base-300 p-6">
            <div className="flex justify-center items-center h-full">
              Tab content 2
            </div>
          </div>
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Tab 3"
          />
          <div className="tab-content min-h-[calc(100dvh_-_150px)] bg-base-100 border-base-300 p-6">
            <div className="flex justify-center items-center h-full">
              Tab content 3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
