import useSimulatedLoading from "../hooks/useSimulatedLoading";
import AboutSkeleton from "../components/skeletons/AboutSkeleton";
import AmbientBackground from "../components/ui/AmbientBackground";
import RouteDivider from "../components/ui/RouteDivider";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutGallery from "../components/about/AboutGallery";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  const loading = useSimulatedLoading(800);

  if (loading) return <AboutSkeleton />;

  return (
    <div className="font-body relative">
      <AmbientBackground />
      <AboutHero />
      <AboutStory />
      <RouteDivider />
      <AboutValues />
      <RouteDivider />
      <AboutGallery />
      <RouteDivider />
      <AboutTimeline />
      <AboutCTA />
    </div>
  );
};

export default About;
