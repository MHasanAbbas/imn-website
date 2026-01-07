import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import HowWeWork from "@/components/sections/HowWeWork";
import HowWeChange from "@/components/sections/HowWeChange";
import Team from "@/components/sections/Team";
import Plans from "@/components/sections/Plans";
import MissionStatement from "@/components/sections/MissionStatement";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <HowWeWork />
      <HowWeChange />
      <Team />
      <Plans />
      <MissionStatement />
      <Contact />
      <Footer />
    </main>
  );
}
