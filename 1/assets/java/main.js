/*=============== EXPANDED LIST ===============*/
// const navExpand = document.getElementById("nav-expand"),
//   navExpandList = document.getElementById("dropdown-menu"),
//   navExpandIcon = document.getElementById("nav-expand-icon");

// navExpand.addEventListener("click", () => {
//   // Expand list
//   navExpandList.classList.toggle("show-list");

//   // Rotate icon
//   navExpandIcon.classList.toggle("rotate-icon");
// });
// ========== Toggle User ==========

// const user = document.querySelector(".submenu-right");
// document.querySelector("#user").onclick = () => {
//   user.classList.toggle("active");
// };

// const account = document.querySelector("#user");
// document.addEventListener("click", function (e) {
//   if (!account.contains(e.target) && !user.contains(e.target)) {
//     user.classList.remove("active");
//   }
// });

// ========== Toggle Sub Menu ==========
// const showSubmenu = (dropdownLink, dropdownSubmenu) => {
//   const toggleSubmenu = document.getElementById(dropdownLink),
//     submenu = document.getElementById(dropdownSubmenu);

//   toggleSubmenu.addEventListener("click", () => {
//     submenu.classList.toggle("active");
//   });
// };

// showSubmenu("dropdown-link-aksesoris", "dropdown-submenu-aksesoris");

// ========== Toggle navbar ==========
const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));
