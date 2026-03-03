# Matrizes

Referência bibliográfica: [Jim Hefferon - Linear Algebra - 4th Edition](https://hefferon.net/linearalgebra/) - Chap. One, I, Chap. Three, III-IV

## Introdução: a sobremesa

### Calculando o preço da minha fornada de brigadeiros

Uma forma muito comum de fazer brigadeiros é a seguinte: coloque uma lata de leite condensado, duas colheres de chocolate em pó e uma colher de manteiga em uma panela. Leve a mistura ao fogo baixo e misture bem. Quando ferver, recite devagar um soneto de Camões e então desligue.

Bem, após toda a poesia de usar um soneto como medida de tempo, podemos medir friamente nossos ingredientes e descobrir que, para fazer uma fornada com 20 brigadeiros, é preciso usar 40g de manteiga, uma lata (400g) de leite condensado e 20g de chocolate em pó.

Também, podemos lembrar os preços de cada um dos ingredientes:

Ingrediente | Custo por embalagem 
--- | ---
Leite condensado | R\$10,00 (lata de 400g) 
Manteiga | R\$15,00 (pote com 200g)
Chocolate em pó |R\$18,00 (caixa com 200g)

Podemos representar a quantidade de nossos ingredientes (em gramas) como um vetor $x \in \mathbb{R}^3$:

$$
x = \begin{bmatrix} 40 \\ 400 \\ 20 \end{bmatrix}.
$$

Podemos também representar o preço por grama de cada ingrediente como um vetor $y \in \mathbb{R}^3$:

$$
y = \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \end{bmatrix}.
$$

??? info "Mostre que o preço de uma fornada pode ser calculado por $<x,y>$."
    O preço total da fornada é calculado somando os preços parciais de cada ingrediente, ou seja:

    $$
    p = x_1 y_1 + x_2 y_2 + x_3 y_3 = \sum_{i=1}^n x_i y_i = <x,y>
    $$

### E se eu faço ganache?

Nem só de brigadeiros vive uma doceria. Também queria fazer ganache. Ganache é feito igual ao brigadeiro, mas usando uma caixa de creme de leite (a caixa tem 200g e custa R\$2,80). Só que agora gostaríamos de representar tanto as quantidades de ingredientes para o brigadeiro quanto para o doce de côco no mesmo espaço vetorial. Bem, agora teremos que criar "espaço" para o creme de leite, então nossos vetores vão passar a estar em $\mathbb{R}^4$. Nesse caso:

??? info "Como ficam os vetores $x_b$ (ingredientes do brigadeiro), $x_g$ (ingredientes do ganache), e $y$ (custo dos ingredientes)?"
    Adicionando uma quarta dimensão para o creme de leite:

    $$
    x_b = \begin{bmatrix} 40 \\ 400 \\ 20 \\ 0 \end{bmatrix}
    $$

    $$
    x_g = \begin{bmatrix} 40 \\ 0 \\ 20 \\ 200 \end{bmatrix}
    $$

    $$
    y = \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \\ 28/2000 \end{bmatrix}
    $$

??? info "Nesse caso, ainda posso calcular o custo do brigadeiro usando $<x_b, y>$ e o custo do ganache com $<x_g, y>$?"
    Sim, ainda posso. Como temos "zero" nos ingredientes inexistentes, a equação fica estritamente a mesma que se eles não existissem.

## Matrizes

No caso da nossa doceria fictícia, tínhamos dois doces, e atuamos sobre eles de forma completamente independente. Porém, gostaríamos de representar nossas receitas - ou melhor, nossa *coleção de vetores* - em uma única estrutura! Para isso, precisamos de uma espécie de... vetor de vetores... ou melhor: uma **matriz**.

Uma matriz tem números organizados em linhas e colunas, de forma semelhante a uma tabela. Por exemplo:

$$
X = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}
$$

Nesse caso, dizemos que $X$ tem duas linhas e 3 colunas, ou ainda, que $X \in \mathbb{R}^{2 \times 3}$. Geralmente usamos letras maiúsculas para representar matriz, mas isso não é *obrigatório*. Usamos a notação $x_{i,j}$ para nos referir ao elemento de $X$ que está na linha $i$ e coluna $j$.

Uma maneira de representar nossas receitas poderia ser usando uma matriz com uma linha por receita e uma coluna por ingrediente, ou:

$$
X = \begin{bmatrix} 40 & 400 & 20 & 0 \\ 40 & 0 & 20 & 200 \end{bmatrix}
$$

E agora temos uma única "entidade" que representa todo o nosso cardápio - ou ainda, toda a nossa *coleção de vetores*.

??? info "Suponha que queremos adicionar à nossa doceria caseira o doce de côco, que é feito com 400g de leite condensado e 250g de côco ralado. Como ficaria a matriz $X$?"
    $$
    X = \begin{bmatrix} 40 & 400 & 20 & 0 & 0 \\ 40 & 0 & 20 & 200 & 0 \\ 0 & 400 & 0 & 0 & 250 \end{bmatrix}
    $$

## Soma de matrizes e multiplicação por escalar

