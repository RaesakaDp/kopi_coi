// Toogle class active untuk humberger menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu diklik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik diluar searchbos untuk menghilangkan search box
// const pencarian = document.querySelector(".search-form");

// document.addEventListener("click", function (e) {
//   if (!pencarian.contains(e.target) && !searchBox.contains(e.target)) {
//     searchBox.classList.remove("active");
//   }
// });

// Klik diluar sidebar untuk menghilangkan sidebar
const hm = document.querySelector("#humburger-menu");
const sb = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchBox.classList.remove("active");
  }
});
