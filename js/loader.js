/* =============================================================
   loader.js - fast, elegant preloader (~1.1-1.4s) + reveal handoff
   Dispatches "ss:loaded" when finished so animations can begin.
   ============================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var loader = document.querySelector("[data-loader]");
  var countEl = loader ? loader.querySelector(".loader__count") : null;
  var barEl = loader ? loader.querySelector(".loader__bar span") : null;

  function finish() {
    document.documentElement.classList.add("is-loaded");
    document.body.style.removeProperty("overflow");
    window.dispatchEvent(new CustomEvent("ss:loaded"));
  }

  if (!loader) { finish(); return; }
  document.body.style.overflow = "hidden";

  if (reduce) { loader.style.display = "none"; finish(); return; }

  var pct = 0;
  var hasGSAP = typeof window.gsap !== "undefined";
  var done = false;

  function tick() {
    var remaining = 100 - pct;
    pct += Math.max(2, Math.round(remaining * 0.18));
    if (pct >= 100) pct = 100;
    if (countEl) countEl.textContent = String(pct).padStart(3, "0");
    if (barEl) barEl.style.transform = "scaleX(" + pct / 100 + ")";
    if (pct < 100) setTimeout(tick, 24 + Math.random() * 16);
    else setTimeout(outro, 140);
  }

  function outro() {
    if (done) return;
    done = true;
    if (hasGSAP) {
      var tl = window.gsap.timeline({ onComplete: finish });
      tl.to(loader.querySelector(".loader__inner"), { y: -24, opacity: 0, duration: 0.4, ease: "power3.in" })
        .to(loader, { yPercent: -100, duration: 0.62, ease: "expo.inOut" }, "-=0.15")
        .set(loader, { display: "none" });
    } else {
      loader.style.transition = "transform .6s cubic-bezier(.7,0,.2,1), opacity .4s";
      loader.style.transform = "translateY(-100%)";
      setTimeout(function () { loader.style.display = "none"; finish(); }, 620);
    }
  }

  function start() { requestAnimationFrame(tick); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
  setTimeout(function () { if (!done) { pct = 100; if (countEl) countEl.textContent = "100"; outro(); } }, 1600);
})();
