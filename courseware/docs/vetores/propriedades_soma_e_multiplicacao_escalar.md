# Propriedades de vetores

**Objetivo: ao fim desta aula, o aluno deverá ser capaz de manipular propriedades ligadas às operações vetoriais**

Em nossa [caminhada por Chicago](caminhando_pela_cidade.ipynb) começamos a trabalhar com uma entidade chamada vetor, que é usada para representar grandezas multi-dimensionais. Vamos então definir a nossa notação para nos referir a vetores sem que fiquemos nos confundindo.

## Notação

### Quando uma variável é vetor, e quando é um "número"?

Quando a variável $x$ é um "número", dizemos que ela pertence ao conjunto dos reais, ou:

$$
x \in \mathbb{R}.
$$

Se $x \in \mathbb{R}$, dizemos que $x$ é real, ou, ainda, que $x$ é *escalar*.

Se $x$ é um "vetor" com $n$ dimensões, a notação é:

$$
x \in \mathbb{R}^n.
$$


!!! info "Como saber se uma variável é escalar ou vetor"
    Uma variável **não é escalar ou vetor pela letra**, mas pelo **conjunto ao qual pertence**.

    - Se \(x \in \mathbb{R}\), então \(x\) é um **escalar** (um número).
    - Se \(x \in \mathbb{R}^n\), então \(x\) é um **vetor**.
    - O conjunto (\(\mathbb{R}\) ou \(\mathbb{R}^n\)) é sempre a informação mais importante.


### Vetores e suas componentes

Como vamos trabalhar com vetores de várias dimensões, será útil usarmos índices para nos referir a elementos de um vetor:

$$
x = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix},
$$

onde:

* $x \in \mathbb{R}^n$
* $x_i \in \mathbb{R}$

## Operações elementares

As operações de "soma de vetores" e "multiplicação por escalar" são somente formalizações do que vimos na aula passada:

### Soma de vetores

$$
x + y = \begin{bmatrix} x_1 + y_1 \\ x_2 + y_2 \\ \vdots \\ x_n + y_n \end{bmatrix}
$$

### Multiplicação por escalar

$$
\alpha x = \begin{bmatrix} \alpha x_1 \\ \alpha x_2 \\ \vdots \\ \alpha x_n \end{bmatrix}
$$


Podemos aplicar essas duas operações para resolver, por exemplo:

$$
\begin{align*}
& \begin{bmatrix} 5 \\ 3 \end{bmatrix} + 5 \begin{bmatrix} 2 \\ -1 \end{bmatrix} \\
=& \begin{bmatrix} 5 \\ 3 \end{bmatrix} + \begin{bmatrix} 10 \\ -5 \end{bmatrix} \\
=& \begin{bmatrix} 5+10 \\ 3+(-5) \end{bmatrix}\\
=& \begin{bmatrix} 15 \\ -2 \end{bmatrix} 
\end{align*}
$$

??? info "Encontre o resultado de $\begin{bmatrix} -2 \\ 0 \end{bmatrix} + \frac{2}{5} \begin{bmatrix} 5 \\ -1 \end{bmatrix}$"
    $\begin{bmatrix} 0 \\ -\frac{2}{5} \end{bmatrix}$

!!! info "Como identificar o tipo de uma variável em uma expressão"
    Mesmo quando o conjunto não está escrito, o **tipo da variável pode ser inferido pela operação**.

    - Em uma soma \(x + y\), as duas variáveis **devem ser do mesmo tipo**.
    - Em uma expressão \(\alpha x\), \(\alpha\) é um **escalar** e \(x\) é um **vetor**.
    - Não existe soma entre escalar e vetor.


## Propriedades

As operações que definimos levam imediatamente a algumas propriedades, todas elas demonstráveis à partir das definições que fizemos.

!!! info "Definição vs. propriedade"
    - **Definição** explica *como* uma operação é feita.
    - **Propriedade** descreve *o que sempre vale* depois que a operação foi definida.


### Comutatividade da soma

Uma operação é "comutativa" se a ordem não importa. A soma de vetores é comutativa, ou seja, se $x \in \mathbb{R}^n$ e $y \in \mathbb{R}^n$, então:

$$
x + y = y + x
$$

??? info "Demonstração"
    $$
    x + y = \begin{bmatrix} x_1 + y_1 \\ x_2 + y_2 \\ \vdots \\ x_n + y_n \end{bmatrix} = \begin{bmatrix} y_1 + x_1 \\ y_2 + x_2 \\ \vdots \\ y_n + x_n \end{bmatrix} = y + x
    $$

Lembra-se da caminhada por Chicago? Já sabemos intuitivamente que andar para o leste e depois para o norte leva ao mesmo destino (ou, o mesmo resultado) que andar para o norte e depois para o leste. Mais formalmente, podemos chamar o "andar para o norte" de $y$ e o "andar para o leste" de $x$. Então, os dois caminhos serem iguais é uma consequência de que $x+y=y+x$.

### Associatividade da soma

A associatividade é o que permite fazer operações em qualquer ordem. Para $x \in \mathbb{R}^n$, $y \in \mathbb{R}^n$ e $z \in \mathbb{R}^n$:

$$
x + (y + z) = (x + y) + z
$$

??? info "Demonstração"
    $$
    \begin{align*}
    x + (y + z) &= \begin{bmatrix} x_1 \\ x_2  \\ \vdots \\ x_n  \end{bmatrix} + \begin{bmatrix} y_1 + z_1 \\ y_2 + z_2\\ \vdots \\ y_n + z_n \end{bmatrix} = \begin{bmatrix} x_1 + y_1 + z_1 \\ x_2 + y_2 + z_2  \\ \vdots \\ x_n + y_n + z_n  \end{bmatrix} = x + y + z\\
    (x + y) + z &= \begin{bmatrix} x_1+y_1 \\ x_2+y_2  \\ \vdots \\ x_n+y_n  \end{bmatrix} + \begin{bmatrix} z_1 \\ z_2\\ \vdots \\ z_n \end{bmatrix} = \begin{bmatrix} x_1 + y_1 + z_1 \\ x_2 + y_2 + z_2  \\ \vdots \\ x_n + y_n + z_n  \end{bmatrix} = x + y+ z
    \end{align*}
    $$

