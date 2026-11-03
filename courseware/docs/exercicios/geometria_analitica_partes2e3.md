# Exercícios: Geometria Analítica (Partes 2 e 3)

### Questão 1 — Exercício resolvido

Tenho uma matriz $\boldsymbol{A}$ que realiza a rotação de 20 graus no sentido anti-horário em torno da origem. Que matriz executa a rotação de 80 graus no sentido horário em torno da origem?

Para resolver esse exercício, precisamos lembrar que, se $\boldsymbol{A}$ executa uma operação linear, então $\boldsymbol{A}^{-1}$ executa a operação inversa, que, neste caso, é uma rotação de 20 graus no sentido *horário*. Então, se $\boldsymbol{B}=\boldsymbol{A}^{-1}$, podemos aplicá-la $4$ vezes e então encontrar a rotação de 80 graus no sentido horário, isto é, a matriz que queremos é $\boldsymbol{B}^4 = \boldsymbol{A}^{-4}$.

### Questão 2

A matriz $\boldsymbol{R}$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem, sobre um ponto $\boldsymbol{x}$. Qual é a rotação executada pela matrix $\boldsymbol{R}^3$? E pela matriz $\boldsymbol{R}^{-1}$?

### Questão 3

A matriz $\boldsymbol{R}$ executa uma rotação de 1 grau, no sentido anti-horário e em torno da origem, sobre um ponto $\boldsymbol{x}_0$. Partindo de $\boldsymbol{x}_0$, aplicamos sucessivamente $\boldsymbol{R}$ obtendo $\boldsymbol{x}_1=\boldsymbol{R}\boldsymbol{x}_0$, $\boldsymbol{x}_2=\boldsymbol{R}\boldsymbol{x}_1=\boldsymbol{R}\boldsymbol{R}\boldsymbol{x}_0$ e assim por diante. Qual é a forma geométrica que encontramos ao ligar os pontos $\boldsymbol{x}_i$ para $i$ entre $0$ e $1000$?

### Questão 4

A matriz $\boldsymbol{R}$ executa uma rotação de 1 grau, no sentido anti-horário e em torno da origem, sobre um ponto $\boldsymbol{x}_0$. Também, temos a matriz $\boldsymbol{C}=a\boldsymbol{R}$, com $0<a<1$. Partindo de $\boldsymbol{x}_0$, aplicamos sucessivamente $\boldsymbol{C}$ obtendo $\boldsymbol{x}_1=\boldsymbol{C}\boldsymbol{x}_0$, $\boldsymbol{x}_2=\boldsymbol{C}\boldsymbol{x}_1=\boldsymbol{C}\boldsymbol{C}\boldsymbol{x}_0$ e assim por diante. Qual é a forma geométrica que encontramos ao ligar os pontos $\boldsymbol{x}_i$ para $i$ entre $0$ e $1000$?

### Questão 5

A matriz $\boldsymbol{R}$ executa uma rotação de 1 grau, no sentido anti-horário e em torno da origem, sobre um ponto $\boldsymbol{x}_0$. Também, temos a matriz $\boldsymbol{C}=a\boldsymbol{R}$, com $a>1$. Partindo de $\boldsymbol{x}_0$, aplicamos sucessivamente $\boldsymbol{C}$ obtendo $\boldsymbol{x}_1=\boldsymbol{C}\boldsymbol{x}_0$, $\boldsymbol{x}_2=\boldsymbol{C}\boldsymbol{x}_1=\boldsymbol{C}\boldsymbol{C}\boldsymbol{x}_0$ e assim por diante. Qual é a forma geométrica que encontramos ao ligar os pontos $\boldsymbol{x}_i$ para $i$ entre $0$ e $1000$?

### Questão 6

A matriz $\boldsymbol{R}$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem, sobre um ponto $\boldsymbol{x}$. A matriz $\boldsymbol{T}$ executa uma translação de $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$. Qual é a operação executada pela matriz $\boldsymbol{T}^{-1}\boldsymbol{R}\boldsymbol{T}$?

### Questão 7

A matriz $\boldsymbol{R}$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem. A matriz $\boldsymbol{T}_1$ executa uma translação de $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$. A matriz $\boldsymbol{T}_2$ executa uma translação de $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$. Como podemos calcular a matriz $\boldsymbol{W}$ que executa uma rotação de 30 graus no sentido horário ao redor do ponto $\begin{bmatrix} -2 \\ 3 \end{bmatrix}$?

### Questão 8

A matriz $\boldsymbol{R}$ executa uma rotação de 5 graus, no sentido anti-horário e em torno da origem, sobre um ponto $\boldsymbol{x}$. A matriz $\boldsymbol{T}$ executa uma translação de $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$.

**a)** Qual é a matriz $\boldsymbol{W}$ que executa uma rotação de 5 graus em torno do ponto $\begin{bmatrix} -1 \\ 0 \end{bmatrix}$?

**b)** A operação $\boldsymbol{A}$ aplica a matriz $\boldsymbol{W}$ duas vezes, isto é, $\boldsymbol{A}=\boldsymbol{W}^2$. A operação $\boldsymbol{B}$ consiste em executar uma translação, duas rotações com a matriz $\boldsymbol{R}$ e então uma translação inversa, resultando na rotação de 10 graus em torno do ponto $\begin{bmatrix} -1 \\ 0 \end{bmatrix}$. Mostre algebricamente que $\boldsymbol{A}=\boldsymbol{B}$.
