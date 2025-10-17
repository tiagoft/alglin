---
marp: true
theme: default
paginate: true

---

# Aula 04 - Parte 02 - Mudanças de Base

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares

---

# Exercício

Tenho duas receitas para fazer meu tempero frango. A receita $R_1$ usa $3$ colheres de sal e $2$ colheres de pimenta. A receita $R_2$ usa $1$ colher de sal e $5$ colheres de pimenta. Encontre a matriz $A$ tal que:

$$
\begin{bmatrix}
R_1 \\
R_2
\end{bmatrix}
= 
A
\begin{bmatrix}
s \\
p
\end{bmatrix}
$$

Dica: comece montando um sistema linear! Se precisar, use Python para calcular etapas intermediárias.

---

# Exercício

Tenho duas receitas para fazer meu tempero frango. A receita $R_1$ usa $3$ colheres de sal e $2$ colheres de pimenta. A receita $R_2$ usa $1$ colher de sal e $5$ colheres de pimenta. Encontre a matriz $A$ tal que:

$$
\begin{bmatrix}
R_1 \\
R_2
\end{bmatrix}
= 
A
\begin{bmatrix}
s \\
p
\end{bmatrix}
$$

**A solução abaixo está certa ou errada? Por que?**

$$
\begin{cases}
\begin{array}{rl}
R_1 &= 3s + 2p\\
R_2 &= s + 5p
\end{array}
\end{cases}
\Rightarrow
\begin{bmatrix}
R_1 \\
R_2
\end{bmatrix}
= 
\begin{bmatrix}
3 & 2 \\ 1 & 5
\end{bmatrix}
\begin{bmatrix}
s \\
p
\end{bmatrix}
$$



---

# Exercício

Tenho duas receitas para fazer meu tempero frango. A receita $R_1$ usa $3$ colheres de sal e $2$ colheres de pimenta. A receita $R_2$ usa $1$ colher de sal e $5$ colheres de pimenta. Encontre a matriz $A$ tal que:

$$
\begin{bmatrix}
R_1 \\
R_2
\end{bmatrix}
= 
A
\begin{bmatrix}
s \\
p
\end{bmatrix}
$$

Lembrando que $R_x$ é a quantidade da receita x. Então, a quantidade de sal que usamos é $3 \times$ a quantidade de $R_1$ mais $1 \times$ a quantidade de $R_2$, ou seja, $s = 3 R_1 + R_2$. Fazemos o análogo para a pimenta...

---

# Exercício

Tenho duas receitas para fazer meu tempero frango. A receita $R_1$ usa $3$ colheres de sal e $2$ colheres de pimenta. A receita $R_2$ usa $1$ colher de sal e $5$ colheres de pimenta. Encontre a matriz $A$ tal que:

$$
\begin{bmatrix}
R_1 \\
R_2
\end{bmatrix}
= 
A
\begin{bmatrix}
s \\
p
\end{bmatrix}
$$

Lembrando que $R_x$ é a quantidade da receita x. Então, a quantidade de sal que usamos é $3 \times$ a quantidade de $R_1$ mais $1 \times$ a quantidade de $R_2$, ou seja, $s = 3 R_1 + R_2$. Fazemos o análogo para a pimenta e chegamos em:

$$
\begin{cases}
\begin{array}{rl}
s &= 3R_1 + R_2\\
p &= 2R_1 + 5R_1
\end{array}
\end{cases}
\Rightarrow
\begin{bmatrix}
s \\
p
\end{bmatrix}
= 
\begin{bmatrix}
3 & 1 \\ 2 & 5
\end{bmatrix}
\begin{bmatrix}
R_1 \\
R_2
\end{bmatrix}

\Rightarrow
A = 
\begin{bmatrix}
3 & 1 \\ 2 & 5
\end{bmatrix} ^{-1}
$$

---

# Exercício

Use as mesmas receitas que usamos até agora.

1. Desenhe (no papel) um plano cartesiano cujos eixos são $s$ (quantidade de sal) e $p$ (quantidade de pimenta).
1. Nesse plano, marque o ponto $\begin{bmatrix}5&6\end{bmatrix}$, representando que usamos 5 colheres de sal e 6 de pimenta em nossa tarde culinária.
1. Desenhe, ao lado, um outro plano cartesiano, cujos eixos são $R_1$ e $R_2$, representando a quantidade de cada receita que foi feita.
1. No plano $R_1$-$R_2$, encontre o ponto que representa o quanto de cada receita foi feito na mesma tarde culinária que marcamos no ítem 2.

---


# Hora da chamada!

Hoje estamos na Aula 04, Parte 02!

*O gabarito está disponível. Se você olhar o gabarito antes de resolver o exercício, não adianta fazer o exercício! Então, só olhe depois que tiver uma solução que você realmente acredita que está correta!*
