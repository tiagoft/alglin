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
          prepararConteudoParaApostila(conteudo);
        }
        return {
          capitulo: caixa.closest("fieldset").querySelector("legend").textContent.trim(),
          titulo: caixa.dataset.titulo,
          url: caixa.dataset.url,
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
            return "<article class=\"topico\">" + montarCabecalhoTopico(pagina) + pagina.html + "</article>";
          }).join("") + "</section>";
      }).join("");

      var janela = window.open("", "_blank");
      janela.document.write("<!doctype html><html><head><meta charset=\"utf-8\"><title>Apostila - Álgebra Linear e Teoria da Informação</title><script src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML\"><\/script><style>" +
        montarEstilosDaApostila() +
        "</style></head><body><section class=\"capa\"><h1>Apostila de Álgebra Linear e Teoria da Informação</h1><p>Material selecionado da disciplina</p><div class=\"qrcode-bloco\"><img class=\"qrcode\" src=\"https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Ftiagoft.github.io%2Falglin%2F\" alt=\"QR code para acessar o site da disciplina\"><p class=\"qrcode-legenda\">Acesse o site da disciplina</p></div></section><section class=\"sumario-pagina\"><div class=\"sumario\"><h2>Conteúdos selecionados</h2><ul>" +
        sumario +
        "</ul></div></section>" +
        corpo +
        "</body></html>");
      janela.document.close();
      janela.focus();
      imprimirQuandoPronto(janela);
    } finally {
      botao.disabled = false;
      botao.textContent = "Gerar apostila em PDF";
    }
  });
}

function prepararConteudoParaApostila(conteudo) {
  conteudo.querySelectorAll("details").forEach(function (caixa) {
    caixa.setAttribute("open", "");

    var resumo = caixa.querySelector(":scope > summary");
    if (!resumo) return;

    var pergunta = document.createElement("span");
    pergunta.className = "apostila-label apostila-label-pergunta";
    pergunta.textContent = "Pergunta";
    resumo.insertBefore(pergunta, resumo.firstChild);

    var resposta = document.createElement("span");
    resposta.className = "apostila-label apostila-label-resposta";
    resposta.textContent = "Resposta";
    resumo.insertAdjacentElement("afterend", resposta);
  });
}

function montarCabecalhoTopico(pagina) {
  var titulo = escaparHtml(pagina.titulo);
  var qrCode = montarUrlQRCode(pagina.url, 132);
  return "<div class=\"topico-cabecalho\"><h3>" + titulo + "</h3>" +
    "<div class=\"topico-qrcode-bloco\"><img class=\"topico-qrcode\" src=\"" + qrCode + "\" alt=\"QR code para " + titulo + "\"><span>página online</span></div>" +
    "</div>";
}

function montarUrlQRCode(url, tamanho) {
  return "https://api.qrserver.com/v1/create-qr-code/?size=" + tamanho + "x" + tamanho + "&data=" + encodeURIComponent(url);
}

