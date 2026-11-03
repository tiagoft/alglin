# Teoria: auto-vetores e auto-valores

Uma característica de matrizes é a existência de vetores e valores chamados de *auto-valores* e *auto-vetores*. Quando um auto-vetor de uma matriz é multiplicado pela própria matriz, o resultado é um múltiplo do próprio vetor, isto é:

$$
\boldsymbol{A}\boldsymbol{v} = \boldsymbol{v} \lambda,
$$
onde:

* $\boldsymbol{A} \in \mathbb{R}^{N \times N}$ é a matriz, 
* $\boldsymbol{v} \in \mathbb{R}^{N \times 1}$ é o auto-vetor, e 
* $\lambda \in \mathbb{R}$ é o auto-valor associado.

!!! info "Exemplo de auto-vetores e auto-valores"
    $$
    \begin{bmatrix} 
        2 & 0  \\
        0 & 1 
    \end{bmatrix}
    \begin{bmatrix} 
        1 \\
        0  
    \end{bmatrix}
    = 
    \begin{bmatrix} 
        2 \\
        0  
    \end{bmatrix}
    =
    2
    \begin{bmatrix} 
        1 \\
        0  
    \end{bmatrix},
    $$
    portanto $\begin{bmatrix}1\\0\end{bmatrix}$ é um auto-vetor de $\begin{bmatrix} 2 & 0 \\  0 & 1 \end{bmatrix}$, e $2$ é o auto-valor associado.

## Infinitos auto-vetores?

Veja que, se $\boldsymbol{v}$ é um auto-vetor de $\boldsymbol{A}$, então:

$$
\boldsymbol{A}\boldsymbol{v} = \boldsymbol{v} \lambda,
$$

e, multiplicando ambos os lados da equação por um valor $\alpha \in \mathbb{R}$, temos:

$$
\boldsymbol{A} \alpha \boldsymbol{v} = \alpha \boldsymbol{v} \lambda,
$$

Se fizermos $\boldsymbol{w}=\alpha \boldsymbol{v}$, então temos que:

$$
\boldsymbol{A} \boldsymbol{w} = \boldsymbol{w}\lambda,
$$

e, portanto, $\boldsymbol{w} = \alpha \boldsymbol{v}$ também é um auto-vetor de $\boldsymbol{A}$ com o *mesmo* auto-valor associado!

Então, tecnicamente, temos infinitos auto-vetores de $\boldsymbol{A}$ na *direção* de $\boldsymbol{v}$. Porém, usualmente usamos como auto-vetor o vetor que tem norma $1$ nessa direção (embora isso seja somente uma convenção ligada aos pacotes numéricos para cálculo de auto-vetores e auto-valores).

## Encontrando matrizes à partir de seus auto-valores e auto-vetores

Considere $\boldsymbol{A} \in \mathbb{R}^{2 \times 2}$. e tivermos dois auto-vetores ($\boldsymbol{v}_1, \boldsymbol{v}_2 \in \mathbb{R}^{2 \times 1}$), e seus auto-valores correspondentes ($\lambda_1, \lambda_2 \in \mathbb{R}$), temos na verdade um sistema:

$$
\begin{cases}
\boldsymbol{A}\boldsymbol{v}_1 = \boldsymbol{v}_1 \lambda_1 \\
\boldsymbol{A}\boldsymbol{v}_2 = \boldsymbol{v}_2 \lambda_2 
\end{cases}
$$

Esse sistema pode ser escrito na forma de uma multiplicação matricial, se assumirmos que nossos auto-vetores são vetores-coluna:

$$
\boldsymbol{A} \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix} = \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix}\begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} 
$$

Multiplicando os dois lados da equação por $\begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix}^{-1}$, ficamos com:

$$
\boldsymbol{A} \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix}\begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix}^{-1} = \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix}^{-1}
$$

e, portanto:
$$
\boldsymbol{A}  = \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix}^{-1}
$$

