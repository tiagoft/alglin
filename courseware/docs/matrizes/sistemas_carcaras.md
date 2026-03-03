# Sistemas lineares: os Carcarás e os Sapos

Uma situação que acontece na natureza é que alguns seres vivos são predadores de outros. Por exemplo: o [carcará](https://pt.wikipedia.org/wiki/Carcar%C3%A1), uma ave de rapina sul-americana parecida com um falcão, se alimenta de sapos, e, por isso, dizemos que o carcará é um *predador* do sapo. Nessa relação, o carcará é o *predador* e o sapo é a *presa*. Nosso objetivo, neste exercício, é encontrar como a quantidade de carcarás e de sapos varia com o tempo.

Na nossa simulação, o tempo é medido em meses (veja que $t$ será sempre um número inteiro!). Vamos usar a variável $c$ para representar o número de carcarás na população, e $s$ para representar o número de sapos. Então, $c_t$ é o número de carcarás no tempo $t$, e $s_t$ é o número de sapos no tempo $t$. Como cada carcará come muitos sapos, vamos convencionar que $c$ está em unidades e $s$ está em milhares.

Vamos assumir alguns comportamentos 

* A população de carcarás naturalmente cai em 20% a cada mês
* Para cada cinco mil sapos existentes naquele mês, um novo carcará nasce
* A população de sapos naturalmente sobe em 10% porque eles se reproduzem
* A cada mês, cada carcará consegue comer 100 sapos

Isso significa que podemos escrever equações para calcular o número de carcarás e de sapos a cada mês, tomando por base a quantidade deles no mês anterior:

$$ 
\begin{cases}
    \begin{aligned}
    c_{t+1} & = 0.8 c_{t} + 0.2 s_{t} \\
    s_{t+1} & = - 0.1 c_{t} + 1.1 s_{t} \\
    \end{aligned}
\end{cases}
$$

!!! info "Sistemas dinâmicos"
    Assim como na simulação dos confetes digitais, temos variáveis ligadas à iteração atual, que são recombinadas para gerar a *próxima* iteração. As variáveis $c$ e $s$ determinam o *estado* do sistema.

Veja que o sistema de equações pode ser re-escrito como:

$$
\begin{bmatrix}
    c_{t+1} \\
    s_{t+1} 
\end{bmatrix}
=
\begin{bmatrix}
    0.8 & 0.2\\
    -0.1 & 1.1
\end{bmatrix} 
\begin{bmatrix}
    c_{t} \\
    s_{t}
\end{bmatrix}
$$

Isso acontece porque, ao realizar a multiplicação matricial no membro direito da equação, obtemos:

$$
\begin{bmatrix}
    c_{t+1} \\
    s_{t+1} 
\end{bmatrix}
=
\begin{bmatrix}
    0.8 & 0.2\\
    -0.1 & 1.1
\end{bmatrix} 
\begin{bmatrix}
    c_{t} \\
    s_{t}
\end{bmatrix}
= 
\begin{bmatrix}
0.8 c_{t} + 0.2 s_{t} \\
- 0.1 c_{t} + 1.1 s_{t}
\end{bmatrix}
$$

Essa igualdade é verdadeira se os elementos dos vetores são todos iguais, isto é:

$$ 
\begin{cases}
    \begin{aligned}
    c_{t+1} & = 0.8 c_{t} + 0.2 s_{t} \\
    s_{t+1} & = - 0.1 c_{t} + 1.1 s_{t} \\
    \end{aligned}
\end{cases}
$$

??? info "Manualmente, assuma $c_t=10$ e $s_t=20$. Use primeiro a formulação em sistema, e, depois, a formulação matricial, para encontrar $c_{t+1}$ e $s_{t+1}$"
    Em ambos os casos: $c_{t+1} = 0.8 \times 10 + 0.2 \times 20 = 8+4=12$ e $s_{t+1} = -0.1 \times 10 + 1.1 \times 20 = -1 + 22 = 21$.

## Implementação computacional

Em Python, podemos definir matrizes usando Numpy, e usar o operador `@` para realizar a multiplicação matricial:

```python
import numpy as np

A = np.array([ [0.8, 0.2], [-0.1, 1.1] ])
x = np.array( [[10], [20]])
x_novo = A @ x # Quanto vale x_novo? Tivemos o mesmo resultado que a multiplicação manual?
```

Veja que agora podemos calcular a quantidade de carcarás e sapos em nossa população ao longo de várias iterações:

```python
import numpy as np

n_iteracoes = 100
A = np.array([ [0.8, 0.2], [-0.1, 1.1] ])
x = np.array( [[10], [20]])

for i in range(n_iteracoes):
    x_novo = A @ x
    x = x_novo
```

**Exercício:** Calcule o número de carcarás e de sapos na região após 10 anos.

## Exemplo: uma pedra que cai

Podemos usar o mesmo processo para modelar uma pedra em movimento uniforme. Usando uma simulação em intervalos de $\Delta t$, temos que:

$$ 
\begin{cases}
    \begin{aligned}
    x_{t+1} & = x_{t} + v_{t} \Delta t \\
    v_{t+1} & = v_t\\
    \end{aligned}
\end{cases}
$$

E, na forma matricial, temos:

$$
\begin{bmatrix}
    x_{t+1} \\
    v_{t+1} 
\end{bmatrix}
=
\begin{bmatrix}
    1 & \Delta t\\
    0 & 1
\end{bmatrix} 
\begin{bmatrix}
    x_{t} \\
    v_{t}
\end{bmatrix}
$$

Veja que $v_t$ não muda (por que o movimento é uniforme!), mas ele precisa ser usado como uma variável para que possa influenciar no cálculo de $x_{t+1}$.

??? info "Modifique o sistema de equações e sua formulação matricial para adicionar aceleração constante ao sistema"
    Nesse caso, teríamos:
    $$ 
    \begin{cases}
        \begin{aligned}
        x_{t+1} & = x_{t} + v_{t} \Delta t \\
        v_{t+1} & = v_t + a_t \Delta t\\
        a_{t+1} &= a_t
        \end{aligned}
    \end{cases}
    $$

    e, portanto:

    $$
    \begin{bmatrix}
        x_{t+1} \\
        v_{t+1} \\
        a_{t+1}
    \end{bmatrix}
    =
    \begin{bmatrix}
        1 & \Delta t & 0\\
        0 & 1 & \Delta t \\
        0 & 0 & 1
    \end{bmatrix} 
    \begin{bmatrix}
        x_{t} \\
        v_{t} \\
        a_{t}
    \end{bmatrix}
    $$

??? info "Adicione uma força de resistência do ar a esse sistema. Lembre-se que a resistência do ar gera uma força no sentido oposto à velocidade e com módulo $\beta |v|$, onde $\beta \in [0,1]$."
    Vamos precisar definir a massa da pedra ($m$) e o coeficiente $\beta$. Após isso, usamos a Segunda Lei de Newton ($F=ma$) e verificamos que a aceleração decorrente da resistência do ar vale $\frac{-\beta}{m} v$. Portanto, ficamos com o sistema:
    $$ 
    \begin{cases}
        \begin{aligned}
        x_{t+1} & = x_{t} + v_{t} \Delta t \\
        v_{t+1} & = v_t + a_t \Delta t - \frac{\beta}{m} v_t\\
        a_{t+1} &= a_t
        \end{aligned}
    \end{cases}
    $$

    Na forma matricial, isso fica:

    $$
    \begin{bmatrix}
        x_{t+1} \\
        v_{t+1} \\
        a_{t+1}
    \end{bmatrix}
    =
    \begin{bmatrix}
        1 & \Delta t & 0\\
        0 & 1- \frac{\beta}{m} & \Delta t \\
        0 & 0 & 1
    \end{bmatrix} 
    \begin{bmatrix}
        x_{t} \\
        v_{t} \\
        a_{t}
    \end{bmatrix}
    $$

## Exercício: encontrar a velocidade terminal

Quando um objeto cai em um ambiente com resistência do ar, ele é puxado pela gravidade. Isso faz com que a velocidade de queda aumente. Porém, esse aumento de velocidade faz com que a força de arraste também aumente. Quando as acelerações devidas à gravidade ($g$) e ao arraste são iguais, o objeto atinge sua velocidade terminal.

(a) Esboce a situação discutida mostrando as forças da gravidade e de arraste sobre o objeto.

(b) Mostre que a velocidade terminal é $v = \frac{m g}{\beta}$.

(c) Calcule a velocidade terminal assumindo $\beta=0.7$, $m=100kg$ e $a=10m/s^2$.

(d) Use a formulação matricial e uma simulação computacional para confirmar o resultado encontrado em (c).

(e) Faça um gráfico da velocidade de queda do objeto como uma função do tempo, assumindo velocidade inicial nula.
