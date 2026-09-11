function configurarModoApresentacao() {
  if (document.querySelector(".modo-apresentacao-botao")) return;

  var botaoApresentacao = document.createElement("button");
  botaoApresentacao.type = "button";
  botaoApresentacao.className = "modo-apresentacao-botao";
  botaoApresentacao.textContent = "Modo apresentação";
  botaoApresentacao.setAttribute("aria-pressed", "false");
  botaoApresentacao.setAttribute(
    "aria-label",
    "Alternar modo apresentação"
  );

  botaoApresentacao.addEventListener("click", function () {
    var modoAtivo = document.body.classList.toggle("modo-apresentacao");
    botaoApresentacao.textContent = modoAtivo
      ? "Sair do modo apresentação"
      : "Modo apresentação";
    botaoApresentacao.setAttribute("aria-pressed", String(modoAtivo));
  });

  document.body.appendChild(botaoApresentacao);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", configurarModoApresentacao);
} else {
  configurarModoApresentacao();
}
