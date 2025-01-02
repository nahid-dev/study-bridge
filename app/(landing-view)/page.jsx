import CompanyInfoSection from "./components/CompanyInfoSection";
import FeaturedCoursesSection from "./components/FeaturedCoursesSection";
import HeroSection from "./components/HeroSection";
import StudentsSaySection from "./components/StudentsSaySection";
import Subscription from "./components/Subscription";
import WhyStudySection from "./components/WhyStudySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyStudySection />
      <FeaturedCoursesSection />
      <StudentsSaySection />
      <Subscription />
      <CompanyInfoSection />
    </div>
  );
}
