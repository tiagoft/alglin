# Determinantes e seu significado geométrico

Talvez você se lembre do determinante de matrizes que talvez tenha aprendido no ensino médio. O *determinante* da matriz é um número relacionado à matriz, e vamos estudar seu significado. Para isso, usaremos o caso de matrizes $2 \times 2$, sabendo que esse significado pode ser extrapolado para matrizes de dimensão mais alta.

!!! info "Equação para calcular determinante da matriz $2 \times 2$"
    $$
    \text{det}(\begin{bmatrix} a & b \\ c & d \end{bmatrix}) = ad-cb
    $$

!!! info "Significado do determinante"
    Tipicamente, ensinamos que, se o determinante de $A$ é zero, então $A^{-1}$ não existe.

!!! info "Determinantes em Python"
    A função `np.linalg.det(A)` calcula o determinante de `A`.

## Significado geométrico: intersecção de retas

As equações de primeiro grau são aquelas que relacionam uma variável de entrada ($x$) a uma saída ($y$) por meio de um polinômio de primeiro grau como:

$$
y = ax + b
$$

Esse tipo de equação também é chamado de "equação da reta". O motivo disso é que os pontos $(x_0,y_0)$ que satisfazem a essa equação se organizam em uma reta.

Uma outra forma de escrever a equação da reta é usar a forma geral: 

$$
Ax + By + C = 0
$$

Nesse caso, para traçar a reta, é preciso isolar $y$ e então proceder normalmente.

Esboce (manualmente), na mesma figura, as retas:

1. $y = 0.5x$
2. $y = 1 - 0.5x$
3. $2y - 2 - x = 0$
4. $y = 2$

### Problema: onde corredores se encontram?

Dois corredores estão correndo por uma trilha. Um deles parte da marcação do km 3, e corre a 5km/h. O outro deles parte da marcação do km 5 e corre a 2km/h, na mesma direção do primeiro. Para encontrar a posição na estrada e o instante em que eles vão se encontrar, podemos modelar o problema como um sistema de equações e resolvê-lo normalmente.

1. Após quanto tempo os corredores se encontrarão?
2. Em que local da trilha os corredores se encontrarão?
3. Esboce as retas que representam os movimentos dos corredores
4. Qual é o ponto em que as retas se encontram?
5. Qual é a relação desse ponto de encontro com a solução do sistema linear?

### Formulação matricial do problema

!!! info "Exemplo"
    O sistema de equações com que lidamos é:

    $$
    \begin{cases}
    \begin{aligned}
    y &= 5x + 3\\
    y &= 2x + 5
    \end{aligned}
    \end{cases}
    $$

    Ele pode ser re-escrito como:
    
    $$
    \begin{cases}
    \begin{aligned}
    -5x + 1y  &= 3\\
    -2 + 1y  &=  5
    \end{aligned}
    \end{cases}
    $$

    e, na forma matricial, ficaríamos com:
    
    $$
    \begin{bmatrix}
        -5 & 1\\
        -2 & 1
    \end{bmatrix} 
    \begin{bmatrix}
        x \\
        y
    \end{bmatrix}
    =
    \begin{bmatrix}
        3 \\
        5 
    \end{bmatrix}
    $$

### Da forma matricial para equações da reta

O sistema de equações abaixo, escrito na forma matricial, determina duas retas. Encontre a equação das retas e determine (use um script Python, e depois confira manualmente se a resposta está correta) o ponto em que elas se cruzam:

$$
\begin{bmatrix}
    -15 & 2\\
    -3 & 4
\end{bmatrix} 
\begin{bmatrix}
    x \\
    y
\end{bmatrix}
=
\begin{bmatrix}
    1 \\
    2 
\end{bmatrix}
$$

### Retas paralelas

Dizemos que duas retas são paralelas quando seus coeficientes angulares (o "$a$" na equação $y=ax+b$) é igual. Por exemplo:

$$
\begin{cases}
\begin{array}{rl}
y &= 3x + 6 \\
y &= 3x + 12
\end{array}
\end{cases}
$$

1. Determine $c \in \mathbb{R}$ abaixo para que as retas relacionadas ao sistema sejam paralelas: 
$$
\begin{cases}
\begin{array}{rl}
y &= 3x + 6 \\
y &= cx + 12 
\end{array}
\end{cases}
$$


2. Determine $c \in \mathbb{R}$ abaixo para que as retas relacionadas ao sistema sejam paralelas: 
$$
\begin{cases}
\begin{array}{rl}
y &= 3x + 6 \\
10 &= cx + 12 + 2y 
\end{array}
\end{cases}
$$

