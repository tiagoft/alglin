# Resolvendo Sistemas Lineares
Nesta aula, utilizaremos matrizes para modelar sistemas dinâmicos probabilísticos

Você vai perceber que nesta aula específica não há "certo" ou "errado" -- o que há é um processo de aprendizado. Sendo o processo tão particular de cada um, é preciso que cada um seja responsável por si. O que gostaríamos nessa atividade é praticar o seguinte fluxo de pensamento:

<div class="mermaid">

flowchart TD
    A[Entender a situação proposta: qual é o problema, e como sabemos que ele foi resolvido, isto é, quais são os critérios de aceitação] --> B[Ligar a situação a um modelo matemático e suas variáveis] --> C[Resolver o modelo matemático, possivelmente implementando um programa para isso] --> D[Identificar, dentro do modelo resolvido e/ou dos resultados mostrados pelo programa, como a situação inicial foi resolvida]

</div>

Por esse motivo, essa atividade não tem uma "rubrica" ou um "gabarito". Existem muitas soluções para cada um dos exercícios propostos. Porém, é importante que, para cada um deles, você explicitamente passe por todas as etapas do fluxo.

A quarta etapa é especialmente importante: como este é um trabalho aberto, isto é, que envolve o pensamento *divergente*, é esperado do aluno (e dos grupos de alunos) que o entendimento de cada etapa, e do que significa ter "resolvido" cada etapa, seja discutido pelo grupo de trabalho. Isso significa que fazer essa atividade pensando em "cumprir rapidamente etapas para entregar um resultado que será avaliado" não é produtivo. Ao invés disso, trata-se um trabalho importante pelo *vivenciar o processo*, e não pela entrega em si.

Dito isso, é claro que GPTs e IAs atuais resolvem todas as atividades. Não use GPTs e IAs para fazer o trabalho criativo para você neste contexto - até porque isso não faz nenhum sentido porque a atividade não recebe nota. Use essa oportunidade para identificar onde estão as *suas* dificuldades, e, ao superá-las, para exercitar o senso estético/poético de apreciar os resultados do programa que for fazendo.

## Exercício 1: resolvendo um sistema

Resolva o sistema abaixo, isolando $x$ e $y$, cada um em sua equação:
$$ 
\begin{cases}
    \begin{aligned}
    x + y &= a \\
    x - y &= b \\
    \end{aligned}
\end{cases}
$$

## Exercício 2: discussão sobre a resolução de um sistema
Quando resolvemos um sistema, podemos proceder, por exemplo, da seguinte maneira:

$$ 
\begin{cases}
    \begin{aligned}
    x + y &= a \\
    x - y &= b \\
    \end{aligned}
\end{cases}
$$


$$
\begin{cases}
    \begin{aligned}
    \text{Somando as equações: } x + y + (x - y) &= a + b \\
    \text{Subtraindo as equações: } x + y - (x - y) &= a - b \\
    \end{aligned}  
\end{cases}
\\
\Rightarrow \begin{cases}
    \begin{aligned}
    2x &= a + b \\
    2y &= a - b \\
    \end{aligned}  
\end{cases}
\\
\Rightarrow \begin{cases}
    \begin{aligned}
    x &= \frac{a + b}{2} \\
    y &= \frac{a - b}{2} \\
    \end{aligned}  
\end{cases}
$$

Veja que partimos de um sistema e chegamos a um outro:

$$ 
\begin{cases}
    \begin{aligned}
    x + y &= a \\
    x - y &= b \\
    \end{aligned}
\end{cases}
\Leftrightarrow
\begin{cases}
    \begin{aligned}
    x &= \frac{a + b}{2} \\
    y &= \frac{a - b}{2} \\
    \end{aligned}  
\end{cases}
$$

Podemos escrever os dois sistemas na forma matricial:

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

Calcule (manualmente) $Z$ em:

$$
Z = 
\begin{bmatrix}
1 & 1\\
1 & -1
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2}\\
\frac{1}{2} & -\frac{1}{2}
\end{bmatrix}
$$

!!! info "Matriz identidade"
    Se tudo correu bem, você deve ter encontrado:

    $$
    Z = \begin{bmatrix}
    1 & 0\\
    0 & 1
    \end{bmatrix}
    $$
    Essa matriz quadrada, com $1$ na diagonal principal e $0$ em todos os outros elementos, se chama *Matriz Identidade* ($I$). Opcionalmente, podemos dizer "identidade de tamanho $n$" para nos referir especificamente a $I \in \mathbb{R}^{n \times n}$.


