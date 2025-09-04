---
marp: true
theme: default
paginate: true

---

# Aula 03 - Parte 01 - Geometria Analítica

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares

---

# A Reta e a Equação

Toda equação de primeiro grau, como $y = ax + b$, pode ser representada como uma reta em um plano.

*   $a$ é o **coeficiente angular**, que define a inclinação da reta.
*   $b$ é o **coeficiente linear**, que define onde a reta cruza o eixo y.

Cada ponto $(x, y)$ na reta é uma "solução" para a equação.

---

# O Ponto de Encontro

Considere dois corredores:
*   **Corredor 1:** Parte do km 3 e corre a 5 km/h. ($y = 5x + 3$)
*   **Corredor 2:** Parte do km 5 e corre a 2 km/h. ($y = 2x + 5$)

Quando e onde eles se encontrarão?

---

# A Visão Algébrica: O Sistema Linear

O problema dos corredores pode ser escrito como um **sistema de equações**. Encontrar a solução do sistema é o mesmo que encontrar o ponto de interseção das retas.

$$
\begin{cases}
\begin{aligned}
  y &= 5x + 3\\
  y &= 2x + 5
\end{aligned}
\end{cases}
$$

A solução deste sistema é o único par $(x, y)$ que satisfaz **ambas** as equações simultaneamente.

---

# A Conexão: Cada Linha da Matriz é uma Reta

Podemos reescrever nosso sistema na forma matricial $\boldsymbol{A} \boldsymbol{X} = \boldsymbol{Y}$. Cada linha da matriz $A$ define uma das retas do nosso sistema.


$$
\begin{cases}
\begin{aligned}
  y &= 5x + 3\\
  y &= 2x + 5
\end{aligned}
\end{cases}
\Rightarrow
\begin{cases}
\begin{aligned}
  -5x  + y &= 3\\
  -2x + y &=  5
\end{aligned}
\end{cases}
\Rightarrow
\underbrace{
\begin{bmatrix}
    -5 & 1\\
    -2 & 1
\end{bmatrix} 
}_{\text{A}}
\underbrace{
\begin{bmatrix}
    x \\
    y
\end{bmatrix}
}_{\text{X}}
=
\underbrace{
\begin{bmatrix}
    3 \\
    5 
\end{bmatrix}
}_{\text{Y}}
$$

*   A primeira linha $[-5, 1]$ corresponde à equação $-5x + 1y = 3$.
*   A segunda linha $[-2, 1]$ corresponde à equação $-2x + 1y = 5$.

---

# E Quando as Retas Não se Cruzam?

Duas retas são **paralelas** quando elas têm a mesma inclinação (mesmo coeficiente angular $a$).

Quando um sistema de equações é formado por retas paralelas, não há um ponto de interseção. Isso significa que o sistema **não tem solução única**.

---

# O Teste do Cruzamento: O Determinante

Como saber se as retas de um sistema se cruzam sem precisar desenhá-las? Usamos o **determinante** da matriz $A$.

O determinante é um número único calculado a partir da matriz que nos diz sobre a geometria do sistema.

*   Se $\text{det}(A) \neq 0$: As retas se cruzam em um único ponto. O sistema tem uma solução única.
*   Se $\text{det}(A) = 0$: As retas são paralelas (sem solução) ou coincidentes (infinitas soluções). O sistema não tem solução única.

---

# Como calcular um determinante (2x2)

Vamos partir do sistema:
$$
\begin{bmatrix}
1 & 2\\
3 & D
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
= 
\begin{bmatrix}
y_1 \\ y_2
\end{bmatrix}
$$

1. Quais são as retas determinadas pelo sistema?
2. Qual é o coeficiente angular das retas?
3. Como podemos calcular $D$ para que as retas sejam paralelas (mesmo coeficient angular)?
4. Extrapole esse resultado para o caso geral:
$$
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2
\end{bmatrix}
= 
\begin{bmatrix}
y_1 \\ y_2
\end{bmatrix}
$$

---

# Matriz Singular

Uma matriz cujo determinante é zero é chamada de **matriz singular**.

O fato mais importante sobre matrizes singulares é que elas **não possuem uma matriz inversa**.

É por isso que a tentativa de resolver um sistema com retas paralelas usando `np.linalg.inv(A)` resulta em um erro. A geometria (retas que não se cruzam) e a álgebra (a matriz não pode ser invertida) estão nos dizendo a mesma coisa: não há uma solução única para ser encontrada.

---

# Conclusão: Três Visões, Um Problema

Para um sistema de duas equações com duas variáveis, existem três maneiras de enxergar o mesmo conceito:

| Visão | Tem Solução Única | Não Tem Solução Única |
|---|---|---|
| **Realidade** | Corredores se encontram | Corredores nunca se encontram |
| **Geometria** | As retas se cruzam em um ponto | As retas são paralelas |
| **Álgebra** | $det(A) \neq 0$ (A matriz é invertível) | $det(A) = 0$ (A matriz é singular) |
