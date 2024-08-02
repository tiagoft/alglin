# Demonstração da decomposição SVD

A decomposição SVD (Singular Value Decomposition) consiste em decompor uma matriz $A$ em três matrizes, $U$, $\Sigma$ e $V$, de forma que:

$
A = U \Sigma V^T,
$

com a premissa de que as matrizes $U$ e $V$ são ortonormais, isto é:

* $U^T U = I$
* $V^T V = I$

## Por que decompor em SVD?

O que estamos buscando aqui é uma formulação na qual os elementos da matriz $A$ são transformados para uma base ortonormal (através da matriz $V^T$), sofrem uma transformação nessa base (usando a matriz $\Sigma$), e então são levados de volta ao espaço original (usando a matriz $U$). A premissa de ortonormalidade ($U^T U = I$ e $V^T V = I$) é importante porque torna mais fácil entender o que os valores da matriz $\Sigma$ significam. Além disso, sem ela, o número de soluções para a equação $A = U \Sigma V^T$ fica infinito, pois poderíamos multiplicar $U$ por um valor qualquer $\alpha$ e depois $V$ por $1/\alpha$ e encontrar uma solução perfeitamente válida.

## Como calcular a decomposição

Podemos calcular a decomposição da seguinte forma. Lembramos que uma matriz *quadrada* pode ser escrita em termos de sua decomposição de auto-valores e auto-vetores:

$
X = P D P^{-1}.
$

### Encontrando $U$ e $\Sigma$

Se a matriz $X$ for uma matriz de covariância, isto é, $X = C = A^TA$, então a matriz $P$ é ortonormal [[PROVA]](./demonstracao_ortonormalidade.md) e, portanto, $P^{-1}=P^T$. Daí temos a seguinte situaçao:

$
X = P D P^{-1} = A A^T.
$

Como na nossa decomposição $A = U \Sigma V^T$, podemos substituir $A A^T$ por:

$
X = A A^T = U \Sigma V^T (U \Sigma V^T)^T.
$

Passando a transposição para dentro dos parênteses:

$
X = U \Sigma V^T V \Sigma U^T
$

Lembre-se que nossa premissa era que $V^TV=I$, então ficamos com:

$
X = U \Sigma I \Sigma U^T
$

e, portanto, 

$
X = U \Sigma^2 U^T
$

Podemos comparar a equação acima com a decomposição de $X$ em auto-valores e auto-vetores:

$
X = P D P^T,
$

e descobrimos que $U$ é exatamente igual à matriz $P$, e que $\Sigma^2=D$, isto é, $\Sigma=\sqrt{D}$.

### Encontrando $V$

Para encontrar $V$, vamos usar uma técnica semelhante, só que ao invés de partir de $X$, vamos partir de $X^T$. Vou passar mais rápido pelos passos, porque eles são equivalentes aos acima:

$
X^T = (A A^T)^T = A^T A = (U \Sigma V^T)^T U \Sigma V^T .
$

Então:

$
X^T = V^{T^T} \Sigma U^T U \Sigma V^T = V \Sigma I \Sigma V^T.
$

Simplificando:

$
X^T = V \Sigma^2 V^T = PDP^T.
$

Então, $V$ é a matriz de auto-vetores de $X^T$ e $\Sigma^2=D$.

Uma anotação: isso está ligado ao fato de que os auto-valores de $X$ são os mesmos de $X^T$.

## Fórmula para calcular SVD

Para calcular o SVD de uma matriz $A \in \mathbb{R}^{M \times N}$, precisamos encontrar as matrizes:

* $U \in \mathbb{R}^{M \times M}$ cujas colunas são auto-vetores de $A A^T$,
* $V \in \mathbb{R}^{N \times N}$ cujas colunas são auto-vetores de $A^T A$,
* $\Sigma \in \mathbb{R}^{N \times N}$, cujos elementos $s_{i,i}$ são os auto-valores de $AA^T$ ou de $A^TA$, e os outros elementos são iguais a zero.
