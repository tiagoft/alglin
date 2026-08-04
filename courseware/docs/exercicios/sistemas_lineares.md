# Exercícios: Sistemas Lineares

## Parte 1

**Objetivo:** modelar operações em vetores usando produtos internos e multiplicações matriciais

### Questão 1

Calcule $x$ nos casos abaixo:

**a)** $ x = \left\langle \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} 3 \\ 4 \end{bmatrix} \right\rangle$

**b)** $ x = \left\langle \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} -1 \\ -2 \end{bmatrix} \right\rangle$

**c)** $ \left\langle \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} x \\ 1 \end{bmatrix} \right\rangle = 0$

**d)** $ \left\langle \begin{bmatrix} a \\ 2a \end{bmatrix}, \begin{bmatrix} x \\ 1 \end{bmatrix} \right\rangle = a$

**e)** $X = \left\langle \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}, \begin{bmatrix} 2 \\ -2 \\ 0 \end{bmatrix} \right\rangle$

**f)** $X = \left\langle \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}, 5\begin{bmatrix} 2 \\ -2 \\ 0 \end{bmatrix} \right\rangle$

**g)** $X = \left\langle -2\begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}, 5\begin{bmatrix} 2 \\ -2 \\ 0 \end{bmatrix} \right\rangle$

### Questão 2

Calcule $x$ nos casos abaixo:

**a)** $x = \left| \begin{bmatrix} 1 \\ 2 \end{bmatrix} + \begin{bmatrix} 2 \\ 1 \end{bmatrix} \right|$

**b)**

$$
y = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad z = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad x = | z-y |
$$

**c)**

$$
y = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad z = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad x = | z-y\langle z,y\rangle |
$$

**d)**

$$
y = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad z = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad u = \frac{y}{|y|}, \quad v = \frac{z}{|z|}, \quad x = \langle u, v \rangle
$$

### Questão 3

Dizemos que dois vetores $x$ e $y$ são ortogonais se $\langle x,y\rangle=0$. Calcule $a$ para que os vetores $x$ e $y$ abaixo sejam ortogonais:

$$
x = \begin{bmatrix} a \\ a \\ 1 \end{bmatrix}, \quad y = \begin{bmatrix} a \\ 3 \\ 2 \end{bmatrix}
$$

### Questão 4

Calcule X nos casos abaixo:

**a)**

$$
X = \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
$$

**b)**

$$
X = 5 \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
$$

**c)**

$$
X = 5 \left(\begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}\right)
$$

**d)**

$$
X = 5 \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
    \begin{bmatrix} 1 & 1 \\
                    1 & 1
    \end{bmatrix}
$$

**e)**

$$
X = \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
    \begin{bmatrix} 1 & 0 \\
                    0 & 1
    \end{bmatrix}
$$

**f)**

$$
X = \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
    \begin{bmatrix} 2 & 0 \\
                    0 & 2
    \end{bmatrix}
$$

**g)**

$$
X = \begin{bmatrix} \frac{1}{2} & 0 \\
                    0 & \frac{1}{2}
    \end{bmatrix}
    \begin{bmatrix} 2 & 0 \\
                    0 & 2
    \end{bmatrix}
$$

**h)**

$$
X = \begin{bmatrix} 0 & \frac{1}{2}  \\
                    \frac{1}{2} & 0
    \end{bmatrix}
    \begin{bmatrix} 0 & 2 \\
                    2 & 0
    \end{bmatrix}
$$

**i)**

$$
X = 5 \left( \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix} \right)
    \begin{bmatrix} 1 \\
                    1 
    \end{bmatrix}
$$

**j)**

$$
X = 5 \left( \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix} \right)
    \begin{bmatrix} 1 & 1 
    \end{bmatrix}^T
$$

**k)**

$$
X = \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix}  
    \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} ^{-1}
$$

**l)**

$$
X = 10 \left( \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 0
    \end{bmatrix} \right)
    \begin{bmatrix}
    5 & 5 \\
    5 & 4
    \end{bmatrix}^{-1}
    \begin{bmatrix} 1 & 1 
    \end{bmatrix}^T
