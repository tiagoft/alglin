"""Gera o bloco de calendário da home a partir de calendario.xlsx.

Lê courseware/calendario.xlsx e substitui o marcador <!-- CALENDARIO -->
em docs/index.md por uma lista de itens (data + conteúdo + questão +
link, quando houver). A separação entre aulas passadas e futuras é feita
no navegador (ver docs/extra/calendario.js) — aqui só listamos tudo em
ordem cronológica.
"""

import html
import logging
from pathlib import Path

import pandas as pd

CALENDARIO_XLSX = Path(__file__).parent / ".." / "calendario.xlsx"
MARCADOR = "<!-- CALENDARIO -->"

MESES = {
    1: "janeiro", 2: "fevereiro", 3: "março", 4: "abril",
    5: "maio", 6: "junho", 7: "julho", 8: "agosto",
    9: "setembro", 10: "outubro", 11: "novembro", 12: "dezembro",
}

log = logging.getLogger("mkdocs.hooks.calendario")


def _resolver_link(link, page, files):
    """Resolve um caminho da coluna Link (relativo a docs/) para a URL
    correta da página de destino, relativa à home."""
    destino = files.get_file_from_path(link)
    if destino is None:
        log.warning(f"calendario.xlsx: link '{link}' não corresponde a nenhum arquivo em docs/")
        return None
    return destino.url_relative_to(page.file)


def _gerar_html_calendario(page, files):
    df = pd.read_excel(CALENDARIO_XLSX, sheet_name="Calendario")
    df = df.dropna(subset=["Data", "Conteúdo"]).sort_values("Data")

    itens = []
    for _, linha in df.iterrows():
        data = pd.Timestamp(linha["Data"])
        rotulo = f"{data.day} de {MESES[data.month]}"
        conteudo_texto = html.escape(str(linha["Conteúdo"]).strip())
        questao = linha.get("Questão")
        link = linha.get("Link")

        conteudo_html = conteudo_texto
        if isinstance(link, str) and link.strip():
            url = _resolver_link(link.strip(), page, files)
            if url:
                conteudo_html = f'<a href="{url}">{conteudo_texto}</a>'

        questao_html = ""
        if isinstance(questao, str) and questao.strip():
            questao_html = (
                f'<div class="calendario-questao">'
                f'{html.escape(questao.strip())}</div>'
            )

        itens.append(
            f'      <li class="calendario-item" data-date="{data.strftime("%Y-%m-%d")}">'
            f'<strong>{rotulo}</strong> — {conteudo_html}{questao_html}</li>'
        )

    itens_html = "\n".join(itens)
    return (
        '<div class="calendario">\n'
        '  <details id="calendario-passados">\n'
        '    <summary>Aulas anteriores</summary>\n'
        '    <ul id="calendario-passados-lista"></ul>\n'
        '  </details>\n'
        '  <ul id="calendario-futuros-lista">\n'
        f'{itens_html}\n'
        '  </ul>\n'
        '</div>'
    )


def on_page_markdown(markdown, page, config, files):
    if page.file.src_uri != "index.md":
        return markdown

    if MARCADOR not in markdown:
        return markdown

    return markdown.replace(MARCADOR, _gerar_html_calendario(page, files))
