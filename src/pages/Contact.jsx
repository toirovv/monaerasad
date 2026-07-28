import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useSimulatedLoading from "../hooks/useSimulatedLoading";
import ContactSkeleton from "../components/skeletons/ContactSkeleton";
import AmbientBackground from "../components/ui/AmbientBackground";
import GsapReveal from "../components/ui/GsapReveal";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  const loading = useSimulatedLoading(800);
  const pageRef = useRef(null);

  useEffect(() => {
    if (!loading && pageRef.current) {
      gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' })
    }
  }, [loading])

  if (loading) return <ContactSkeleton />;

  return (
    <div ref={pageRef} className="font-body relative">
      <AmbientBackground />
      <GsapReveal animation="fadeUp"><ContactHero /></GsapReveal>
      <GsapReveal animation="fadeUp"><ContactInfo /></GsapReveal>
    </div>
  );
};

export default Contact;