import ContactForm from "../../../ui_components/home_route/contact_us/ContactForm";
import Map from "../../../ui_components/home_route/contact_us/ContactMap";

const ContactUs = () => {
  return (
    <>
      <div className="w-[calc(100%_-_2rem)] md:w-[80vw] h-auto flex md:flex-row portrait:flex-col portrait:py-8 gap-16">
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
