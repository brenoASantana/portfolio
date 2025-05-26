function setLanguage(lang) {
  // Oculta todos os elementos de linguagem
  document.querySelectorAll(".lang").forEach((el) => {
    el.classList.remove("active");
  });

  // Desativa visualmente todos os botões de idioma
  document.querySelectorAll(".langButton").forEach((btn) => {
    btn.setAttribute("aria-pressed", "false");
  });

  // Ativa visualmente o botão correspondente ao idioma selecionado
  const activeBtn = document.querySelector(`.langButton[data-lang="${lang}"]`);
  if (activeBtn) {
    activeBtn.setAttribute("aria-pressed", "true");
  }

  // Exibe os elementos da linguagem selecionada
  const langContent = document.querySelector("." + lang);
  if (langContent) {
    langContent.classList.add("active");
  }
}
