# Autovalores e Autovetores

## Definição

$x$ é um autovetor de $A$ se:

$$
Ax = x \lambda
$$,

e, nesse caso, $\lambda$ é o autovalor associado a $x$.

**Veja que**, se

$$
Ax = x \lambda
$$,

então, para $c \in \mathbb{R}$, temos:

$$
Acx = cx \lambda
$$.

Fazendo $y=cx$, temos:

$$
Ay = y \lambda
$$,

e, portanto, se $x$ é um autovetor de $A$, então $y=cx$ também é um autovetor de $A$ com mesmo autovalor associado.

## Encontrando a matriz A

Se eu sei os $N$ autovetores e autovetores associados da matriz $A \in \mathbb{R}^{N \times N}$, então:

$$
\begin{cases}
\begin{array}{rl}

A x_1 &= x_1 \lambda _1\\
A x_2 &= x_2 \lambda _2\\
\vdots \\
A x_N &= x_N \lambda _N\\

\end{array}
\end{cases}
$$

Posso escrever esse sistema na forma matricial:

$$
A \underbrace{\begin{bmatrix} \vert & \vert & & \vert \\
                x_1 & x_2 & \dots & x_N \\
                \vert & \vert &  & \vert \end{bmatrix}}_P
                = \underbrace{\begin{bmatrix} \vert & \vert & & \vert \\
                x_1 & x_2 & \dots & x_N \\
                \vert & \vert &  & \vert \end{bmatrix}}_P
                \underbrace{\begin{bmatrix} \lambda _1 & 0 & \dots & 0 \\
                0 & \lambda _2 & \dots & 0 \\
                \vdots & \vdots & \ddots & \vdots \\
                0 & 0 & \dots & \lambda_N \end{bmatrix}}_Q
$$

Reescrevendo em termos de $P$ e $Q$:

$$
AP = PQ \Rightarrow A = PQP^{-1}
$$

## Interpretando uma multiplicação matricial como mudança de base

Lembrando que se eu tenho um vetor $v$ e quero escrever na base $x_1, x_2, \dots, x_N$, então eu devo encontrar os coeficientes $a_1, a_4, \dots, a_N$ tais que:

$$
v = a_1 x_1 + a_2 x_2 + \dots + a_N x_N
$$

Posso escrever essa equação na forma matricial:

$$
V = \underbrace{\begin{bmatrix} \vert & \vert & & \vert \\
                x_1 & x_2 & \dots & x_N \\
                \vert & \vert &  & \vert \end{bmatrix}}_P \underbrace{\begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_N \end{bmatrix}}_{V_a}
\\
V = P V_a \\ V_a = P^{-1} V 
$$

Então, ao fazer a multiplicação por $P^{-1}$, estou projetando um vetor na base definida pelas colunas de $P$.

Então, se eu faço:

$$
Av
$$,

na verdade estou fazendo:

$$
PQP^{-1} v
$$

que posso interpretar como a sequência:

1. Projetar na base de autovetores
2. Aplicar uma escala
3. Retornar à base original

## Exemplo

Se $v = a_1 x_1 + a_2 x_2$, sendo $a_1$ e $a_2$ reais e $x_1$ e $x_2$ vetores em $\mathbb{R}^2$ e autovetores de $A$ com autovalores associados $\lambda _1$ e $\lambda _2$ :

$$
\begin{array}{rl}
Av &= A(a_1 x_1 + a_2 x_2) \\
&= A a_1 x_1 + A a_2 x_2 \\
&= a_1 A X_1 + a_2 A x_2 \\
&= a_1 \lambda _1 x_1 + a_2 \lambda _2 x_2\\
& = \lambda _1 a_1 x_1 + \lambda_2 a_2 x_2
\end{array}
$$

Ou seja, a multiplicação matricial por $A$ é equivalente a uma escala na direção dos autovetores de $A$, e os fatores de escala são os autovalores correspondentes.