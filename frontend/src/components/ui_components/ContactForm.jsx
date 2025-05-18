import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import logo from "../../assets/ssa_logo.png";

const ContactForm = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;

  const location = useLocation();
  const {
    productId,
    productTitle,
    // productDiscription,
    productImage,
    // productPrice,
    // productCategory,
  } = location.state || {};

  const [subject, setSubject] = useState("");

  useEffect(() => {
    setSubject(`${productTitle} - ${productId}-${formattedDate}`);
  }, [productId, productTitle, formattedDate]);

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content gap-4 lg:gap-8 flex-col lg:flex-row m-4 flex">
        {location.state ? (
          <>
            <div className="card h-[475px] bg-base-200 w-full shrink-0 shadow-md dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800 basis-1/2 justify-center flex items-center">
              <div className="card-body w-full flex flex-col justify-center items-center">
                <fieldset className="fieldset flex flex-col gap-6 w-full">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="floating-label basis-1/2">
                      <input
                        type="text"
                        className="input rounded-2xl w-full"
                        placeholder="Full Name"
                      />
                      <span>Full Name</span>
                    </label>

                    <label className="floating-label basis-1/2">
                      <input
                        type="tel"
                        className="input rounded-2xl w-full"
                        placeholder="Contact Number"
                      />
                      <span>Contact Number</span>
                    </label>
                  </div>

                  <label className="floating-label">
                    <input
                      type="email"
                      className="input rounded-2xl w-full"
                      placeholder="Email Address"
                    />
                    <span>Email Address</span>
                  </label>

                  <label className="floating-label">
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      name="Subject"
                      type="text"
                      className="input rounded-2xl w-full"
                      placeholder="Subject"
                      disabled
                    />
                    <span>Subject</span>
                  </label>

                  <label className="floating-label">
                    <textarea
                      className="textarea rounded-2xl w-full h-[150px] leading-relaxed"
                      placeholder="Message"
                    />
                    <span>Message</span>
                  </label>

                  <div className="flex justify-center items-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn rounded-2xl btn-wide btn-primary active:shadow-inner shadow-neutral-800 transition-all duration-300 ease-in-out shadow-md dark:shadow-sm dark:shadow-primary dark:active:shadow-inner dark:active:shadow-neutral-800 border-0 dark:border-1 border-primary"
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="lg:h-[475px] drop-shadow-2xl dark:drop-shadow-none drop-shadow-neutral-400 card overflow-hidden basis-1/2 border-0 dark:border-1 border-neutral-800 shrink-0">
              <img
                className="h-full w-full object-cover"
                src={productImage}
                alt={productTitle}
              />
            </div>
          </>
        ) : (
          <>
            <div className="card h-[475px] bg-base-200 w-full shrink-0 shadow-md dark:shadow-none shadow-neutral-400 border-0 dark:border-1 border-neutral-800 basis-1/2 justify-center flex items-center">
              <div className="card-body w-full flex flex-col justify-center items-center">
                <fieldset className="fieldset flex flex-col gap-6 w-full">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="floating-label basis-1/2">
                      <input
                        type="text"
                        className="input rounded-2xl w-full"
                        placeholder="Full Name"
                      />
                      <span>Full Name</span>
                    </label>

                    <label className="floating-label basis-1/2">
                      <input
                        type="tel"
                        className="input rounded-2xl w-full"
                        placeholder="Contact Number"
                      />
                      <span>Contact Number</span>
                    </label>
                  </div>

                  <label className="floating-label">
                    <input
                      type="email"
                      className="input rounded-2xl w-full"
                      placeholder="Email Address"
                    />
                    <span>Email Address</span>
                  </label>

                  <label className="floating-label">
                    <input
                      type="text"
                      className="input rounded-2xl w-full"
                      placeholder="Subject"
                    />
                    <span>Subject</span>
                  </label>

                  <label className="floating-label">
                    <textarea
                      className="textarea rounded-2xl w-full h-[150px] leading-relaxed"
                      placeholder="Message"
                    />
                    <span>Message</span>
                  </label>

                  <div className="flex justify-center items-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn rounded-2xl btn-wide btn-primary active:shadow-inner shadow-neutral-800 transition-all duration-300 ease-in-out shadow-md dark:shadow-sm dark:shadow-primary dark:active:shadow-inner dark:active:shadow-neutral-800 border-0 dark:border-1 border-primary"
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="flex justify-center items-center lg:h-[475px] w-full drop-shadow-2xl dark:drop-shadow-none drop-shadow-neutral-400 card overflow-hidden basis-1/2 border-0 shrink-0">
              <img
                className="object-contain h-full"
                src={logo}
                alt="company logo"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
