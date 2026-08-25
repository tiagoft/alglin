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

  var futuros = document.getElementById("calendario-futuros-lista");
  var passados = document.getElementById("calendario-passados-lista");
  if (!futuros || !passados) return;

  var hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  var itens = Array.prototype.slice.call(
    futuros.querySelectorAll(".calendario-item")
  );

  itens.forEach(function (item) {
    var data = new Date(item.getAttribute("data-date") + "T00:00:00");
    if (data < hoje) {
      passados.appendChild(item);
    } else if (data.getTime() === hoje.getTime()) {
      item.classList.add("calendario-hoje");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", configurarModoApresentacao);
} else {
  configurarModoApresentacao();
}
