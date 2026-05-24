import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import CommunityVisual from "@/components/sections/CommunityVisual";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import MissionStatement from "@/components/sections/MissionStatement";
import Services from "@/components/sections/Services";
import Communities from "@/components/sections/Communities";
import HowWeWork from "@/components/sections/HowWeWork";
import HowWeChange from "@/components/sections/HowWeChange";
import Plans from "@/components/sections/Plans";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import PageEffects from "@/components/PageEffects";

export default function Home() {
  return (
    <main>
      <PageEffects />
      <Navbar />
      <Hero />
      <CommunityVisual />
      <About />
      <Services />
      <VisionMission />
      <MissionStatement />
      <HowWeWork />
      <HowWeChange />
      <Plans />
      <Team />
      <Communities />
      <Contact />
      <Footer />
    </main>
  );
}
