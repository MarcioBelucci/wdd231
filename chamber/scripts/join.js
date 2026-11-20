// 1. timestamp: data e hora em que o formulário foi carregado
document.getElementById("timestamp").value = new Date().toISOString();

// 2. abrir os modais
document.querySelectorAll("[data-modal]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    document.getElementById(link.dataset.modal).showModal();
  });
});

// 3. fechar pelo botão
document.querySelectorAll(".close-modal").forEach(button => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

// 4. fechar clicando fora da caixa
document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});