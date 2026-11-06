const button = document.getElementById("menu-button");
const navList = document.getElementById("nav-list");

button.addEventListener("click", () => {
  const open = navList.classList.toggle("open");
  button.setAttribute("aria-expanded", open);
  button.textContent = open ? "\u2715" : "\u2630";
});