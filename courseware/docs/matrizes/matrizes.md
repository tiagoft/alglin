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

Podemos representar a quantidade de nossos ingredientes (em gramas) como um vetor $\boldsymbol{x} \in \mathbb{R}^3$:

$$
\boldsymbol{x} = \begin{bmatrix} 40 \\ 400 \\ 20 \end{bmatrix}.
$$

Podemos também representar o preço por grama de cada ingrediente como um vetor $\boldsymbol{y} \in \mathbb{R}^3$:

$$
\boldsymbol{y} = \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \end{bmatrix}.
$$

??? info "Mostre que o preço de uma fornada pode ser calculado por $<\boldsymbol{x},\boldsymbol{y}>$."
    O preço total da fornada é calculado somando os preços parciais de cada ingrediente, ou seja:

    $$
    p = x_1 y_1 + x_2 y_2 + x_3 y_3 = \sum_{n=1}^N x_n y_n = <\boldsymbol{x},\boldsymbol{y}>
    $$

### E se eu faço ganache?

Nem só de brigadeiros vive uma doceria. Também queria fazer ganache. Ganache é feito igual ao brigadeiro, mas usando uma caixa de creme de leite (a caixa tem 200g e custa R\$2,80). Só que agora gostaríamos de representar tanto as quantidades de ingredientes para o brigadeiro quanto para o doce de côco no mesmo espaço vetorial. Bem, agora teremos que criar "espaço" para o creme de leite, então nossos vetores vão passar a estar em $\mathbb{R}^4$. Nesse caso:

??? info "Como ficam os vetores $\boldsymbol{x}_b$ (ingredientes do brigadeiro), $\boldsymbol{x}_g$ (ingredientes do ganache), e $\boldsymbol{y}$ (custo dos ingredientes)?"
    Adicionando uma quarta dimensão para o creme de leite:

    $$
    \boldsymbol{x}_b = \begin{bmatrix} 40 \\ 400 \\ 20 \\ 0 \end{bmatrix}
    $$

    $$
    \boldsymbol{x}_g = \begin{bmatrix} 40 \\ 0 \\ 20 \\ 200 \end{bmatrix}
    $$

    $$
    \boldsymbol{y} = \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \\ 28/2000 \end{bmatrix}
    $$

??? info "Nesse caso, ainda posso calcular o custo do brigadeiro usando $<\boldsymbol{x}_b, \boldsymbol{y}>$ e o custo do ganache com $<\boldsymbol{x}_g, \boldsymbol{y}>$?"
    Sim, ainda posso. Como temos "zero" nos ingredientes inexistentes, a equação fica estritamente a mesma que se eles não existissem.

## Matrizes

No caso da nossa doceria fictícia, tínhamos dois doces, e atuamos sobre eles de forma completamente independente. Porém, gostaríamos de representar nossas receitas - ou melhor, nossa *coleção de vetores* - em uma única estrutura! Para isso, precisamos de uma espécie de... vetor de vetores... ou melhor: uma **matriz**.

Uma matriz tem números organizados em linhas e colunas, de forma semelhante a uma tabela. Por exemplo:

$$
\boldsymbol{X} = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}
$$

Nesse caso, dizemos que $\boldsymbol{X}$ tem duas linhas e 3 colunas, ou ainda, que $\boldsymbol{X} \in \mathbb{R}^{2 \times 3}$. Geralmente usamos letras maiúsculas para representar matriz, mas isso não é *obrigatório*. Usamos a notação $x_{i,j}$ para nos referir ao elemento de $\boldsymbol{X}$ que está na linha $i$ e coluna $j$.

Uma maneira de representar nossas receitas poderia ser usando uma matriz com uma linha por receita e uma coluna por ingrediente, ou:

$$
\boldsymbol{X} = \begin{bmatrix} 40 & 400 & 20 & 0 \\ 40 & 0 & 20 & 200 \end{bmatrix}
$$

E agora temos uma única "entidade" que representa todo o nosso cardápio - ou ainda, toda a nossa *coleção de vetores*.

??? info "Suponha que queremos adicionar à nossa doceria caseira o doce de côco, que é feito com 400g de leite condensado e 250g de côco ralado. Como ficaria a matriz $\boldsymbol{X}$?"
    $$
    \boldsymbol{X} = \begin{bmatrix} 40 & 400 & 20 & 0 & 0 \\ 40 & 0 & 20 & 200 & 0 \\ 0 & 400 & 0 & 0 & 250 \end{bmatrix}
    $$

## Soma de matrizes e multiplicação por escalar

