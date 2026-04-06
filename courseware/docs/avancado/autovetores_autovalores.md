# Teoria: auto-vetores e auto-valores

Uma característica de matrizes é a existência de vetores e valores chamados de *auto-valores* e *auto-vetores*. Quando um auto-vetor de uma matriz é multiplicado pela própria matriz, o resultado é um múltiplo do próprio vetor, isto é:

$$
Av = v \lambda,
$$
onde:

* $A \in \mathbb{R}^{n \times n}$ é a matriz, 
* $v \in \mathbb{R}^{n \times 1}$ é o auto-vetor, e 
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

Veja que, se $v$ é um auto-vetor de $A$, então:

$$
Av = v \lambda,
$$

e, multiplicando ambos os lados da equação por um valor $\alpha \in \mathbb{R}$, temos:

$$
A \alpha v = \alpha v \lambda,
$$

Se fizermos $w=\alpha v$, então temos que:

$$
A w = w\lambda,
$$

e, portanto, $w = \alpha v$ também é um auto-vetor de $A$ com o *mesmo* auto-valor associado!

Então, tecnicamente, temos infinitos auto-vetores de $A$ na *direção* de $v$. Porém, usualmente usamos como auto-vetor o vetor que tem norma $1$ nessa direção (embora isso seja somente uma convenção ligada aos pacotes numéricos para cálculo de auto-vetores e auto-valores).

## Encontrando matrizes à partir de seus auto-valores e auto-vetores

Considere $A \in \mathbb{R}^{2 \times 2}$. e tivermos dois auto-vetores ($v_1, v_2 \in \mathbb{R}^{2 \times 1}$), e seus auto-valores correspondentes ($\lambda_1, \lambda_2 \in \mathbb{R}$), temos na verdade um sistema:

$$
\begin{cases}
Av_1 = v_1 \lambda_1 \\
Av_2 = v_2 \lambda_2 
\end{cases}
$$

Esse sistema pode ser escrito na forma de uma multiplicação matricial, se assumirmos que nossos auto-vetores são vetores-coluna:

$$
A \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix} = \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix}\begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} 
$$

Multiplicando os dois lados da equação por $\begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix}^{-1}$, ficamos com:

$$
A \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix}\begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix}^{-1} = \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix}^{-1}
$$

e, portanto:
$$
A  = \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix}^{-1}
$$

??? info "Encontre a matriz cujos auto-vetores são $v_1 = \begin{bmatrix} \cos \frac{\pi}{4} \\ \sin \frac{\pi}{4} \end{bmatrix}$ e $v_2 = \begin{bmatrix} -\sin \frac{\pi}{4} \\ \cos \frac{\pi}{4} \end{bmatrix}$, e os seus auto-valores associados são $\lambda_1=2$ e $\lambda_2=1$"
    Para isso, temos que resolver:
    $$
    A = \begin{bmatrix} \cos \frac{\pi}{4} & -\sin \frac{\pi}{4} \\
    \sin \frac{\pi}{4} & \cos \frac{\pi}{4}  \end{bmatrix} \begin{bmatrix}  2 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} \cos \frac{\pi}{4} & -\sin \frac{\pi}{4} \\
    \sin \frac{\pi}{4} & \cos \frac{\pi}{4}  \end{bmatrix}^{-1}
    $$

    Após realizar a operação, confirme que $Av_1 = v_1 \lambda_1$ e que $A v_2 = v_2 \lambda_2$.

## Uma nova interpretação para a multiplicação matricial

Vamos nos recordar agora sobre como fazíamos mudanças de base. Para fazer uma mudança de base, escrevemos um vetor $x$ qualquer como a soma ponderada (ou: a combinação linear) de vetores-base $b_j$, isto é:

$$
x = \sum_{j=1}^n s_j b_j
$$

Na forma matricial, encontrávamos que:

$$
x = \begin{bmatrix} \vert & \vert & & \vert \\
                     b_1 & b_2 & \cdots & b_n \\
                     \vert & \vert & & \vert  \end{bmatrix}
                     \begin{bmatrix} s_1 \\ s_2 \\ \vdots \\ s_n \end{bmatrix}
$$

e, portanto, poderíamos encontrar esse vetor $s=\begin{bmatrix} s_1 \\ s_2 \\ \vdots \\ s_n \end{bmatrix}$ com a operação:

$$
s = \begin{bmatrix} \vert & \vert & & \vert \\
                     b_1 & b_2 & \cdots & b_n \\
                     \vert & \vert & & \vert  \end{bmatrix}^{-1}
                     x
$$

