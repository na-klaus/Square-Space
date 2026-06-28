/* =============================================================
   scroll.js — Lenis smooth scroll bridged to GSAP ScrollTrigger
   Exposes window.ssLenis. Degrades to native scroll gracefully.
   ============================================================= */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasLenis = typeof window.Lenis !== "undefined";
  const hasGSAP = typeof window.gsap !== "undefined";

  if (reduce || !hasLenis) {
    // Still wire ScrollTrigger to native scroll if present
    if (hasGSAP && window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
    window.ssLenis = null;
    return;
  }

  const lenis = new window.Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });
  window.ssLenis = lenis;

  if (hasGSAP && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    lenis.on("scroll", window.ScrollTrigger.update);
    window.gsap.ticker.add((time) => lenis.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
  } else {
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  // Anchor links → smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.3 });
    });
  });

  // Pause Lenis when mobile menu open
  window.addEventListener("ss:menu", (e) => {
    if (e.detail && e.detail.open) lenis.stop(); else lenis.start();
  });
})();
