# Revisão

Faça as atividades abaixo em dupla ou trio. A atividade deve ser resolvida em uma lousa e todos os membros do grupo devem participar da resolução.



## Atividades de retomada

### Transformações

Uma núvem de pontos é representada na matriz $X \in \mathbb{R}^{2 \times 100}$. Os pontos estão uniformemente distribuídos em um quadrado de lado 1 centrado na origem. Definimos também as matrizes:

$$
A = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}
$$

e 

$$
R = \begin{bmatrix} \cos(\pi/4) & -\sin(\pi/4) \\ \sin(\pi/4) & \cos(\pi/4) \end{bmatrix}
$$

Esboce o espaço ocupado pela núvem de pontos $Y$ nos seguintes casos:

a) $Y = AX$

b) $Y = RX$

c) $Y = ARX$

d) $Y = RAX$

e) $Y = A^{-1}X$

### Ciclos de vida

As sardinhas do mediterrâneo podem ser encontradas na forma de ovos, crianças, ou adultos. Tipicamente, a cada semana:

1. A cada 100 ovos, 80 se tornam crianças (e os restantes são predados).
2. A cada 100 crianças, 60 se tornam adultos (e as restantes são predadas). 
3. Cada 100 adultos colocam, em média, 150 ovos fecundados.
4. A cada 100 adultos, 10 morrem naturalmente.

a) No diagrama abaixo, marque o valor de $x$ e $y$:

<div class='mermaid'>
graph LR
    V[ovo] --> |0.8| C[criança];
    C --> |x| A[adulto];
    A --> |1.5| V;
    A --> |y| A;

</div>

b) Expresse o ciclo de vida das sardinhas do mediterrâneo na forma de um sistema de equações dinâmicas que permita calcular a quantidade de ovos, crianças e adultos em um mês com base nas quantidades de ovos, crianças e adultos no mês anterior.

c) Escreva o sistema que você definiu na forma matricial.

d) Uma mergulhadora, morando à beira do mar, gosta de comer sardinhas. Porém, para cada sardinha que ela come, ela joga um novo ovo de sardinha no mar. Em média, a cada semana, ela come 50 sardinhas e joga no mar 50 novos ovos. Reescreva o sistema de equações e sua forma matricial de forma a incorporar a interferência da mergulhadora.

## Atividades de reflexão

### Coordenadas homogêneas

As coordenadas homogêneas são obtidas quando escrevemos o sistema:

$$
\begin{cases}
\begin{aligned}
  p &= ax + by + \Delta x\\
  q &= cx + dy + \Delta y
\end{aligned}
\end{cases}
$$

na forma matricial:

$$
\begin{bmatrix}
    a & b & \Delta x\\
    c & d & \Delta y \\
    0 & 0 & 1 \\
\end{bmatrix}
\begin{bmatrix}
    x \\
    y \\
    1
\end{bmatrix}
=
\begin{bmatrix}
    p \\
    q \\
    1
\end{bmatrix}
$$

Imagine que você tem um colega que apenas decorou essa relação, e está contente em usar isso para a prova. Porém, esse colega imagina que na prova vai cair alguma questão em que será preciso entender por que esse passo de converter o sistema em uma multiplicação matricial é válido, e mais, por que aquela dimensão adicional com valor $1$ surge nesse processo. Tente explicar para seu colega como realizar essa transformação usando somente definições mais elementares, como soma e multiplicação de matrizes.

### Rotações ao redor de um ponto arbitrário

Quando queremos fazer uma rotação ao redor de um ponto arbitrário $\begin{bmatrix}p_1\\p_2\end{bmatrix}$, não podemos simplesmente usar a matriz de rotação usual $
R = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix}$. Ao invés disso, precisamos transformá-la em uma matriz com coordenadas homogêneas e combiná-la com matrizes de translação.

a) Escreva (e use desenhos, se for necessário) por que é preciso realizar translações, e quais são elas.

b) Como encontramos uma matriz $Q$ para realizar uma rotação de um ângulo $\theta$ ao redor do ponto  $\begin{bmatrix}p_1\\p_2\end{bmatrix}$?

### Trigonometria

Uma matriz de rotação que rotaciona pontos ao redor da origem de um ângulo $\theta$ tem a forma:

$$
R = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix}
$$

a) Demonstre (matematicamente) que a matriz $R^2=RR$ realiza a rotação de um ângulo $2\theta$. Após, escreva em português uma interpretação geométrica para essa propriedade.

b) Demonstre (matematicamente) que, se $\theta=\pi/4$, então $R^8=I$. Após, discuta se essa propriedade é condizente com a interpretação geométrica que você trouxe no ítem (a).