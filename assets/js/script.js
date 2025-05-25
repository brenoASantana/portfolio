function setLanguage(lang) {
  document.querySelectorAll(".lang").forEach((el) => {
    el.classList.remove("active");
  });
  const activeBtn = document.querySelector(button[(onclick *= "${lang}")]);
  document
    .querySelectorAll(".myButton")
    .forEach((btn) => btn.setAttribute("aria-pressed", "false"));
  activeBtn.setAttribute("aria-pressed", "true");
  document.querySelector("." + lang).classList.add("active");
}

