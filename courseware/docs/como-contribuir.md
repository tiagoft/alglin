# Como contribuir

Este material aceita contribuições, e a sua é muito bem-vinda! Você pode contribuir com **conteúdo** (correções, exemplos, demonstrações, exercícios que você escreveu) ou com **funcionalidades** (applets, calculadoras, acessibilidade, animações).

A forma mais simples de contribuir é usando um agente de programação, como o [Claude Code](https://claude.com/claude-code) ou o [Codex](https://openai.com/codex/). O repositório tem um arquivo `AGENTS.md` com as regras de contribuição: o agente faz o fork, aplica a sua mudança, confere se ela segue as convenções da disciplina e abre o pull request para você.

## As regras, em resumo

* **Seu texto, sua justificativa.** O agente não escreve conteúdo educacional por você: ele formata, posiciona e confere o texto que *você* escreveu. A justificativa do pull request também precisa ser sua, e específica ("o aspecto X estava ambíguo" e não "melhorei o texto").
* **Nada do futuro.** A contribuição só pode usar conceitos que aparecem antes dela na sequência da disciplina (a ordem do menu deste site).
* **Notação.** Escalares em minúscula ($x$), constantes em maiúscula ($N$), vetores em minúscula negrito ($\boldsymbol{x}$) e matrizes em maiúscula negrito ($\boldsymbol{A}$).

As regras completas estão no [AGENTS.md](https://github.com/tiagoft/alglin/blob/main/AGENTS.md).

## Passo a passo com um agente

### 1. Prepare o ambiente (uma vez só)

Você vai precisar de:

* uma conta no [GitHub](https://github.com);
* o [git](https://git-scm.com/) e o [GitHub CLI](https://cli.github.com/) (`gh`) instalados;
* o [Claude Code](https://claude.com/claude-code) ou o [Codex](https://openai.com/codex/) instalado.

Depois, faça login no GitHub pelo terminal:

    gh auth login

### 2. Faça o fork e abra o agente

    gh repo fork tiagoft/alglin --clone
    cd alglin

e então inicie o agente dentro da pasta:

    claude

ou

    codex

### 3. Descreva sua contribuição

Diga ao agente o que você quer contribuir, **onde** no material, **o seu texto** (para contribuições de conteúdo) e **a sua justificativa**. Por exemplo:

    Quero contribuir com o material.
    Tipo: conteúdo.
    Onde: em matrizes/matrizes.md, logo depois da definição de multiplicação de matrizes.
    Meu texto: "Veja que cada elemento c_{i,j} de C=AB é o produto interno entre
    a linha i de A e a coluna j de B, porque ..."
    Justificativa: senti falta de ver a ligação entre multiplicação de matrizes e
    produto interno logo na definição.

ou, para uma funcionalidade:

    Quero contribuir com uma funcionalidade.
    O que é: um applet que mostra a projeção de um vetor sobre outro, arrastando os vetores com o mouse.
    Onde: na página de projeções e produto interno.
    Justificativa: eu só entendi a projeção quando desenhei vários casos à mão;
    um applet deixaria isso mais rápido de explorar.

O agente pode fazer perguntas, sugerir ajustes de formatação ou de posição, ou apontar que algum conceito ainda não foi visto naquele ponto da disciplina. Responda e ajuste junto com ele.

### 4. Revise e abra o pull request

Antes de autorizar o pull request, leia a mudança que o agente fez. Quando estiver tudo certo, peça para o agente abrir o pull request: ele vai usar o template do repositório, com a sua justificativa e a lista de conteúdos da disciplina usados.

Depois que o pull request for aceito, seu nome aparece na página de [Contribuições](contribuicoes.md)!

## Sem agente

Também dá para contribuir sem agente: faça o fork pelo GitHub, crie uma branch, faça as mudanças e abra o pull request preenchendo o template. As mesmas regras valem.
