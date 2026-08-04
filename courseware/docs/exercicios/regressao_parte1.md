# Exercícios: Regressão (Parte 1)

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
