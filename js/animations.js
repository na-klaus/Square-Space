/* =============================================================
   animations.js - GSAP + ScrollTrigger + SplitType choreography
   Hero intro, split-text reveals, parallax, counters, marquee,
   image-follow reveals for services and projects.
   Everything degrades when libs or motion are unavailable.
   ============================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  var hasGSAP = typeof gsap !== "undefined";
  var hasSplit = typeof window.SplitType !== "undefined";

  /* Fallback: no GSAP or reduced motion -> reveal via IntersectionObserver */
  if (!hasGSAP || reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-inview"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
    document.querySelectorAll("[data-split]").forEach(function (el) { el.classList.add("is-inview"); });
    document.querySelectorAll(".hero__title .row span").forEach(function (s) { s.style.transform = "none"; });
    fallbackCounters();
    return;
  }

  if (ST) gsap.registerPlugin(ST);

  /* SPLIT TEXT - wrap lines in overflow-hidden masks */
  function makeSplit(el, type) {
    if (!hasSplit) return null;
    var s = new window.SplitType(el, { types: type || "lines", lineClass: "split-line-i", wordClass: "split-word-i" });
    if (s.lines) {
      s.lines.forEach(function (ln) {
        var wrap = document.createElement("span");
        wrap.className = "split-line";
        ln.parentNode.insertBefore(wrap, ln);
        wrap.appendChild(ln);
        ln.classList.add("line-inner");
      });
    }
    return s;
  }

  /* HERO INTRO - after loader fires ss:loaded */
  var heroDone = false;
  function heroIntro() {
    if (heroDone) return;
    heroDone = true;
    var hero = document.querySelector("[data-hero]");
    if (!hero) return;
    var titleLines = hero.querySelectorAll(".hero__title .row span");
    gsap.set(titleLines, { yPercent: 115 });
    var tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.to(titleLines, { yPercent: 0, duration: 1.25, stagger: 0.09 }, 0.1)
      .from(hero.querySelectorAll("[data-hero-fade]"), { y: 30, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.8")
      .from(hero.querySelector(".hero__scroll"), { opacity: 0, duration: 1 }, "-=0.5");
    runCounters(hero);
  }

  /* SCROLL REVEALS */
  function scrollReveals() {
    document.querySelectorAll("[data-split]").forEach(function (el) {
      var s = makeSplit(el, el.getAttribute("data-split") || "lines");
      var targets = s && s.lines ? el.querySelectorAll(".line-inner") : [el];
      gsap.set(targets, { yPercent: 110 });
      gsap.to(targets, {
        yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.08,
        scrollTrigger: { trigger: el, start: "top 85%", once: true }
      });
    });

    gsap.utils.toArray("[data-reveal]").forEach(function (el) {
      var kind = el.getAttribute("data-reveal");
      var delay = parseFloat(el.getAttribute("data-delay")) || 0;
      var hidden = {};
      var shown = { duration: 1.1, ease: "power3.out", delay: delay };
      if (kind === "up") { hidden = { y: 50, opacity: 0 }; shown.y = 0; shown.opacity = 1; }
      else if (kind === "fade") { hidden = { opacity: 0 }; shown.opacity = 1; }
      else if (kind === "clip") { hidden = { clipPath: "inset(0 0 100% 0)" }; shown.clipPath = "inset(0 0 0% 0)"; shown.duration = 1.3; shown.ease = "expo.out"; }
      else if (kind === "scale") { hidden = { scale: 1.12, opacity: 0 }; shown.scale = 1; shown.opacity = 1; }
      gsap.set(el, hidden);
      shown.scrollTrigger = { trigger: el, start: "top 88%", once: true };
      gsap.to(el, shown);
    });
  }

  /* PARALLAX */
  function parallax() {
    gsap.utils.toArray("[data-parallax]").forEach(function (el) {
      var amt = parseFloat(el.getAttribute("data-parallax")) || 0.15;
      gsap.to(el, {
        yPercent: amt * 100, ease: "none",
        scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true }
      });
    });
    var hb = document.querySelector(".hero__grad");
    if (hb) gsap.to(hb, { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    var ht = document.querySelector(".hero__title");
    if (ht) gsap.to(ht, { yPercent: -22, opacity: 0.25, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  }

  /* MARQUEE */
  function marquees() {
    gsap.utils.toArray(".marquee__track").forEach(function (track) {
      var dir = track.classList.contains("rev") ? 1 : -1;
      var loop = gsap.to(track, { xPercent: dir * -50, repeat: -1, duration: 22, ease: "none" });
      if (ST) {
        ST.create({
          trigger: track, start: "top bottom", end: "bottom top",
          onUpdate: function (self) { loop.timeScale(1 + Math.min(Math.abs(self.getVelocity()) / 1200, 4) * self.direction); },
          onLeave: function () { loop.timeScale(1); },
          onLeaveBack: function () { loop.timeScale(1); }
        });
      }
    });
  }

  /* COUNTERS */
  function formatCount(value, dec, pad) {
    var s = value.toFixed(dec);
    var parts = s.split(".");
    return parts[0].padStart(pad, "0") + (parts[1] ? "." + parts[1] : "");
  }
  function runCounters(scope) {
    (scope || document).querySelectorAll("[data-count]").forEach(function (el) {
      var raw = el.getAttribute("data-count");
      var end = parseFloat(raw);
      var dec = (raw.split(".")[1] || "").length;
      var pad = (raw.split(".")[0] || "").length;
      var obj = { v: 0 };
      gsap.to(obj, {
        v: end, duration: 1.8, ease: "power2.out",
        onUpdate: function () { el.textContent = formatCount(obj.v, dec, pad); },
        scrollTrigger: { trigger: el, start: "top 92%", once: true }
      });
    });
  }
  function fallbackCounters() {
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var raw = el.getAttribute("data-count");
      var end = parseFloat(raw);
      var dec = (raw.split(".")[1] || "").length;
      var pad = (raw.split(".")[0] || "").length;
      el.textContent = formatCount(end, dec, pad);
    });
  }

  /* IMAGE-FOLLOW REVEALS (services + projects) */
  function followReveals() {
    if (!window.matchMedia("(hover: hover)").matches) return;
    document.querySelectorAll("[data-follow-group]").forEach(function (group) {
      var frame = group.querySelector("[data-follow-frame]");
      if (!frame) return;
      var items = group.querySelectorAll("[data-follow-item]");
      var raf = null, tx = 0, ty = 0, cx = 0, cy = 0;
      function move() {
        cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
        frame.style.transform = "translate(" + cx + "px, " + cy + "px) translate(-50%,-50%)";
        raf = requestAnimationFrame(move);
      }
      group.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; });
      var imgEl = frame.querySelector("[data-follow-img-el]");
      items.forEach(function (it) {
        var label = it.getAttribute("data-follow-label") || "";
        var tone = it.getAttribute("data-follow-tone") || "#c39a63";
        var imgSrc = it.getAttribute("data-follow-img") || "";
        it.addEventListener("mouseenter", function () {
          frame.style.background = tone;
          if (imgEl) imgEl.style.display = imgSrc ? "block" : "none";
          if (imgEl && imgSrc && imgEl.getAttribute("src") !== imgSrc) imgEl.setAttribute("src", imgSrc);
          var cap = frame.querySelector("span"); if (cap) cap.textContent = label;
          gsap.to(frame, { opacity: 1, duration: 0.4, ease: "power2.out" });
          if (!raf) raf = requestAnimationFrame(move);
        });
        it.addEventListener("mouseleave", function () { gsap.to(frame, { opacity: 0, duration: 0.35 }); });
      });
      group.addEventListener("mouseleave", function () { if (raf) cancelAnimationFrame(raf); raf = null; });
    });
  }

  /* BOOT */
  function boot() {
    scrollReveals();
    parallax();
    marquees();
    runCounters(document);
    followReveals();
    if (ST) ST.refresh();
  }

  window.addEventListener("ss:loaded", heroIntro, { once: true });
  if (document.documentElement.classList.contains("is-loaded")) heroIntro();
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
  window.addEventListener("load", function () { if (ST) ST.refresh(); });
  setTimeout(function () { if (!heroDone) heroIntro(); }, 4600);
})();
