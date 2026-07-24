import AmbientBackground from "../components/ui/AmbientBackground";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="font-body relative">
      <AmbientBackground />
      <ContactHero />
      <ContactInfo />
    </div>
  );
};

export default Contact;
