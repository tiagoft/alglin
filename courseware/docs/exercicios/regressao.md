# Exercícios: Regressão

## Parte 1

### Questão 1

Um pássaro está voando em linha reta a uma velocidade aparentemente constante (exceto pela influência aleatória de pequenas rajadas de vento). Somos capazes de medir sua posição precisamente, em instantes de tempo conhecidos, através de um equipamento de radar ótico.

**a)** Escreva com suas palavras como poderíamos encontrar a velocidade do pássaro através de regressão linear, usando medições do nosso radar e um cronômetro. Inclua, na sua explicação, todo o modelo matemático necessário, assumindo que sabemos as equações da mecânica.

**b)** O modelo do movimento uniforme $s=v_0+vt$ descreve uma reta no plano $(s,t)$. Então, precisaríamos de apenas dois pontos de dados coletados para encontrar os parâmetros $v$ e $v_0$. Explique por que, apesar disso, é preciso coletar mais pontos de dados para fazer uma estimativa mais precisa.

### Questão 2

Uma pesquisa concluiu que as notas $y$ de alunos de uma turma são preditíveis usando a equação:

$$
y = a \log_2 (x) + b + \phi,
$$

onde $x$ é o tempo em horas que o aluno estudou, $a$ e $b$ são parâmetros do modelo, e $\phi$ é um ruído aleatório não mensurado.

Mostre um roteiro, passo a passo, incluindo uma dedução matemática teórica partindo do modelo, que mostre como poderíamos descobrir os parâmetros $a$ e $b$ através de regressão linear.

## Parte 2

### Questão 1

Um jogador de futebol está chutando bolas exatamente na vertical, para cima, no meio de um estádio. A cada chute, a bola atinge uma altura máxima, e então cai novamente. A altura, evidentemente, depende da velocidade inicial da bola.

**a)** Mostre, passo a passo (incluindo a dedução do modelo), como podemos usar um modelo linear, com medidas do tempo de subida e da altura máxima da bola para determinar a aceleração da gravidade e a velocidade inicial

**b)** Gere dados simulados a respeito da situação problema que foi enunciada.

**c)** Em um programa de computador, resolva o problema para os dados que você simulou e verifique que você consegue recuperar os parâmetros usados para gerar os dados.

### Questão 2

Nas ciências sociais, é comum assumir modelos lineares para determinados comportamentos de grupos de pessoas. Por exemplo, alguns modelos assumem que a taxa de analfabetismo ($x_1$) e a taxa de natalidade ($x_2$) influenciam o PIB ($y$) ponderadas por coeficientes $w_1$ e $w_2$, somadas a um coeficiente linear $w_0$, isto é:

$$
y = w_0 + w_1 x_1 + w_2 x_2
$$

Suponha que você coletou dados do PIB, taxa de analfabetismo e taxa de natalidade de várias cidades. Mostre, passo a passo, e incluindo as deduções matemáticas relevantes, como encontrar os coeficientes $w_0$, $w_1$ e $w_2$ à partir de seus dados.

### Questão 3

Um modelo auto-regressivo (AR) é um modelo aplicado a séries temporais (por exemplo, sequências de medidas $y_t$ para $t=[0, 1, 2, \cdots, n]$. No modelo AR, o elemento $y_t$ é encontrado à partir da soma ponderada de seus $n$ elementos anteriores, isto é:

$$
y_{t} = w_0 + \sum_{i=1}^n w_i y_{t-i}
$$

**a)** Usando a formulação matricial e a pseudoinversa, encontre os coeficientes do modelo AR capaz de prever a série:

$$
y = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2]
$$

considerando $n=1$, $n=2$, $n=3$ e $n=4$.

Use apoio computacional para fazer as contas.

**b)** Gere uma série temporal que tenha amostras independentes de uma distribuição normal (ou: $y_t \sim N(0,1)$). Use um modelo AR para tentar prever a próxima amostra. O que você observa nos coeficientes?

**c)** Usando dados do Yahoo Finance (ou semelhante), encontre os valores de fechamento de ações de uma empresa à sua escolha. Use um modelo AR para tentar prever o valor das ações. Explore diferentes valores de $n$. O que você descobriu? Por que isso aconteceu?

### Questão 4

Em modelos lineares do tipo:

$$
y = w_0 + \sum_{i=1}^n w_i x_i
$$

é comum assumir que os valores de $w_i$ são representativos do impacto de cada uma das dimensões $i$ da entrada.

**a)** Por que usar $w_i$ como uma medida do impacto da variável $i$ parece razoável?

**b)** Considere a situação em que a dimensão $1$ tem uma variável $x_1$ que varia entre $0$ e $1$, ao passo que a dimensão $2$ tem uma variável $x_2$ que varia entre $-100$ e $100$, ambas uniformemente distribuídas. Nesse caso, ainda é seguro usar $w_1$ e $w_2$ como uma medida do impacto de $x_1$ e $x_2$? Por que?
