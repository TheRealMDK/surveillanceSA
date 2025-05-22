const Map = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[475px] portrait:h-full w-full flex-1 dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800 card overflow-hidden shrink-0 shadow-md">
        <iframe
          class="h-full w-full"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/search?q=Baytrack%20Die%20Voorbaai&key=AIzaSyD5uUkbBkGI6DDrqlJXlV1Ka84BtdRw1m8"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
