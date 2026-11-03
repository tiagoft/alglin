# Exercícios: Sistemas Lineares (Parte 1)

**Objetivo:** modelar operações em vetores usando produtos internos e multiplicações matriciais

### Questão 1

Calcule $x$ nos casos abaixo:

**a)** $ x = \left\langle \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} 3 \\ 4 \end{bmatrix} \right\rangle$

**b)** $ x = \left\langle \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} -1 \\ -2 \end{bmatrix} \right\rangle$

**c)** $ \left\langle \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} x \\ 1 \end{bmatrix} \right\rangle = 0$

**d)** $ \left\langle \begin{bmatrix} a \\ 2a \end{bmatrix}, \begin{bmatrix} x \\ 1 \end{bmatrix} \right\rangle = a$

**e)** $x = \left\langle \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}, \begin{bmatrix} 2 \\ -2 \\ 0 \end{bmatrix} \right\rangle$

**f)** $x = \left\langle \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}, 5\begin{bmatrix} 2 \\ -2 \\ 0 \end{bmatrix} \right\rangle$

**g)** $x = \left\langle -2\begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}, 5\begin{bmatrix} 2 \\ -2 \\ 0 \end{bmatrix} \right\rangle$

### Questão 2

Calcule $x$ nos casos abaixo:

**a)** $x = \left| \begin{bmatrix} 1 \\ 2 \end{bmatrix} + \begin{bmatrix} 2 \\ 1 \end{bmatrix} \right|$

**b)**

$$
\boldsymbol{y} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \boldsymbol{z} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad x = | \boldsymbol{z}-\boldsymbol{y} |
$$

**c)**

$$
\boldsymbol{y} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \boldsymbol{z} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad x = | \boldsymbol{z}-\boldsymbol{y}\langle \boldsymbol{z},\boldsymbol{y}\rangle |
$$

**d)**

$$
\boldsymbol{y} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \boldsymbol{z} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \quad \boldsymbol{u} = \frac{\boldsymbol{y}}{|\boldsymbol{y}|}, \quad \boldsymbol{v} = \frac{\boldsymbol{z}}{|\boldsymbol{z}|}, \quad x = \langle \boldsymbol{u}, \boldsymbol{v} \rangle
$$

### Questão 3

Dizemos que dois vetores $\boldsymbol{x}$ e $\boldsymbol{y}$ são ortogonais se $\langle \boldsymbol{x},\boldsymbol{y}\rangle=0$. Calcule $a$ para que os vetores $\boldsymbol{x}$ e $\boldsymbol{y}$ abaixo sejam ortogonais:

$$
\boldsymbol{x} = \begin{bmatrix} a \\ a \\ 1 \end{bmatrix}, \quad \boldsymbol{y} = \begin{bmatrix} a \\ 3 \\ 2 \end{bmatrix}
$$

### Questão 4

Calcule X nos casos abaixo:

**a)**

$$
\boldsymbol{X} = \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
$$

**b)**

$$
\boldsymbol{X} = 5 \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
$$

**c)**

$$
\boldsymbol{X} = 5 \left(\begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} + 
    \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}\right)
$$

**d)**

$$
\boldsymbol{X} = 5 \begin{bmatrix} 1 & 2 \\
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
\boldsymbol{X} = \begin{bmatrix} 1 & 2 \\
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
\boldsymbol{X} = \begin{bmatrix} 4 & 3 \\
                    2 & 1
    \end{bmatrix}
    \begin{bmatrix} 2 & 0 \\
                    0 & 2
    \end{bmatrix}
$$

**g)**

$$
\boldsymbol{X} = \begin{bmatrix} \frac{1}{2} & 0 \\
                    0 & \frac{1}{2}
    \end{bmatrix}
    \begin{bmatrix} 2 & 0 \\
                    0 & 2
    \end{bmatrix}
$$

**h)**

$$
\boldsymbol{X} = \begin{bmatrix} 0 & \frac{1}{2}  \\
                    \frac{1}{2} & 0
    \end{bmatrix}
    \begin{bmatrix} 0 & 2 \\
                    2 & 0
    \end{bmatrix}
$$

**i)**

$$
\boldsymbol{x} = 5 \left( \begin{bmatrix} 1 & 2 \\
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
\boldsymbol{x} = 5 \left( \begin{bmatrix} 1 & 2 \\
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
\boldsymbol{X} = \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix}  
    \begin{bmatrix} 1 & 2 \\
                    3 & 4
    \end{bmatrix} ^{-1}
$$

**l)**

$$
\boldsymbol{x} = 10 \left( \begin{bmatrix} 1 & 2 \\
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
\boldsymbol{X} = \begin{bmatrix} 1 & 2 \\
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
\boldsymbol{X} = \begin{bmatrix}
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
\boldsymbol{X} = \begin{bmatrix}
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
\boldsymbol{X} = \begin{bmatrix}
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

Sabendo que $\boldsymbol{x}=\begin{bmatrix} 1 \\ 2 \end{bmatrix}$, que $\boldsymbol{y}=\begin{bmatrix} a \\ 1 \end{bmatrix}$ e que $\langle \boldsymbol{x},\boldsymbol{y}\rangle=0$, calcule $a$.