Se continuarmos assumindo que as matrizes são uma maneira de representar uma coleção de vetores, então as regras de soma e multiplicação por escalar se aplicam da mesma forma que para vetores:

$$
\begin{array}{rll}
\boldsymbol{Z} &= \boldsymbol{X} + \boldsymbol{Y} &\Rightarrow z_{i,j} = x_{i,j} + y_{i,j} \\
\boldsymbol{Z} &= a\boldsymbol{X} &\Rightarrow z_{i,j} = a x_{i,j}
\end{array}
$$

## Multiplicação de matrizes

Podemos multiplicar duas matrizes $\boldsymbol{X}$ e $\boldsymbol{Y}$. Essa operação não é trivial e há regras específicas para ela. 

### Definição

A definição da multiplicação de matrizes é: partindo de $\boldsymbol{X} \in \mathbb{R}^{I \times N}$ e $\boldsymbol{Y} \in \mathbb{R}^{N \times J}$, o resultado é uma matriz $\boldsymbol{Z} \in \mathbb{R}^{I \times J}$ onde:

$$
z_{i,j} = \sum_{n=1}^N x_{i,n} y_{n,j}
$$

### Uma forma mais simples de entender

Se tivermos:

$$
\boldsymbol{X} = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \hspace{1cm} \boldsymbol{Y} = \begin{bmatrix} a \\ b \\ c \end{bmatrix}
$$

podemos fazer a multiplicação $\boldsymbol{Z}=\boldsymbol{X}\boldsymbol{Y}$. Nesse caso, $\boldsymbol{Z}$ é uma matriz com:

* Tantas linhas quanto a primeira matriz ($\boldsymbol{X}$), isto é, 2
* Tantas colunas quanto a segunda matriz ($\boldsymbol{Y}$), isto é, 1

A definição da multiplicação matricial pode ser interpretada da seguinte forma: *o elemento $z_{i,j}$ (isto é, o elemento na linha $i$, coluna $j$) é calculado multiplicando sucessivamente os elementos da linha $i$ da primeira matriz com os elementos da coluna $j$ da segunda matriz*. Em outras palavras:

$$
z_{1,1} = \sum_{n=1}^3 x_{1,n} y_{n,1} = 1a + 2b + 3c
$$

??? info "Então, como calcular $z_{2,1}$?"
    $$z_{2,1} = \sum_{n=1}^3 x_{2,n} y_{n,1} = 4a + 5b + 6c$$

??? info "Por fim, quanto vale $\boldsymbol{Z}$?"
    $$\boldsymbol{Z} = \begin{bmatrix}  1a + 2b + 3c \\ 4a + 5b + 6c \end{bmatrix}$$

### Restrições

* Veja que, pela definição, a multiplicação $\boldsymbol{Z}=\boldsymbol{X}\boldsymbol{Y}$ só pode acontecer se o número de colunas de $\boldsymbol{X}$ for igual ao número de linhas de $\boldsymbol{Y}$.
* Também, podemos rapidamente mostrar que, no caso geral, $\boldsymbol{X}\boldsymbol{Y} \neq \boldsymbol{Y}\boldsymbol{X}$. Demonstre isso para duas matrizes $2 \times 2$!

### Voltando à minha doceria

Partindo da minha matriz com ingredientes para brigadeiro e ganache:

$$
\boldsymbol{X} = \begin{bmatrix} 40 & 400 & 20 & 0  \\ 40 & 0 & 20 & 200 \end{bmatrix}
$$

podemos escrever nossa matriz de custos como:

$$
\boldsymbol{Y} = \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \\ 28/2000 \end{bmatrix}
$$

??? info "Verifique que $\boldsymbol{Z}=\boldsymbol{X}\boldsymbol{Y}$ representa, simultaneamente, o custo do brigadeiro e do ganache"
    Realizando a multiplicação matricial, temos os resultados que encontramos anteriormente em cada elemento de $\boldsymbol{Z}$.

Veja que isso nos leva a interpretar matrizes de acordo com seu conteúdo. Neste problema:

* $\boldsymbol{Y}$ é uma matriz em que cada linha representa um ingrediente e cada elemento é seu custo unitário.
* $\boldsymbol{X}$ é uma matriz em que cada linha representa uma receita, cada coluna representa um ingrediente, e cada elemento é a quantidade usada.
* $\boldsymbol{Z}$ é uma matriz em que cada linha representa uma receita e cada elemento é o seu custo total.

## Matrizes transpostas

