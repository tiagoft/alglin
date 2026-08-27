function configurarApostila() {
  var apostila = document.getElementById("apostila");
  var menu = document.querySelector(".navbar-nav");
  if (!apostila || !menu) return;

  var titulo = document.createElement("p");
  titulo.textContent = "Selecione os capítulos e tópicos que deseja incluir.";
  apostila.appendChild(titulo);

  var lista = document.createElement("div");
  lista.className = "apostila-lista";
  apostila.appendChild(lista);

  menu.querySelectorAll(":scope > .nav-item").forEach(function (capitulo) {
    var linkCapitulo = capitulo.querySelector(":scope > a");
    var ehDropdown = capitulo.classList.contains("dropdown");
    var linksTopicos = ehDropdown
      ? Array.prototype.slice.call(capitulo.querySelectorAll(":scope > .dropdown-menu > li > a"))
      : [linkCapitulo];
    if (!linkCapitulo || (!ehDropdown && linkCapitulo.textContent.trim() === "Home")) return;

    var grupo = document.createElement("fieldset");
    var legenda = document.createElement("legend");
    var caixaCapitulo = document.createElement("input");
    var idCapitulo = "apostila-" + lista.children.length;
    caixaCapitulo.type = "checkbox";
    caixaCapitulo.id = idCapitulo;
    caixaCapitulo.className = "apostila-capitulo";
    legenda.htmlFor = idCapitulo;
    legenda.appendChild(caixaCapitulo);
    legenda.appendChild(document.createTextNode(" " + linkCapitulo.textContent));
    grupo.appendChild(legenda);

    var topicos = document.createElement("div");
    topicos.className = "apostila-topicos";
    grupo.appendChild(topicos);

    linksTopicos.forEach(function (link) {
      var linha = document.createElement("label");
      var caixa = document.createElement("input");
      caixa.type = "checkbox";
      caixa.className = "apostila-topico";
      caixa.dataset.url = new URL(link.href, window.location.href).href;
      caixa.dataset.titulo = link.textContent.trim();
      linha.appendChild(caixa);
      linha.appendChild(document.createTextNode(" " + link.textContent.trim()));
      topicos.appendChild(linha);
    });

    caixaCapitulo.addEventListener("change", function () {
      topicos.querySelectorAll("input").forEach(function (caixa) {
        caixa.checked = caixaCapitulo.checked;
      });
    });

    topicos.addEventListener("change", function () {
      var caixas = Array.prototype.slice.call(topicos.querySelectorAll("input"));
      caixaCapitulo.checked = caixas.length > 0 && caixas.every(function (caixa) {
        return caixa.checked;
      });
    });

    lista.appendChild(grupo);
  });

  var botao = document.createElement("button");
  botao.type = "button";
  botao.className = "apostila-gerar-botao";
  botao.textContent = "Gerar apostila em PDF";
  apostila.appendChild(botao);

  botao.addEventListener("click", async function () {
    var selecionados = Array.prototype.slice.call(
      apostila.querySelectorAll(".apostila-topico:checked")
    );
    if (!selecionados.length) {
      window.alert("Selecione pelo menos um tópico para gerar a apostila.");
      return;
    }

    botao.disabled = true;
    botao.textContent = "Preparando apostila...";
    try {
      var paginas = await Promise.all(selecionados.map(async function (caixa) {
        var resposta = await fetch(caixa.dataset.url);
        var html = await resposta.text();
        var documento = new DOMParser().parseFromString(html, "text/html");
        var conteudo = documento.querySelector(".col-md-9");
        if (conteudo) {
          conteudo.querySelectorAll("details").forEach(function (caixa) {
            caixa.setAttribute("open", "");
          });
        }
        return {
          capitulo: caixa.closest("fieldset").querySelector("legend").textContent.trim(),
          titulo: caixa.dataset.titulo,
          html: conteudo ? conteudo.innerHTML : ""
        };
      }));

      var capitulos = [];
      paginas.forEach(function (pagina) {
        var capitulo = capitulos.find(function (item) {
          return item.nome === pagina.capitulo;
        });
        if (!capitulo) {
          capitulo = { nome: pagina.capitulo, paginas: [] };
          capitulos.push(capitulo);
        }
        capitulo.paginas.push(pagina);
      });

      var sumario = capitulos.map(function (capitulo) {
        return "<li><strong>" + capitulo.nome + "</strong><ul>" +
          capitulo.paginas.map(function (pagina) {
            return "<li>" + pagina.titulo + "</li>";
          }).join("") + "</ul></li>";
      }).join("");

      var corpo = capitulos.map(function (capitulo) {
        return "<section class=\"capitulo\"><h2 class=\"titulo-capitulo\">" + capitulo.nome + "</h2>" +
          capitulo.paginas.map(function (pagina) {
            return "<article class=\"topico\"><h3>" + pagina.titulo + "</h3>" + pagina.html + "</article>";
          }).join("") + "</section>";
      }).join("");

      var janela = window.open("", "_blank");
      janela.document.write("<!doctype html><html><head><meta charset=\"utf-8\"><title>Apostila - Álgebra Linear e Teoria da Informação</title><script src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML\"><\/script><style>" +
        "@page{size:A4;margin:2cm 1.8cm}" +
        "*{box-sizing:border-box}" +
        "body{font-family:'Trebuchet MS',Arial,sans-serif;line-height:1.55;color:#263746;max-width:17.4cm;margin:0 auto;padding:0 0 1.2cm}" +
        "h1{color:#087fbd;border-bottom:2px solid #168de2;padding-bottom:12px;text-align:center;font-size:26px}" +
        ".capa{text-align:center;height:23.7cm;padding-top:4cm;position:relative}.capa h1{border:0;font-size:30px;line-height:1.25}.capa p{color:#587080;font-size:16px}.sumario-pagina{break-before:page;page-break-before:always;min-height:23.7cm}.sumario{text-align:left;margin:0 auto;max-width:14cm;padding:1.1em 1.5em;border-left:4px solid #168de2;background:#f0f8fc}.sumario h2{margin-top:0;color:#087fbd}.sumario ul{padding-left:1.4em}.sumario li{margin:0.35em 0}.qrcode-bloco{position:absolute;bottom:0;left:50%;transform:translateX(-50%);padding:0.45cm 0.6cm 0.3cm;border:1px solid #c5dce9;border-radius:5px;background:#f7fbfd;color:#587080;font-size:10px}.qrcode{display:block;width:2.7cm;height:2.7cm;margin:0 auto 0.15cm}.qrcode-legenda{margin:0}" +
        ".capitulo{break-before:page;page-break-before:always}.capitulo:first-of-type{break-before:auto;page-break-before:auto}.titulo-capitulo{color:#087fbd;border-bottom:2px solid #168de2;padding-bottom:8px;margin-top:0}.topico h3{color:#4d6575;font-size:21px;border-bottom:1px solid #d7e2e8;padding-bottom:6px;margin-top:28px}" +
        "h2{color:#555;border-bottom:1px solid #ddd;padding-bottom:6px;margin-top:36px}" +
        "img{max-width:100%;height:auto}pre{white-space:pre-wrap;background:#f5f5f5;padding:12px;overflow-wrap:anywhere}" +
        "table{max-width:100%;border-collapse:collapse}svg{max-width:100%;height:auto}" +
        "details{display:block;margin:1em 0;padding:0;border:1px solid #b8d8ee;border-radius:4px;background:#eaf5fc;break-inside:avoid;page-break-inside:avoid}summary{display:block;padding:0.65em 0.9em;background:#d6ecfa;color:#075985;font-weight:bold;border-bottom:1px solid #b8d8ee}details>*:not(summary){margin-left:0.9em;margin-right:0.9em}.admonition{margin:1em 0;padding:0.8em 1em;border-left:4px solid #168de2;background:#eaf5fc;break-inside:avoid}.admonition-title{color:#075985;font-weight:bold}.highlight{break-inside:avoid}" +
        "@media print{body{width:auto}.capa{break-after:page}.sumario-pagina{break-before:page}.paginacao{display:none}h1{break-after:avoid}h2{break-after:avoid}pre,table,img,figure{break-inside:avoid}}" +
        "</style></head><body><section class=\"capa\"><h1>Apostila de Álgebra Linear e Teoria da Informação</h1><p>Material selecionado da disciplina</p><div class=\"qrcode-bloco\"><img class=\"qrcode\" src=\"https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Ftiagoft.github.io%2Falglin%2F\" alt=\"QR code para acessar o site da disciplina\"><p class=\"qrcode-legenda\">Acesse o site da disciplina</p></div></section><section class=\"sumario-pagina\"><div class=\"sumario\"><h2>Conteúdos selecionados</h2><ul>" +
        sumario +
        "</ul></div></section>" +
        corpo +
        "</body></html>");
      janela.document.close();
      janela.focus();
      if (janela.MathJax && janela.MathJax.Hub) {
        janela.MathJax.Hub.Queue(function () { janela.setTimeout(function () { janela.print(); }, 250); });
      } else {
        janela.setTimeout(function () { janela.print(); }, 1500);
      }
    } finally {
      botao.disabled = false;
      botao.textContent = "Gerar apostila em PDF";
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", configurarApostila);
} else {
  configurarApostila();
}
