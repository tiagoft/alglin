# Exercícios de revisão

## Transformações

**Teoria**

No espaço $\mathbb{R}^3$, há três eixos, que vamos chamar - exclusivamente neste exercício - de $x$, $y$ e $z$.

a) Deduza como encontrar uma matriz $R$ que realiza a rotação de um vetor em $\mathbb{R}^3$ ao redor da origem e ao redor do eixo $x$. A rotação é de um ângulo arbitrário $\theta$. Para isso (i) desenhe a situação para visualizá-la corretamente; (ii) identifique os ângulos, módulos, etc., que forem relevantes para a sua solução; (iii) encontre as equações que definem as novas coordenadas $x_1$, $y_1$, $z_1$ do vetor rotacionado; (iv) passe as equações para o formato matricial.

b) Suponha que temos um cubo com centro no ponto $(5, 5, 5)$. Se ele for rotacionado de 45 graus somente aplicando a matriz que você encontrou no ítem (a), qual será a figura encontrada?

c) Podemos definir uma matriz de translação $T$ que leva o centro da figura a rotacionar para a origem. Essa matriz tem uma dimensão a mais que o vetor a ser transladado, isto é, uma matriz de translação em $\mathbb{R}^3$ tem formato $4 \times 4$. Que ajuste deve ser feito ao vetor original para que ele possa ser multiplicado pela matriz de translação? Justifique sua resposta partindo do princípio de funcionamento da translação (que é somar constantes a cada uma das dimensões).

d) Uma rotação do vetor $v_0$ ao redor de um ponto arbitrário $(x_c, y_c, z_c)$ pode ser realizada usando: $v_1 = T^{-1} R T v_0$. Escreva explicitamente as matrizes $T^{-1}$, $R$ e $T$.


**Prática**

Um quadrado de lado 1 está em $\mathbb{R}^2$ e tem centro em $(2,3)$. Gostaríamos de transformá-lo em um retângulo de lados 5 (horizontal) e 6 (vertical), ainda centrado em $(2,3)$, usando uma multiplicação matricial. Mostre, passo a passo, como encontrar a matriz que realiza essa transformação.

**Projeto**

Faça os dois projetos opcionais (enigma e ponto de vista do jogo) relacionados a esta matéria.

## Vetores

**Teoria**

1. Suponha que temos dois vetores: $v = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}$ e $w=\begin{bmatrix} 5 \\ 6 \\ 7 \\ 8 \end{bmatrix}$. Encontre o cosseno do ângulo entre $v$ e $w$.

2. Suponha que temos dois vetores: $v = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}$ e $w=\begin{bmatrix} 5 \\ 6 \\ 7 \\ x \end{bmatrix}$. Encontre $x$ para que $v$ seja ortogonal a $w$.

**Prática**

Sistemas modernos de Machine Learning usam uma representação chamada de *embedding*, em que cada ítem de uma coleção é representado por um vetor e o cosseno do ângulo entre dois vetores representa a semelhança semântica entre eles.

a) Considere vetores representando dois conceitos próximos (exemplo: cachorro e gato), e um conceito completamente diferente (mitocôndria). Faça um desenho ilustrando como o cosseno do ângulo entre esses vetores deveria representar essas semelhanças e diferenças semânticas.

b) Antes de usar embeddings, uma representação comum é a chamada "one-hot encoding". Nessa representação, cada ítem da coleção é representado por um vetor com tantas dimensões quantas são as possíveis variações de características de um elemento. Nesse vetor, todos os elementos são iguais a zero, exceto aquele que caracteriza o ítem em questão, que tem valor 1. No exemplo de cachorro, gato, e mitocôndria, teríamos um vetor de três dimensões (já que há três possibilidades de elementos), em que *cachorro* é representado por $\begin{bmatrix} 1 \\ 0 \\ 0\end{bmatrix}$, *gato* é representado por $\begin{bmatrix} 0 \\ 1 \\ 0\end{bmatrix}$ e *mitocôndria* é representada por $\begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$. Mostre que, na representação "one-hot enconding", o cosseno do ângulo entre vetores não é um proxy para a semelhança semântica entre os ítens representados.

