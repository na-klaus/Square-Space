/* =============================================================
   transitions.js — desktop UX polish layer (additive, optional)
   1) Scroll progress hairline (bronze → clay), inertial.
   2) Elegant exit-curtain page transition for internal links.
   Degrades gracefully; honors reduced motion. Touches no other module.
   The loader on the destination page covers the entry side, so the
   hand-off stays seamless without any cross-page coordination.
   ============================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var gsap = window.gsap;

  /* ---------------------------------------------------------- */
  /* 1. SCROLL PROGRESS — GPU transform only, eased             */
  /* ---------------------------------------------------------- */
  if (!reduce) {
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    var fill = document.createElement("span");
    bar.appendChild(fill);
    document.body.appendChild(bar);

    var cur = 0, tgt = 0, praf = null;
    function maxScroll() { return (document.documentElement.scrollHeight - window.innerHeight) || 1; }
    function loop() {
      cur += (tgt - cur) * 0.18;
      if (Math.abs(tgt - cur) < 0.0005) cur = tgt;
      fill.style.transform = "scaleX(" + cur.toFixed(4) + ")";
      praf = (cur === tgt) ? null : requestAnimationFrame(loop);
    }
    function update() {
      tgt = Math.min(1, Math.max(0, window.scrollY / maxScroll()));
      if (!praf) praf = requestAnimationFrame(loop);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------------------------------------------------------- */
  /* 2. PAGE TRANSITION — exit curtain wipe                      */
  /* ---------------------------------------------------------- */
  if (reduce) return; // keep navigation instant under reduced motion

  var curtain = document.querySelector(".curtain");
  if (!curtain) {
    curtain = document.createElement("div");
    curtain.className = "curtain";
    curtain.setAttribute("aria-hidden", "true");
    document.body.appendChild(curtain);
  }

  var navigating = false;

  function internalTarget(a) {
    var href = a.getAttribute("href");
    if (!href) return null;
    if (a.target && a.target !== "_self") return null;
    if (a.hasAttribute("download")) return null;
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) return null;
    var url;
    try { url = new URL(a.href, location.href); } catch (e) { return null; }
    if (url.origin !== location.origin) return null;
    if (url.pathname === location.pathname) return null; // same page (or in-page anchor)
    return url.href;
  }

  function navigate(url) {
    if (navigating) return;
    navigating = true;
    var done = function () { window.location.href = url; };
    curtain.classList.add("is-active");
    if (gsap) {
      gsap.set(curtain, { transformOrigin: "bottom center", scaleY: 0 });
      gsap.to(curtain, { scaleY: 1, duration: 0.5, ease: "expo.inOut", onComplete: done });
    } else {
      curtain.style.transformOrigin = "bottom center";
      curtain.style.transition = "transform .5s cubic-bezier(.7,0,.2,1)";
      curtain.style.transform = "scaleY(1)";
      setTimeout(done, 500);
    }
    setTimeout(done, 1200); // hard fallback so navigation never stalls
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var url = internalTarget(a);
    if (!url) return;
    e.preventDefault();
    navigate(url);
  });

  // Reset the curtain if the page is restored from the back/forward cache.
  window.addEventListener("pageshow", function (ev) {
    if (ev.persisted) {
      navigating = false;
      curtain.classList.remove("is-active");
      if (gsap) gsap.set(curtain, { scaleY: 0 }); else curtain.style.transform = "scaleY(0)";
    }
  });
})();