??? info "Encontre a matriz cujos auto-vetores são $\boldsymbol{v}_1 = \begin{bmatrix} \cos \frac{\pi}{4} \\ \sin \frac{\pi}{4} \end{bmatrix}$ e $\boldsymbol{v}_2 = \begin{bmatrix} -\sin \frac{\pi}{4} \\ \cos \frac{\pi}{4} \end{bmatrix}$, e os seus auto-valores associados são $\lambda_1=2$ e $\lambda_2=1$"
    Para isso, temos que resolver:
    $$
    \boldsymbol{A} = \begin{bmatrix} \cos \frac{\pi}{4} & -\sin \frac{\pi}{4} \\
    \sin \frac{\pi}{4} & \cos \frac{\pi}{4}  \end{bmatrix} \begin{bmatrix}  2 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} \cos \frac{\pi}{4} & -\sin \frac{\pi}{4} \\
    \sin \frac{\pi}{4} & \cos \frac{\pi}{4}  \end{bmatrix}^{-1}
    $$

    Após realizar a operação, confirme que $\boldsymbol{A}\boldsymbol{v}_1 = \boldsymbol{v}_1 \lambda_1$ e que $\boldsymbol{A} \boldsymbol{v}_2 = \boldsymbol{v}_2 \lambda_2$.

## Uma nova interpretação para a multiplicação matricial

Vamos nos recordar agora sobre como fazíamos mudanças de base. Para fazer uma mudança de base, escrevemos um vetor $\boldsymbol{x}$ qualquer como a soma ponderada (ou: a combinação linear) de vetores-base $\boldsymbol{b}_n$, isto é:

$$
\boldsymbol{x} = \sum_{n=1}^N s_n \boldsymbol{b}_n
$$

Na forma matricial, encontrávamos que:

$$
\boldsymbol{x} = \begin{bmatrix} \vert & \vert & & \vert \\
                     \boldsymbol{b}_1 & \boldsymbol{b}_2 & \cdots & \boldsymbol{b}_N \\
                     \vert & \vert & & \vert  \end{bmatrix}
                     \begin{bmatrix} s_1 \\ s_2 \\ \vdots \\ s_N \end{bmatrix}
$$

e, portanto, poderíamos encontrar esse vetor $\boldsymbol{s}=\begin{bmatrix} s_1 \\ s_2 \\ \vdots \\ s_N \end{bmatrix}$ com a operação:

$$
\boldsymbol{s} = \begin{bmatrix} \vert & \vert & & \vert \\
                     \boldsymbol{b}_1 & \boldsymbol{b}_2 & \cdots & \boldsymbol{b}_N \\
                     \vert & \vert & & \vert  \end{bmatrix}^{-1}
                     \boldsymbol{x}
$$

Por simplicidade, vamos chamar a matriz com vetores-base de $B = \begin{bmatrix} \vert & \vert & & \vert \\
                     \boldsymbol{b}_1 & \boldsymbol{b}_2 & \cdots & \boldsymbol{b}_N \\
                     \vert & \vert & & \vert  \end{bmatrix}$, isto é:

$$
\boldsymbol{x} = \boldsymbol{B} \boldsymbol{s} \Rightarrow \boldsymbol{s} = \boldsymbol{B}^{-1} \boldsymbol{x}
$$

!!! info "Memória importante!"
    A consequência disso é que multiplicar um vetor por $\boldsymbol{B}^{-1}$ significa *mudar de base* para a base definida nas colunas de $\boldsymbol{B}$.

Outra coisa que fizemos com a mudança de bases foi a operação de levar um vetor para outra base, realizar alguma operação nessa base, e então retornar. Para isso, fazíamos:

$$
\boldsymbol{y} = \boldsymbol{B} \boldsymbol{T} \boldsymbol{B}^{-1} \boldsymbol{x},
$$

onde $\boldsymbol{B}$ é a matriz com vetores-base e $\boldsymbol{T}$ define alguma transformação ou operação matricial. O que era relevante nisso é que podemos usar a propriedade da *associatividade* para definir $\boldsymbol{A} = \boldsymbol{B} \boldsymbol{T} \boldsymbol{B}^{-1}$ e realizar a operação $\boldsymbol{y} = \boldsymbol{A}\boldsymbol{x}$ com uma única operação.

Ok, se você não se recorda disso tudo, é interessante voltar nas aulas anteriores e entender por que essas operações são válidas.

Seguindo adiante...

Agora há pouco vimos a equação:

$$
\boldsymbol{A}  = \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} \vert & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 \\
\vert & \vert \end{bmatrix}^{-1}
$$

Vamos passar para o caso de $N$ dimensões. Nesse caso, teríamos $N$ auto-vetores e $N$ auto-valores associados, e, portanto:

$$
\boldsymbol{A}  = \begin{bmatrix} \vert & \vert & & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 & \cdots & \boldsymbol{v}_N \\
\vert & \vert & & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0  \\ \vdots & \vdots & \ddots & \vdots  \\ 0 & 0 & \cdots & \lambda_N \end{bmatrix} \begin{bmatrix} \vert & \vert & & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 & \cdots & \boldsymbol{v}_N \\
\vert & \vert & & \vert \end{bmatrix}^{-1}
$$

