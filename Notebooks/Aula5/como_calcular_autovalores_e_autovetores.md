# Como calcular autovalores e autovetores

Em geral, usamos Python para calcular autovalores e autovetores. Mas, se você quiser, pode fazer o cálculo manualmente, da seguinte forma:

## Dedução teórica

Sabemos que, se $x$ é um autovetor de $A$ com autovalor associado $\lambda$, então:

$$
Ax = \lambda x
$$

Isso significa que:

$$
Ax = \lambda I x
$$

e, portanto:

$$
\lambda I x - Ax  = 0
$$

ou:

$$
(\lambda I - A)x = 0
$$

Nessa equação, podemos ter uma vontade grande de resolver os elementos de $(A-\lambda I)x$ resolvendo a equação acima como um sistema:


 $(\lambda I - A)=B \Rightarrow Bx=0 \Rightarrow x=0B^{-1}$ (igualando cada elemento a zero), mas isso vai levar à seguinte situação:

$$
\begin{array}{rl}
(\lambda I - A)&=B \\
(\lambda I - A)x &= 0 \\
Bx &= 0 \\
x &= B^{-1} 0 \\
x &= 0
\end{array}
$$

Então, precisamos encontrar alguma maneira de forçar que $(\lambda I - A)$ não tenha inversa, isto é:

$$
\text{det}(\lambda I - A) = 0
$$

Podemos usar essa equação para encontrar os valores possíveis de $\lambda$ e então retornar à equação original para achar os autovetores associados.

## Exemplo

Vamos resolver isso para o caso 2x2. Vamos encontrar os autovalores e autovetores de:

$$
\begin{bmatrix}
-5 & 2 \\ -7 & 4
\end{bmatrix}
$$

Então:

$$
\begin{array}{rl}
\text{det}(\lambda I - A) &= 0 \\
\text{det}(\begin{bmatrix}\lambda + 5 & -2 \\ 7 & \lambda-4 \end{bmatrix}) &= 0 \\
\lambda^2 + \lambda - 6 &= 0
\end{array}
$$

Os valores possíveis para $\lambda$ são $\lambda _1=2$ e $\lambda _2 = -3$.

Agora, vamos solucionar:

$$
\begin{bmatrix}
-5 & 2 \\ -7 & 4
\end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 2 \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 2 x_1 \\ 2 x_2 \end{bmatrix}
$$

Encontramos as equações:

$$
\begin{cases}
\begin{array}{rl}
-5 x_1 + 2x_2 &= 2 x_1 \\
-7 x_1 + 4x_2 &= 2 x_2 \\
\end{array}
\end{cases}
$$

que podem ser simplificadas para:

$$
\begin{cases}
\begin{array}{rl}
-7 x_1 + 2x_2 &= 0 \\
-7 x_1 + 2x_2 &= 0 \\
\end{array}
\end{cases}
$$

E então encontramos que todos os vetores em que $x_2 = \frac{7}{2}x_1$ são autovetores de $A$. Uma solução possível é $x=\begin{bmatrix}2\\7\end{bmatrix}$.

Resolvendo para o caso $\lambda=-3$, chegamos à direção do outro possível autovetor (fica como exercício para o leitor - siga os mesmos passos, e, se precisar, use uma ferramenta computacional para confirmar o seu cálculo)
