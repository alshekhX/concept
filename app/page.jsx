import Navbar from "@/components/Navbar";
import HomeHero from "@/components/homepage/HomeHero";
import WhoUs from "@/components/homepage/WhoUs";
import ServicesSection from "@/components/homepage/ServicesSection";
import ProjectSection from "@/components/homepage/ProjectsSection";
import StatisticSection from "@/components/homepage/StatisticSection";
export default function Home() {
  return (
    <div>
      <HomeHero/>
      <WhoUs/>
      <ServicesSection/>     
      <ProjectSection/>
      <StatisticSection/>
      
    </div>
  );
}
