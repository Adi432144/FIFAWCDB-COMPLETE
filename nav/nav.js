document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".js-cdpn-mobile-menu");
  const toggleBtn = document.querySelector(".js-cdpn-mobile-menu__toggle");
  const toggleHint = document.querySelector(".js-cdpn-mobile-menu__toggle-hint");
  const links = document.querySelectorAll(".js-cdpn-mobile-menu__link");

  function openMenu() {
    menu.classList.add("js-cdpn-mobile-menu_activated");
    toggleBtn.setAttribute("aria-expanded", "true");
    if (toggleHint) toggleHint.textContent = "Close menu";
  }

  function closeMenu() {
    menu.classList.remove("js-cdpn-mobile-menu_activated");
    toggleBtn.setAttribute("aria-expanded", "false");
    if (toggleHint) toggleHint.textContent = "Open menu";
  }

  function toggleMenu() {
    menu.classList.contains("js-cdpn-mobile-menu_activated")
      ? closeMenu()
      : openMenu();
  }

  // Toggle button click
  toggleBtn.addEventListener("click", toggleMenu);

  // Close menu when clicking a link (important)
  links.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close menu when pressing ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
