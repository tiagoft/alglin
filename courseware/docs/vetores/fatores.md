## Vetores e seus fatores

Já sabemos que podemos escrever um vetor na forma cartesiana e na forma polar. Porém, uma outra maneira de re-escrever vetores é através da *combinação linear de fatores*. A ideia aqui é escrever um vetor como a soma ponderada de dois outros vetores, isto é:

$$
\boldsymbol{x} = a_1 \boldsymbol{v}_1 + a_2 \boldsymbol{v}_2,
$$
onde $a_1, a_2 \in \mathbb{R}$ e $\boldsymbol{x}, \boldsymbol{v}_1, \boldsymbol{v}_2 \in \mathbb{R}^2$.

Note que estamos definindo esse processo apenas para vetores de 2 dimensões! Posteriormente, nos ocuparemos do caso geral.

### Exemplo: encontrar coeficientes

Podemos encontrar coeficientes realizando diretamente a operação acima, por exemplo:

$$
\begin{bmatrix} 3 \\ 1 \end{bmatrix} = a_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + a_2 \begin{bmatrix} -1 \\ 1 \end{bmatrix}
$$

Nesse caso, encontramos:
$$
\begin{bmatrix} 3 \\ 1 \end{bmatrix} = \begin{bmatrix} a_1 - a_2 \\ a_1 + a_2 \end{bmatrix} + a_2 \begin{bmatrix} -1 \\ 1 \end{bmatrix}
$$

Veja como isso nos dá um sistema de equações:

$$
\begin{cases}
\begin{align*}
a_1 - a_2 &= 3\\
a_1 + a_2 &= 1
\end{align*}
\end{cases}
$$
