import React from "react";
import useSimulatedLoading from "../hooks/useSimulatedLoading";
import HomeSkeleton from "../components/skeletons/HomeSkeleton";
import AmbientBackground from "../components/ui/AmbientBackground";
import RouteDivider from "../components/ui/RouteDivider";
import Banner from "../components/home/Banner";
import Stats from "../components/home/Stats";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Engineering from "../components/home/Engineering";
import Features from "../components/home/Features";
import Locations from "../components/home/Locations";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

const Home = () => {
  const loading = useSimulatedLoading(800);

  if (loading) return <HomeSkeleton />;

  return (
    <div className="font-body relative">
      <AmbientBackground />
      <Banner />
      <Stats />
      <FeaturedProducts />
      <RouteDivider />
      <Features />
      <RouteDivider />
      <Locations />
      <RouteDivider />
      <Engineering />
      <RouteDivider />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
