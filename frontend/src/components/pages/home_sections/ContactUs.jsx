import ContactForm from "../../ui_components/ContactForm";
import Map from "../../ui_components/Map";

const ContactUs = () => {
  return (
    <>
      <div className="h-[calc(100dvh_-_150px)] w-[80vw] flex justify-center items-center">
        <div className="flex landscpae:flex-row portrait:flex-col justify-between w-full h-full items-center gap-16">
          <ContactForm />
          <Map />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
