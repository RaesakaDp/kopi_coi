// Toogle class active untuk humberger menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu diklik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const cart = document.querySelector(".shopping-cart");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

document.querySelector("#shopping-cart-btn").onclick = (e) => {
  cart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar elemen
const hm = document.querySelector("#humburger-menu");
const sb = document.querySelector("#search-btn");
const cb = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cb.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailBtns = document.querySelectorAll(".item-detail-btn");

itemDetailBtns.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Click Tombol close modal
document.querySelector(".modal .close-icons").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Click diluar Modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
