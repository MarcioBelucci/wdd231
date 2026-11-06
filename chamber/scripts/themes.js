const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});