A associatividade significa que, se sairmos de casa com três listas de compras ($x$, $y$ e $z$), então tanto faz comprar primeiro as duas iniciais e depois comprar a terceira, ou comprar as duas últimas e, por último, a terceira - ou: $x + (y+z) = (x+y) + z$. Em outras palavras: podemos agrupar as operações de soma livremente.

### Distributividade da multiplicação por escalar

"Distributividade" significa que podemos aplicar a distributiva em operações com parênteses, isto é, se $\alpha \in \mathbb{R}$, $x \in \mathbb{R}^n$ e $y \in \mathbb{R}^n$:

$$
\alpha (x + y)  = \alpha x + \alpha y
$$

??? info "Demonstração"
    $$
    \alpha (x + y) = \begin{bmatrix} \alpha (x_1 + y_1) \\ \alpha (x_2 + y_2) \\ \vdots \\ \alpha (x_n + y_n) \end{bmatrix} = \begin{bmatrix} \alpha x_1 + \alpha y_1 \\ \alpha x_2 + \alpha y_2 \\ \vdots \\ \alpha x_n + \alpha y_n \end{bmatrix} = \begin{bmatrix} \alpha x_1 \\ \alpha x_2  \\ \vdots \\ \alpha x_n \end{bmatrix} + \begin{bmatrix} \alpha y_1 \\ \alpha y_2 \\ \vdots \\ \alpha y_n \end{bmatrix} = \alpha x + \alpha y 
    $$

Em nossa caminhada por Chicago, essa propriedade significa que, se cada "passo" de deslocamento for dobrado, então a posição final do nosso passeio também será "dobrada".

## Exercícios

Nas situações abaixo, identifique qual é a propriedade que explica o comportamento observado e como as variáveis relevantes se relacionam aos elementos do problema.

??? info "Um pedestre faz três deslocamentos no plano: primeiro um vetor **a**, depois um vetor **b**, depois um vetor **c**. Para calcular o deslocamento total, ele soma primeiro **a + b** e depois soma **c**. Um colega soma primeiro **b + c** e depois soma **a**. Ambos chegam ao mesmo deslocamento final."
    A propriedade envolvida é a **associatividade da soma vetorial**. No problema, os vetores $a, b, c$ representam os três deslocamentos realizados pelo pedestre. A igualdade mostra que o deslocamento total independe da forma como esses deslocamentos são agrupados no cálculo.

??? info "Um barco sofre dois deslocamentos vetoriais: um devido ao motor (**m**) e outro devido à correnteza (**c**). O piloto observa que aplicar primeiro o deslocamento do motor e depois o da correnteza produz o mesmo deslocamento final que aplicar primeiro a correnteza e depois o motor."
    A propriedade envolvida é a **comutatividade da soma vetorial**. No problema, os vetores $m$ e $c$ representam os deslocamentos causados pelo motor e pela correnteza, respectivamente. A igualdade mostra que a ordem em que esses deslocamentos são somados não altera o deslocamento final do barco.

??? info "Um drone realiza um trajeto composto por dois vetores de deslocamento, **a** e **b**. Um engenheiro decide ampliar toda a trajetória por um fator 2. Ele observa que pode multiplicar cada deslocamento por 2 e depois somá-los, ou somar os deslocamentos primeiro e multiplicar o resultado por 2, obtendo o mesmo deslocamento final."
    A propriedade envolvida é a **distributividade da multiplicação escalar em relação à soma vetorial**. No problema, os vetores $a$ e $b$ representam os dois trechos do trajeto do drone, e o escalar $2$ representa o fator de ampliação aplicado à trajetória. A igualdade mostra que a escala pode ser aplicada antes ou depois da soma dos deslocamentos.

??? info "Em uma animação gráfica, um objeto é deslocado por dois vetores, **a** e **b**, e depois toda a cena é ampliada por um fator **k** (zoom). O programador percebe que o deslocamento final é o mesmo se o zoom for aplicado antes ou depois da soma dos deslocamentos."
    A propriedade envolvida é a **distributividade da multiplicação escalar em relação à soma vetorial**. No problema, os vetores $a$ e $b$ representam os deslocamentos aplicados ao objeto, enquanto o escalar $k$ representa o fator de ampliação da cena. A igualdade mostra que o efeito da escala se distribui sobre a soma dos vetores.

## Exercício

!!! info "Quando estou usando uma propriedade?"
    Você está usando uma **propriedade** quando:

    - troca a ordem de uma soma (comutatividade);
    - muda o agrupamento com parênteses (associatividade);
    - distribui um escalar sobre uma soma (distributividade).

    Você está usando uma **definição** quando:
    
    - calcula somas componente a componente;
    - multiplica cada componente de um vetor por um número.


Resolva a expressão abaixo encontrando $x$. Para cada passo, explicite se está usando uma propriedade (dizendo qual propriedade foi usada - comutatividade, associatividade, distributividade) ou se está aplicando diretamente a definição de soma de vetores ou de multiplicação por escalares.

$$
x = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix} + 2 \left( \begin{bmatrix} 3 \\ 1 \\ 2 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ -3 \\ -2 \\ -1 \end{bmatrix} \right) + \begin{bmatrix} -6 \\ -4 \\ 0 \\ 2 \end{bmatrix}
$$

