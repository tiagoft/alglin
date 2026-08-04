# Exercícios: Sistemas Lineares (Parte 2)

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