Por simplicidade, vamos chamar a matriz com auto-vetores de $\boldsymbol{P}$ e a matriz com auto-valores de $\boldsymbol{Q}$. Daí, ficamos com:

$$
\boldsymbol{A}  = \underbrace{\begin{bmatrix} \vert & \vert & & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 & \cdots & \boldsymbol{v}_N \\
\vert & \vert & & \vert \end{bmatrix}}_{\boldsymbol{P}} \underbrace{\begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0  \\ \vdots & \vdots & \ddots & \vdots  \\ 0 & 0 & \cdots & \lambda_N \end{bmatrix}}_{\boldsymbol{Q}} \underbrace{\begin{bmatrix} \vert & \vert & & \vert \\
\boldsymbol{v}_1 & \boldsymbol{v}_2 & \cdots & \boldsymbol{v}_N \\
\vert & \vert & & \vert \end{bmatrix}^{-1}}_{\boldsymbol{P}^{-1}}
$$

$$
\boldsymbol{A} = \boldsymbol{P}\boldsymbol{Q}\boldsymbol{P}^{-1}
$$

Portanto, quando fazemos uma multiplicação matricial $\boldsymbol{y}=\boldsymbol{A}\boldsymbol{x}$, podemos expandir a multiplicação para:

$$
\boldsymbol{y} = \boldsymbol{P}\boldsymbol{Q}\boldsymbol{P}^{-1} \boldsymbol{x}
$$

Fazendo um paralelo com a mudança de bases, podemos interpretar a operação como mudar $\boldsymbol{x}$ para a base definida pelos auto-vetores de $\boldsymbol{A}$, realizar a transformação $\boldsymbol{Q}$ e então retornar à base original. Só que veja uma coisa super importante: a transformação $\boldsymbol{Q}$ é uma *escala*.

??? info "Mostre que, se todos os $N$ auto-valores de $\boldsymbol{A}$ forem iguais a $1$, então $\boldsymbol{A}$ é uma matriz identidade."
    Se $\lambda_i=1 \forall i$, então $\boldsymbol{Q}$ é uma matriz identidade e portanto:
    $$
    \begin{array}{rl}
    \boldsymbol{A} &= \boldsymbol{P} \boldsymbol{Q} \boldsymbol{P}^{-1}\\
     &= \boldsymbol{P} \boldsymbol{I} \boldsymbol{P}^{-1}\\
     &= \boldsymbol{P} \boldsymbol{P}^{-1}\\
     &= \boldsymbol{I}
    \end{array}
    $$

    Então, algum tipo de escala é inevitável...

## Uma nova interpretação para a inversão de matrizes

Vamos nos recordar da distributividade da inversa:

$$
(\boldsymbol{X}\boldsymbol{Y}\boldsymbol{Z})^{-1} = \boldsymbol{Z}^{-1}\boldsymbol{Y}^{-1}\boldsymbol{X}^{-1},
$$

isto é, aplicamos a inversa a cada uma das matrizes de "dentro dos parênteses" invertendo a ordem.

Aplicando a mesma regra para $\boldsymbol{A}$, temos:

$$
\begin{array}{rl}
\boldsymbol{A} &= \boldsymbol{P}\boldsymbol{Q}\boldsymbol{P}^{-1} \\
\boldsymbol{A}^{-1} &= (\boldsymbol{P}\boldsymbol{Q}\boldsymbol{P}^{-1})^{-1} \\
&= (\boldsymbol{P}^{-1})^{-1} \boldsymbol{Q}^{-1} \boldsymbol{P}^{-1} \\
&= \boldsymbol{P} \boldsymbol{Q}^{-1} \boldsymbol{P}^{-1}
\end{array}
$$

Veja que isso significa que multiplicar um vetor $\boldsymbol{x}$ por $\boldsymbol{A}^{-1}$ equivale a, sequencialmente:

1. Levar $\boldsymbol{x}$ para a base de auto-vetores de $\boldsymbol{A}$
2. Realizar a escala inversa $\boldsymbol{Q}^{-1}$ nesse domínio
3. Voltar para a base original

!!! info "Uma interpretação geométrica!"
    Já vimos que a multiplicação matricial é uma *escala* em uma base definida pelos auto-vetores de $\boldsymbol{A}$. A consequência disso é que a multiplicação pela inversa é a *escala inversa* nessa mesma base!

