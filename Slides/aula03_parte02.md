---
marp: true
theme: default
paginate: true

---

# Aula 03 - Parte 02 - Geometria Analítica

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares

---

# Geometria das Matrizes: Transformando o Espaço

Como a multiplicação de matrizes pode ser usada para rotacionar, expandir e mover objetos, a base fundamental para toda a computação gráfica.

Por que?

Na computação gráfica, costumamos partir de um modelo abstrato, que nos diz, por exemplo, onde estão os vértices de uma forma geométrica. Mas, para compor o nosso mundo, combinamos essas formas pré-definidas após alterá-las (rotacionando, cisalhando, expandindo, transladando...), e isso permite montar paisagens complicadas à partir de formas mais simples. Usando matrizes, conseguimos modelar essas alterações de uma forma compacta, que executa muito rapidamente tanto em CPUs usuais quanto nas GPUs modernas.

---

# Multiplicação Matricial é uma Função

Podemos pensar em uma matriz $A$ como uma "máquina" que recebe um conjunto de pontos $x$ e os transforma em um novo conjunto de pontos $y$.

A operação $y=Ax$ aplica a transformação geométrica definida por $A$ a cada ponto em $x$.

Por exemplo:

$$
\begin{bmatrix}
1 & 1 \\
0 & 2 
\end{bmatrix}
\begin{bmatrix}
x_{1} \\ x_{2}
\end{bmatrix}
=
\begin{bmatrix}
y_{1} \\ y_{1}
\end{bmatrix}
= 
\begin{bmatrix}
x_1 + x_2 \\
2 x_2
\end{bmatrix}
$$

---

# Pontos em $x$ são independentes

Podemos pensar em uma matriz $A$ como uma "máquina" que recebe um conjunto de pontos $x$ e os transforma em um novo conjunto de pontos $y$.

A operação $y=Ax$ aplica a transformação geométrica definida por $A$ a cada ponto em $x$.

Por exemplo:

$$
\begin{bmatrix}
1 & 1 \\
0 & 2 
\end{bmatrix}
\begin{bmatrix}
x_{1,1} & x_{1,2} \\ 
x_{2,1} & x_{2,2}
\end{bmatrix}
=
\begin{bmatrix}
y_{1,1} & y_{1,2} \\ 
y_{2,1} & y_{2,2}
\end{bmatrix}
= 
\begin{bmatrix}
x_{1,1} + x_{2,1} & x_{1,2} + x_{2,2} \\
2 x_{2,1} & 2 x_{2,2}
\end{bmatrix}
$$

---

# Para o caso geral...

Nosso exemplo era:

$$
\begin{bmatrix}
1 & 1 \\
0 & 2 
\end{bmatrix}
\begin{bmatrix}
x_{1,1} & x_{1,2} \\ 
x_{2,1} & x_{2,2}
\end{bmatrix}
=
\begin{bmatrix}
y_{1,1} & y_{1,2} \\ 
y_{2,1} & y_{2,2}
\end{bmatrix}
= 
\begin{bmatrix}
x_{1,1} + x_{2,1} & x_{1,2} + x_{2,2} \\
2 x_{2,1} & 2 x_{2,2}
\end{bmatrix}
$$


Para o caso geral, temos vários vetores-coluna $x_1, x_2, \cdots, x_k$, isto é:

$$
Ax = 
A
\begin{bmatrix}
\vert & \vert & & \vert \\
x_1 & x_2 & \cdots & x_k \\
\vert & \vert & & \vert
\end{bmatrix}
= 
\begin{bmatrix}
\vert & \vert & & \vert \\
Ax_1 & Ax_2 & \cdots & Ax_k \\
\vert & \vert & & \vert
\end{bmatrix}
=
\begin{bmatrix}
\vert & \vert & & \vert \\
y_1 & y_2 & \cdots & y_k \\
\vert & \vert & & \vert
\end{bmatrix}
$$

---

# As Transformações Lineares Básicas

*   **Expansão/Contração:** Altera o tamanho ao longo dos eixos.
    $$ \begin{bmatrix} 2 & 0\\ 0 & 1 \end{bmatrix} $$
*   **Cisalhamento (Shear):** "Inclina" a forma.
    $$ \begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix} $$
*   **Rotação:** Rotaciona a forma em torno da origem ($\theta$ radianos no sentido anti-horário).
    $$ \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix} $$

---

# Exercício

Aplique as seguintes transformações sobre o ponto $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$:

$$ \begin{bmatrix} 2 & 0\\ 0 & 1 \end{bmatrix} \hspace{1cm} \begin{bmatrix} 1 & 0\\ 0 & 2 \end{bmatrix} \hspace{1cm} \begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix} \hspace{1cm} \begin{bmatrix} \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2}\\ \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{bmatrix} $$

---

# Transformações Compostas

E se quisermos aplicar múltiplas transformações? Por exemplo, primeiro comprimir e depois rotacionar.

Podemos fazer isso em etapas. Partimos de uma matriz de rotação $R$ e de uma matriz de compressão $C$ e então conseguimos:

$$y = R (Cx) = RCx = (RC)x = Tx$$

A matriz $T=RC$ executa a compressão e a rotação simultaneamente!

---

# A Translação

Existe uma transformação geométrica fundamental que não conseguimos fazer com uma matriz 2x2: a **translação** (mover a forma).

A translação é uma **soma** de vetores, não uma multiplicação: $y = x + \Delta x$.

A multiplicação matricial sempre deixa o ponto (0,0) no lugar. Para mover a forma inteira, precisamos de uma nova abordagem.

---

# A Solução: Coordenadas Homogêneas

O truque é adicionar uma terceira dimensão "fictícia" aos nossos vetores, que sempre terá o valor 1.

O vetor $\begin{bmatrix} x_1 \\ x_2\end{bmatrix}$ se torna $\begin{bmatrix} x_1 \\ x_2 \\ 1\end{bmatrix}$.

Com essa mudança, agora podemos representar uma translação usando uma **multiplicação matricial** com uma matriz 3x3:

$$
\begin{bmatrix}
    1 & 0 & \Delta x_1\\
    0 & 1 & \Delta x_2 \\
    0 & 0 & 1 \\
\end{bmatrix}
\begin{bmatrix}
    x_1 \\
    x_2 \\
    1
\end{bmatrix}
=
\begin{bmatrix}
    x_1 + \Delta x_1 \\
    x_2 + \Delta x_2 \\
    1
\end{bmatrix}
$$


---

# A Matriz de Transformação Unificada

Com coordenadas homogêneas, podemos representar TODAS as transformações (rotação, escala, cisalhamento E translação) como uma única matriz 3x3.

As matrizes 2x2 anteriores são "promovidas" para 3x3:

$$
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
\Rightarrow
\begin{bmatrix}
    a & b & 0\\
    c & d & 0 \\
    0 & 0 & 1 \\
\end{bmatrix}
$$


---

# CHAMADA!

1. Fazer a chamada
2. Notebook de hoje: aula 3 parte 2
3. APS 3 já está online
4. O teste da APS será na *quinta que vem*