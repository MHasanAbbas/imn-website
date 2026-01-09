"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "work", label: "Work" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const brandOrange = "#F04D24";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("top");

  useEffect(() => {
    const updateActiveSection = () => {
      const targetLine = window.innerHeight * 0.35; // roughly 1/3 down the viewport
      let current = "top";

      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= targetLine && rect.bottom >= targetLine) {
          current = id;
          break;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) current = "contact";

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-imn-black/90 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <Image
            src="/brand/Lockup-Hero.png"
            alt="Inclusive Media Network"
            width={170}
            height={48}
            priority
          />
        </a>

        <div className="flex items-center gap-4 text-sm">
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex h-9 items-center rounded-full px-3 leading-none transition-colors ${
                  isActive ? "text-[#F04D24] font-semibold" : "text-white/80"
                } hover:text-[#F04D24] focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none`}
                style={isActive ? { color: brandOrange } : undefined}
              >
                {label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
