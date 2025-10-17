---
marp: true
theme: default
paginate: true

---

# Aula 02 - Parte 03 - Sistemas Lineares e Matrizes

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares

---

# Resolvendo um sistema linear

Já sabemos resolver sistemas lineares. Por exemplo, para resolver:

$$ 
\begin{cases}
    \begin{aligned}
    x + y &= a \\
    x - y &= b \\
    \end{aligned}
\end{cases}
$$

Antes de prosseguir, resolva esse sistema, encontrando $x$ e $y$ em função de $a$ e $b$.


---

# Resolvendo um sistema!

Uma solução possível é assim:
podemos somar e subtrair as duas equações. Daí, partimos de:

$$ 
\begin{cases}
    \begin{aligned}
    x + y &= a \\
    x - y &= b \\
    \end{aligned}
\end{cases}
$$

E encontramos:

$$
\begin{cases}
    \begin{aligned}
    \text{Somando: } x + y + (x - y) &= a + b \\
    \text{Subtraindo: } x + y - (x - y) &= a - b \\
    \end{aligned}  
\end{cases}
\rightarrow
\begin{cases}
    \begin{aligned}
    2x &= a + b \\
    2y &= a - b \\
    \end{aligned}  
\end{cases}
\rightarrow
\begin{cases}
    \begin{aligned}
    x &= \frac{a + b}{2} \\
    y &= \frac{a - b}{2} \\
    \end{aligned}  
\end{cases}
$$

---

# Analisando nossa solução

Veja como agora temos dois sistemas:
$$
\begin{cases}
    \begin{aligned}
    x + y &= a \\
    x - y &= b \\
    \end{aligned}
\end{cases}
$$

e

$$
\begin{cases}
    \begin{aligned}
    x &= \frac{a + b}{2} \\
    y &= \frac{a - b}{2} \\
    \end{aligned}  
\end{cases}
$$

Podemos escrever os dois sistemas na forma matricial!

---

# Soluções: forma matricial

Nossos sitemas ficam assim:
$$
\begin{aligned}
\begin{cases}
    \begin{aligned}
    x + y &= a \\
    x - y &= b \\
    \end{aligned}
\end{cases}
&\Rightarrow
\begin{bmatrix}
1 & 1\\
1 & -1
\end{bmatrix}
\begin{bmatrix}
x \\ y
\end{bmatrix}
=
\begin{bmatrix}
a \\ b
\end{bmatrix}
\\
\begin{cases}
    \begin{aligned}
    x &= \frac{a + b}{2} \\
    y &= \frac{a - b}{2} \\
    \end{aligned}  
\end{cases}
&\Rightarrow
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2}\\
\frac{1}{2} & -\frac{1}{2}
\end{bmatrix}
\begin{bmatrix}
a \\ b
\end{bmatrix}
=
\begin{bmatrix}
x \\ y
\end{bmatrix}
\end{aligned}
$$

Exercício: calcule 
$$
\begin{bmatrix}
1 & 1\\
1 & -1
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2}\\
\frac{1}{2} & -\frac{1}{2}
\end{bmatrix}
$$

---

# A matriz inversa

Se tudo deu certo, você encontrou que:

$$
\begin{bmatrix}
1 & 1\\
1 & -1
\end{bmatrix}
\begin{bmatrix}
1/2 & 1/2\\
1/2 & -1/2
\end{bmatrix}
=
\begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}
$$

Veja que:

* Essa matriz quadrada, com $1$ na diagonal principal e $0$ em todos os outros elementos, se chama *Matriz Identidade* ($I$).
* Quando a multiplicação $AB=I$, dizemos que $B$ é a inversa de $A$, ou $B=A^{-1}$.
* Qualquer matriz, multiplicada por $I$, é igual a ela mesma: $XI=X=IX$

---

# Exercício

Sabendo que:
$$
A = \begin{bmatrix}
1 & 2\\ 3 & 4
\end{bmatrix}
$$

Calcule $X$ em:

$$
X = A (AA^{-1}) (I A^{-1}) A I A^{-1}A^{-1}(A^{-1}A^{-1})^{-1}
$$

---

# Exercício

Sabendo que:

$$
A = \begin{bmatrix}
0 & 1\\ 1 & 0
\end{bmatrix},
$$

(a) Verifique que $A = A^{-1}$.

(b) Calcule $A^{291}$