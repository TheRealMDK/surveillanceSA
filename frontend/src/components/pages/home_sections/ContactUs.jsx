import ContactForm from "../../ui_components/ContactForm";
import Map from "../../ui_components/Map";

const ContactUs = () => {
  return (
    <>
      <div className="w-[80vw] h-auto flex landscape:flex-row portrait:flex-col portrait:py-8 gap-16">
        <div className="flex-1 bg-base-200">
          <ContactForm />
        </div>
        <div className="flex-1">
          <Map />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
