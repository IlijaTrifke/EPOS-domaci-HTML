const hamburger = document.querySelector(".hamburger");
const nav__links = document.querySelector(".nav__links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav__links.classList.toggle("active");
});
// document.querySelectorAll(".nav_linkss").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     nav__links.classList.remove("active");
//   })
// );

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active1");

    var p = this.nextElementSibling;
    if (p.style.display === "block") {
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }
  });
}
