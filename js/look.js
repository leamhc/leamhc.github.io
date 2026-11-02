// Shared by the home page and the stories: scroll reveals and the ≡ menu.
// Page scripts reach the reveal helpers through window.LOOK.
(() => {
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const $ = (s) => document.querySelector(s);

  // Scroll reveals: anything marked .reveal eases in once it is a little way into the window.
  const reveal = "IntersectionObserver" in window && !still.matches
    ? new IntersectionObserver((seen) => seen.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("seen"); reveal.unobserve(e.target); }
      }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  const watch = (root) => root.querySelectorAll(".reveal:not(.seen)").forEach((el) => reveal ? reveal.observe(el) : el.classList.add("seen"));
  document.querySelectorAll(".sec .head, .sec .sub, .sec .sentence, .reel, .about > *, .foot > *, .story-head > *, .story-body > *, .story-more .item").forEach((el) => el.classList.add("reveal"));
  watch(document);

  // The ≡ menu.
  const menu = $("[data-menu]");
  $("[data-menu-open]").addEventListener("click", () => { menu.classList.remove("leaving"); menu.classList.add("open"); menu.setAttribute("aria-hidden", "false"); });
  const shut = () => {
    if (still.matches) { menu.classList.remove("open"); return menu.setAttribute("aria-hidden", "true"); }
    menu.classList.add("leaving");
    setTimeout(() => { menu.classList.remove("open", "leaving"); menu.setAttribute("aria-hidden", "true"); }, 200);
  };
  $("[data-menu-close]").addEventListener("click", shut);
  menu.querySelectorAll('nav a[href*="#"]').forEach((a) => a.addEventListener("click", shut));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) shut(); });

  $("[data-year]").textContent = new Date().getFullYear();

  window.LOOK = { still, watch };
})();
