import FeatureSection from "@/components/custom/home/feature";
import Footer from "@/components/custom/home/footer";
import HeroSection from "@/components/custom/home/hero-section";
import HowItWorks from "@/components/custom/home/how-it-works";
import UserJourneysSection from "@/components/custom/home/user-section";

export default function Homepage() {
  return (
    <div className="">
      <HeroSection />
      <UserJourneysSection />
      <FeatureSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}