Se continuarmos assumindo que as matrizes são uma maneira de representar uma coleção de vetores, então as regras de soma e multiplicação por escalar se aplicam da mesma forma que para vetores:

$$
\begin{array}{rll}
Z &= X + Y &\Rightarrow z_{i,j} = x_{i,j} + y_{i,j} \\
Z &= aX &\Rightarrow z_{i,j} = a x_{i,j}
\end{array}
$$

## Multiplicação de matrizes

Podemos multiplicar duas matrizes $X$ e $Y$. Essa operação não é trivial e há regras específicas para ela. 

### Definição

A definição da multiplicação de matrizes é: partindo de $X \in \mathbb{R}^{i \times k}$ e $Y \in \mathbb{R}^{k \times j}$, o resultado é uma matriz $Z \in \mathbb{R}^{i \times j}$ onde:

$$
z_{i,j} = \sum_{n=1}^k x_{i,n} y_{n,j}
$$

### Uma forma mais simples de entender

Se tivermos:

$$
X = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \hspace{1cm} Y = \begin{bmatrix} a \\ b \\ c \end{bmatrix}
$$

podemos fazer a multiplicação $Z=XY$. Nesse caso, $Z$ é uma matriz com:

* Tantas linhas quanto a primeira matriz ($X$), isto é, 2
* Tantas colunas quanto a segunda matriz ($Y$), isto é, 1

A definição da multiplicação matricial pode ser interpretada da seguinte forma: *o elemento $z_{i,j}$ (isto é, o elemento na linha $i$, coluna $j$) é calculado multiplicando sucessivamente os elementos da linha $i$ da primeira matriz com os elementos da coluna $j$ da segunda matriz*. Em outras palavras:

$$
z_{1,1} = \sum_{n=1}^3 x_{1,n} y_{n,1} = 1a + 2b + 3c
$$

??? info "Então, como calcular $z_{2,1}$?"
    $$z_{2,1} = \sum_{n=1}^3 x_{2,n} y_{n,1} = 4a + 5b + 6c$$

??? info "Por fim, quanto vale Z?"
    $$Z = \begin{bmatrix}  1a + 2b + 3c \\ 4a + 5b + 6c \end{bmatrix}$$

### Restrições

* Veja que, pela definição, a multiplicação $Z=XY$ só pode acontecer se o número de colunas de $X$ for igual ao número de linhas de $Y$.
* Também, podemos rapidamente mostrar que, no caso geral, $XY \neq YX$. Demonstre isso para duas matrizes $2 \times 2$!

### Voltando à minha doceria

Partindo da minha matriz com ingredientes para brigadeiro e ganache:

$$
X = \begin{bmatrix} 40 & 400 & 20 & 0  \\ 40 & 0 & 20 & 200 & \end{bmatrix}
$$

podemos escrever nossa matriz de custos como:

$$
Y = \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \\ 28/2000 \end{bmatrix}
$$

??? info "Verifique que $Z=XY$ representa, simultaneamente, o custo do brigadeiro e do ganache"
    Realizando a multiplicação matricial, temos os resultados que encontramos anteriormente em cada elemento de $Z$.

Veja que isso nos leva a interpretar matrizes de acordo com seu conteúdo. Neste problema:

* $Y$ é uma matriz em que cada linha representa um ingrediente e cada elemento é seu custo unitário.
* $X$ é uma matriz em que cada linha representa uma receita, cada coluna representa um ingrediente, e cada elemento é a quantidade usada.
* $Z$ é uma matriz em que cada linha representa uma receita e cada elemento é o seu custo total.

## Matrizes transpostas

Uma operação que podemos fazer sobre uma matriz é a *tranposição*. A matriz transposta de $X$ é denotada $X^T$. Na transposição, os índices que indicavam colunas passam a indicar linhas, e vice-versa. A definição precisa disso é:

$$
x^T_{j,i} = x_{i,j}
$$

!!! info "Exemplo de matriz transposta"

    se 
    $$
    X = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix},
    $$

    então

    $$
    X^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}
    $$

??? info "Como fica nossa matriz de receitas em sua forma transposta?"
    $$
    X^T = \begin{bmatrix} 40 & 40 \\ 400 & 0 \\ 20 & 20 \\ 0 & 200 \end{bmatrix}
    $$

??? info "Mostre que, se $X$ é uma matriz-linha correspondente ao vetor $y$, então $XX^T = <y,y>$.
    Pela definição:
    $$
    \begin{array}{rl}
    XX^T &= \sum_{n=1}^k x_{1,n} x^T_{n,1} \\ &= \sum_{n=1}^k x_{1,n} x_{1,n}
    \\ &= \sum_{n=1}^k y_n y_n
    \\ &= <y,y>
    \end{array}
    $$

### Multiplicação de transpostas

Se quisermos operar com a matriz de receitas em sua forma transposta, é claro que não conseguimos mais multiplicar da mesma forma pela matriz de custos. Se tentarmos isso, vamos encontrar:

$$
Z = \begin{bmatrix} 40 & 40 \\ 400 & 0 \\ 20 & 20 \\ 0 & 200 \end{bmatrix} \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \\ 28/2000 \end{bmatrix}
$$

