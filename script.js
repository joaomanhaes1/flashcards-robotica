const botao = document.getElementById("botao-tema");

// Verifica se já tinha um tema salvo
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("escuro");
  botao.textContent = "Claro";
}

botao.addEventListener("click", () => {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    localStorage.setItem("tema", "escuro");
    botao.textContent = "Claro";
  } else {
    localStorage.setItem("tema", "claro");
    botao.textContent = "Escuro";
  }
});