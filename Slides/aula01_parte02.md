---
marp: true
theme: default
paginate: true

---

# Aula 01 - Parte 02 - Módulo e Direção

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares

---

# Vetores: Módulo e Direção

Nesta aula, vamos além da soma. Veremos que vetores têm um **tamanho** (módulo) e uma **direção** (argumento), e como usar essas propriedades para controlar o movimento de forma mais precisa.

---

# O Módulo: O Comprimento do Vetor

Um vetor pode ser visto como a hipotenusa de um triângulo retângulo. Nesse triângulo, as componentes $(x, y)$ são os catetos.

O **módulo** (ou norma) de um vetor é o seu comprimento. Usando o Teorema de Pitágoras, podemos calculá-lo:

Para um vetor $\boldsymbol{v} = [v_x, v_y]$:

$$
|\boldsymbol{v}| = \sqrt{v_x^2 + v_y^2}
$$

---

# Calculando o Módulo

Calcular o módulo é uma aplicação direta de Pitágoras.

*   Para o vetor **[3, 4]**:
    $|\boldsymbol{v}| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

*   Para o vetor **[-3, 4]**:
    $|\boldsymbol{v}| = \sqrt{(-3)^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

O sinal dos componentes não afeta o comprimento do vetor.

---

# Módulo em Múltiplas Dimensões

A ideia do Teorema de Pitágoras se generaliza para qualquer número de dimensões. Para um vetor $\boldsymbol{x}$ com $n$ dimensões:

$$
|\boldsymbol{x}| = \sqrt{x_1^2 + x_2^2 + x_3^2 + ... + x_n^2}
$$

Em código, podemos fazer isso com um laço, mas o NumPy nos oferece uma função para isso:.

```python
mod = np.linalg.norm(x)
```

---

# A Direção: O Argumento do Vetor

Além do tamanho, um vetor tem uma direção, que pode ser representada pelo ângulo $\phi$ que ele forma com o eixo horizontal.

Usando trigonometria básica no triângulo retângulo do vetor, podemos encontrar esse ângulo.

A função `np.arctan2(y, x)` calcula automaticamente esse ângulo.

---

# Efeito da Multiplicação por Escalar

O que acontece quando multiplicamos um vetor $\boldsymbol{v}$ por um número (escalar) $a$?

*   **Módulo:** O novo módulo será $|a| \times |\boldsymbol{v}|$. O comprimento é escalonado pelo valor absoluto do número.
*   **Direção:**
    *   Se $a \geq 0$, a direção **não muda**.
    *   Se $a < 0$, a direção é **invertida** (somamos 180 graus ou $\pi$ radianos ao ângulo).

---

# Normalização: demonstração matemática

Partimos de um vetor $x$. Gostaríamos de um vetor $y$, com a mesma direção de $x$, mas com módulo $1$. Então, temos que:

$$
\begin{align}
x &= |x| \angle \phi_x \\
y &= 1 \angle \phi_x
\end{align}
$$


Sabemos também que:

$$
\begin{align}
ax &= a|x| \angle \phi_x
\end{align}
$$


---

# Normalização: demonstração matemática (parte 2)

Se fizemos $y=ax$, então temos:

$$
\begin{eqnarray}
1 \angle \phi_x &= a|x| \angle \phi_x \\
1 &= a |x| \\
a &= \frac{1}{|x|}
\end{eqnarray}
$$

Isso significa que, ao multiplicar $x$ por $1/|x|$, encontramos um vetor $y$ com mesma direção de $x$ mas com módulo $1$.