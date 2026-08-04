# Exercícios: Geometria Analítica (Parte 1)

### Questão 1

Encontre $a$ para que as duas retas descritas sejam paralelas:

**a)**

$$
\left\{
\begin{array}{rl}
y &= 10x + 5\\
y &= ax + 2
\end{array}
\right.
$$

**b)**

$$
\left\{
\begin{array}{rl}
y + 10x + 2 &= 0\\
y + ax + 4 &= 0
\end{array}
\right.
$$

**c)**

$$
\left\{
\begin{array}{rl}
y + 10x + 2 &= 0\\
2y + ax + 1 &= 0
\end{array}
\right.
$$

**d)**

$$
\left\{
\begin{array}{rl}
y + 10x &= 2\\
2y + ax &= 4
\end{array}
\right.
$$

**e)**

$$
\left\{
\begin{array}{rl}
Ay + 10x &= 2\\
y + ax &= 4
\end{array}
\right.
$$

**f)**

$$
\left\{
\begin{array}{rl}
Ay + Bx &= 2\\
y + ax &= 4
\end{array}
\right.
$$

**g)**

$$
\left\{
\begin{array}{rl}
Ay + Bx &= 2\\
Cy + ax &= 4
\end{array}
\right.
$$

### Questão 2 — Exercício resolvido

Uma reta pode ser determinada por dois pontos. Se tivermos dois pontos, $p_1 = \begin{bmatrix} x_1 \\ y_1 \end{bmatrix}$, e $p_2 = \begin{bmatrix} x_2 \\ y_2 \end{bmatrix}$, qual é a equação da reta que passa por esses dois pontos?

Nesse caso, se nossa reta é $y=ax+b$, então sabemos que:

$$
\begin{cases}
\begin{array}{rl}
y_1 &= a x_1 + b\\
y_2 &= a x_2 + b
\end{array}
\end{cases}
$$

Podemos modelar esse sistema como:

$$
\begin{bmatrix} y_1 \\ y_2\end{bmatrix}
= \begin{bmatrix} x_1 & 1 \\ x_2 & 1 \ \end{bmatrix} \begin{bmatrix} a \\ b \end{bmatrix}
$$

e, portanto, encontramos os coeficientes $a$ e $b$ usando:

$$
\begin{bmatrix} a \\ b \end{bmatrix} =
\begin{bmatrix} x_1 & 1 \\ x_2 & 1 \ \end{bmatrix}^{-1}
\begin{bmatrix} y_1 \\ y_2\end{bmatrix}
$$

### Questão 3

Calcule a equação da reta que contém todos os pontos que podem ser obtidos na forma: $a \begin{bmatrix}3\\4\end{bmatrix}$, com $a \in \mathbb{R}$. Dica: quais são dois pontos que estão nessa reta.

### Questão 4

Calcule a equação da reta que contém todos os pontos que podem ser obtidos na forma $az$, onde $a \in \mathbb{R}$, $z \in \mathbb{R}^2$, sabendo que $w=\begin{bmatrix} 4 \\ 5 \end{bmatrix}$, que $\langle z,w\rangle=0$ e que a reta passa pela origem. Dica: calcule $\langle z,w\rangle$ explicitamente - qual é a relação entre $x$ e $y$ para esses pontos?

### Questão 5

Calcule a equação da reta que contém todos os pontos que podem ser obtidos na forma $az$, onde $a \in \mathbb{R}$, $z \in \mathbb{R}^2$, sabendo que $w=\begin{bmatrix} 1 \\ 2 \end{bmatrix}$, que $\langle z,w\rangle=0$ e que a reta passa pelo ponto $\begin{bmatrix} -4 \\ 1 \end{bmatrix}$.

### Questão 6

**a)** Encontre qual deve ser a relação entre $A$, $B$, $C$ e $D$ abaixo para que as retas descritas sejam paralelas para quaisquer valores de $a$ e $b$:

$$
\left\{
\begin{array}{rl}
Ax + By &= a\\
Cx + Dy &= b
\end{array}
\right.
$$

**b)** Encontre uma referência online que explica a definição de *determinante* de uma matriz $2 \times 2$. Compare a definição que você encontrou com a solução do ítem anterior. O que você descobriu?

### Questão 7

Eu fui à feira e comprei 2 pastéis e um caldo de cana, e gastei 30 reais. Meu amigo comprou 2 pastéis e dois caldos de cana, e gastou 60 reais. À partir dessas informações, é possível saber o preço de um pastel ou de um caldo de cana? Justifique.

### Questão 8

Alan comprou dois pacotes de arroz e um de feijão, num total de 20 reais. Bryan comprou quatro pacotes de arroz e dois de feijão, num total de 40 reais. Cristopher comprou quatro pacotes de arroz e um de feijáo, num total de 30 reais. Quanto custa o pacote de arroz? Quanto custa o pacote de feijão?