function escaparHtml(valor) {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function imprimirQuandoPronto(janela) {
  var imprimir = function () {
    aguardarImagens(janela.document).then(function () {
      janela.setTimeout(function () { janela.print(); }, 250);
    });
  };

  if (janela.MathJax && janela.MathJax.Hub) {
    janela.MathJax.Hub.Queue(imprimir);
  } else {
    janela.setTimeout(imprimir, 1500);
  }
}

function aguardarImagens(documento) {
  var imagens = Array.prototype.slice.call(documento.images).filter(function (imagem) {
    return !imagem.complete;
  });
  if (!imagens.length) return Promise.resolve();

  return Promise.all(imagens.map(function (imagem) {
    return new Promise(function (resolve) {
      var finalizado = false;
      var finalizar = function () {
        if (finalizado) return;
        finalizado = true;
        resolve();
      };

      imagem.addEventListener("load", finalizar, { once: true });
      imagem.addEventListener("error", finalizar, { once: true });
      setTimeout(finalizar, 4000);
    });
  }));
}

function montarEstilosDaApostila() {
  return [
    "@page{size:A4;margin:1.75cm 1.65cm}",
    "*{box-sizing:border-box}",
    "html{background:#fff}",
    "body{font-family:'Segoe UI','Trebuchet MS',Arial,sans-serif;font-size:11pt;line-height:1.55;color:#2f3a40;max-width:17.4cm;margin:0 auto;padding:0 0 1.2cm;text-rendering:optimizeLegibility}",
    "p{margin:0.55em 0 0.8em}",
    "ul,ol{margin:0.45em 0 0.9em;padding-left:1.25em}",
    "li{margin:0.22em 0}",
    "a{color:#1d5f82;text-decoration:none}",
    "h1{color:#1d5f82;border-bottom:2px solid #8fb8cc;padding-bottom:12px;text-align:center;font-size:26px;line-height:1.2}",
    "h2{color:#59636a;border-bottom:1px solid #d9dfe3;padding-bottom:6px;margin-top:34px;font-size:22px;line-height:1.25}",
    "h4,h5,h6{color:#47545b;margin:1.1em 0 0.45em;line-height:1.25}",
    ".capa{height:23.7cm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;padding:2.4cm 1cm 4.2cm;border-top:6px solid #8fb8cc}",
    ".capa h1{max-width:13cm;border:0;margin:0 auto 0.35cm;color:#1d5f82;font-size:30px;line-height:1.2;font-weight:700}",
    ".capa p{margin:0;color:#66717a;font-size:15px}",
    ".capa:after{content:'';position:absolute;left:3cm;right:3cm;bottom:3.35cm;border-top:1px solid #d9dfe3}",
    ".sumario-pagina{break-before:page;page-break-before:always;min-height:23.7cm;padding-top:1cm}",
    ".sumario{text-align:left;margin:0 auto;max-width:14cm;padding:1.1em 1.35em;border:1px solid #d9dfe3;border-left:5px solid #8fb8cc;border-radius:5px;background:#fafafa}",
    ".sumario h2{margin-top:0;color:#1d5f82;border-bottom:1px solid #d9dfe3}",
    ".sumario ul{padding-left:1.25em}",
    ".sumario li{margin:0.35em 0}",
    ".qrcode-bloco{position:absolute;bottom:0.35cm;left:50%;transform:translateX(-50%);padding:0.42cm 0.55cm 0.28cm;border:1px solid #d9dfe3;border-radius:5px;background:#fafafa;color:#66717a;font-size:10px}",
    ".qrcode{display:block;width:2.7cm;height:2.7cm;margin:0 auto 0.15cm}",
    ".qrcode-legenda{margin:0}",
    ".capitulo{break-before:page;page-break-before:always}",
    ".capitulo:first-of-type{break-before:auto;page-break-before:auto}",
    ".titulo-capitulo{color:#1d5f82;border-bottom:2px solid #8fb8cc;padding-bottom:8px;margin-top:0;font-size:24px}",
    ".topico-cabecalho{display:flex;align-items:flex-start;justify-content:space-between;gap:0.55cm;border-bottom:1px solid #d9dfe3;padding-bottom:0.35em;margin:28px 0 0.75em;break-inside:avoid;page-break-inside:avoid}",
    ".topico-cabecalho h3{flex:1;min-width:0;color:#47545b;font-size:19px;line-height:1.25;border:0;padding:0;margin:0}",
    ".topico-qrcode-bloco{flex:0 0 1.55cm;display:flex;flex-direction:column;align-items:center;text-align:center;color:#7a8288;font-size:7.5pt;line-height:1.1}",
    ".topico-qrcode{display:block;width:1.4cm;height:1.4cm;margin:0 0 0.08cm}",
    "img{max-width:100%;height:auto;display:block;margin:0.85em auto}",
    "figure{margin:1em 0;text-align:center}",
    "figcaption{font-size:9.5pt;color:#66717a}",
    "svg{max-width:100%;height:auto}",
    "table{width:100%;max-width:100%;border-collapse:collapse;margin:1em 0;font-size:10pt}",
    "th,td{border:1px solid #d8dde1;padding:0.45em 0.55em;vertical-align:top}",
    "th{background:#f1f3f5;color:#2f3a40;font-weight:700}",
    "tbody tr:nth-child(even){background:#fbfbfb}",
    "code{font-family:Consolas,'Liberation Mono',monospace;font-size:0.92em;color:#25313a}",
    "pre{white-space:pre-wrap;background:#f7f7f7;border:1px solid #d9d9d9;border-left:4px solid #b8b8b8;border-radius:4px;padding:0.75em 0.9em;overflow-wrap:anywhere}",
    "pre code{font-size:9.4pt}",
    ".highlight{break-inside:avoid;page-break-inside:avoid}",
    ".arithmatex{max-width:100%;overflow-wrap:anywhere}",
    ".MathJax_Display{margin:0.75em 0!important;overflow:visible!important}",
    ".MathJax{max-width:100%}",
    "details{display:block;margin:1em 0 1.15em;padding:0;border:1px solid #d9d9d9;border-radius:5px;background:#f7f7f7;break-inside:avoid;page-break-inside:avoid;overflow:hidden}",
    "summary{display:block;padding:0.7em 0.9em;background:#efefef;color:#2f3437;font-weight:700;border-bottom:1px solid #e1e1e1;line-height:1.35}",
    "summary::-webkit-details-marker{display:none}",
    ".apostila-label{display:inline-block;margin:0 0.6em 0.1em 0;padding:0.22em 0.5em;border:1px solid #d2d2d2;border-radius:3px;background:#fff;color:#585858;font-size:9px;line-height:1.1;text-transform:uppercase;letter-spacing:0;vertical-align:middle}",
    ".apostila-label-resposta{display:block;width:max-content;max-width:calc(100% - 1.8em);margin:0.75em 0.9em 0.35em;background:#f4f4f4;color:#555}",
    "details>*:not(summary):not(.apostila-label-resposta){margin-left:0.9em;margin-right:0.9em}",
    "details>p:last-child,details>ul:last-child,details>ol:last-child{margin-bottom:0.9em}",
    ".admonition{margin:1em 0 1.15em;padding:0.8em 0.95em;border:1px solid #d9d9d9;border-left:4px solid #b8b8b8;border-radius:5px;background:#f7f7f7;break-inside:avoid;page-break-inside:avoid}",
    ".admonition-title{margin:0 0 0.55em;color:#333;font-weight:700}",
    "@media print{body{width:auto}a[href]:after{content:''}.capa{break-after:page;page-break-after:always}.sumario-pagina{break-before:page;page-break-before:always}.paginacao{display:none}h1,h2,h3,h4{break-after:avoid;page-break-after:avoid}pre,table,img,figure,details,.admonition{break-inside:avoid;page-break-inside:avoid}}"
  ].join("");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", configurarApostila);
} else {
  configurarApostila();
}
