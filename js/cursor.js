/* =============================================================
   cursor.js — bespoke cursor (dot + lagging ring) & magnetic els
   Disabled on touch / reduced-motion. Pure rAF lerp, no deps.
   ============================================================= */
(function () {
  "use strict";

  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduce) return;

  const dot = document.querySelector("[data-cursor]");
  const ring = document.querySelector("[data-cursor-follow]");
  if (!dot || !ring) return;

  const labelEl = ring.querySelector(".cursor-label");
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let visible = false;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (!visible) { visible = true; dot.style.opacity = ring.style.opacity = "1"; }
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  }, { passive: true });

  document.addEventListener("mouseleave", () => { dot.style.opacity = ring.style.opacity = "0"; });

  const render = () => {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  // Hover affordances
  const hoverSel = "a, button, [data-cursor-hover], .service, .proj, .work, .faq__q, input, textarea";
  document.querySelectorAll(hoverSel).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.classList.add("is-hover");
      const lbl = el.getAttribute("data-cursor-label");
      if (lbl && labelEl) labelEl.textContent = lbl;
      else if (labelEl) labelEl.textContent = "";
    });
    el.addEventListener("mouseleave", () => { ring.classList.remove("is-hover"); if (labelEl) labelEl.textContent = ""; });
  });

  // Magnetic effect for buttons / nav cta
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = parseFloat(el.getAttribute("data-magnetic")) || 0.35;
    el.style.willChange = "transform";
    el.addEventListener("mouseenter", () => { el.style.transition = "transform 0.18s cubic-bezier(0.16,1,0.3,1)"; });
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
      el.style.transform = "translate(0,0)";
    });
  });
})();
