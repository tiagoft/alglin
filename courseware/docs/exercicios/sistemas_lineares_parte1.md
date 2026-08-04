# Exercícios: Sistemas Lineares (Parte 1)

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
