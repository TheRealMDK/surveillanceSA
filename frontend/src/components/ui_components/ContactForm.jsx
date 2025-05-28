const ContactForm = () => {
  return (
    <>
      <div className="card w-full h-[calc(100dvh_-_150px)] bg-transparent shadow-md dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800 justify-center flex items-center">
        <div className="card-body flex flex-col justify-center items-center w-full">
          <fieldset className="fieldset flex grow flex-col gap-6 w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="floating-label basis-1/2">
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Full Name"
                />
                <span>Full Name</span>
              </label>

              <label className="floating-label basis-1/2">
                <input
                  type="tel"
                  className="input w-full"
                  placeholder="Contact Number"
                />
                <span>Contact Number</span>
              </label>
            </div>

            <label className="floating-label">
              <input
                type="email"
                className="input w-full"
                placeholder="Email Address"
              />
              <span>Email Address</span>
            </label>

            <label className="floating-label">
              <input
                type="text"
                className="input w-full"
                placeholder="Subject"
              />
              <span>Subject</span>
            </label>

            <label className="floating-label flex flex-col grow">
              <textarea
                className="textarea w-full grow resize-none leading-relaxed"
                placeholder="Message"
              />
              <span>Message</span>
            </label>

            <div className="flex justify-center items-center">
              <input
                type="submit"
                value="Submit"
                className="btn btn-wide btn-primary active:shadow-inner shadow-neutral-800 transition-all duration-300 ease-in-out shadow-md dark:shadow-sm dark:shadow-primary dark:active:shadow-inner dark:active:shadow-neutral-800 border-0 dark:border-1 border-primary"
              />
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
