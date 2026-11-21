document.getElementById("timestamp").value = new Date().toISOString();

document.querySelectorAll("[data-modal]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    document.getElementById(link.dataset.modal).showModal();
  });
});

document.querySelectorAll(".close-modal").forEach(button => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});