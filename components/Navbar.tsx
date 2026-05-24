"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "vision", label: "Vision" },
  { id: "work", label: "Work" },
  { id: "plans", label: "Plans" },
  { id: "team", label: "Team" },
  { id: "communities", label: "Communities" },
  { id: "contact", label: "Contact" },
];

const brandOrange = "#F04D24";
const sectionToNav: Record<string, string> = {
  top: "top",
  about: "about",
  services: "services",
  vision: "vision",
  "mission-statement": "vision",
  work: "work",
  change: "work",
  plans: "plans",
  team: "team",
  communities: "communities",
  contact: "contact",
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("top");

  useEffect(() => {
    // Track visibility per section so multiple sections mapping to the same nav item
    // (e.g., work/change) don't overwrite each other.
    const visibility = new Map<string, number>(); // sectionId -> ratio

    const pickActive = () => {
      // Convert section visibility to nav visibility (max ratio for sections under a nav item).
      const navVisibility = new Map<string, number>();
      visibility.forEach((ratio, sectionId) => {
        const navId = sectionToNav[sectionId];
        if (!navId) return;
        const best = navVisibility.get(navId) ?? 0;
        navVisibility.set(navId, Math.max(best, ratio));
      });

      const sorted = Array.from(navVisibility.entries()).sort(
        (a, b) => b[1] - a[1]
      );

      let current = sorted.find(([, ratio]) => ratio > 0.01)?.[0] ?? "top";

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) current = "contact";

      setActiveSection(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (!sectionToNav[sectionId]) return;
          const nextRatio = entry.isIntersecting ? entry.intersectionRatio : 0;
          visibility.set(sectionId, nextRatio);
        });

        pickActive();
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1],
      }
    );

    Object.keys(sectionToNav).forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const target = sectionToNav[hash] ?? (hash || "top");
      setActiveSection(target);
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", setFromHash);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-imn-black/88 backdrop-blur-xl">
      <nav className="site-frame flex flex-wrap items-center justify-between gap-3 py-4 md:py-5">
        <a href="#top" className="flex items-center">
          <Image
            src="/brand/Lockup-Hero.png"
            alt="Inclusive Media Network"
            width={158}
            height={44}
            priority
          />
        </a>

        <div className="flex flex-wrap items-center justify-end gap-2.5 text-sm sm:gap-3 md:gap-4">
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link inline-flex h-9 items-center rounded-full px-3.5 text-[13px] leading-none transition-colors md:px-4 md:text-sm ${
                  isActive ? "text-[#F04D24] font-semibold is-active" : "text-white/90"
                } hover:text-[#F04D24] focus-visible:ring-0 focus-visible:shadow-none`}
                style={isActive ? { color: brandOrange } : undefined}
                onClick={() => setActiveSection(id)}
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
