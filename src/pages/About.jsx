import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useSimulatedLoading from "../hooks/useSimulatedLoading";
import AboutSkeleton from "../components/skeletons/AboutSkeleton";
import AmbientBackground from "../components/ui/AmbientBackground";
import RouteDivider from "../components/ui/RouteDivider";
import GsapReveal from "../components/ui/GsapReveal";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutGallery from "../components/about/AboutGallery";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  const loading = useSimulatedLoading(800);
  const pageRef = useRef(null);

  useEffect(() => {
    if (!loading && pageRef.current) {
      gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' })
    }
  }, [loading])

  if (loading) return <AboutSkeleton />;

  return (
    <div ref={pageRef} className="font-body relative">
      <AmbientBackground />
      <GsapReveal animation="fadeUp"><AboutHero /></GsapReveal>
      <GsapReveal animation="fadeUp"><AboutStory /></GsapReveal>
      <RouteDivider />
      <GsapReveal animation="fadeUp" staggerItems><AboutValues /></GsapReveal>
      <RouteDivider />
      <GsapReveal animation="fadeUp"><AboutGallery /></GsapReveal>
      <RouteDivider />
      <GsapReveal animation="fadeUp"><AboutTimeline /></GsapReveal>
      <GsapReveal animation="fadeUp"><AboutCTA /></GsapReveal>
    </div>
  );
};

export default About;