Uma operação que podemos fazer sobre uma matriz é a *tranposição*. A matriz transposta de $\boldsymbol{X}$ é denotada $\boldsymbol{X}^T$. Na transposição, os índices que indicavam colunas passam a indicar linhas, e vice-versa. A definição precisa disso é:

$$
x^T_{j,i} = x_{i,j}
$$

!!! info "Exemplo de matriz transposta"

    se 
    $$
    \boldsymbol{X} = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix},
    $$

    então

    $$
    \boldsymbol{X}^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}
    $$

??? info "Como fica nossa matriz de receitas em sua forma transposta?"
    $$
    \boldsymbol{X}^T = \begin{bmatrix} 40 & 40 \\ 400 & 0 \\ 20 & 20 \\ 0 & 200 \end{bmatrix}
    $$

??? info "Mostre que, se $\boldsymbol{X}$ é uma matriz-linha correspondente ao vetor $\boldsymbol{y}$, então $\boldsymbol{X}\boldsymbol{X}^T = <\boldsymbol{y},\boldsymbol{y}>$."
    Pela definição:
    $$
    \begin{array}{rl}
    \boldsymbol{X}\boldsymbol{X}^T &= \sum_{n=1}^N x_{1,n} x^T_{n,1} \\ &= \sum_{n=1}^N x_{1,n} x_{1,n}
    \\ &= \sum_{n=1}^N y_n y_n
    \\ &= <\boldsymbol{y},\boldsymbol{y}>
    \end{array}
    $$

### Multiplicação de transpostas

Se quisermos operar com a matriz de receitas em sua forma transposta, é claro que não conseguimos mais multiplicar da mesma forma pela matriz de custos. Se tentarmos isso, vamos encontrar:

$$
\boldsymbol{Z} = \begin{bmatrix} 40 & 40 \\ 400 & 0 \\ 20 & 20 \\ 0 & 200 \end{bmatrix} \begin{bmatrix} 15/200 \\ 10/400 \\ 18/200 \\ 28/2000 \end{bmatrix}
$$

e essa operação é inválida porque o número de colunas de $\boldsymbol{X}^T$ não é o número de linhas de $\boldsymbol{Y}$. Então, precisamos usar uma propriedade:

$$
\boldsymbol{Y}^T \boldsymbol{X}^T = (\boldsymbol{X}\boldsymbol{Y})^T
$$

Isso significa que, no nosso caso, podemos encontrar a matriz $\boldsymbol{Z}=\boldsymbol{X}\boldsymbol{Y}$. Porém, podemos também encontrar a matriz $\boldsymbol{Z}^T=(\boldsymbol{X}\boldsymbol{Y})^T$. Para encontrar essa matriz, devemos multiplicar $\boldsymbol{Y}^T \boldsymbol{X}^T$, isto é, transpomos cada matriz individualmente e invertemos a ordem da multiplicação.


Verifique que essa propriedade realmente se aplica no caso de nossa matriz de receitas!

!!! info "Desafio"
    Partindo das definições da multiplicação matricial e da matriz transposta, demonstre que $\boldsymbol{Y}^T \boldsymbol{X}^T = (\boldsymbol{X}\boldsymbol{Y})^T$.

## Matrizes são vetores empilhados

Podemos interpretar nossa matriz de receitas como uma série de vetores, cada um representando receitas, transpostos e empilhados:

$$
\boldsymbol{X} = \begin{bmatrix} - & \boldsymbol{x}_b^T & - \\ - & \boldsymbol{x}_g^T & - \end{bmatrix}
$$

Opcionalmente, podemos trabalhar com a forma transposta:

$$
\boldsymbol{X}^T = \begin{bmatrix} - & \boldsymbol{x}_b^T & - \\ - & \boldsymbol{x}_g^T & - \end{bmatrix}^T = 
\begin{bmatrix} \vert & \vert \\ \boldsymbol{x}_b & \boldsymbol{x}_g \\ \vert & \vert \end{bmatrix}
$$

Da mesma maneira, podemos interpretar nossa matriz de custos $\boldsymbol{Y}$ como uma série (nesse caso, de apenas um elemento) de vetores de custos empilhados:

$$
\boldsymbol{Y} = \begin{bmatrix} \vert \\ \boldsymbol{y} \\ \vert \end{bmatrix}
$$

Veja que, nessa interpretação, podemos escrever nossa multiplicação matricial como:

$$
\boldsymbol{Z} = \boldsymbol{X}\boldsymbol{Y} = \begin{bmatrix} - & \boldsymbol{x}_b^T & - \\ - & \boldsymbol{x}_g^T & - \end{bmatrix} \begin{bmatrix} \vert \\ \boldsymbol{y} \\ \vert \end{bmatrix}
$$

