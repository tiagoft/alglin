(function () {
  "use strict";

  var EPSILON = 1e-10;
  var MAXIMO_AUTOVALORES_GERAL = 10;
  var OPERACOES = [
    {
      id: "determinante",
      simbolo: "det(A)",
      nome: "Determinante",
    },
    {
      id: "inversa",
      simbolo: "A\u207B\u00B9",
      nome: "Inversa",
    },
    {
      id: "autovalores",
      simbolo: "\u03BB, v",
      nome: "Autovalores e autovetores",
    },
    {
      id: "transposta",
      simbolo: "A\u1D40",
      nome: "Transposta",
    },
  ];

  function criarElemento(tag, classe, texto) {
    var elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (texto !== undefined) elemento.textContent = texto;
    return elemento;
  }

  function configurarCalculadoraDeMatrizes() {
    if (document.querySelector(".calculadora-matrizes-botao")) return;

    var botaoAbrir = criarBotaoFlutuante();
    var fundo = criarElemento("div", "calculadora-matrizes-fundo");
    var painel = criarElemento("aside", "calculadora-matrizes-painel");
    var cabecalho = criarCabecalho();
    var corpo = criarElemento("div", "calculadora-matrizes-corpo");
    var areaEntrada = criarElemento("section", "calculadora-matrizes-entrada");
    var linhaRotulo = criarElemento("div", "calculadora-matrizes-rotulo-linha");
    var rotulo = criarElemento("label", "", "Matriz");
    var dimensoes = criarElemento("span", "calculadora-matrizes-dimensoes", "2 \u00D7 2");
    var entrada = criarElemento("textarea", "calculadora-matrizes-textarea");
    var acoes = criarElemento("div", "calculadora-matrizes-acoes");
    var resultado = criarElemento("section", "calculadora-matrizes-resultado");
    var controles = [cabecalho.fechar, entrada];

    painel.id = "calculadora-matrizes-painel";
    painel.setAttribute("role", "dialog");
    painel.setAttribute("aria-modal", "true");
    painel.setAttribute("aria-hidden", "true");
    painel.setAttribute("aria-labelledby", "calculadora-matrizes-titulo");

    rotulo.setAttribute("for", "calculadora-matrizes-entrada");
    entrada.id = "calculadora-matrizes-entrada";
    entrada.rows = 5;
    entrada.spellcheck = false;
    entrada.placeholder = "1  2\n3  4";
    entrada.value = "1 2\n3 4";
    entrada.tabIndex = -1;

    OPERACOES.forEach(function (operacao) {
      var botao = criarElemento("button", "calculadora-matrizes-acao");
      var simbolo = criarElemento("span", "calculadora-matrizes-acao-simbolo", operacao.simbolo);
      var nome = criarElemento("span", "calculadora-matrizes-acao-nome", operacao.nome);

      botao.type = "button";
      botao.dataset.operacao = operacao.id;
      botao.setAttribute("aria-label", "Calcular " + operacao.nome.toLowerCase());
      botao.setAttribute("aria-pressed", "false");
      botao.tabIndex = -1;
      botao.appendChild(simbolo);
      botao.appendChild(nome);
      acoes.appendChild(botao);
      controles.push(botao);
    });

    linhaRotulo.appendChild(rotulo);
    linhaRotulo.appendChild(dimensoes);
    areaEntrada.appendChild(linhaRotulo);
    areaEntrada.appendChild(entrada);
    corpo.appendChild(areaEntrada);
    corpo.appendChild(acoes);
    corpo.appendChild(resultado);
    painel.appendChild(cabecalho.elemento);
    painel.appendChild(corpo);

    document.body.appendChild(botaoAbrir);
    document.body.appendChild(fundo);
    document.body.appendChild(painel);

    mostrarEstadoInicial(resultado);

    function abrir() {
      document.body.classList.add("calculadora-matrizes-aberta");
      botaoAbrir.setAttribute("aria-expanded", "true");
      painel.setAttribute("aria-hidden", "false");
      controles.forEach(function (controle) {
        controle.tabIndex = 0;
      });

      window.setTimeout(function () {
        entrada.focus();
        entrada.select();
      }, 80);
    }

    function fechar() {
      document.body.classList.remove("calculadora-matrizes-aberta");
      botaoAbrir.setAttribute("aria-expanded", "false");
      painel.setAttribute("aria-hidden", "true");
      controles.forEach(function (controle) {
        controle.tabIndex = -1;
      });
      botaoAbrir.focus();
    }

    function executar(operacao) {
      marcarOperacaoAtiva(acoes, operacao);

      try {
        var matriz = lerMatriz(entrada.value);
        atualizarDimensoes(dimensoes, matriz);

        if (operacao === "determinante") {
          mostrarValor(resultado, "Determinante", "det(A)", determinante(matriz));
        } else if (operacao === "inversa") {
          mostrarMatriz(resultado, "Matriz inversa", "A\u207B\u00B9", inversa(matriz));
        } else if (operacao === "transposta") {
          mostrarMatriz(resultado, "Matriz transposta", "A\u1D40", transposta(matriz));
        } else if (operacao === "autovalores") {
          mostrarAutovalores(resultado, calcularAutovaloresEAutovetores(matriz));
        }
      } catch (erro) {
        mostrarErro(resultado, erro.message);
      }
    }

    botaoAbrir.addEventListener("click", abrir);
    cabecalho.fechar.addEventListener("click", fechar);
    fundo.addEventListener("click", fechar);
    entrada.addEventListener("input", function () {
      atualizarDimensoesPeloTexto(dimensoes, entrada.value);
    });
    acoes.addEventListener("click", function (evento) {
      var alvo = evento.target.closest("[data-operacao]");
      if (alvo) executar(alvo.dataset.operacao);
    });
    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && document.body.classList.contains("calculadora-matrizes-aberta")) {
        fechar();
      }
    });
  }

  function criarBotaoFlutuante() {
    var botao = criarElemento("button", "calculadora-matrizes-botao");
    var icone = criarElemento("span", "calculadora-matrizes-botao-icone");

    botao.type = "button";
    botao.title = "Calculadora de matrizes";
    botao.setAttribute("aria-label", "Abrir calculadora de matrizes");
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-controls", "calculadora-matrizes-painel");
    icone.setAttribute("aria-hidden", "true");

    for (var i = 0; i < 4; i += 1) {
      icone.appendChild(document.createElement("span"));
    }

    botao.appendChild(icone);
    return botao;
  }

  function criarCabecalho() {
    var cabecalho = criarElemento("header", "calculadora-matrizes-cabecalho");
    var identidade = criarElemento("div", "calculadora-matrizes-identidade");
    var marca = criarElemento("span", "calculadora-matrizes-marca", "A");
    var textos = criarElemento("div");
    var titulo = criarElemento("h2", "calculadora-matrizes-titulo", "Calculadora de matrizes");
    var subtitulo = criarElemento("p", "calculadora-matrizes-subtitulo", "Álgebra linear");
    var fechar = criarElemento("button", "calculadora-matrizes-fechar", "\u00D7");

    titulo.id = "calculadora-matrizes-titulo";
    fechar.type = "button";
    fechar.setAttribute("aria-label", "Fechar calculadora");
    fechar.title = "Fechar";
    fechar.tabIndex = -1;

    textos.appendChild(titulo);
    textos.appendChild(subtitulo);
    identidade.appendChild(marca);
    identidade.appendChild(textos);
    cabecalho.appendChild(identidade);
    cabecalho.appendChild(fechar);

    return { elemento: cabecalho, fechar: fechar };
  }

  function marcarOperacaoAtiva(container, operacao) {
    container.querySelectorAll("[data-operacao]").forEach(function (botao) {
      var ativo = botao.dataset.operacao === operacao;
      botao.classList.toggle("calculadora-matrizes-acao-ativa", ativo);
      botao.setAttribute("aria-pressed", String(ativo));
    });
  }

  function atualizarDimensoes(elemento, matriz) {
    elemento.textContent = matriz.length + " \u00D7 " + matriz[0].length;
    elemento.classList.remove("calculadora-matrizes-dimensoes-invalida");
  }

  function atualizarDimensoesPeloTexto(elemento, texto) {
    try {
      atualizarDimensoes(elemento, lerMatriz(texto));
    } catch (erro) {
      elemento.textContent = "matriz";
      elemento.classList.add("calculadora-matrizes-dimensoes-invalida");
    }
  }

  // Leitura e validação da matriz

  function lerMatriz(texto) {
    var linhas = String(texto || "")
      .trim()
      .split(/\n|;/)
      .map(function (linha) {
        return linha.trim();
      })
      .filter(Boolean);

    if (!linhas.length) {
      throw new Error("Digite uma matriz antes de calcular.");
    }

    var matriz = linhas.map(function (linha) {
      return extrairEntradas(linha).map(parseNumero);
    });
    var quantidadeDeColunas = matriz[0].length;

    if (!quantidadeDeColunas) {
      throw new Error("A matriz precisa ter ao menos uma coluna.");
    }

    matriz.forEach(function (linha) {
      if (linha.length !== quantidadeDeColunas) {
        throw new Error("Todas as linhas precisam ter a mesma quantidade de números.");
      }
    });

    return matriz;
  }

  function extrairEntradas(linha) {
    var limpa = linha.replace(/[\[\]\(\)]/g, " ").trim();
    if (!limpa) return [];

    if (!/\s/.test(limpa) && limpa.indexOf(",") !== -1) {
      return limpa.split(",").filter(Boolean);
    }

    var entradas = [];
    limpa.split(/\s+/).forEach(function (parte) {
      var pedaco = parte.replace(/^,+|,+$/g, "");
      if (!pedaco) return;

      if (pedaco.indexOf(",") !== -1 && pedaco.split(",").length > 2) {
        pedaco.split(",").forEach(function (item) {
          if (item) entradas.push(item);
        });
        return;
      }

      entradas.push(pedaco);
    });

    return entradas;
  }

  function parseNumero(valor) {
    var partes = String(valor).replace(",", ".").split("/");

    if (partes.length > 2 || !partes[0]) {
      throw new Error("Use apenas números ou frações, como 0,5 ou 1/2.");
    }

    var numerador = Number(partes[0]);
    var denominador = partes.length === 2 ? Number(partes[1]) : 1;

    if (!isFinite(numerador) || !isFinite(denominador) || Math.abs(denominador) < EPSILON) {
      throw new Error("Há uma entrada inválida na matriz.");
    }

    return numerador / denominador;
  }

  // Operações matriciais

  function exigirMatrizQuadrada(matriz, operacao) {
    if (matriz.length !== matriz[0].length) {
      throw new Error(operacao + " precisa de uma matriz quadrada.");
    }

    return matriz.length;
  }

  function clonarMatriz(matriz) {
    return matriz.map(function (linha) {
      return linha.slice();
    });
  }

  function matrizIdentidade(tamanho) {
    var matriz = [];

    for (var linha = 0; linha < tamanho; linha += 1) {
      var novaLinha = [];
      for (var coluna = 0; coluna < tamanho; coluna += 1) {
        novaLinha.push(linha === coluna ? 1 : 0);
      }
      matriz.push(novaLinha);
    }

    return matriz;
  }

  function transposta(matriz) {
    var resultado = [];

    for (var coluna = 0; coluna < matriz[0].length; coluna += 1) {
      var novaLinha = [];
      for (var linha = 0; linha < matriz.length; linha += 1) {
        novaLinha.push(matriz[linha][coluna]);
      }
      resultado.push(novaLinha);
    }

    return resultado;
  }

  function determinante(matriz) {
    var tamanho = exigirMatrizQuadrada(matriz, "O determinante");
    var trabalho = clonarMatriz(matriz);
    var sinal = 1;
    var valor = 1;

    for (var coluna = 0; coluna < tamanho; coluna += 1) {
      var pivo = coluna;
      for (var linha = coluna + 1; linha < tamanho; linha += 1) {
        if (Math.abs(trabalho[linha][coluna]) > Math.abs(trabalho[pivo][coluna])) {
          pivo = linha;
        }
      }

      if (Math.abs(trabalho[pivo][coluna]) < EPSILON) return 0;

      if (pivo !== coluna) {
        var temporaria = trabalho[pivo];
        trabalho[pivo] = trabalho[coluna];
        trabalho[coluna] = temporaria;
        sinal *= -1;
      }

      var valorPivo = trabalho[coluna][coluna];
      valor *= valorPivo;

      for (var linhaAbaixo = coluna + 1; linhaAbaixo < tamanho; linhaAbaixo += 1) {
        var fator = trabalho[linhaAbaixo][coluna] / valorPivo;
        trabalho[linhaAbaixo][coluna] = 0;

        for (var colunaAbaixo = coluna + 1; colunaAbaixo < tamanho; colunaAbaixo += 1) {
          trabalho[linhaAbaixo][colunaAbaixo] -= fator * trabalho[coluna][colunaAbaixo];
        }
      }
    }

    return limparValor(sinal * valor);
  }

  function inversa(matriz) {
    var tamanho = exigirMatrizQuadrada(matriz, "A inversa");
    var trabalho = clonarMatriz(matriz);
    var resultado = matrizIdentidade(tamanho);

    for (var coluna = 0; coluna < tamanho; coluna += 1) {
      var pivo = coluna;
      for (var linha = coluna + 1; linha < tamanho; linha += 1) {
        if (Math.abs(trabalho[linha][coluna]) > Math.abs(trabalho[pivo][coluna])) {
          pivo = linha;
        }
      }

      if (Math.abs(trabalho[pivo][coluna]) < EPSILON) {
        throw new Error("Essa matriz não possui inversa.");
      }

      if (pivo !== coluna) {
        var linhaTemporaria = trabalho[pivo];
        trabalho[pivo] = trabalho[coluna];
        trabalho[coluna] = linhaTemporaria;

        var resultadoTemporario = resultado[pivo];
        resultado[pivo] = resultado[coluna];
        resultado[coluna] = resultadoTemporario;
      }

      var valorPivo = trabalho[coluna][coluna];
      for (var c = 0; c < tamanho; c += 1) {
        trabalho[coluna][c] /= valorPivo;
        resultado[coluna][c] /= valorPivo;
      }

      for (var r = 0; r < tamanho; r += 1) {
        if (r === coluna) continue;

        var fator = trabalho[r][coluna];
        for (var c2 = 0; c2 < tamanho; c2 += 1) {
          trabalho[r][c2] -= fator * trabalho[coluna][c2];
          resultado[r][c2] -= fator * resultado[coluna][c2];
        }
      }
    }

    return resultado.map(function (linha) {
      return linha.map(limparValor);
    });
  }

  // Autovalores e autovetores

  function calcularAutovaloresEAutovetores(matriz) {
    var tamanho = exigirMatrizQuadrada(matriz, "O cálculo de autovalores");

    if (tamanho === 1) {
      return [{ valor: matriz[0][0], vetor: [1] }];
    }

    if (tamanho === 2) {
      return autovalores2x2(matriz);
    }

    if (ehDiagonal(matriz)) {
      return matriz.map(function (linha, indice) {
        var vetor = [];
        for (var i = 0; i < tamanho; i += 1) vetor.push(i === indice ? 1 : 0);
        return { valor: linha[indice], vetor: vetor };
      });
    }

    if (ehTriangular(matriz)) {
      return autovaloresTriangulares(matriz);
    }

    if (ehSimetrica(matriz)) {
      return autovaloresSimetricos(matriz);
    }

    return autovaloresGerais(matriz);
  }

  function autovalores2x2(matriz) {
    var a = matriz[0][0];
    var b = matriz[0][1];
    var c = matriz[1][0];
    var d = matriz[1][1];

    if (Math.abs(b) < EPSILON && Math.abs(c) < EPSILON && Math.abs(a - d) < EPSILON) {
      return [
        { valor: a, vetor: [1, 0] },
        { valor: a, vetor: [0, 1] },
      ];
    }

    var traco = a + d;
    var det = a * d - b * c;
    var discriminante = traco * traco - 4 * det;

    if (discriminante >= -EPSILON) {
      var raiz = Math.sqrt(Math.max(discriminante, 0));
      var lambda1 = limparValor((traco + raiz) / 2);
      var lambda2 = limparValor((traco - raiz) / 2);

      return [
        { valor: lambda1, vetor: autovetor2x2Real(matriz, lambda1) },
        { valor: lambda2, vetor: autovetor2x2Real(matriz, lambda2) },
      ];
    }

    var parteReal = traco / 2;
    var parteImaginaria = Math.sqrt(-discriminante) / 2;
    var lambdaComplexo1 = criarComplexo(parteReal, parteImaginaria);
    var lambdaComplexo2 = criarComplexo(parteReal, -parteImaginaria);

    return [
      { valor: lambdaComplexo1, vetor: autovetor2x2Complexo(matriz, lambdaComplexo1) },
      { valor: lambdaComplexo2, vetor: autovetor2x2Complexo(matriz, lambdaComplexo2) },
    ];
  }

  function autovetor2x2Real(matriz, lambda) {
    var linha1 = [matriz[0][0] - lambda, matriz[0][1]];
    var linha2 = [matriz[1][0], matriz[1][1] - lambda];
    var linha = norma(linha1) >= norma(linha2) ? linha1 : linha2;
    var vetor = [-linha[1], linha[0]];

    if (norma(vetor) < EPSILON) {
      vetor = norma(linha1) < EPSILON ? [1, 0] : [-linha2[1], linha2[0]];
    }

    return normalizarVetor(vetor);
  }

  function autovetor2x2Complexo(matriz, lambda) {
    var b = matriz[0][1];
    var c = matriz[1][0];

    if (Math.abs(b) >= Math.abs(c)) {
      return normalizarVetorComplexo([
        criarComplexo(b, 0),
        subtrairRealDoComplexo(lambda, matriz[0][0]),
      ]);
    }

    return normalizarVetorComplexo([
      subtrairRealDoComplexo(lambda, matriz[1][1]),
      criarComplexo(c, 0),
    ]);
  }

  function ehDiagonal(matriz) {
    for (var linha = 0; linha < matriz.length; linha += 1) {
      for (var coluna = 0; coluna < matriz.length; coluna += 1) {
        if (linha !== coluna && Math.abs(matriz[linha][coluna]) > EPSILON) return false;
      }
    }

    return true;
  }

  function ehTriangular(matriz) {
    var triangularSuperior = true;
    var triangularInferior = true;

    for (var linha = 0; linha < matriz.length; linha += 1) {
      for (var coluna = 0; coluna < matriz.length; coluna += 1) {
        if (linha > coluna && Math.abs(matriz[linha][coluna]) > EPSILON) {
          triangularSuperior = false;
        }

        if (linha < coluna && Math.abs(matriz[linha][coluna]) > EPSILON) {
          triangularInferior = false;
        }
      }
    }

    return triangularSuperior || triangularInferior;
  }

  function ehSimetrica(matriz) {
    for (var linha = 0; linha < matriz.length; linha += 1) {
      for (var coluna = linha + 1; coluna < matriz.length; coluna += 1) {
        if (Math.abs(matriz[linha][coluna] - matriz[coluna][linha]) > 1e-8) return false;
      }
    }

    return true;
  }

  function autovaloresTriangulares(matriz) {
    var pares = matriz.map(function (linha, indice) {
      var lambda = limparValor(linha[indice]);
      return {
        valor: lambda,
        vetor: autovetorGeral(matriz, criarComplexo(lambda, 0)),
      };
    });

    pares.sort(compararParesDeAutovalores);
    return pares;
  }

  function autovaloresSimetricos(matriz) {
    var tamanho = matriz.length;
    var trabalho = clonarMatriz(matriz);
    var vetores = matrizIdentidade(tamanho);
    var maximoDeIteracoes = 80 * tamanho * tamanho;

    for (var iteracao = 0; iteracao < maximoDeIteracoes; iteracao += 1) {
      var p = 0;
      var q = 1;
      var maior = 0;

      for (var linha = 0; linha < tamanho; linha += 1) {
        for (var coluna = linha + 1; coluna < tamanho; coluna += 1) {
          var valor = Math.abs(trabalho[linha][coluna]);
          if (valor > maior) {
            maior = valor;
            p = linha;
            q = coluna;
          }
        }
      }

      if (maior < 1e-9) break;

      var angulo = 0.5 * Math.atan2(2 * trabalho[p][q], trabalho[q][q] - trabalho[p][p]);
      var cosseno = Math.cos(angulo);
      var seno = Math.sin(angulo);
      var app = trabalho[p][p];
      var aqq = trabalho[q][q];
      var apq = trabalho[p][q];

      for (var i = 0; i < tamanho; i += 1) {
        if (i !== p && i !== q) {
          var aip = trabalho[i][p];
          var aiq = trabalho[i][q];
          trabalho[i][p] = cosseno * aip - seno * aiq;
          trabalho[p][i] = trabalho[i][p];
          trabalho[i][q] = seno * aip + cosseno * aiq;
          trabalho[q][i] = trabalho[i][q];
        }

        var vip = vetores[i][p];
        var viq = vetores[i][q];
        vetores[i][p] = cosseno * vip - seno * viq;
        vetores[i][q] = seno * vip + cosseno * viq;
      }

      trabalho[p][p] =
        cosseno * cosseno * app - 2 * seno * cosseno * apq + seno * seno * aqq;
      trabalho[q][q] =
        seno * seno * app + 2 * seno * cosseno * apq + cosseno * cosseno * aqq;
      trabalho[p][q] = 0;
      trabalho[q][p] = 0;
    }

    var pares = [];
    for (var indice = 0; indice < tamanho; indice += 1) {
      pares.push({
        valor: limparValor(trabalho[indice][indice]),
        vetor: normalizarVetor(
          vetores.map(function (linha) {
            return linha[indice];
          })
        ),
      });
    }

    pares.sort(function (a, b) {
      return b.valor - a.valor;
    });
    return pares;
  }

  function autovaloresGerais(matriz) {
    var tamanho = matriz.length;

    if (tamanho > MAXIMO_AUTOVALORES_GERAL) {
      throw new Error(
        "O cálculo geral de autovalores aceita matrizes até " +
          MAXIMO_AUTOVALORES_GERAL +
          " \u00D7 " +
          MAXIMO_AUTOVALORES_GERAL +
          "."
      );
    }

    var coeficientes = coeficientesPolinomioCaracteristico(matriz);
    var raizes = encontrarRaizesDoPolinomio(coeficientes);
    var pares = raizes.map(function (lambda) {
      return {
        valor: simplificarComplexo(lambda),
        vetor: autovetorGeral(matriz, lambda),
      };
    });

    pares.sort(compararParesDeAutovalores);
    return pares;
  }

  function coeficientesPolinomioCaracteristico(matriz) {
    var tamanho = matriz.length;
    var identidade = matrizIdentidade(tamanho);
    var b = identidade;
    var coeficientes = [];

    for (var k = 1; k <= tamanho; k += 1) {
      var ab = multiplicarMatrizes(matriz, b);
      var coeficiente = limparValor(-traco(ab) / k);
      coeficientes.push(coeficiente);
      b = somarComIdentidadeEscalada(ab, coeficiente);
    }

    return coeficientes;
  }

  function multiplicarMatrizes(a, b) {
    var resultado = [];

    for (var linha = 0; linha < a.length; linha += 1) {
      var novaLinha = [];
      for (var coluna = 0; coluna < b[0].length; coluna += 1) {
        var soma = 0;
        for (var indice = 0; indice < b.length; indice += 1) {
          soma += a[linha][indice] * b[indice][coluna];
        }
        novaLinha.push(limparValor(soma));
      }
      resultado.push(novaLinha);
    }

    return resultado;
  }

  function somarComIdentidadeEscalada(matriz, escalar) {
    return matriz.map(function (linha, indiceLinha) {
      return linha.map(function (valor, indiceColuna) {
        return limparValor(valor + (indiceLinha === indiceColuna ? escalar : 0));
      });
    });
  }

  function traco(matriz) {
    var soma = 0;

    for (var indice = 0; indice < matriz.length; indice += 1) {
      soma += matriz[indice][indice];
    }

    return soma;
  }

  function encontrarRaizesDoPolinomio(coeficientes) {
    var grau = coeficientes.length;
    var maximoCoeficiente = coeficientes.reduce(function (maior, valor) {
      return Math.max(maior, Math.abs(valor));
    }, 0);
    var raio = Math.max(1, 1 + maximoCoeficiente);
    var raizes = [];
    var tolerancia = 1e-10;
    var maximoDeIteracoes = 1400;

    for (var indice = 0; indice < grau; indice += 1) {
      var angulo = (2 * Math.PI * (indice + 0.37)) / grau;
      raizes.push(criarComplexo(raio * Math.cos(angulo), raio * Math.sin(angulo)));
    }

    for (var iteracao = 0; iteracao < maximoDeIteracoes; iteracao += 1) {
      var proximas = [];
      var maiorPasso = 0;

      for (var i = 0; i < grau; i += 1) {
        var denominador = criarComplexo(1, 0);
        for (var j = 0; j < grau; j += 1) {
          if (i === j) continue;
          denominador = multiplicarComplexos(denominador, subtrairComplexos(raizes[i], raizes[j]));
        }

        if (moduloComplexo(denominador) < EPSILON) {
          denominador = criarComplexo(EPSILON, EPSILON * (i + 1));
        }

        var passo = dividirComplexos(avaliarPolinomio(coeficientes, raizes[i]), denominador);
        proximas.push(subtrairComplexos(raizes[i], passo));
        maiorPasso = Math.max(maiorPasso, moduloComplexo(passo));
      }

      raizes = proximas;
      if (maiorPasso < tolerancia) break;
    }

    var maiorResiduo = raizes.reduce(function (maior, raiz) {
      return Math.max(maior, moduloComplexo(avaliarPolinomio(coeficientes, raiz)));
    }, 0);

    if (maiorResiduo > 1e-5 * Math.max(1, maximoCoeficiente)) {
      throw new Error("Não foi possível estabilizar os autovalores dessa matriz.");
    }

    return agruparRaizesProximas(raizes).map(function (raiz) {
      return limparComplexo(raiz);
    });
  }

  function agruparRaizesProximas(raizes) {
    var usadas = raizes.map(function () {
      return false;
    });
    var agrupadas = [];

    for (var i = 0; i < raizes.length; i += 1) {
      if (usadas[i]) continue;

      var grupo = [i];
      usadas[i] = true;

      for (var indiceGrupo = 0; indiceGrupo < grupo.length; indiceGrupo += 1) {
        var atual = grupo[indiceGrupo];

        for (var j = 0; j < raizes.length; j += 1) {
          if (usadas[j] || !raizesSaoProximas(raizes[atual], raizes[j])) continue;
          grupo.push(j);
          usadas[j] = true;
        }
      }

      var soma = criarComplexo(0, 0);
      grupo.forEach(function (indice) {
        soma = somarComplexos(soma, raizes[indice]);
      });

      var media = limparComplexo(dividirComplexoPorReal(soma, grupo.length));
      grupo.forEach(function (indice) {
        agrupadas[indice] = media;
      });
    }

    return agrupadas;
  }

  function raizesSaoProximas(a, b) {
    var escala = Math.max(1, moduloComplexo(a), moduloComplexo(b));
    return moduloComplexo(subtrairComplexos(a, b)) <= 1e-5 * escala;
  }

  function avaliarPolinomio(coeficientes, valor) {
    var resultado = criarComplexo(1, 0);

    coeficientes.forEach(function (coeficiente) {
      resultado = somarComplexos(
        multiplicarComplexos(resultado, valor),
        criarComplexo(coeficiente, 0)
      );
    });

    return resultado;
  }

  function autovetorGeral(matriz, lambda) {
    var lambdaComplexo = paraComplexo(lambda);
    var sistema = matriz.map(function (linha, indiceLinha) {
      return linha.map(function (valor, indiceColuna) {
        var entrada = criarComplexo(valor, 0);
        return indiceLinha === indiceColuna ? subtrairComplexos(entrada, lambdaComplexo) : entrada;
      });
    });
    var toleranciaBase = Math.max(1e-9, normaMatrizComplexa(sistema) * 1e-8);

    for (var multiplicador = 1; multiplicador <= 1000000; multiplicador *= 10) {
      var vetor = vetorDoNucleo(sistema, toleranciaBase * multiplicador);
      if (vetor) return normalizarVetorComplexo(vetor);
    }

    throw new Error("Não foi possível encontrar um autovetor para essa matriz.");
  }

  function vetorDoNucleo(matriz, tolerancia) {
    var trabalho = clonarMatrizComplexa(matriz);
    var linhas = trabalho.length;
    var colunas = trabalho[0].length;
    var pivos = [];
    var linhaPivo = 0;

    for (var coluna = 0; coluna < colunas && linhaPivo < linhas; coluna += 1) {
      var melhorLinha = linhaPivo;
      var melhorValor = moduloComplexo(trabalho[melhorLinha][coluna]);

      for (var linha = linhaPivo + 1; linha < linhas; linha += 1) {
        var valor = moduloComplexo(trabalho[linha][coluna]);
        if (valor > melhorValor) {
          melhorValor = valor;
          melhorLinha = linha;
        }
      }

      if (melhorValor <= tolerancia) continue;

      if (melhorLinha !== linhaPivo) {
        var temporaria = trabalho[melhorLinha];
        trabalho[melhorLinha] = trabalho[linhaPivo];
        trabalho[linhaPivo] = temporaria;
      }

      var pivo = trabalho[linhaPivo][coluna];
      for (var c = coluna; c < colunas; c += 1) {
        trabalho[linhaPivo][c] = dividirComplexos(trabalho[linhaPivo][c], pivo);
      }

      for (var r = 0; r < linhas; r += 1) {
        if (r === linhaPivo) continue;

        var fator = trabalho[r][coluna];
        if (moduloComplexo(fator) <= tolerancia) continue;

        for (var c2 = coluna; c2 < colunas; c2 += 1) {
          trabalho[r][c2] = subtrairComplexos(
            trabalho[r][c2],
            multiplicarComplexos(fator, trabalho[linhaPivo][c2])
          );
        }
      }

      pivos.push(coluna);
      linhaPivo += 1;
    }

    if (pivos.length >= colunas) return null;

    var colunasComPivo = {};
    pivos.forEach(function (coluna) {
      colunasComPivo[coluna] = true;
    });

    var colunaLivre = colunas - 1;
    while (colunasComPivo[colunaLivre]) {
      colunaLivre -= 1;
    }

    var vetor = [];
    for (var indice = 0; indice < colunas; indice += 1) {
      vetor.push(criarComplexo(0, 0));
    }
    vetor[colunaLivre] = criarComplexo(1, 0);

    for (var indicePivo = pivos.length - 1; indicePivo >= 0; indicePivo -= 1) {
      var colunaPivo = pivos[indicePivo];
      var soma = criarComplexo(0, 0);

      for (var colunaAtual = colunaPivo + 1; colunaAtual < colunas; colunaAtual += 1) {
        soma = somarComplexos(
          soma,
          multiplicarComplexos(trabalho[indicePivo][colunaAtual], vetor[colunaAtual])
        );
      }

      vetor[colunaPivo] = negarComplexo(soma);
    }

    return vetor;
  }

  function clonarMatrizComplexa(matriz) {
    return matriz.map(function (linha) {
      return linha.map(function (valor) {
        var complexo = paraComplexo(valor);
        return criarComplexo(complexo.real, complexo.imaginario);
      });
    });
  }

  function normaMatrizComplexa(matriz) {
    var maior = 0;

    matriz.forEach(function (linha) {
      linha.forEach(function (valor) {
        maior = Math.max(maior, moduloComplexo(valor));
      });
    });

    return maior;
  }

  function compararParesDeAutovalores(a, b) {
    var valorA = paraComplexo(a.valor);
    var valorB = paraComplexo(b.valor);
    var diferencaReal = valorB.real - valorA.real;
    var diferencaImaginaria = valorB.imaginario - valorA.imaginario;

    if (Math.abs(diferencaReal) > 1e-8) return diferencaReal;
    if (Math.abs(diferencaImaginaria) > 1e-8) return diferencaImaginaria;
    return 0;
  }

  function norma(vetor) {
    return Math.sqrt(
      vetor.reduce(function (soma, valor) {
        return soma + valor * valor;
      }, 0)
    );
  }

  function normalizarVetor(vetor) {
    var tamanho = norma(vetor);
    if (tamanho < EPSILON) return vetor.slice();

    return vetor.map(function (valor) {
      return limparValor(valor / tamanho);
    });
  }

  function criarComplexo(real, imaginario) {
    return {
      real: limparValor(real),
      imaginario: limparValor(imaginario),
    };
  }

  function ehComplexo(valor) {
    return valor && typeof valor === "object" && "real" in valor && "imaginario" in valor;
  }

  function paraComplexo(valor) {
    return ehComplexo(valor) ? valor : criarComplexo(valor, 0);
  }

  function somarComplexos(a, b) {
    return criarComplexo(a.real + b.real, a.imaginario + b.imaginario);
  }

  function subtrairComplexos(a, b) {
    return criarComplexo(a.real - b.real, a.imaginario - b.imaginario);
  }

  function negarComplexo(valor) {
    return criarComplexo(-valor.real, -valor.imaginario);
  }

  function multiplicarComplexos(a, b) {
    return criarComplexo(
      a.real * b.real - a.imaginario * b.imaginario,
      a.real * b.imaginario + a.imaginario * b.real
    );
  }

  function dividirComplexos(a, b) {
    var denominador = b.real * b.real + b.imaginario * b.imaginario;

    if (denominador < EPSILON * EPSILON) {
      throw new Error("Divisão por um número muito próximo de zero.");
    }

    return criarComplexo(
      (a.real * b.real + a.imaginario * b.imaginario) / denominador,
      (a.imaginario * b.real - a.real * b.imaginario) / denominador
    );
  }

  function dividirComplexoPorReal(valor, escalar) {
    return criarComplexo(valor.real / escalar, valor.imaginario / escalar);
  }

  function moduloComplexo(valor) {
    return Math.sqrt(valor.real * valor.real + valor.imaginario * valor.imaginario);
  }

  function subtrairRealDoComplexo(valorComplexo, valorReal) {
    return criarComplexo(valorComplexo.real - valorReal, valorComplexo.imaginario);
  }

  function limparComplexo(valor) {
    return criarComplexo(valor.real, valor.imaginario);
  }

  function simplificarComplexo(valor) {
    var limpo = limparComplexo(valor);

    if (Math.abs(limpo.imaginario) < 1e-8) {
      return limparValor(limpo.real);
    }

    return limpo;
  }

  function normalizarVetorComplexo(vetor) {
    var tamanho = Math.sqrt(
      vetor.reduce(function (soma, valor) {
        return soma + Math.pow(moduloComplexo(paraComplexo(valor)), 2);
      }, 0)
    );

    if (tamanho < EPSILON) return vetor.slice();

    var normalizado = vetor.map(function (valor) {
      return dividirComplexoPorReal(paraComplexo(valor), tamanho);
    });
    var indiceMaior = 0;

    for (var indice = 1; indice < normalizado.length; indice += 1) {
      if (moduloComplexo(normalizado[indice]) > moduloComplexo(normalizado[indiceMaior])) {
        indiceMaior = indice;
      }
    }

    var referencia = normalizado[indiceMaior];
    var moduloReferencia = moduloComplexo(referencia);

    if (moduloReferencia > EPSILON) {
      var fase = dividirComplexoPorReal(referencia, moduloReferencia);
      normalizado = normalizado.map(function (valor) {
        return dividirComplexos(valor, fase);
      });
    }

    return normalizado.map(simplificarComplexo);
  }

  function limparValor(valor) {
    return Math.abs(valor) < EPSILON ? 0 : valor;
  }

  // Apresentação dos resultados

  function criarCabecalhoDoResultado(titulo) {
    var cabecalho = criarElemento("div", "calculadora-matrizes-resultado-cabecalho");
    var rotulo = criarElemento("span", "calculadora-matrizes-resultado-rotulo", "Resultado");
    var heading = criarElemento("h3", "calculadora-matrizes-resultado-titulo", titulo);

    cabecalho.appendChild(rotulo);
    cabecalho.appendChild(heading);
    return cabecalho;
  }

  function prepararResultado(resultado, titulo) {
    resultado.className = "calculadora-matrizes-resultado";
    resultado.innerHTML = "";
    resultado.appendChild(criarCabecalhoDoResultado(titulo));
  }

  function mostrarEstadoInicial(resultado) {
    var icone = criarElemento("span", "calculadora-matrizes-resultado-vazio-icone", "=");
    var texto = criarElemento("p", "", "O resultado aparece aqui.");

    resultado.className = "calculadora-matrizes-resultado calculadora-matrizes-resultado-vazio";
    resultado.innerHTML = "";
    icone.setAttribute("aria-hidden", "true");
    resultado.appendChild(icone);
    resultado.appendChild(texto);
  }

  function mostrarValor(resultado, titulo, nome, valor) {
    var linha = criarElemento("div", "calculadora-matrizes-valor");
    var simbolo = criarElemento("span", "calculadora-matrizes-valor-simbolo", nome + " =");
    var numero = criarElemento("strong", "", formatarNumero(valor));

    prepararResultado(resultado, titulo);
    linha.appendChild(simbolo);
    linha.appendChild(numero);
    resultado.appendChild(linha);
  }

  function mostrarMatriz(resultado, titulo, nome, matriz) {
    var linha = criarElemento("div", "calculadora-matrizes-saida-matriz");
    var simbolo = criarElemento("span", "calculadora-matrizes-saida-simbolo", nome + " =");

    prepararResultado(resultado, titulo);
    linha.appendChild(simbolo);
    linha.appendChild(criarTabelaDaMatriz(matriz));
    resultado.appendChild(linha);
  }

  function mostrarAutovalores(resultado, pares) {
    var lista = criarElemento("div", "calculadora-matrizes-autos");

    prepararResultado(resultado, "Autovalores e autovetores");

    pares.forEach(function (par, indice) {
      var item = criarElemento("div", "calculadora-matrizes-auto");
      var valor = criarElemento(
        "strong",
        "calculadora-matrizes-auto-valor",
        "\u03BB" + (indice + 1) + " = " + formatarValor(par.valor)
      );
      var vetor = criarElemento("div", "calculadora-matrizes-auto-vetor");
      var rotuloVetor = criarElemento("span", "", "v" + (indice + 1) + " =");

      vetor.appendChild(rotuloVetor);
      vetor.appendChild(
        criarTabelaDaMatriz(
          par.vetor.map(function (entrada) {
            return [entrada];
          })
        )
      );
      item.appendChild(valor);
      item.appendChild(vetor);
      lista.appendChild(item);
    });

    resultado.appendChild(lista);
  }

  function mostrarErro(resultado, mensagem) {
    var titulo = criarElemento("strong", "", "Não foi possível calcular");
    var texto = criarElemento("p", "", mensagem);

    resultado.className = "calculadora-matrizes-resultado calculadora-matrizes-resultado-erro";
    resultado.innerHTML = "";
    resultado.appendChild(titulo);
    resultado.appendChild(texto);
  }

  function criarTabelaDaMatriz(matriz) {
    var envoltorio = criarElemento("div", "calculadora-matrizes-tabela-wrap");
    var tabela = criarElemento("table", "calculadora-matrizes-tabela");

    tabela.setAttribute("aria-label", "Matriz resultante");

    matriz.forEach(function (linha) {
      var tr = document.createElement("tr");

      linha.forEach(function (valor) {
        var celula = criarElemento("td", "", formatarValor(valor));
        tr.appendChild(celula);
      });

      tabela.appendChild(tr);
    });

    envoltorio.appendChild(tabela);
    return envoltorio;
  }

  function formatarValor(valor) {
    if (valor && typeof valor === "object" && "real" in valor && "imaginario" in valor) {
      return formatarComplexo(valor);
    }
    return formatarNumero(valor);
  }

  function formatarComplexo(valor) {
    var real = limparValor(valor.real);
    var imaginario = limparValor(valor.imaginario);

    if (!imaginario) return formatarNumero(real);
    if (!real) return formatarNumero(imaginario) + "i";

    var sinal = imaginario < 0 ? " \u2212 " : " + ";
    return formatarNumero(real) + sinal + formatarNumero(Math.abs(imaginario)) + "i";
  }

  function formatarNumero(valor) {
    var numero = limparValor(Number(valor));
    if (!isFinite(numero)) return String(valor);

    var arredondado = Math.round(numero * 1000000) / 1000000;
    var texto = String(arredondado);
    return texto === "-0" ? "0" : texto;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", configurarCalculadoraDeMatrizes);
  } else {
    configurarCalculadoraDeMatrizes();
  }
})();
