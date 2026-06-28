/* =============================================================
   interactive.js — desktop premium interaction layer
   - Footer auto-fit wordmark (bug fix, runs everywhere)
   - Blueprint grid backdrop (mouse parallax)
   - Square cursor swarm (Square Space motif)
   - Signature floating 3D monolith (scroll travel + mouse + inertia)
   - Image / panel mask reveals + card perspective tilt
   Self-injects its DOM so no per-page markup is required.
   Desktop-only heavy effects; gracefully inert otherwise.
   ============================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var gsap = window.gsap;
  var ST = window.ScrollTrigger;
  var hasGSAP = typeof gsap !== "undefined";
  var desktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches && window.innerWidth > 900;

  /* ---------------------------------------------------------- */
  /* FOOTER AUTO-FIT WORDMARK — bulletproof, never clips         */
  /* ---------------------------------------------------------- */
  function fitFooter() {
    var el = document.querySelector(".footer__giant");
    if (!el) return;
    var text = (el.getAttribute("data-word") || el.textContent || "SQUARE SPACE").trim();
    el.setAttribute("data-word", text);
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    var t = document.createElementNS(svgNS, "text");
    t.setAttribute("x", "0");
    t.setAttribute("y", "0");
    t.setAttribute("text-anchor", "start");
    t.setAttribute("dominant-baseline", "alphabetic");
    t.style.fontSize = "200px";
    t.textContent = text;
    svg.appendChild(t);
    el.textContent = "";
    el.appendChild(svg);
    // measure then lock a viewBox to the glyph bounds → scales to width, never clips
    var bb;
    try { bb = t.getBBox(); } catch (e) { bb = null; }
    if (bb && bb.width) {
      var padX = bb.height * 0.04;
      svg.setAttribute("viewBox", (bb.x - padX) + " " + bb.y + " " + (bb.width + padX * 2) + " " + bb.height);
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
      svg.setAttribute("width", "100%");
    } else {
      // fallback: plain text if SVG measuring unavailable
      el.textContent = text;
    }
  }
  // run after fonts settle so bbox is accurate
  if (document.readyState === "complete") fitFooter();
  else window.addEventListener("load", fitFooter);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitFooter);
  var fitRAF;
  window.addEventListener("resize", function () { /* viewBox scales automatically; no work needed */ });

  // Stop here for non-desktop / reduced motion — keep the page calm & fast
  if (reduce || !desktop) return;

  /* ---------------------------------------------------------- */
  /* DOM INJECTION                                              */
  /* ---------------------------------------------------------- */
  var grid = document.createElement("div");
  grid.className = "bp-grid";
  document.body.appendChild(grid);

  var sqLayer = document.createElement("div");
  sqLayer.className = "sq-cursor";
  document.body.appendChild(sqLayer);

  var stage = document.createElement("div");
  stage.className = "monolith-stage";
  stage.innerHTML =
    '<div class="monolith" data-monolith>' +
      '<div class="monolith__face f-front"></div>' +
      '<div class="monolith__face f-back"></div>' +
      '<div class="monolith__face f-right"></div>' +
      '<div class="monolith__face f-left"></div>' +
      '<div class="monolith__face f-top"></div>' +
      '<div class="monolith__face f-bottom"></div>' +
      '<div class="monolith__core"></div>' +
      '<span class="monolith__label">Square Space</span>' +
    '</div>';
  document.body.appendChild(stage);
  var mono = stage.querySelector("[data-monolith]");

  /* ---------------------------------------------------------- */
  /* POINTER STATE (shared, inertial)                           */
  /* ---------------------------------------------------------- */
  var vw = window.innerWidth, vh = window.innerHeight;
  var mx = vw / 2, my = vh / 2;       // raw pointer
  var nmx = 0, nmy = 0;               // normalised -1..1
  var lmx = 0, lmy = 0;               // lerped normalised (inertia)
  window.addEventListener("resize", function () { vw = window.innerWidth; vh = window.innerHeight; });
  window.addEventListener("mousemove", function (e) {
    mx = e.clientX; my = e.clientY;
    nmx = (mx / vw) * 2 - 1; nmy = (my / vh) * 2 - 1;
    spawnSquare(mx, my);
  }, { passive: true });

  /* ---------------------------------------------------------- */
  /* SQUARE CURSOR SWARM                                        */
  /* ---------------------------------------------------------- */
  var POOL = 14, squares = [], sIdx = 0, lastSpawn = 0;
  for (var i = 0; i < POOL; i++) {
    var s = document.createElement("div");
    s.className = "sq" + (i % 4 === 0 ? " sq--solid" : "");
    sqLayer.appendChild(s);
    squares.push({ el: s, life: 0, x: 0, y: 0, rot: 0, scale: 1 });
  }
  function spawnSquare(x, y) {
    var now = performance.now();
    if (now - lastSpawn < 38) return;   // throttle for elegance + perf
    lastSpawn = now;
    var sq = squares[sIdx % POOL]; sIdx++;
    sq.life = 1;
    sq.x = x + (Math.random() * 26 - 13);
    sq.y = y + (Math.random() * 26 - 13);
    sq.rot = Math.random() * 45;
    sq.scale = 0.6 + Math.random() * 0.9;
  }

  // The two-tier ring (anchor square that sits on the cursor)
  var anchor = document.createElement("div");
  anchor.className = "sq";
  anchor.style.width = anchor.style.height = "30px";
  anchor.style.borderColor = "rgba(245,241,233,0.35)";
  sqLayer.appendChild(anchor);
  var ax = mx, ay = my;

  /* ---------------------------------------------------------- */
  /* SIGNATURE MONOLITH — scroll path (edge-biased, never central text) */
  /* ---------------------------------------------------------- */
  // state interpolated by scroll; x/y in vw/vh, rot in deg, s = size px
  var M = { x: 80, y: 42, rx: -18, ry: 24, s: 232 };
  var spin = 0;          // continuous auto rotation
  var velBoost = 0;      // scroll-velocity reaction
  var tiltX = 0, tiltY = 0;

  function applyMonolith() {
    mono.style.setProperty("--mono-size", M.s + "px");
    var px = (M.x + lmx * 2.4);   // mouse parallax in vw
    var py = (M.y + lmy * 2.0);   // vh
    stage.style.transform = "translate(" + px + "vw, " + py + "vh)";
    mono.style.transform =
      "translate(-50%,-50%) rotateX(" + (M.rx + tiltY) + "deg) rotateY(" + (M.ry + spin + tiltX) + "deg)";
  }

  if (hasGSAP && ST) {
    gsap.registerPlugin(ST);
    // travel timeline scrubbed to whole-page scroll
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body, start: "top top", end: "bottom bottom",
        scrub: 1.1,
        onUpdate: function (self) { velBoost = Math.min(Math.abs(self.getVelocity()) / 700, 6); }
      },
      defaults: { ease: "none" }
    });
    tl.to(M, { x: 92, y: 60, ry: 90, rx: -10, s: 206 })
      .to(M, { x: 9,  y: 26, ry: 168, rx: -26, s: 252 })
      .to(M, { x: -7, y: 52, ry: 244, rx: -16, s: 196 })
      .to(M, { x: 86, y: 36, ry: 320, rx: -12, s: 226 })
      .to(M, { x: 14, y: 76, ry: 408, rx: -22, s: 178 });
  }

  /* ---------------------------------------------------------- */
  /* MASK REVEALS + CARD TILT (GSAP)                            */
  /* ---------------------------------------------------------- */
  if (hasGSAP && ST) {
    // project / work media — cinematic upward clip reveal
    gsap.utils.toArray(".work__media .scale, .svc__panel, .frame-art").forEach(function (el) {
      gsap.fromTo(el, { clipPath: "inset(100% 0 0 0)" }, {
        clipPath: "inset(0% 0 0 0)", duration: 1.25, ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true }
      });
    });

    // perspective tilt on cards following the mouse
    var tiltEls = document.querySelectorAll(".work__media, .frame-art, .svc__panel, .map-card");
    tiltEls.forEach(function (el) {
      el.style.transformStyle = "preserve-3d";
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - (r.left + r.width / 2)) / r.width;
        var py = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.transform = "perspective(900px) rotateY(" + (px * 5) + "deg) rotateX(" + (-py * 5) + "deg)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
      });
    });

    // subtle depth parallax inside project images (overscaled so edges never show)
    gsap.utils.toArray(".work__media .scale img").forEach(function (img) {
      var media = img.closest(".work__media") || img;
      gsap.set(img, { scale: 1.14, transformOrigin: "50% 50%" });
      gsap.fromTo(img, { yPercent: -6 }, {
        yPercent: 6, ease: "none",
        scrollTrigger: { trigger: media, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    // gentle extra depth: section headers drift on scroll
    gsap.utils.toArray(".sec-head__aside").forEach(function (el) {
      gsap.to(el, { yPercent: -14, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
    });
  }

  /* ---------------------------------------------------------- */
  /* TEAM PORTRAITS — mouse parallax (image + blueprint depth)  */
  /* ---------------------------------------------------------- */
  document.querySelectorAll(".team-frame.has-photo").forEach(function (frame) {
    var img = frame.querySelector("img");
    var lines = frame.querySelector(".team-frame__lines");
    frame.addEventListener("mouseenter", function () {
      if (img) img.style.transition = "transform 0.5s var(--ease), filter .8s var(--ease)";
    });
    frame.addEventListener("mousemove", function (e) {
      var r = frame.getBoundingClientRect();
      var px = (e.clientX - (r.left + r.width / 2)) / r.width;
      var py = (e.clientY - (r.top + r.height / 2)) / r.height;
      if (img) img.style.transform = "scale(1.07) translate(" + (px * 7).toFixed(2) + "px," + (py * 7).toFixed(2) + "px)";
      if (lines) lines.style.transform = "translate(" + (px * -13).toFixed(2) + "px," + (py * -13).toFixed(2) + "px)";
    });
    frame.addEventListener("mouseleave", function () {
      if (img) { img.style.transition = "transform 1.1s var(--ease), filter .8s var(--ease)"; img.style.transform = ""; }
      if (lines) lines.style.transform = "";
    });
  });

  /* ---------------------------------------------------------- */
  /* RENDER LOOP                                                */
  /* ---------------------------------------------------------- */
  function render() {
    // pointer inertia
    lmx += (nmx - lmx) * 0.06;
    lmy += (nmy - lmy) * 0.06;

    // blueprint grid parallax
    grid.style.transform = "translate(" + (lmx * -22) + "px, " + (lmy * -22) + "px)";

    // anchor square follows cursor with lag
    ax += (mx - ax) * 0.22; ay += (my - ay) * 0.22;
    anchor.style.opacity = "1";
    anchor.style.transform = "translate(" + ax + "px," + ay + "px) translate(-50%,-50%) rotate(" + (lmx * 18) + "deg)";

    // square swarm decay
    for (var i = 0; i < POOL; i++) {
      var sq = squares[i];
      if (sq.life > 0) {
        sq.life -= 0.026;
        var lf = sq.life < 0 ? 0 : sq.life;
        sq.el.style.opacity = (lf * 0.8).toFixed(3);
        sq.el.style.transform =
          "translate(" + sq.x + "px," + sq.y + "px) translate(-50%,-50%) rotate(" + (sq.rot + (1 - lf) * 40) + "deg) scale(" + (sq.scale * (0.7 + lf * 0.5)) + ")";
      } else {
        sq.el.style.opacity = "0";
      }
    }

    // monolith spin + mouse tilt + velocity
    tiltX += ((lmx * 10) - tiltX) * 0.05;
    tiltY += ((lmy * -8) - tiltY) * 0.05;
    spin += 0.16 + velBoost * 0.12;
    velBoost *= 0.92;
    applyMonolith();

    requestAnimationFrame(render);
  }
  applyMonolith();
  requestAnimationFrame(render);
})();
