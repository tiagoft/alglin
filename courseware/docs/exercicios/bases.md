# Exercícios: Bases

## Parte 1

### Questão 1

Um pixel em OpenCV é representado na forma BGR, isto é, com as componentes (nesta ordem) azul, verde e vermelho. Encontre a matriz que multiplica um pixel de OpenCV para convertê-lo para o formato usual RGB.

### Questão 2

Gostaríamos de mapear pixels no formato RGB para a representação XYZ. Para isso, multiplicamos um pixel $p$ pela matriz de transformação $T$, obtendo $p_{\text{xyz}} = T p_{\text{rgb}}$. Encontre a matriz $R$ que gera o pixel $P_{+} = R p_{\text{rgb}}$, também no domínio RGB, mas cuja componente $Z$ é zero.

### Questão 3

Uma pessoa foi ao mercado e comprou 10 alfaces e 5 beterrabas. Elas foram usadas para fazer saladas verdes, que levam 1 alface, e saladas coloridas, que levam 1 alface e 1 beterraba. Desenhe:

**a)** A compra, em um plano cartesiano em que os eixos são alfaces e beterrabas,

**b)** As receitas de saladas, no plano cartesiano em que os eixos são alfaces e beterrabas,

**c)** A compra, em um plano cartesiano em que os eixos são as receitas de saladas.

## Parte 2

### Questão 1 — Exercício resolvido

Encontre $a_1$ e $a_2$ em:

$$
\begin{bmatrix}
    3 \\
    4
\end{bmatrix} = 
a_1 \begin{bmatrix}
    2 \\
    4
\end{bmatrix}
+ a_2
\begin{bmatrix}
    -3 \\
    5
\end{bmatrix}
$$

Para resolver esse exercício, realizamos explicitamente a operação no lado direito da equação, obtendo:

$$
\begin{bmatrix}
    3 \\
    4
\end{bmatrix} = 
\begin{bmatrix}
    2a_1 -3 a_2 \\
    4a_1 +5a_2
\end{bmatrix}
$$

Dois vetores são iguais se todas as suas componentes são iguais. Então, podemos montar o sistema:

$$
\begin{cases}
\begin{array}{rl}
3 &= 2a_1 -3a_2 \\
4 &= 4a_1 + 5 a_2
\end{array}
\end{cases}
$$

Então, encontramos $a_1$ e $a_2$ resolvendo o sistema.

### Questão 2

Encontre $a_1$ e $a_2$ em:

$$
\begin{bmatrix}
    5 \\
    2
\end{bmatrix} = 
a_1 \begin{bmatrix}
    1 \\
    1
\end{bmatrix}
+ a_2
\begin{bmatrix}
    1 \\
    0
\end{bmatrix}
$$

### Questão 3

Encontre $a_1$, $a_2$ e $a_3$ em:

$$
\begin{bmatrix}
    5 \\
    2 \\
    1
\end{bmatrix} = 
a_1 \begin{bmatrix}
    1 \\
    1 \\
    1
\end{bmatrix}
+ a_2
\begin{bmatrix}
    1 \\
    0 \\
    2
\end{bmatrix}
+ a_3
\begin{bmatrix}
    2 \\
    1 \\
    0
\end{bmatrix}
$$

### Questão 4

Mostre que não é possível encontrar uma solução única para $a_1$ e $a_2$ em:

$$
\begin{bmatrix}
    5 \\
    2
\end{bmatrix} = 
a_1 \begin{bmatrix}
    1 \\
    1
\end{bmatrix}
+ a_2
\begin{bmatrix}
    2 \\
    2
\end{bmatrix}
$$

### Questão 5

Encontre $a$, $b$, $c$, $d$ em:

$$
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
\begin{bmatrix}
    x \\
    y
\end{bmatrix}
= 
x \begin{bmatrix}
    1 \\
    3
\end{bmatrix}
+ y
\begin{bmatrix}
    2 \\
    4
\end{bmatrix}
$$

### Questão 6

Encontre os componentes da matriz $A$ em:

$$
A
\begin{bmatrix}
    x \\
    y \\
    z
\end{bmatrix}
= 
x \begin{bmatrix}
    1 \\
    3 \\
    1
\end{bmatrix}
+ y
\begin{bmatrix}
    2 \\
    4 \\
    1
\end{bmatrix}
+ z
\begin{bmatrix}
    2 \\
    -4 \\
    0
\end{bmatrix}
$$
