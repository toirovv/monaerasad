import useSimulatedLoading from "../hooks/useSimulatedLoading";
import ContactSkeleton from "../components/skeletons/ContactSkeleton";
import AmbientBackground from "../components/ui/AmbientBackground";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  const loading = useSimulatedLoading(800);

  if (loading) return <ContactSkeleton />;

  return (
    <div className="font-body relative">
      <AmbientBackground />
      <ContactHero />
      <ContactInfo />
    </div>
  );
};

export default Contact;
