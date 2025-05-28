const Map = () => {
  return (
    <>
      <div className="h-[calc(100dvh_-_150px)] w-full flex justify-center items-center dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800 card overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.12430118308!2d22.09883857633288!3d-34.14316187312296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd669c41ae81f9f%3A0x2eeec477d86d5748!2sSurveillane%20SA!5e0!3m2!1sen!2sza!4v1748350661436!5m2!1sen!2sza"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
