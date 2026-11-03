# AlgLin
Álgebra Linear e Teoria da Informação - Material Didático

# Ambiente computacional

1. Instale o package manager `uv`. Siga as [instruções de instalação](https://docs.astral.sh/uv/getting-started/installation/).

2. Clone o repositório:

    git clone git@github.com:tiagoft/alglin.git

3. Navegue para o diretório do curso:

    cd alglin

4. Instale as bibliotecas necessárias:

    uv sync

5. Ative o ambiente de desenvolvimento:

    source .venv/bin/activate

6. Use o ambiente `alglin` para fazer as atividades

# Como fazer um pull request

Antes de contribuir, leia as regras em [AGENTS.md](AGENTS.md) (elas valem para quem usa agentes como Claude Code ou Codex e também para quem contribui sem agente). O passo a passo com agente está na página [Como contribuir](courseware/docs/como-contribuir.md) do material.

Para contribuir sem agente, crie um fork do repositório original no GitHub e faça as alterações em uma branch do fork:

1. Acesse o repositório original no GitHub e clique em **Fork**.
2. Clone o fork criado e entre no diretório do projeto:

    git clone <URL_DO_SEU_FORK>
    cd alglin

3. Crie uma branch para a sua contribuição:

    git switch -c minha-contribuicao

4. Faça as alterações necessárias.
5. Adicione e faça commit das alterações:

    git add .
    git commit -m "Descreva suas alterações"

6. Envie a branch para o seu fork:

    git push origin minha-contribuicao

7. Acesse o seu fork no GitHub e abra a aba **Pull requests**.
8. Clique em **New pull request**, confira se o repositório original é o destino e crie o pull request, preenchendo o template (tipo, justificativa escrita por você e conteúdos da disciplina usados).

O pull request ficará disponível no repositório original para revisão.

# Link para o workbook

    https://www.overleaf.com/read/qrxwjzfjpqrp#af6903

# Instâncias do curso

* [2o. semestre de 2025](sobre_2025s2.md)
* [1o. semestre de 2025](sobre_2025s1.md)