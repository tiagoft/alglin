document.addEventListener("DOMContentLoaded", function () {
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
});
