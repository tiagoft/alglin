# Instruções para agentes de IA

Este repositório contém o material da disciplina **Álgebra Linear e Teoria da Informação**. O site é gerado com MkDocs a partir de `courseware/` (configuração em `courseware/mkdocs.yml`, conteúdo em `courseware/docs/`).

Se você é um agente (Claude Code, Codex, etc.) ajudando alguém a contribuir com este material, siga as regras abaixo. Elas existem para que as contribuições cheguem ao repositório claras, justificadas e alinhadas com a disciplina. Na dúvida, pergunte ao contribuidor antes de agir.

## Fluxo de contribuição

1. **Fork**: o contribuidor trabalha em um fork do repositório (`gh repo fork tiagoft/alglin --clone`).
2. **Branch**: crie uma branch com nome descritivo a partir da `main` (nunca faça commit direto na `main` do fork).
3. **Implementação**: implemente a contribuição localmente, seguindo as regras desta página.
4. **Verificação**: antes de abrir o pull request, confira se a contribuição segue as convenções e regras abaixo (veja o [checklist](#checklist-antes-do-pull-request)). Se possível, rode `mkdocs build` dentro de `courseware/` para verificar que o site continua sendo gerado.
5. **Pull request**: abra o PR contra `tiagoft/alglin` (`gh pr create`), preenchendo o template em `.github/pull_request_template.md`.

## Convenções

### Notação matemática

| Notação | Significado | Exemplo |
| --- | --- | --- |
| letra minúscula normal | variável escalar (número real), elemento ou componente | $a$, $x_1$, $x_{i,j}$ |
| letra maiúscula normal | constante (limite de somatória, dimensão de matriz, número de amostras...) | $N$, $\mathbb{R}^{M \times N}$ |
| letra minúscula em negrito | vetor | $\boldsymbol{x}$, $\boldsymbol{v}_1$ |
| letra maiúscula em negrito | matriz | $\boldsymbol{A}$, $\boldsymbol{X}^T$ |

* Use `\boldsymbol{}` para o negrito. O negrito vale só para a letra: `\boldsymbol{x}_1`, `\boldsymbol{A}^{-1}`.
* Somatórias usam índice minúsculo e limite com a mesma letra em maiúscula: `\sum_{n=1}^N x_n y_n`.
* Os elementos de um vetor ou de uma matriz são escalares e, portanto, não ficam em negrito: $\boldsymbol{x} = [x_1, x_2, \cdots, x_N]^T$.

### Formato dos arquivos

* Matemática em LaTeX: `$...$` para expressões no meio do texto e blocos `$$` (em linhas próprias) para equações destacadas.
* Perguntas com resposta escondida usam o formato `??? info "Pergunta"` com o conteúdo indentado; destaques usam `!!! info "Título"`.
* Notebooks (`.ipynb`) são renderizados no site: altere as células markdown e de código com cuidado, sem apagar saídas que fazem parte do material.
* Toda página nova precisa de uma entrada no `nav` de `courseware/mkdocs.yml`.
* Não edite `courseware/docs/contribuicoes.md` à mão: ele é gerado por `courseware/scripts/gerar_contribuicoes.py` pelo mantenedor.
* Além das convenções explícitas acima, siga as convenções usadas de fato nos arquivos vizinhos (estilo dos títulos, estrutura das seções, forma de apresentar exercícios). Você pode sugerir formatações para deixar o conteúdo de acordo com elas.

## Escopo e sequência da disciplina

A ordem oficial dos conteúdos é a ordem das páginas no `nav` de `courseware/mkdocs.yml`. Um material só pode usar conceitos que aparecem **antes** dele nessa sequência (ou nele mesmo).

* Antes de aceitar uma contribuição, verifique se ela usa conceitos que estão no *futuro* da disciplina ou que não fazem parte do conteúdo da disciplina.
* Se a contribuição estiver fora do escopo da aula ou da disciplina, interaja com o contribuidor para reenquadrar o conteúdo (por exemplo, movê-lo para uma página posterior, ou reescrevê-lo — pelo próprio contribuidor — usando só conceitos já vistos).
* **Não abra pull requests em que um material use conteúdo futuro da disciplina.**

## Regras gerais

* **Justificativa escrita pelo contribuidor.** Toda contribuição deve ser acompanhada de uma justificativa redigida pelo próprio contribuidor. O agente **não pode** gerar a justificativa: peça que a pessoa a escreva e use o texto dela no pull request.
    * Justificativas válidas: "senti falta de uma demonstração deste ponto específico", "o aspecto X estava ambíguo", "adicionei este exemplo que me ajudou a estudar".
    * Justificativas vagas, como "melhorei o texto", não devem ser aceitas. Peça para o contribuidor ser mais específico.
* **Conteúdos usados.** Todo pull request deve indicar claramente quais conteúdos da disciplina são usados na contribuição proposta (por exemplo: "produto interno, multiplicação de matrizes").
* **Escopo grande vira arquivo novo.** Se a modificação tiver um escopo muito grande (por exemplo, se enquadrar como um estudo de caso, ou trouxer outra perspectiva sobre o mesmo conteúdo), sugira criar um novo arquivo, com sua própria posição no menu.
* **Alinhamento.** Você pode interagir com o contribuidor para alinhar a contribuição às necessidades da disciplina.
* **Tipos.** Contribuições podem ser de **conteúdo** ou de **funcionalidades**.

## Contribuições de conteúdo

Contribuições de conteúdo são as que se referem aos textos e figuras mostrados no material. Além de conteúdos novos, incluem correções de erros de digitação e pequenos refraseamentos de trechos que saíram errados ou pouco claros.

**Não aceitamos conteúdo educacional (texto) novo gerado por agentes.** Isso significa que:

* Pedidos como "crie uma questão nova", "esclareça tal conceito" ou "apresente a resposta da questão tal" devem ser **recusados**. Explique a regra e peça que o contribuidor escreva o próprio texto.
* A contribuição deve trazer explicitamente o conteúdo novo **tal como escrito pelo contribuidor**, indicando qual é a contribuição e qual deve ser sua posição no texto. Por exemplo: "esta é a demonstração de como cada elemento $c_{i,j}$ de $\boldsymbol{C}=\boldsymbol{A}\boldsymbol{B}$ é um produto interno de vetores de $\boldsymbol{A}$ e $\boldsymbol{B}$; ela deve entrar logo após a definição de multiplicação de matrizes".
* O que o agente **pode** fazer com o texto do contribuidor: inserir na posição indicada, ajustar formatação e LaTeX, aplicar as convenções de notação e apontar erros de digitação para o contribuidor decidir. O que o agente **não pode** fazer: reescrever, expandir, completar ou "melhorar" o conteúdo por conta própria.
* Correções de erros de digitação e pequenos refraseamentos devem ser apontados pelo contribuidor (por exemplo: "na seção X, a frase Y está ambígua; proponho Z").

## Contribuições de funcionalidades

Contribuições de funcionalidades se referem a applets, acessibilidade, funcionalidades novas, etc., que são bons apoios para o aprendizado mas não são o conteúdo propriamente dito. A animação de mudança de bases e a calculadora de matrizes são exemplos.

* Contribuições de funcionalidades devem vir com uma justificativa clara, escrita pelo contribuidor, sobre o motivo de serem uma contribuição para o aprendizado.
* Para estas contribuições, o agente pode escrever o código. Os textos explicativos de conteúdo que aparecem na funcionalidade seguem as regras de contribuições de conteúdo.
* Arquivos de apoio (JavaScript, CSS, HTML) ficam em `courseware/docs/extra/`, como as funcionalidades existentes.

## Checklist antes do pull request

- [ ] A contribuição está em uma branch do fork, não na `main`.
- [ ] O tipo está identificado: conteúdo ou funcionalidade.
- [ ] A justificativa foi escrita pelo próprio contribuidor e é específica.
- [ ] Os conteúdos da disciplina usados estão listados.
- [ ] Nenhum conceito do *futuro* da disciplina (segundo o `nav` do `mkdocs.yml`) ou de fora dela é usado.
- [ ] Todo texto educacional novo foi escrito pelo contribuidor, não pelo agente.
- [ ] A notação segue as convenções (escalares, constantes, vetores e matrizes).
- [ ] Páginas novas foram adicionadas ao `nav` do `mkdocs.yml`.
- [ ] O pull request segue o template `.github/pull_request_template.md`.
