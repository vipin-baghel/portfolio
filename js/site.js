const topbar = document.querySelector(".topbar");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");
const navigationLinks = [...navigation.querySelectorAll("a")];

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 8);

  const offset = window.scrollY + 140;
  let current = "";
  navigationLinks.forEach((link) => {
    const target = document.querySelector(link.hash);
    if (target && target.offsetTop <= offset) {
      current = link.hash;
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.toggle("active", link.hash === current);
  });
}, { passive: true });
