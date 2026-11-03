from manim import *

# Valores do vetor: 3² + (-1)² + 4² + 1² + (-3)² = 36, então a norma é 6
VALORES = [3, -1, 4, 1, -3]

COR_INDICE = YELLOW
COR_QUADRADO = BLUE


def quadrado_tex(v):
    return f"({v})^2" if v < 0 else f"{v}^2"


class NormaSomatoria(Scene):
    def construct(self):
        n = len(VALORES)

        # Vetor à esquerda
        nome = MathTex(r"\boldsymbol{x} =")
        vetor = Matrix([[v] for v in VALORES], v_buff=0.75)
        grupo_vetor = VGroup(nome, vetor).arrange(RIGHT).move_to(LEFT * 5.2)
        entradas = vetor.get_entries()

        # Equação da norma
        formula = MathTex(
            r"\|\boldsymbol{x}\| = \sqrt{\sum_{i=1}^{N} x_i^2}", r"\quad N = 5"
        ).move_to(RIGHT * 1.8 + UP * 2.6)

        self.play(Write(grupo_vetor), Write(formula))
        self.wait(0.5)

        # Ponteiro: seta que indica a posição i do vetor
        def pos_seta(k):
            y = entradas[k].get_y()
            x0 = vetor.get_right()[0]
            return Arrow(
                [x0 + 1.2, y, 0], [x0 + 0.1, y, 0], buff=0, color=COR_INDICE
            )

        def rotulo_seta(k, seta):
            return MathTex(f"i = {k + 1}", color=COR_INDICE).scale(0.8).next_to(seta, UP, buff=0.05)

        seta = pos_seta(0)
        rotulo = rotulo_seta(0, seta)
        destaque = SurroundingRectangle(entradas[0], color=COR_INDICE, buff=0.12)

        # Passo atual: x_i e x_i²
        def texto_passo(k):
            v = VALORES[k]
            t = MathTex(
                f"x_{{{k + 1}}} = {v}",
                r"\quad\Rightarrow\quad",
                f"x_{{{k + 1}}}^2 = {quadrado_tex(v)} = {v * v}",
            )
            t[0].set_color(COR_INDICE)
            t[2].set_color(COR_QUADRADO)
            return t.move_to(RIGHT * 1.8 + UP * 1.2)

        # Soma parcial: termos que vão sendo acumulados
        termos = MathTex(
            *sum([[quadrado_tex(v), "+"] for v in VALORES], [])[:-1]
        )
        def prefixo_soma(k):
            return MathTex(rf"\sum_{{i=1}}^{{{k + 1}}} x_i^2 =")

        prefixo = prefixo_soma(0)
        linha_soma = VGroup(prefixo, termos).arrange(RIGHT)
        linha_soma.move_to(DOWN * 0.6).to_edge(RIGHT, buff=0.4)

        def texto_total(total):
            return MathTex(f"= {total}").next_to(prefixo, DOWN, buff=0.5).align_to(
                prefixo[0][-1], LEFT
            )

        passo = texto_passo(0)
        self.play(GrowArrow(seta), FadeIn(rotulo), Create(destaque))

        total = 0
        total_tex = None
        for k, v in enumerate(VALORES):
            if k > 0:
                nova_seta = pos_seta(k)
                self.play(
                    Transform(seta, nova_seta),
                    Transform(rotulo, rotulo_seta(k, nova_seta)),
                    Transform(destaque, SurroundingRectangle(entradas[k], color=COR_INDICE, buff=0.12)),
                    run_time=0.7,
                )
                novo_passo = texto_passo(k)
                self.play(
                    FadeOut(passo, shift=UP * 0.3),
                    FadeIn(novo_passo, shift=UP * 0.3),
                    Transform(prefixo, prefixo_soma(k).move_to(prefixo)),
                    run_time=0.6,
                )
                passo = novo_passo
            else:
                self.play(FadeIn(passo, shift=UP * 0.3), Write(prefixo), run_time=0.7)

            # O valor apontado "viaja" até a soma e entra como termo ao quadrado
            termo = termos[2 * k]
            animacoes = [TransformFromCopy(entradas[k], termo)]
            if k > 0:
                animacoes.append(FadeIn(termos[2 * k - 1]))
            self.play(*animacoes, run_time=0.8)

            total += v * v
            novo_total = texto_total(total)
            if total_tex is None:
                self.play(FadeIn(novo_total), run_time=0.5)
            else:
                self.play(Transform(total_tex, novo_total), run_time=0.5)
            total_tex = total_tex or novo_total
            self.wait(0.4)

        # Resultado final
        resultado = MathTex(
            rf"\|\boldsymbol{{x}}\| = \sqrt{{{total}}} = {int(total ** 0.5)}"
        ).next_to(total_tex, DOWN, buff=0.6).align_to(linha_soma, LEFT)
        caixa = SurroundingRectangle(resultado, color=GREEN, buff=0.15)
        self.play(FadeOut(seta), FadeOut(rotulo), FadeOut(destaque), FadeOut(passo))
        self.play(Write(resultado), Create(caixa))
        self.wait(2)