$$

**m)**

$$
X = \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} 
     \begin{bmatrix} a & b \\
                    c & d
    \end{bmatrix} 
     \begin{bmatrix} a & b \\
                    c & d
    \end{bmatrix} ^{-1}
    \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} ^{-1}
$$

**n)**

$$
X = \begin{bmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{bmatrix}
\begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

**o)**

$$
X = \begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
a & b\\
c & d\\
e & f
\end{bmatrix}
$$

**p)**

$$
X = \begin{bmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{bmatrix}
\begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

### Questão 5

Sabendo que $x=\begin{bmatrix} 1 \\ 2 \end{bmatrix}$, que $y=\begin{bmatrix} a \\ 1 \end{bmatrix}$ e que $\langle x,y\rangle=0$, calcule $a$.

## Parte 2

### Questão 1

Coloque os sistemas abaixo em sua forma matricial:

*Exemplo:*

$$
\left\{
\begin{array}{rl}
x + 2 \pi y &= 11\\
2x + \pi y &= 4
\end{array}
\right.
\Rightarrow \begin{bmatrix} 1 & 2\pi \\
    2 & \pi
\end{bmatrix}\begin{bmatrix} x \\ y\end{bmatrix} = \begin{bmatrix} 11 \\ 4\end{bmatrix}
$$

**a)**

$$
\left\{
\begin{array}{rl}
3x + y &= 10\\
x + 7 &=4
\end{array}
\right.
$$

**b)**

$$
\left\{
\begin{array}{rl}
3x + y &= 10 + x + y\\
x + 7 &= 4
\end{array}
\right.
$$

**c)**

$$
\left\{
\begin{array}{rl}
y + 3x &= 10\\
x + \pi &=4
\end{array}
\right.
$$

**d)**

$$
\left\{
\begin{array}{rl}
x &= y\\
x + 1 &=4
\end{array}
\right.
$$

**e)**

$$
\left\{
\begin{array}{rl}
x + y + z &= 1\\
2x + 3y + 4z &= 2\\
3x + 4y + 5z &= 0\\
\end{array}
\right.
$$

**f)**

$$
\left\{
\begin{array}{rl}
x + y + z -2 &= -2\\
4x + 3y + 4z &= 2 + 2x\\
3x + 5z &= -4y\\
\end{array}
\right.
$$

### Questão 2

Considere o sistema:

$$
\left\{
\begin{array}{rl}
x + y  &= a\\
x - y  &= b
\end{array}
\right.
$$

**a)** Represente o sistema em sua forma matricial, isto é, encontre a matriz $A$ tal que:

$$
A \begin{bmatrix} x \\ y\end{bmatrix} = \begin{bmatrix} a \\ b\end{bmatrix}
$$

**b)** Resolva o sistema, encontrando $x$ e $y$ em termos de $a$ e $b$.

**c)** Encontre a matriz $B$ tal que

$$
B \begin{bmatrix} a \\ b\end{bmatrix} = \begin{bmatrix} x \\ y\end{bmatrix}
$$

**d)** Calcule $Z=AB$

### Questão 3

Ao comprar 2kg de cebolas e 4kg de batatas eu gasto 8 reais. Ao comprar 5kg de batatas, eu gasto 5 reais.

**a)** Escreva essa situação como um sistema de equações em que as variáveis são os preços do kg da cebola e da batata.

**b)** Coloque seu sistema na forma matricial $Ax=y$, onde $x = \begin{bmatrix}\text{preço da batata} \\ \text{preço da cebola}\end{bmatrix}$.

**c)** Resolva seu sistema e encontre a forma matricial inversa $y=Bx$.

**d)** Calcule $Z=AB$ e, após, $W=BA$.

### Questão 4

