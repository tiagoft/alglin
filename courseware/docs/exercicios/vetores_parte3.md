# Exercícios: Vetores (Parte 3)

**Objetivo:** Implementar sistemas dinâmicos

### Questão 1

A força gravitacional entre dois planetas tem módulo igual a:

$$
|F| = G\frac{m_1 m_2}{d^2},
$$

onde $m_1$ e $m_2$ são as massas dos planetas, $d$ é a distância entre eles, e $G$ é uma constante física.

A direção da força gravitacional é de um planeta para o outro.

**a)** Se há dois planetas, um eles em $\begin{bmatrix} x_1 \\ y_1 \\ z_1 \end{bmatrix}$, e o outro em $\begin{bmatrix} x_2 \\ y_2 \\ z_2 \end{bmatrix}$, mostre a expressão que calcula o vetor força que é aplicado em cada um deles.

**b)** Se um dos planetas tem velocidade inicial $v_1$ e o o outro tem velocidade inicial $v_2$, encontre uma expressão que permita calcular suas velocidades após um pequeno período $\Delta t$.

### Questão 2

Um objeto está em queda livre e é afetado pela aceleração gravitacional $g$, com direção para baixo. O chão está na altura $x=0$ e o objeto tem velocidade inicial $v_0$. O pseudo-código abaixo mostra uma tentativa de simular essa situação.

Avalie: o pseudo-código está correto? Se não estiver, faça as correções necessárias. Para saber se você está correto, implemente o código e verifique se o comportamento observado está correto.

```
v ← v0
x ← x0
enquanto x >= 0:
    x ← x - v
    v ← v - g·Δt
```

### Questão 3

Um objeto em queda livre é afetado pela força gravitacional e também pela resistência do ar.

A aceleração gravitacional é constante e igual a $g$. A resistência do ar tem módulo $bv$, onde $b$ é uma constante de arraste e $v$ é a velocidade do objeto. O objeto tem massa $m$.

Assumindo que o objeto está inicialmente parado:

**a)** Mostre as equações que permitem calcular a velocidade do objeto, sabendo os parâmetros do sistema e a sua velocidade atual, após um período $\Delta t$.

**b)** Faça uma simulação (implementando as equações que você criou, com passos pequenos iguais a $\Delta t$) que mostre qual é a velocidade máxima que o objeto chegará. Use valores arbitrários para $b$, $m$ e $g$, e assuma que a altura de queda é muito grande.
