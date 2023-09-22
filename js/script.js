// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu diklik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