3. Determine $c \in \mathbb{R}$ abaixo para que as retas relacionadas ao sistema sejam paralelas: 
$$
\begin{bmatrix}
    1 & 2\\
    c & 4
\end{bmatrix} 
\begin{bmatrix}
    x \\
    y
\end{bmatrix}
=
\begin{bmatrix}
    17 \\
    23
\end{bmatrix}
$$

4. Determine qual deve ser a relação entre $a$, $b$, $c$ e $d$ abaixo para que as retas relacionadas ao sistema sejam paralelas:
$$
\begin{bmatrix}
    a & b\\
    c & d
\end{bmatrix} 
\begin{bmatrix}
    x \\
    y
\end{bmatrix}
=
\begin{bmatrix}
    \beta_1 \\
    \beta_2
\end{bmatrix}
$$

!!! info "Resumo: determinantes e a intersecção das retas"
    O determinante da matriz $2 \times 2$ é zero quando as retas determinadas por esse sistema não se cruzam. Nessas condições, não existe inversa da matriz porque o sistema relacionado não tem solução. No caso de matrizers de tamanho maior, estamos falando da intersecção de planos ou de hiperplanos.

## Significado geométrico: áreas de formas

Neste estudo, verificaremos o que acontece com áreas de polígonos na multiplicação matricial. Para isso, vamos partir de criar uma núvem de pontos:

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.random.uniform(-0.5, 0.5, size=(2, 600))
plt.figure()
plt.scatter(x[0,:], x[1,:], s=1, c='r')
plt.xlim([-2, 2])
plt.ylim([-2, 2])
plt.grid()
plt.show()
```

Veja que `x` contém vários pontos (1 ponto por coluna). Mas, gostaríamos de verificar o que acontece com nossa núvem de pontos quando multiplicamos por uma matriz $A$. Em outras palavras, gostaríamos de fazer:

$$
Y = AX
$$

que pode ser interpretado como aplicar a matriz $A$ sobre cada uma das colunas de $X$, ou:

$$
\begin{bmatrix}
\vert & \vert &  & \vert \\
 y_1 & y_2 & \cdots & y_n \\
 \vert & \vert &  & \vert \\
 \end{bmatrix} = A \begin{bmatrix}
\vert & \vert &  & \vert \\
 x_1 & x_2 & \cdots & x_n \\
 \vert & \vert &  & \vert \\
 \end{bmatrix}
$$

Podemos implementar essa situação para a matriz $A=\begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$ com o código:

```python
x = np.random.uniform(-0.5, 0.5, size=(2, 600))
A = np.array([ [2, 0], [0, 2] ])
y = A @ x
plt.figure()
plt.scatter(x[0,:], x[1,:], s=1, c='r')
plt.scatter(y[0,:], y[1,:], s=1, c='b')
plt.xlim([-2, 2])
plt.ylim([-2, 2])
plt.grid()
plt.show()
```

Veja que isso levou a termos duas núvens de pontos: a vermelha, correspondente aos pontos originais, e a azul, correspondente aos pontos transformados.

??? info "Qual é a área ocupada pelos pontos originais (vermelhos)?"
    A área é $1$

??? info "Qual é a área ocupada pelos pontos transformados (azuis)?"
    A área é $4$

Transforme a núvem de pontos anterior, experimentando independentemente cada uma das candiatas a matriz $A$ abaixo. Use os seguintes valores para $D$: $1$, $1.5$, $2$, $0$. Para cada valor de $D$ na matriz, calcule o determinante da matriz e a área da núvem de pontos resultante.

$$
A = 
\begin{bmatrix}
    1 & 0\\
    0 & D
\end{bmatrix}
$$

??? info "O que significa o determinante em relação à transformação da área da núvem de pontos?"
    Se transformamos uma núvem de pontos por uma matriz $A$, a área ocupada pela núvem transformada é a área original multiplicada pelo determinante de $A$.

??? info "Por que o determinante $0$ implica necessariamente em uma matriz não ser inversível?"
    Como os pontos de uma área são projetados sobre uma reta (ou seja, estão sendo achatados, de forma semelhante a uma foto achatando um mundo 3D), então sabemos que há vários pontos da núvem original que são projetados sobre o mesmo ponto da núvem transformada. Por isso, é impossível determinar qual era o ponto original, e, portanto, a função que leva de $X$ para $Y$ não é inversível. Por isso, $A$ não tem inversa.

