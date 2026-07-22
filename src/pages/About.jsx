import FontStyles from "../components/ui/FontStyles";
import AmbientBackground from "../components/ui/AmbientBackground";
import RouteDivider from "../components/ui/RouteDivider";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutGallery from "../components/about/AboutGallery";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutCTA from "../components/about/AboutCTA";
import AboutSkeleton from "../components/skeletons/AboutSkeleton";
import useSimulatedLoading from "../hooks/useSimulatedLoading";

const About = () => {
  const loading = useSimulatedLoading(1200);

  if (loading) return <AboutSkeleton />;

  return (
    <div className="font-body relative">
      <FontStyles />
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
