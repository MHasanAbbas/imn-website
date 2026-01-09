import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import HowWeWork from "@/components/sections/HowWeWork";
import HowWeChange from "@/components/sections/HowWeChange";
import Plans from "@/components/sections/Plans";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import PageEffects from "@/components/PageEffects";
import MissionStatement from "@/components/sections/MissionStatement";

export default function Home() {
  return (
    <main>
      <PageEffects />
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <MissionStatement />
      <HowWeWork />
      <HowWeChange />
      <Plans />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
