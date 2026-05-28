import CTA from "@/components/CTA/CTA";
import Hero from "@/components/HomeHero/Hero";
import ServicesAbout from "@/components/OurServicesSection/Services";
import RecentProjects from "@/components/ProjectSection/RecentProjects";
import Testimonials from "@/components/TestimonialsSection/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" font-sans dark:bg-white">
      <Hero />
      <ServicesAbout />
      <RecentProjects />
      <Testimonials />
      <CTA />
    </main>
  );
}
