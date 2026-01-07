# IMN Website Scaffolding Script (PowerShell)
# Run from project root:
# powershell -ExecutionPolicy Bypass -File .\setup-imn.ps1

$ErrorActionPreference = "Stop"

Write-Host "✅ Creating IMN folders..." -ForegroundColor Green

# Create folders
New-Item -ItemType Directory -Force -Path ".\components" | Out-Null
New-Item -ItemType Directory -Force -Path ".\components\sections" | Out-Null
New-Item -ItemType Directory -Force -Path ".\public\brand" | Out-Null

# -----------------------
# Navbar.tsx (uses logo)
# -----------------------
$navbar = @'
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-imn-black/90 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <Image
            src="/brand/Lockup-White.png"
            alt="Inclusive Media Network"
            width={170}
            height={48}
            priority
          />
        </a>

        <div className="flex gap-5 text-sm text-white/80">
          <a href="#about" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">About</a>
          <a href="#vision" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Vision</a>
          <a href="#work" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Work</a>
          <a href="#team" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Team</a>
          <a href="#contact" className="hover:text-imn-orange focus:outline-none focus:ring-2 focus:ring-imn-orange">Contact</a>
        </div>
      </nav>
    </header>
  );
}
'@

Set-Content -Encoding UTF8 ".\components\Navbar.tsx" $navbar

# -----------------------
# Footer.tsx (uses logo)
# -----------------------
$footer = @'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-imn-black text-imn-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Image
          src="/brand/Lockup-White.png"
          alt="Inclusive Media Network"
          width={170}
          height={48}
        />
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Inclusive Media Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
'@

Set-Content -Encoding UTF8 ".\components\Footer.tsx" $footer

# --------------------------------
# Section files (safe placeholders)
# --------------------------------
Write-Host "✅ Creating section components..." -ForegroundColor Green

$sections = @(
  @{ File="Hero";            Id="";        Bg="bg-imn-black text-imn-white";  Heading="Where brands meet multicultural Britain."; },
  @{ File="About";           Id="about";   Bg="bg-imn-grey text-imn-black";   Heading="About Our Business"; },
  @{ File="VisionMission";   Id="vision";  Bg="bg-imn-black text-imn-white";  Heading="Our Vision & Mission"; },
  @{ File="HowWeWork";       Id="work";    Bg="bg-imn-grey text-imn-black";   Heading="How We Work"; },
  @{ File="HowWeChange";     Id="";        Bg="bg-imn-black text-imn-white";  Heading="How We Change This Year"; },
  @{ File="Team";            Id="team";    Bg="bg-imn-grey text-imn-black";   Heading="Meet Our Team"; },
  @{ File="Plans";           Id="";        Bg="bg-imn-black text-imn-white";  Heading="Our Plans"; },
  @{ File="MissionStatement";Id="";        Bg="bg-imn-orange text-imn-black"; Heading="Mission Statement"; },
  @{ File="Contact";         Id="contact"; Bg="bg-imn-black text-imn-white";  Heading="Keep Connected With Us"; }
)

foreach ($s in $sections) {
  $idAttr = ""
  if ($s.Id -ne "") { $idAttr = " id=`"$($s.Id)`"" }

  # Choose paragraph color based on background text color
  $paraClass = "text-white/80"
  if ($s.Bg -like "*text-imn-black*") { $paraClass = "text-black/70" }

  $component = @"
export default function $($s.File)() {
  return (
    <section$idAttr className="$($s.Bg)">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="heading text-3xl md:text-4xl font-semibold">
          $($s.Heading)
        </h2>

        <p className="mt-5 max-w-3xl $paraClass">
          (Paste approved copy from Brand Book / voice instructions — do not invent text)
        </p>
      </div>
    </section>
  );
}
"@

  Set-Content -Encoding UTF8 ".\components\sections\$($s.File).tsx" $component
}

# -----------------------
# app/page.tsx assembly
# -----------------------
Write-Host "✅ Updating app/page.tsx..." -ForegroundColor Green

$page = @'
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
'@

Set-Content -Encoding UTF8 ".\app\page.tsx" $page

Write-Host ""
Write-Host "✅ DONE! IMN scaffolding created." -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1) Put your IMN logos into: public\brand\" -ForegroundColor Yellow
Write-Host "   - Lockup-White.png (required for navbar/footer)" -ForegroundColor Yellow
Write-Host "2) Paste approved copy from the Brand Book into each section file." -ForegroundColor Yellow
Write-Host "3) Run: npm run dev" -ForegroundColor Yellow
