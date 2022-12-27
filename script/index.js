const hamburger = document.querySelector(".hamburger");
const nav__links = document.querySelector(".nav__links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav__links.classList.toggle("active");
});
document.querySelectorAll(".nav_linkss").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav__links.classList.remove("active");
  })
);
