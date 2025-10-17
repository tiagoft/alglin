---
marp: true
theme: default
paginate: true

---

# Aula 05 - Parte 01 - Autovalores e Autovetores

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares

---

# Sistemas que Evoluem no Tempo

Vimos que sistemas dinâmicos, como a população de presas e predadores ou o fluxo de bicicletas em Montreal, podem ser modelados por uma matriz de transição **A**.

A cada passo (mês, semana, etc.), o estado do sistema é atualizado pela mesma regra:

$$
\boldsymbol{x_{novo}} = \boldsymbol{A} \boldsymbol{x_{antigo}}
$$

Se aplicarmos essa regra repetidamente, o que acontece com o sistema a longo prazo?

Vamos fazer isso: direto para o notebook da aula, exercício 1!

---

# O Mistério do Ponto de Equilíbrio

No sistema de bicicletas de Montreal, não importa como as bicicletas são distribuídas inicialmente, após muitas iterações, elas sempre convergem para a mesma distribuição final (proporção).

Este estado final, que não muda mais, é chamado de **ponto de estabilidade** ou **equilíbrio**. Por que ele existe?

---

# A Direção Invariante: O Autovetor

Um **autovetor** de uma matriz **A** é um vetor especial que, quando multiplicado pela matriz, **não muda de direção**. Ele sofre somente uma *escala*:

$$
\boldsymbol{A}\boldsymbol{x} = \boldsymbol{x} \lambda
$$

*   **A** é a matriz de transformação.
*   **x** é o **autovetor**.
*   **$\lambda$ ** é o **autovalor** associado.

---

# O Fator de Escala: O Autovalor

O **autovalor ($\lambda$)** é o número que nos diz *quanto* o autovetor foi esticado ou encolhido.

*   Se **$\lambda$ = 2**, o autovetor dobrou de tamanho.
*   Se **$\lambda$ = 0.5**, ele foi reduzido pela metade.
*   Se **$\lambda$ = 1**, ele permaneceu **exatamente o mesmo**.

O estado de equilíbrio que encontramos no problema das bicicletas é um autovetor da matriz **A** com um autovalor **λ = 1**. É por isso que ele não muda mais!

Verifique no Exercício 2 da aula como isso funciona em Python!

---

# Previsão do Futuro: Explosão, Equilíbrio ou Colapso

O comportamento de um sistema dinâmico a longo prazo é totalmente determinado por seus autovalores.

Após N iterações, o estado é $v_N = A^N v_0$. O que acontece com $A^N$ quando N é grande depende dos autovalores:

*   Se **|$\lambda$| > 1**: O sistema **explode** (tende ao infinito) naquela direção.
*   Se **|$\lambda$| = 1**: O sistema atinge um **equilíbrio** estável.
*   Se **|$\lambda$| < 1**: O sistema **colapsa** (tende a zero).

No problema dos carcarás e sapos, os autovalores eram `1.0` e `0.9`, indicando que o sistema tenderia a um equilíbrio ($\lambda =1$) e não a uma explosão.

---

# Decomposição em Autovetores

A equação $Ax = x \lambda$ pode ser generalizada para todos os autovetores e autovalores de uma matriz. Isso nos permite "decompor" a matriz **A** em seus componentes fundamentais:


$$
\begin{cases}
\begin{array}{rl}
Ax_1 &= x_1 \lambda_1 \\
Ax_2 &= x_2 \lambda_2 \\
\end{array}
\end{cases} \Rightarrow A \begin{bmatrix} \vert & \vert \\ x_1 & x_2 \\ \vert & \vert \end{bmatrix} = \begin{bmatrix} \vert & \vert \\ x_1 & x_2 \\ \vert & \vert \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix}
$$ 

Essa fórmula nos permite construir uma matriz a partir de seus autovalores e autovetores desejados:

$$
A P = P Q \Rightarrow A = P Q P^{-1}
$$

---

# Iterando $N$ vezes

A decomposição torna a análise de longo prazo muito mais fácil. Para calcular $A$ elevado à potência $N$, a fórmula se torna:

$$
\boldsymbol{A^N} = \boldsymbol{P} \boldsymbol{Q^N} \boldsymbol{P}^{-1}
$$

Vamos demonstrar isso!

Como posso escrever $A^2$ usando as matrizes $P$ e $Q$? E $A^3$? Encontre a regra que leva ao caso geral $A^N$!

---
# Sistemas em regime

Sabemos que:

$$
\boldsymbol{A^N} = \boldsymbol{P} \boldsymbol{Q^N} \boldsymbol{P}^{-1}
$$

Como $Q$ é diagonal, $\boldsymbol{Q^N}$ é simplesmente a matriz com os autovalores elevados à potência $N$.

$$
\boldsymbol{Q^N} = 
\begin{bmatrix}
    \lambda_1^N & 0 & \\
    0 & \lambda_2^N
\end{bmatrix}
$$

Portanto, o comportamento do sistema após muitas iterações é dominado pelo autovalor de maior magnitude.

---

# Hora da chamada!

Hoje estamos na Aula 05, Parte 01!

*O gabarito está disponível. Se você olhar o gabarito antes de resolver o exercício, não adianta fazer o exercício! Então, só olhe depois que tiver uma solução que você realmente acredita que está correta!*