## Exercício 3: propriedades da identidade

Uma propriedade da matriz identidade é que ela é *neutra em relação à multiplicação*, isto é, para qualquer matriz quadrada $A$ do mesmo tamanho que $I$,

$$
AI = A = IA
$$

Mostre um exemplo que ilustre que $AI=A$ para o caso de $A$ ser uma matriz retangular.

## Exercício 4: matriz inversa

!!! info "Matriz inversa"
    Quando $AB=I$, dizemos que $B$ é a inversa de $A$, ou $B=A^{-1}$.

Vamos supor que sabemos como encontrar a matriz $A^{-1}$. Veja o que podemos fazer:

$$
\begin{array}{rl}
Ax &= y \\
A^{-1} A x &= A^{-1}y\\
I x &= A^{-1} y\\
x &= A^{-1} y
\end{array}
$$

Em Python, podemos calcular a matriz $A^{-1}$ usando:

```python
import numpy as np
A = np.array( [ [1, 1], [1, -1]])
A_inv = np.linalg.inv(A) # Inversa de A
B = A @ A_inv # B deveria ser uma matriz identidade!
```

1. Confirme, executando o código acima, que `B` de fato contém uma matriz identidade.
2. Use a estratégia de inversão para resolver o sistema:

$$
\begin{cases}
\begin{array}{rl}
x_1 &= 2 y_1 - 4 y_2\\
x_2 &= y_1
\end{array}
\end{cases}
$$

## Exercício 5: invertendo sistemas dinâmicos

Recorde o caso dos carcarás e dos sapos. Naquele caso, tínhamos o sistema:

$$ 
\begin{cases}
    \begin{aligned}
    c_t & = 0.8 c_{t-1} + 0.2 s_{t-1} \\
    s_t & = - 0.1 c_{t-1} + 1.1 s_{t-1} \\
    \end{aligned}
\end{cases}
$$

1. Escreva o sistema na forma matricial, isto é, encontre $x_t \in \mathbb{R}^{2 \times 1}$, $A \in \mathbb{R}^{2 \times 2}$ e $x_{t-1} \in \mathbb{R}^{2 \times 1}$ em:
$$ 
x_t = A x_{t-1}
$$

2. Suponha que em $t=5$ tínhamos 10 carcarás e 20 mil sapos (ou seja, $x_5 = \begin{bmatrix} 10 \\ 20 \end{bmatrix}$). Faça um script Python e encontre a quantidade de carcarás e sapos em $t=4$, $t=3$, $t=2$, $t=1$ e $t=0$.


!!! info "Maneiras de calcular matrizes inversas"
    Se você quiser (não-obrigatório, mas vale a curiosidade) entender como calcular matrizes inversas manualmente, pode ser uma boa ideia procurar por procedimentos como a eliminação de Gauss-Jordan ou técnicas com cofatores - por exemplo, [nesta referência](https://www.mathsisfun.com/algebra/matrix-inverse.html).


## Exercício 6: interpolação

Uma bola de futebol, modelo oficial da copa de 2022, foi jogada para cima e sua trajetória foi capturada por uma câmera de vído ao ser lançada verticalmente em um planeta (por enquanto desconhecido) do sistema solar.

No primeiro *frame* ( $t=0$ s), a bola está sendo lançada, isto é, está exatamente no ponto em que vai eventualmente cair.

No segundo *frame* ( $t=1/30$ s), a bola está a $0.3286$ m do chão.

No terceiro *frame* ( $t=2/30$ s), a bola está a $0.6477$ m do chão.

No quarto *frame* ( $t=3/30$ s), a bola está a $0.9575$  do chão.

Conhecendo a [aceleração da gravidade em cada planeta do sistema solar](https://www.todamateria.com.br/gravidade/), desprezando a resistência do ar, e lembrando da equação do movimento uniformemente variado $s = s_0 + v_0t + at^2/2$, use as técnicas que vimos nesta aula para responder:

1. Lembrando que temos acesso a dados com diversos valores não-nulos para $t$, bem como um modelo físico, encontre as equações que permitem calcular $s_{1/30}$, $s_{2/30}$ e $s_{3/30}$ em cada uma dessas situações.
2. Essas equações determinam um sistema no qual as incógnitas são $v_0$ e $a$. Use a técnica da matriz inversa para resolver o sistema usando um script Python.
3. Qual é a velocidade inicial da bola e qual é a aceleração da gravidade?
4. Em que planeta esse experimento foi realizado?