Veja como isso evidencia que:

$$
\boldsymbol{Z} = \begin{bmatrix} \sum_{n=1}^N x_{b_n} y_n \\ \sum_{n=1}^N x_{g_n} y_n \end{bmatrix} = \begin{bmatrix} <\boldsymbol{x}_b, \boldsymbol{y}> \\ <\boldsymbol{x}_g, \boldsymbol{y}> \end{bmatrix}
$$

Como podemos observar, o elemento $z_{i,j}$ de $\boldsymbol{Z}$ é calculado pelo *produto interno* entre a linha $i$ de $\boldsymbol{X}$ e a coluna $j$ de $\boldsymbol{Y}$.

## A multiplicação matricial é uma série de produtos internos

Agora, demonstraremos o caso geral:

$$
\begin{bmatrix} - & \boldsymbol{x}_1 & - \\ - & \boldsymbol{x}_2 & - \\ & \vdots & \\ - & \boldsymbol{x}_I & - \end{bmatrix} \begin{bmatrix} \vert & \vert & & \vert \\ \boldsymbol{y}_1 & \boldsymbol{y}_2 & \cdots & \boldsymbol{y}_J \\  \vert & \vert & & \vert \end{bmatrix} = 
\begin{bmatrix}
<\boldsymbol{x}_1, \boldsymbol{y}_1> & <\boldsymbol{x}_1, \boldsymbol{y}_2> & \cdots & <\boldsymbol{x}_1, \boldsymbol{y}_J> \\ 
<\boldsymbol{x}_2, \boldsymbol{y}_1> & <\boldsymbol{x}_2, \boldsymbol{y}_2> & \cdots & <\boldsymbol{x}_2, \boldsymbol{y}_J> \\ 
\vdots & \vdots & \vdots & \vdots \\
<\boldsymbol{x}_I, \boldsymbol{y}_1> & <\boldsymbol{x}_I, \boldsymbol{y}_2> & \cdots & <\boldsymbol{x}_I, \boldsymbol{y}_J> 
\end{bmatrix} = \boldsymbol{Z}
$$

Pela definição de multiplicação matricial, o elemento $z_{a,b}$ (vamos usar $a,b$ para não confundir com $i,j$) pode ser calculado por:

$$
z_{a,b} = \sum_{n=1}^N x_{a,n} y_{n,b}
$$

Porém, os elementos $x_{a,n}$, com $n$ livre e $a$ fixo, correspondem ao vetor $\boldsymbol{x}_a$ que compõe a linha $a$ da matriz $\boldsymbol{X}$. Analogamente, os elementos $y_{n,b}$ compõem a coluna $b$ da matriz $\boldsymbol{Y}$. Portanto, para $a$ e $b$ fixos, $z_{a,b}$ é o produto interno entre a linha $a$ de $\boldsymbol{X}$ (denotada $\boldsymbol{x}_a$ na formulação acima) e a coluna $b$
de $\boldsymbol{Y}$ (denotada $\boldsymbol{y}_b$). Portanto, 

$$
z_{a,b} = <\boldsymbol{x}_a, \boldsymbol{y}_b>, a \in [1 \cdots I], b \in [1 \cdots J].
$$

## A busca em espaços de embeddings

Gostaríamos de representar embeddings de documentos de uma base de dados (com $N$ embeddings: $\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_N$) em uma matriz $\boldsymbol{X}$. Após, recebemos uma query na forma de um vetor $\boldsymbol{q}$. Gostaríamos de calcular o alinhamento entre cada um de nossos embeddings da base de dados e a query usando somente uma multiplicação matricial, que é uma operação muito rápida de realizar em hardware especializado (GPU). 

(a) Mostre que, se normalizarmos os vetores da base de dados para que tenham norma unitária, podemos realizar essa operação usando a formulação:

$$
\boldsymbol{s} = \begin{bmatrix} - & \boldsymbol{x}_1 & - \\
- & \boldsymbol{x}_2 & - \\
 & \vdots & \\
 - & \boldsymbol{x}_N & - \end{bmatrix} \begin{bmatrix} \vert \\ \boldsymbol{q} \\ \vert \end{bmatrix}
$$

(b) Nesse caso, quais são as dimensões de $\boldsymbol{q}$? O que cada um de seus elementos representa?

(c) Se modificarmos o embedding $\boldsymbol{x}_5$, isso afeta o elemento $s_2$? Por que?
