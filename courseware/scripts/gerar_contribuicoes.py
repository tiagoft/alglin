"""Gera docs/contribuicoes.md a partir dos pull requests mergeados.

Usa o GitHub CLI (`gh`) para listar os PRs mergeados no repositório e
monta uma tabela de agradecimentos com a data, o título do PR (que é a
mensagem de commit da contribuição) e o username de quem contribuiu.

Rode localmente sempre que aceitar um pull request:

    python courseware/scripts/gerar_contribuicoes.py

e faça commit do docs/contribuicoes.md atualizado.
"""

import json
import subprocess
from pathlib import Path

SAIDA = Path(__file__).parent / ".." / "docs" / "contribuicoes.md"

# Autores que não entram na tabela de agradecimentos.
IGNORAR = {"dependabot", "tiagoft"}

CABECALHO = """# Contribuições

Este material é construído coletivamente. Agradecemos a todas as pessoas
que contribuíram com correções, exercícios e melhorias por meio de pull
requests!

Quer contribuir também? Veja as instruções no
[README do repositório](https://github.com/tiagoft/alglin#como-fazer-um-pull-request).

<!-- Arquivo gerado por courseware/scripts/gerar_contribuicoes.py. Não edite à mão. -->
"""


def _prs_mergeados():
    saida = subprocess.run(
        ["gh", "pr", "list", "--state", "merged", "--limit", "1000",
         "--json", "number,title,author,mergedAt,url"],
        check=True, capture_output=True, text=True,
    ).stdout
    prs = [p for p in json.loads(saida) if p["author"]["login"] not in IGNORAR]
    return sorted(prs, key=lambda p: p["mergedAt"], reverse=True)


def _celula(texto):
    """Evita que o texto quebre a tabela markdown."""
    return texto.replace("|", "\\|").replace("\n", " ").strip()


def _gerar_markdown(prs):
    autores = sorted({p["author"]["login"] for p in prs}, key=str.lower)
    linhas = [CABECALHO]

    linhas.append("## Quem contribuiu\n")
    linhas.append(", ".join(f"[@{a}](https://github.com/{a})" for a in autores) + "\n")

    linhas.append("## Contribuições aceitas\n")
    linhas.append("| Data | Contribuição | Autor(a) |")
    linhas.append("| --- | --- | --- |")
    for p in prs:
        data = p["mergedAt"][:10]
        login = p["author"]["login"]
        linhas.append(
            f"| {data} | [{_celula(p['title'])}]({p['url']}) (#{p['number']}) "
            f"| [@{login}](https://github.com/{login}) |"
        )
    return "\n".join(linhas) + "\n"


def main():
    prs = _prs_mergeados()
    SAIDA.write_text(_gerar_markdown(prs), encoding="utf-8")
    print(f"{SAIDA.resolve()}: {len(prs)} contribuições")


if __name__ == "__main__":
    main()