Por simplicidade, vamos chamar a matriz com vetores-base de $B = \begin{bmatrix} \vert & \vert & & \vert \\
                     b_1 & b_2 & \cdots & b_n \\
                     \vert & \vert & & \vert  \end{bmatrix}$, isto é:

$$
x = B s \Rightarrow s = B^{-1} x
$$

!!! info "Memória importante!"
    A consequência disso é que multiplicar um vetor por $B^{-1}$ significa *mudar de base* para a base definida nas colunas de $B$.

Outra coisa que fizemos com a mudança de bases foi a operação de levar um vetor para outra base, realizar alguma operação nessa base, e então retornar. Para isso, fazíamos:

$$
y = B T B^{-1} x,
$$

onde $B$ é a matriz com vetores-base e $T$ define alguma transformação ou operação matricial. O que era relevante nisso é que podemos usar a propriedade da *associatividade* para definir $A = B T B^{-1}$ e realizar a operação $y = Ax$ com uma única operação.

Ok, se você não se recorda disso tudo, é interessante voltar nas aulas anteriores e entender por que essas operações são válidas.

Seguindo adiante...

Agora há pouco vimos a equação:

$$
A  = \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} \vert & \vert \\
v_1 & v_2 \\
\vert & \vert \end{bmatrix}^{-1}
$$

Vamos passar para o caso de $n$ dimensões. Nesse caso, teríamos $n$ auto-vetores e $n$ auto-valores associados, e, portanto:

$$
A  = \begin{bmatrix} \vert & \vert & & \vert \\
v_1 & v_2 & \cdots & v_n \\
\vert & \vert & & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0  \\ \vdots & \vdots & \ddots & \vdots  \\ 0 & 0 & \cdots & \lambda_n \end{bmatrix} \begin{bmatrix} \vert & \vert & & \vert \\
v_1 & v_2 & \cdots & v_n \\
\vert & \vert & & \vert \end{bmatrix}^{-1}
$$

Por simplicidade, vamos chamar a matriz com auto-vetores de $P$ e a matriz com auto-valores de $Q$. Daí, ficamos com:

$$
A  = \underbrace{\begin{bmatrix} \vert & \vert & & \vert \\
v_1 & v_2 & \cdots & v_n \\
\vert & \vert & & \vert \end{bmatrix}}_P \underbrace{\begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0  \\ \vdots & \vdots & \ddots & \vdots  \\ 0 & 0 & \cdots & \lambda_n \end{bmatrix}}_Q \underbrace{\begin{bmatrix} \vert & \vert & & \vert \\
v_1 & v_2 & \cdots & v_n \\
\vert & \vert & & \vert \end{bmatrix}^{-1}}_{P^{-1}}
$$

$$
A = PQP^{-1}
$$

Portanto, quando fazemos uma multiplicação matricial $y=Ax$, podemos expandir a multiplicação para:

$$
y = PQP^{-1} x
$$

Fazendo um paralelo com a mudança de bases, podemos interpretar a operação como mudar $x$ para a base definida pelos auto-vetores de $A$, realizar a transformação $Q$ e então retornar à base original. Só que veja uma coisa super importante: a transformação $Q$ é uma *escala*.

??? info "Mostre que, se todos os $n$ auto-valores de $A$ forem iguais a $1$, então $A$ é uma matriz identidade."
    Se $\lambda_i=1 \forall i$, então $Q$ é uma matriz identidade e portanto:
    $$
    \begin{array}{rl}
    A &= P Q P^{-1}\\
     &= P I P^{-1}\\
     &= P P^{-1}\\
     &= I
    \end{array}
    $$

    Então, algum tipo de escala é inevitável...

## Uma nova interpretação para a inversão de matrizes

Vamos nos recordar da distributividade da inversa:

$$
(XYZ)^{-1} = Z^{-1}Y^{-1}X^{-1}
$$,

isto é, aplicamos a inversa a cada uma das matrizes de "dentro dos parênteses" invertendo a ordem.

Aplicando a mesma regra para $A$, temos:

$$
\begin{array}{rl}
A &= PQP^{-1} \\
A^{-1} &= (PQP^{-1})^{-1} \\
&= (P^{-1})^{-1} Q^{-1} P^{-1} \\
&= P Q^{-1} P^{-1}
\end{array}
$$

Veja que isso significa que multiplicar um vetor $x$ por $A^{-1}$ equivale a, sequencialmente:

1. Levar $x$ para a base de auto-vetores de $A$
2. Realizar a escala inversa $Q^{-1}$ nesse domínio
3. Voltar para a base original

!!! info "Uma interpretação geométrica!"
    Já vimos que a multiplicação matricial é uma *escala* em uma base definida pelos auto-vetores de $A$. A consequência disso é que a multiplicação pela inversa é a *escala inversa* nessa mesma base!

