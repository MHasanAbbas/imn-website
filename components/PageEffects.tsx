"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    const sectionTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate=section]"),
    );
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal=true]"),
    );

    if (sectionTargets.length === 0 && revealTargets.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      sectionTargets.forEach((target) => target.classList.add("is-visible"));
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -16% 0px",
        threshold: 0.08,
      },
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const once = target.dataset.revealOnce !== "false";

          if (entry.isIntersecting) {
            target.classList.add("is-visible");
            if (once) {
              revealObserver.unobserve(target);
            }
          } else if (!once) {
            target.classList.remove("is-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    sectionTargets.forEach((target) => sectionObserver.observe(target));
    revealTargets.forEach((target) => revealObserver.observe(target));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
