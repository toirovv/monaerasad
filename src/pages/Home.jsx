import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import HomeSkeleton from "../components/skeletons/HomeSkeleton";
import AmbientBackground from "../components/ui/AmbientBackground";
import RouteDivider from "../components/ui/RouteDivider";
import GsapReveal from "../components/ui/GsapReveal";
import Banner from "../components/home/Banner";
import Stats from "../components/home/Stats";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Engineering from "../components/home/Engineering";
import Features from "../components/home/Features";
import Locations from "../components/home/Locations";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

let _homeLoaded = false;

const Home = () => {
  const [loading, setLoading] = useState(!_homeLoaded);
  const pageRef = useRef(null);

  useEffect(() => {
    if (_homeLoaded) return;
    _homeLoaded = true;
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && pageRef.current) {
      gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' })
    }
  }, [loading])

  if (loading) return <HomeSkeleton />;

  return (
    <div ref={pageRef} className="font-body relative">
      <AmbientBackground />
      <GsapReveal animation="fadeUp" duration={0.8}><Banner /></GsapReveal>
      <GsapReveal animation="fadeUp"><Stats /></GsapReveal>
      <GsapReveal animation="fadeUp" staggerItems><FeaturedProducts /></GsapReveal>
      <RouteDivider />
      <GsapReveal animation="fadeUp"><Features /></GsapReveal>
      <RouteDivider />
      <GsapReveal animation="fadeUp"><Locations /></GsapReveal>
      <RouteDivider />
      <GsapReveal animation="fadeUp"><Engineering /></GsapReveal>
      <RouteDivider />
      <GsapReveal animation="fadeUp"><Testimonials /></GsapReveal>
      <GsapReveal animation="fadeUp"><CTA /></GsapReveal>
    </div>
  );
};

export default Home;