e essa operação é inválida porque o número de colunas de $X^T$ não é o número de linhas de $Y$. Então, precisamos usar uma propriedade:

$$
Y^T X^T = (XY)^T
$$

Isso significa que, no nosso caso, podemos encontrar a matriz $Z=XY$. Porém, podemos também encontrar a matriz $Z^T=(XY)^T$. Para encontra essa matriz, devemos multiplicar $Y^T X^T$, isto é, transpomos cada matriz individualmente e invertemos a ordem da multiplicação.

Verifique que essa propriedade realmente se aplica no caso de nossa matriz de receitas!

!!! info "Desafio"
    Partindo das definições da multiplicação matricial e da matriz transposta, demonstre que $Y^T X^T = (XY)^T$.

## Matrizes são vetores empilhados

Podemos interpretar nossa matriz de receitas como uma série de vetores, cada um representando receitas, transpostos e empilhados:

$$
X = \begin{bmatrix} - & x_b^T & - \\ - & x_g^T & - \end{bmatrix}
$$

Opcionalmente, podemos trabalhar com a forma transposta:

$$
X^T = \begin{bmatrix} - & x_b^T & - \\ - & x_g^T & - \end{bmatrix}^T = 
\begin{bmatrix} \vert & \vert \\ x_b & x_g \\ \vert & \vert \end{bmatrix}
$$

Da mesma maneira, podemos interpretar nossa matriz de custos $Y$ como uma série (nesse caso, de apenas um elemento) de vetores de custos empilhados:

$$
Y = \begin{bmatrix} \vert \\ y \\ \vert \end{bmatrix}
$$

Veja que, nessa interpretação, podemos escrever nossa multiplicação matricial como:

$$
Z = XY = \begin{bmatrix} - & x_b^T & - \\ - & x_g^T & - \end{bmatrix} \begin{bmatrix} \vert \\ y \\ \vert \end{bmatrix}
$$

Veja como isso evidencia que:

$$
Z = \begin{bmatrix} \sum_{n=1}^k x_{b_k} y_k \\ \sum_{n=1}^k x_{g_k} y_k \end{bmatrix} = \begin{bmatrix} <x_b, y> \\ <x_g, y> \end{bmatrix}
$$

Como podemos observar, o elemento $z_{i,j}$ de $Z$ é calculado pelo *produto interno* entre a linha $i$ de $X$ e a coluna $j$ de $Y$.

## A multiplicação matricial é uma série de produtos internos

Agora, demonstraremos o caso geral:

$$
\begin{bmatrix} - & x_1 & - \\ - & x_2 & - \\ & \vdots & \\ - & x_i & - \end{bmatrix} \begin{bmatrix} \vert & \vert & & \vert \\ y_1 & y_2 & \cdots & y_j \\  \vert & \vert & & \vert \end{bmatrix} = 
\begin{bmatrix}
<x_1, y_1> & <x_1, y_2> & \cdots & <x_1, y_j> \\ 
<x_2, y_1> & <x_2, y_2> & \cdots & <x_2, y_j> \\ 
\vdots & \vdots & \vdots & \vdots \\
<x_i, y_1> & <x_i, y_2> & \cdots & <x_i, y_j> 
\end{bmatrix} = Z
$$

Pela definição de multiplicação matricial, o elemento $z_{a,b}$ (vamos usar $a,b$ para não confundir com $i,j$) pode ser calculado por:

$$
z_{a,b} = \sum_{n=1}^k x_{a,k} y_{k,b}
$$

Porém, os elementos $x_{a,k}$, com $k$ livre e $a$ fixo, correspondem ao vetor $x_a$ que compõe a linha $a$ da matriz $X$. Analogamente, os elementos $y_{k,b}$ compõem a coluna $b$ da matriz $Y$. Portanto, para $a$ e $b$ fixos, $z_{a,b}$ é o produto interno entre a linha $a$ de $X$ (denotada $x_a$ na formulação acima) e a coluna $b$
de $Y$ (denotada $y_b$). Portanto, 

$$
z_{a,b} = <x_a, y_b>, a \in [1 \cdots i], b \in [1 \cdots j].
$$

## A busca em espaços de embeddings

Gostaríamos de representar embeddings de documentos de uma base de dados (com $n$ embeddings: $x_1, x_2, \cdots, x_n$) em uma matriz $X$. Após, recebemos uma query na forma de um vetor $q$. Gostaríamos de calcular o alinhamento entre cada um de nossos embeddings da base de dados e a query usando somente uma multiplicação matricial, que é uma operação muito rápida de realizar em hardware especializado (GPU). 

(a) Mostre que, se normalizarmos os vetores da base de dados para que tenham norma unitária, podemos realizar essa operação usando a formulação:

$$
s = \begin{bmatrix} - & x_1 & - \\
- & x_2 & - \\
 & \vdots & \\
 - & x_n & - \end{bmatrix} \begin{bmatrix} \vert \\ q \\ \vert \end{bmatrix}
$$

(b) Nesse caso, quais são as dimensões de $q$? O que cada um de seus elementos representa?

(c) Se modificarmos o embedding $x_5$, isso afeta o elemento $s_2$? Por que?