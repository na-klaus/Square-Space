/* =============================================================
   main.js — UI behaviour: nav, mobile menu, header state,
   FAQ accordion, project filtering, form, to-top, year.
   No framework. Progressive enhancement only.
   ============================================================= */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Header: hide on scroll-down, solid on scroll ---------- */
  const header = document.querySelector("[data-header]");
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle("is-solid", y > 40);
      if (y > lastY && y > 400) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");
    }
    const top = document.querySelector("[data-to-top]");
    if (top) top.classList.toggle("is-visible", y > window.innerHeight);
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  function setMenu(open) {
    if (!menu || !burger) return;
    burger.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("ss:menu", { detail: { open } }));
  }
  if (burger) burger.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  if (menu) menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  /* ---------- FAQ accordion (height-animated, a11y) ---------- */
  document.querySelectorAll("[data-faq]").forEach((item) => {
    const q = item.querySelector(".faq__q");
    const a = item.querySelector(".faq__a");
    if (!q || !a) return;
    q.setAttribute("role", "button");
    q.setAttribute("tabindex", "0");
    q.setAttribute("aria-expanded", "false");
    const toggle = () => {
      const open = item.classList.toggle("is-open");
      q.setAttribute("aria-expanded", String(open));
      a.style.height = open ? a.scrollHeight + "px" : "0px";
      // close siblings
      if (open) {
        item.parentElement.querySelectorAll("[data-faq].is-open").forEach((sib) => {
          if (sib !== item) {
            sib.classList.remove("is-open");
            sib.querySelector(".faq__q").setAttribute("aria-expanded", "false");
            sib.querySelector(".faq__a").style.height = "0px";
          }
        });
      }
    };
    q.addEventListener("click", toggle);
    q.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  });

  /* ---------- Project filtering ---------- */
  const filters = document.querySelectorAll("[data-filter]");
  const works = document.querySelectorAll("[data-cat]");
  if (filters.length) {
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        filters.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const cat = btn.getAttribute("data-filter");
        works.forEach((w) => {
          const show = cat === "all" || w.getAttribute("data-cat").includes(cat);
          w.classList.toggle("is-hidden", !show);
        });
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      });
    });
  }

  /* ---------- Contact form (no backend; graceful) ---------- */
  const form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector("[data-form-note]");
      const data = new FormData(form);
      const name = (data.get("name") || "there").toString().split(" ")[0];
      const subject = encodeURIComponent("New enquiry — Square Space");
      const body = encodeURIComponent(
        `Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\nPhone: ${data.get("phone") || ""}\n\n${data.get("message") || ""}`
      );
      if (note) {
        note.textContent = `Thank you, ${name}. Opening your email client…`;
        note.style.opacity = "1";
      }
      window.location.href = `mailto:connect@square-space.in?subject=${subject}&body=${body}`;
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Active nav link ---------- */
  const path = location.pathname.replace(/index\.html?$/, "").replace(/\/$/, "");
  document.querySelectorAll("[data-nav] a").forEach((a) => {
    const href = a.getAttribute("href").replace(/index\.html?$/, "").replace(/\/$/, "");
    if (href && (href === path || (href !== "" && path.endsWith(href)))) a.setAttribute("aria-current", "page");
  });
})();
