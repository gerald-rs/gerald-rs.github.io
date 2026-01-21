const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Année automatique dans le footer
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile
const menuToggle = $("#menuToggle");
const mobileMenu = $("#mobileMenu");

const setMenu = (open) => {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.toggle("hidden", !open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "Fermer" : "Menu";
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => setMenu(mobileMenu.classList.contains("hidden")));
  $$(".nav__mobile a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
}

// Formulaire (simulation)
const contactForm = $("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
    e.target.reset();
  });
}

// Projets : Détails (agrandit la carte + affiche le contenu)
$$(".card--media").forEach((card) => {
  const btn = card.querySelector(".details-btn");
  const panel = card.querySelector(".details-panel");
  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    const isOpen = !panel.hasAttribute("hidden");

    // Un seul projet ouvert à la fois
    $$(".details-panel").forEach((p) => p.setAttribute("hidden", ""));
    $$(".details-btn").forEach((b) => b.setAttribute("aria-expanded", "false"));
    $$(".card--media").forEach((c) => c.classList.remove("is-open"));

    // Toggle sur celui cliqué
    if (!isOpen) {
      panel.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
      card.classList.add("is-open");
    }
  });
});
