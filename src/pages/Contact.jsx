import FontStyles from "../components/ui/FontStyles";
import AmbientBackground from "../components/ui/AmbientBackground";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactSkeleton from "../components/skeletons/ContactSkeleton";
import useSimulatedLoading from "../hooks/useSimulatedLoading";

const Contact = () => {
  const loading = useSimulatedLoading(1000);

  if (loading) return <ContactSkeleton />;

  return (
    <div className="font-body relative">
      <FontStyles />
      <AmbientBackground />
      <ContactHero />
      <ContactInfo />
    </div>
  );
};

export default Contact;
