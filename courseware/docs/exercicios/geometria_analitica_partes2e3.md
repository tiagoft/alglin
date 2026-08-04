# Exercícios: Geometria Analítica (Partes 2 e 3)

### Questão 1 — Exercício resolvido

Tenho uma matriz $A$ que realiza a rotação de 20 graus no sentido anti-horário em torno da origem. Que matriz executa a rotação de 80 graus no sentido horário em torno da origem?

Para resolver esse exercício, precisamos lembrar que, se $A$ executa uma operação linear, então $A^{-1}$ executa a operação inversa, que, neste caso, é uma rotação de 20 graus no sentido *horário*. Então, se $B=A^{-1}$, podemos aplicá-la $4$ vezes e então encontrar a rotação de 80 graus no sentido horário, isto é, a matriz que queremos é $B^4 = A^{-4}$.

### Questão 2

A matriz $R$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem, sobre um ponto $x$. Qual é a rotação executada pela matrix $R^3$? E pela matriz $R^{-1}$?

### Questão 3

A matriz $R$ executa uma rotação de 1 grau, no sentido anti-horário e em torno da origem, sobre um ponto $x_0$. Partindo de $x_0$, aplicamos sucessivamente $R$ obtendo $x_1=Rx_0$, $x_2=Rx_1=RRx_0$ e assim por diante. Qual é a forma geométrica que encontramos ao ligar os pontos $x_i$ para $i$ entre $0$ e $1000$?

### Questão 4

A matriz $R$ executa uma rotação de 1 grau, no sentido anti-horário e em torno da origem, sobre um ponto $x_0$. Também, temos a matriz $C=aR$, com $0<a<1$. Partindo de $x_0$, aplicamos sucessivamente $C$ obtendo $x_1=Cx_0$, $x_2=Cx_1=CCx_0$ e assim por diante. Qual é a forma geométrica que encontramos ao ligar os pontos $x_i$ para $i$ entre $0$ e $1000$?

### Questão 5

A matriz $R$ executa uma rotação de 1 grau, no sentido anti-horário e em torno da origem, sobre um ponto $x_0$. Também, temos a matriz $C=aR$, com $a>1$. Partindo de $x_0$, aplicamos sucessivamente $C$ obtendo $x_1=Cx_0$, $x_2=Cx_1=CCx_0$ e assim por diante. Qual é a forma geométrica que encontramos ao ligar os pontos $x_i$ para $i$ entre $0$ e $1000$?

### Questão 6

A matriz $R$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem, sobre um ponto $x$. A matriz $T$ executa uma translação de $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$. Qual é a operação executada pela matriz $T^{-1}RT$?

### Questão 7

A matriz $R$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem. A matriz $T_1$ executa uma translação de $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$. A matriz $T_2$ executa uma translação de $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$. Como podemos calcular a matriz $W$ que executa uma rotação de 30 graus no sentido horário ao redor do ponto $\begin{bmatrix} -2 \\ 3 \end{bmatrix}$?

### Questão 8

A matriz $R$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem, sobre um ponto $x$. A matriz $T$ executa uma translação de $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$.

**a)** Qual é a matriz $W$ que executa uma rotação de 5 graus em torno do ponto $\begin{bmatrix} -1 \\ 0 \end{bmatrix}$?

**b)** A operação $A$ aplica a matriz $W$ duas vezes, isto é, $A=W^2$. A operação $B$ consiste em executar uma translação, duas rotações com a matriz $R$ e então uma translação inversa, resultando na rotação de 10 graus em torno do ponto $\begin{bmatrix} -1 \\ 0 \end{bmatrix}$. Mostre algebricamente que $A=B$.
