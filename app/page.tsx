import Hero from "@/components/HomeHero/Hero";
import ServicesAbout from "@/components/OurServicesSection/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" font-sans dark:bg-white">
      <Hero />
      <ServicesAbout />
    </main>
  );
}
