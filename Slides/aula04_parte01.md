---
marp: true
theme: default
paginate: true

---

# Aula 04 - Parte 01 - Geometria Analítica

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares

---

# O Que é uma Base?

Uma **base** é o conjunto de vetores de referência que usamos para definir um espaço. É o nosso "sistema de coordenadas".

$$
\boldsymbol{e_1} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} (\text{Vermelho}), \quad
\boldsymbol{e_2} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} (\text{Verde}), \quad
\boldsymbol{e_3} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} (\text{Azul})
$$

Qualquer cor  é uma formada por esses vetores-base:

$$
\begin{bmatrix}
x_r \\ x_g \\ x_b
\end{bmatrix}
= x_r e_1 + x_g e_2 + x_b e_3
$$

---

# Pixels: uma núvem no espaço de cores

No sistema **RGB**, cada cor é um vetor de 3 dimensões que indica a intensidade de Vermelho, Verde e Azul: $\begin{bmatrix} R \\ G \\ B \end{bmatrix}$.

Uma imagem inteira pode ser "achatada" em uma grande matriz, onde cada coluna é o vetor de cor de um pixel.

```python
# Uma imagem de 427x640 pixels se torna...
altura, largura, cores = image.shape

# ...uma matriz com 3 linhas (R, G, B) e 273.280 colunas (pixels)
X = image.reshape(altura*largura, cores).T
```

---

# Transformando Cores com Matrizes

Podemos alterar todas as cores de uma imagem de uma só vez aplicando uma **transformação linear**, que nada mais é do que uma multiplicação matricial:

$$
\boldsymbol{X'} = \boldsymbol{A} \boldsymbol{X}
$$

**Exemplo:** Reduzir as componentes Vermelho e Verde pela metade.
$$
A = 
\begin{bmatrix}
    0.5 & 0 & 0\\
    0 & 0.5 & 0 \\
    0 & 0 & 1
\end{bmatrix}
$$

(ou seja: uma *contração* no espaço de cores!)


---

# Mudando a Base: O Espaço YIQ

Existem outras bases para descrever cores. O sistema **YIQ**, usado em TVs analógicas, descreve a cor em termos de:
*   **Y (Luma):** O brilho do pixel (sua intensidade em preto e branco).
*   **I e Q (Crominância):** A informação de cor.

A conversão de um pixel RGB para YIQ é uma **mudança de base**, realizada por uma multiplicação matricial:

$$
\begin{bmatrix} Y \\ I \\ Q \end{bmatrix} = 
\underbrace{
\begin{bmatrix}
    0.299 & 0.587 & 0.144\\
    0.5959 & -0.2746 & -0.3213 \\
    0.2115 & -0.5227 & 0.3112
\end{bmatrix} 
}_{\text{Matriz de Transformação}}
\begin{bmatrix} R \\ G \\ B \end{bmatrix}
$$

---

# Por Que Mudar de Base?

Algumas operações se tornam muito mais simples em uma base diferente.

**Problema:** Converter uma imagem colorida para escala de cinza.
*   **Na base RGB:** É uma operação complexa.
*   **Na base YIQ:** Um pouco mais fácil: removemos as componentes $I$ e $Q$ multiplicando-as por zero:

$$
\boldsymbol{R} = 
\begin{bmatrix}
    1 & 0 & 0\\
    0 & 0 & 0 \\
    0 & 0 & 0
\end{bmatrix}
$$

---

# A Jornada Completa: Ida e Volta

Para manipular a imagem e visualizá-la, seguimos três passos:

1.  **Mudar para a base YIQ:** $\boldsymbol{Y_{yiq}} = \boldsymbol{A} \boldsymbol{X_{rgb}}$
2.  **Aplicar a transformação (escala de cinza):** $\boldsymbol{Y'_{yiq}} = \boldsymbol{R} \boldsymbol{Y_{yiq}}$
3.  **Voltar para a base RGB (usando a inversa):** $\boldsymbol{X'_{rgb}} = \boldsymbol{A^{-1}} \boldsymbol{Y'_{yiq}}$

---

# Composição de Matrizes

Podemos combinar essa sequência de três operações em uma **única matriz de transformação M**.

$$
\boldsymbol{M} = \boldsymbol{A^{-1}} \boldsymbol{R} \boldsymbol{A}
$$

Agora, a transformação inteira é feita com uma única multiplicação:

$$
\boldsymbol{X'_{rgb}} = \boldsymbol{M} \boldsymbol{X_{rgb}}
$$

Isso permite criar filtros e efeitos complexos, aplicados de forma mais eficiente!


---

# Hora da chamada!

Hoje estamos na Aula 04, Parte 01!

*O gabarito está disponível. Se você olhar o gabarito antes de resolver o exercício, não adianta fazer o exercício! Então, só olhe depois que tiver uma solução que você realmente acredita que está correta!*