Numa casa de chás desidratados, há dois pacotes diferentes. Um deles tem 70g de chá preto e 30g de chá verde, e custa 13 reais. No outro, há 100g de chá preto e 20g de chá verde, e custa 14 reais. Usando uma formulação matricial, encontre qual é o preço de cada 10g de chá preto e de chá verde?

### Questão 5

As sardinhas do mediterrâneo têm um comportamento interessante. A cada mês, 90% de todos os ovos colocados naquele mês se tornam sardinhas filhote, e os demais morrem. Elas são presas fáceis, então somente 60% delas se tornam adultas, e as demais morrem. A cada mês de vida adulta, 20% das sardinhas morrem, e outros 20% colocam um ovo.

**a)** Escreva as equações que permitem calcular a quantidade de ovos ($v$), sardinhas filhote ($f$) e sardinhas adultas ($a$) a cada mês $m$ assumindo que sabemos essas mesmas quantidades para o mês anterior.

Exemplo: $f_{m+1} = 0.9 v_{m}$

**b)** Escreva o sistema de equações que você encontrou no ítem anterior na sua forma matricial.

## Parte 3

### Questão 1

Ana, Bárbara e Carolina são três amigas que um dia decidiram ir à praia catar conchinhas. Ana voltou com 100 conchinas, Bárbara voltou com 150, e Carolina voltou com 200, mas repararam que cada uma tinha conchinhas de uma cor diferente. Para nunca se enjoarem da conchinhas, a cada ano, elas se encontram novamente e oferecem conchinhas umas às outras. Ana dá metade de suas conchinhas para Bárbara. Bárbara dá um quarto de suas conchinhas para Carolina e um quarto para Ana. Carolina dá um terço de suas conchinhas para Ana. Assim, a cada vez que se encontram, elas misturam suas conchinhas e nunca se enjoam de seus presentes.

**a)** Escreva um sistema de equações que permita evidenciar quantas conchinhas cada uma das amigas terá ao fim do próximo encontro, sabendo a quantidade de conchinhas que cada uma tem atualmente.

**b)** Escreva esse sistema de equações na forma matricial.

**c)** Escreva um sistema de equações que permita saber quantas conchinhas cada uma das amigas terá daqui a dois encontros, sabendo quantas conchinhas cada um tem hoje.

**d)** Escreva um sistema de equações que permita saber quantas conchinhas cada uma das amigas tem hoje, sabendo a quantidade de conchinhas que ela terá no fim do próximo encontro.

### Questão 2

Quando um sinal de áudio (ou: um som do ambiente) é digitalizado, ele é representado por uma sequência de números. Esses números são chamados de amostras, e podem ser colocados em uma matriz-coluna $x$ com um número de linhas igual ao número de amostras que temos (vamos chamar essa quantidade de amostras de $N$). Daí, podemos manipular dessa matriz. Por exemplo, ao multiplicar as amostras todas por um escalar $g$, alteramos a intensidade (ou: o volume) relacionado ao som que gravamos.

Quando temos dois sons diferentes (por exemplo: $x_1$ e $x_2$, cada um deles $N \times 1$) podemos colocá-los lado a lado, formando uma matriz $N \times 2$, como em:

$$
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}
$$

Representar dois sons diferentes é útil quando queremos, por exemplo, tocar sons em estéreo. Nesse caso, temos um som que vai para o canal da esquerda, e outro que vai para o canal da direita. O truque do estéreo é alterar as intensidades de cada som em cada canal, criando uma ilusão de imersão espacial.

Suponha que temos duas gravações, $x_1$ e $x_2$, correspondentes respectivamente ao violão e à voz de uma canção. Queremos que a voz apareça igualmente nos dois canais, mas que o violão apareça somente no canal da direita. Nesse caso:

**a)** Quais são as equações que permitem calcular os sons $x_e$ e $x_d$, que são os sons correspondentes aos canais da esquerda e da direita, respectivamente?

**b)** Escreva essas equações em formato matricial.

**c)** Proponha um procedimento para recuperar $x_1$ e $x_2$ à partir de $x_e$ e $x_d$ usando as técnicas que estudamos até o momento.
