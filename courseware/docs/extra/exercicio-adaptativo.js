(function () {
  "use strict";

  var TOLERANCIA = 1e-6;
  var PREFIXO_ARMAZENAMENTO = "exercicio-adaptativo:";

  function criarElemento(tag, classe, texto) {
    var elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (texto !== undefined) elemento.textContent = texto;
    return elemento;
  }

  function inteiroAleatorio(minimo, maximo) {
    return minimo + Math.floor(Math.random() * (maximo - minimo + 1));
  }

  function sortear(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }

  function formatarNumero(valor) {
    var arredondado = Math.round(valor * 100) / 100;
    return String(arredondado).replace(".", "{,}");
  }

  // ---------------------------------------------------------------------
  // Gerador: combinação linear de vetores (soma e multiplicação por escalar)
  // ---------------------------------------------------------------------

  // Cada parâmetro cresce de forma monótona com o nível, então o nível
  // seguinte nunca é mais fácil que o anterior e não há nível máximo.
  function parametrosCombinacaoLinear(nivel) {
    return {
      dimensao: Math.min(6, 2 + Math.floor((nivel + 3) / 8)),
      termos: Math.min(5, 2 + Math.floor((nivel + 2) / 8)),
      escalares: nivel >= 3,
      escalarMaximo: Math.min(9, 3 + Math.floor((nivel - 3) / 5)),
      subtracao: nivel >= 4,
      profundidade: nivel < 7 ? 0 : Math.min(3, 1 + Math.floor((nivel - 7) / 9)),
      componenteMinima: nivel < 2 ? 0 : -Math.min(9, 5 + Math.floor((nivel - 2) / 6)),
      componenteMaxima: nivel < 2 ? 5 : Math.min(9, 5 + Math.floor((nivel - 2) / 6)),
      escalaresDecimais: nivel >= 18,
    };
  }

  function gerarEscalar(p) {
    if (p.escalaresDecimais && Math.random() < 0.3) {
      return sortear([0.5, 1.5, 2.5]);
    }
    return inteiroAleatorio(2, p.escalarMaximo);
  }

  function gerarVetor(p) {
    var valores = [];
    for (var i = 0; i < p.dimensao; i++) {
      valores.push(inteiroAleatorio(p.componenteMinima, p.componenteMaxima));
    }
    return { tipo: "vetor", valores: valores };
  }

  function gerarSoma(quantidade, profundidade, p, comEscalar) {
    var termos = [];
    var posicaoGrupo = profundidade > 0 ? inteiroAleatorio(0, quantidade - 1) : -1;
    var algumEscalar = false;

    for (var i = 0; i < quantidade; i++) {
      var termo = { sinal: 1, escalar: null, no: null };
      if (i === posicaoGrupo) {
        termo.no = gerarSoma(2 + (Math.random() < 0.3 ? 1 : 0), profundidade - 1, p, false);
        if (p.escalares && Math.random() < 0.8) termo.escalar = gerarEscalar(p);
      } else {
        termo.no = gerarVetor(p);
        if (comEscalar && p.escalares && Math.random() < 0.5) termo.escalar = gerarEscalar(p);
      }
      if (i > 0 && p.subtracao && Math.random() < 0.35) termo.sinal = -1;
      algumEscalar = algumEscalar || termo.escalar !== null;
      termos.push(termo);
    }

    // Garante que o recurso desbloqueado no nível apareça na expressão
    if (comEscalar && p.escalares && !algumEscalar) {
      sortear(termos).escalar = gerarEscalar(p);
    }
    return { tipo: "soma", termos: termos };
  }

  function avaliar(no) {
    if (no.tipo === "vetor") return no.valores.slice();
    var resultado = null;
    no.termos.forEach(function (termo) {
      var valores = avaliar(termo.no);
      var fator = termo.sinal * (termo.escalar === null ? 1 : termo.escalar);
      valores = valores.map(function (v) { return fator * v; });
      resultado = resultado === null
        ? valores
        : resultado.map(function (v, i) { return v + valores[i]; });
    });
    return resultado;
  }

  function latex(no) {
    if (no.tipo === "vetor") {
      return "\\begin{bmatrix} " + no.valores.map(formatarNumero).join(" \\\\ ") + " \\end{bmatrix}";
    }
    return no.termos.map(function (termo, i) {
      var sinal = termo.sinal < 0 ? (i === 0 ? "-" : " - ") : (i === 0 ? "" : " + ");
      var escalar = termo.escalar === null ? "" : formatarNumero(termo.escalar) + " ";
      var corpo = termo.no.tipo === "soma"
        ? "\\left( " + latex(termo.no) + " \\right)"
        : latex(termo.no);
      return sinal + escalar + corpo;
    }).join("");
  }

  // Respostas "bonitas": componentes não muito grandes e com no máximo uma
  // casa decimal (escalares aninhados podem gerar 0,5 · 0,5 · 0,5 = 0,125)
  function respostaBonita(resposta, nivel) {
    var limite = Math.min(150, 20 + 5 * nivel);
    return resposta.every(function (v) {
      return Math.abs(v) <= limite && Math.abs(v * 10 - Math.round(v * 10)) < TOLERANCIA;
    });
  }

  function gerarCombinacaoLinear(nivel) {
    var p = parametrosCombinacaoLinear(nivel);
    var expressao;
    for (var tentativa = 0; tentativa < 200; tentativa++) {
      expressao = gerarSoma(p.termos, p.profundidade, p, true);
      if (respostaBonita(avaliar(expressao), nivel)) break;
    }
    return { latex: latex(expressao), resposta: avaliar(expressao) };
  }

  var GERADORES = {
    "combinacao-linear": gerarCombinacaoLinear,
  };

  // ---------------------------------------------------------------------
  // Interface
  // ---------------------------------------------------------------------

  function lerNivel(chave) {
    try {
      var nivel = parseInt(window.localStorage.getItem(chave), 10);
      return nivel > 0 ? nivel : 1;
    } catch (erro) {
      return 1;
    }
  }

  function salvarNivel(chave, nivel) {
    try {
      window.localStorage.setItem(chave, String(nivel));
    } catch (erro) {
      // Sem armazenamento, o nível só vale até recarregar a página
    }
  }

  function renderizarMatematica(elemento) {
    if (window.MathJax && window.MathJax.Hub) {
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, elemento]);
    }
  }

  function lerNumero(texto) {
    var limpo = texto.trim().replace(",", ".");
    if (limpo === "") return NaN;
    return Number(limpo);
  }

  function configurarExercicio(container) {
    var tipo = container.dataset.exercicio;
    var gerador = GERADORES[tipo];
    if (!gerador) return;

    var chave = PREFIXO_ARMAZENAMENTO + tipo;
    var nivel = lerNivel(chave);
    var exercicio = null;
    var resolvido = false;
    var entradas = [];

    var cabecalho = criarElemento("div", "exercicio-adaptativo-cabecalho");
    var rotuloNivel = criarElemento("span", "exercicio-adaptativo-nivel");
    var botaoRecomecar = criarElemento("button", "exercicio-adaptativo-recomecar", "Recomeçar do nível 1");
    var areaEquacao = criarElemento("div", "exercicio-adaptativo-equacao");
    var areaResposta = criarElemento("div", "exercicio-adaptativo-resposta");
    var colunaEntradas = criarElemento("div", "exercicio-adaptativo-vetor");
    var acoes = criarElemento("div", "exercicio-adaptativo-acoes");
    var botaoVerificar = criarElemento("button", "exercicio-adaptativo-verificar", "Verificar");
    var botaoProximo = criarElemento("button", "exercicio-adaptativo-proximo", "Próximo nível");
    var retorno = criarElemento("p", "exercicio-adaptativo-retorno");

    botaoRecomecar.type = "button";
    botaoVerificar.type = "button";
    botaoProximo.type = "button";
    retorno.setAttribute("aria-live", "polite");

    cabecalho.appendChild(rotuloNivel);
    cabecalho.appendChild(botaoRecomecar);
    areaResposta.appendChild(criarElemento("span", "exercicio-adaptativo-igual", "="));
    areaResposta.appendChild(colunaEntradas);
    acoes.appendChild(botaoVerificar);
    acoes.appendChild(botaoProximo);
    container.appendChild(cabecalho);
    container.appendChild(areaEquacao);
    container.appendChild(areaResposta);
    container.appendChild(acoes);
    container.appendChild(retorno);

    function novoExercicio() {
      exercicio = gerador(nivel);
      resolvido = false;
      rotuloNivel.textContent = "Nível " + nivel;
      retorno.textContent = "";
      retorno.className = "exercicio-adaptativo-retorno";
      botaoProximo.hidden = true;
      botaoVerificar.hidden = false;

      var script = document.createElement("script");
      script.type = "math/tex; mode=display";
      script.textContent = exercicio.latex;
      areaEquacao.innerHTML = "";
      areaEquacao.appendChild(script);
      renderizarMatematica(areaEquacao);

      colunaEntradas.innerHTML = "";
      entradas = exercicio.resposta.map(function (_, i) {
        var entrada = document.createElement("input");
        entrada.type = "text";
        entrada.inputMode = "decimal";
        entrada.autocomplete = "off";
        entrada.setAttribute("aria-label", "Componente " + (i + 1) + " do resultado");
        entrada.addEventListener("keydown", function (evento) {
          if (evento.key !== "Enter") return;
          evento.preventDefault();
          if (resolvido) avancar();
          else verificar();
        });
        colunaEntradas.appendChild(entrada);
        return entrada;
      });
    }

    function verificar() {
      var erros = 0;
      entradas.forEach(function (entrada, i) {
        var valor = lerNumero(entrada.value);
        var certo = Math.abs(valor - exercicio.resposta[i]) < TOLERANCIA;
        entrada.classList.toggle("exercicio-adaptativo-errado", !certo);
        entrada.classList.toggle("exercicio-adaptativo-certo", certo);
        if (!certo) erros++;
      });

      if (erros === 0) {
        resolvido = true;
        retorno.textContent = "Correto!";
        retorno.className = "exercicio-adaptativo-retorno exercicio-adaptativo-sucesso";
        botaoVerificar.hidden = true;
        botaoProximo.hidden = false;
        botaoProximo.focus();
      } else {
        retorno.textContent = erros === 1
          ? "Uma componente está incorreta."
          : erros + " componentes estão incorretas.";
        retorno.className = "exercicio-adaptativo-retorno exercicio-adaptativo-falha";
      }
    }

    function avancar() {
      nivel++;
      salvarNivel(chave, nivel);
      novoExercicio();
      entradas[0].focus();
    }

    botaoVerificar.addEventListener("click", verificar);
    botaoProximo.addEventListener("click", avancar);
    botaoRecomecar.addEventListener("click", function () {
      nivel = 1;
      salvarNivel(chave, nivel);
      novoExercicio();
    });

    novoExercicio();
  }

  function configurarExerciciosAdaptativos() {
    document.querySelectorAll(".exercicio-adaptativo").forEach(configurarExercicio);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", configurarExerciciosAdaptativos);
  } else {
    configurarExerciciosAdaptativos();
  }
})();
