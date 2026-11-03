var FORMULAS_SCRIPT_URL = encontrarScriptDasFormulas();

function configurarFormulas() {
  if (document.querySelector(".formulas-botao")) return;

  var botao = document.createElement("button");
  botao.type = "button";
  botao.className = "formulas-botao";
  botao.setAttribute("aria-label", "Abrir formulário da disciplina");
  botao.setAttribute("aria-expanded", "false");
  botao.setAttribute("aria-controls", "formulas-painel");
  botao.title = "Formulário da disciplina";
  botao.textContent = "?";

  var backdrop = document.createElement("div");
  backdrop.className = "formulas-backdrop";

  var painel = document.createElement("aside");
  painel.className = "formulas-painel";
  painel.id = "formulas-painel";
  painel.setAttribute("aria-labelledby", "formulas-titulo");
  painel.setAttribute("role", "dialog");
  painel.setAttribute("aria-modal", "true");
  painel.setAttribute("aria-hidden", "true");

  var cabecalho = document.createElement("div");
  cabecalho.className = "formulas-cabecalho";

  var blocoTitulo = document.createElement("div");
  var titulo = document.createElement("h2");
  titulo.className = "formulas-titulo";
  titulo.id = "formulas-titulo";
  titulo.textContent = "Formulário";

  var subtitulo = document.createElement("p");
  subtitulo.className = "formulas-subtitulo";
  subtitulo.textContent = "Fórmulas e comandos mais usados nas aulas.";

  blocoTitulo.appendChild(titulo);
  blocoTitulo.appendChild(subtitulo);

  var fechar = document.createElement("button");
  fechar.type = "button";
  fechar.className = "formulas-fechar";
  fechar.setAttribute("aria-label", "Fechar formulário");
  fechar.tabIndex = -1;
  fechar.textContent = "×";

  cabecalho.appendChild(blocoTitulo);
  cabecalho.appendChild(fechar);

  var buscaArea = document.createElement("div");
  buscaArea.className = "formulas-busca";

  var busca = document.createElement("input");
  busca.type = "search";
  busca.placeholder = "Buscar fórmula, tópico ou comando";
  busca.setAttribute("aria-label", "Buscar no formulário");
  busca.tabIndex = -1;

  buscaArea.appendChild(busca);

  var conteudo = document.createElement("div");
  conteudo.className = "formulas-conteudo formulas-markdown";
  conteudo.innerHTML = "<p class=\"formulas-carregando\">Carregando formulário...</p>";

  var vazio = document.createElement("p");
  vazio.className = "formulas-vazio";
  vazio.hidden = true;
  vazio.textContent = "Nenhuma fórmula encontrada.";

  painel.appendChild(cabecalho);
  painel.appendChild(buscaArea);
  painel.appendChild(conteudo);

  document.body.appendChild(botao);
  document.body.appendChild(backdrop);
  document.body.appendChild(painel);

  var carregouFormulario = false;
  var carregandoFormulario = null;

  function abrir() {
    document.body.classList.add("formulas-aberto");
    botao.setAttribute("aria-expanded", "true");
    painel.setAttribute("aria-hidden", "false");
    fechar.tabIndex = 0;
    busca.tabIndex = 0;

    carregarFormulario().then(function () {
      janelaMathJax(painel);
      filtrar();
    });

    window.setTimeout(function () {
      busca.focus();
    }, 80);
  }

  function fecharPainel() {
    document.body.classList.remove("formulas-aberto");
    botao.setAttribute("aria-expanded", "false");
    painel.setAttribute("aria-hidden", "true");
    fechar.tabIndex = -1;
    busca.tabIndex = -1;
    botao.focus();
  }

  function carregarFormulario() {
    if (carregouFormulario) return Promise.resolve();
    if (carregandoFormulario) return carregandoFormulario;

    carregandoFormulario = fetch(obterUrlFormulario(), { credentials: "same-origin" })
      .then(function (resposta) {
        if (!resposta.ok) throw new Error("Não foi possível carregar o formulário.");
        return resposta.text();
      })
      .then(function (html) {
        var documento = new DOMParser().parseFromString(html, "text/html");
        var fonte = documento.querySelector(".col-md-9") || documento.querySelector("main") || documento.body;

        fonte.querySelectorAll("script").forEach(function (script) {
          script.remove();
        });

        var h1 = fonte.querySelector("h1");
        if (h1 && normalizar(h1.textContent) === "formulario") {
          h1.remove();
        }

        conteudo.innerHTML = fonte.innerHTML;
        conteudo.appendChild(vazio);
        prepararConteudoParaBusca();
        carregouFormulario = true;
      })
      .catch(function () {
        var url = obterUrlFormulario();
        conteudo.innerHTML = "<p class=\"formulas-vazio\">Não foi possível carregar o formulário. <a href=\"" + url + "\">Abrir como página.</a></p>";
      });

    return carregandoFormulario;
  }

  function prepararConteudoParaBusca() {
    var secaoAtual = "";

    conteudo.querySelectorAll("h2, .admonition").forEach(function (elemento) {
      if (elemento.tagName === "H2") {
        secaoAtual = elemento.textContent;
        elemento.dataset.busca = normalizar(secaoAtual);
      } else {
        elemento.classList.add("formulas-card");
        elemento.dataset.busca = normalizar([secaoAtual, elemento.textContent].join(" "));
      }
    });
  }

  function filtrar() {
    var termo = normalizar(busca.value);
    var algumVisivel = false;

    Array.prototype.slice.call(conteudo.querySelectorAll("h2")).forEach(function (tituloSecao) {
      var secaoCombina = termo && tituloSecao.dataset.busca.indexOf(termo) !== -1;
      var secaoTemCardVisivel = false;
      var elemento = tituloSecao.nextElementSibling;

      while (elemento && elemento.tagName !== "H2") {
        if (elemento.classList.contains("formulas-card")) {
          var cardCombina = !termo || secaoCombina || elemento.dataset.busca.indexOf(termo) !== -1;
          elemento.hidden = !cardCombina;
          secaoTemCardVisivel = secaoTemCardVisivel || cardCombina;
        } else if (elemento !== vazio) {
          elemento.hidden = Boolean(termo);
        }

        elemento = elemento.nextElementSibling;
      }

      tituloSecao.hidden = Boolean(termo) && !secaoTemCardVisivel && !secaoCombina;
      algumVisivel = algumVisivel || secaoTemCardVisivel || secaoCombina;
    });

    if (!termo) {
      conteudo.querySelectorAll("[hidden]").forEach(function (elemento) {
        if (elemento !== vazio) elemento.hidden = false;
      });
      algumVisivel = true;
    }

    vazio.hidden = algumVisivel;
  }

  botao.addEventListener("click", abrir);
  fechar.addEventListener("click", fecharPainel);
  backdrop.addEventListener("click", fecharPainel);
  busca.addEventListener("input", filtrar);

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && document.body.classList.contains("formulas-aberto")) {
      fecharPainel();
    }
  });
}

function encontrarScriptDasFormulas() {
  var scripts = Array.prototype.slice.call(document.getElementsByTagName("script"));
  var script = scripts.reverse().find(function (item) {
    return (item.getAttribute("src") || "").indexOf("extra/formulas.js") !== -1;
  });

  return new URL(script ? script.getAttribute("src") : "extra/formulas.js", window.location.href);
}

function obterUrlFormulario() {
  return new URL("../formulario/", FORMULAS_SCRIPT_URL).href;
}

function normalizar(valor) {
  return String(valor || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function janelaMathJax(elemento) {
  if (window.MathJax && window.MathJax.Hub) {
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, elemento]);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", configurarFormulas);
} else {
  configurarFormulas();
}
