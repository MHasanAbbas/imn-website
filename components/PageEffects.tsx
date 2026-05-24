"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-animate=section], [data-reveal=true]",
      ),
    );

    if (targets.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            if (entry.target.getAttribute("data-reveal-once") !== "false") {
              observer.unobserve(entry.target);
            }
          } else if (entry.target.getAttribute("data-reveal-once") === "false") {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
