# Provas passadas

> **Aviso:** algumas questões abaixo pertencem a avaliações de conteúdos que talvez ainda não tenham sido vistos na disciplina. Use esta página como material de estudo e confira o conteúdo já trabalhado antes de tentar cada prova.

As questões estão organizadas aproximadamente na ordem em que os conteúdos aparecem na disciplina. Dentro de cada avaliação, a ordem original das questões foi preservada.

## Vetores

### Teste 1 — Vetores — 2025/2026

#### Questão 1

Alan e Bianca estão acampando numa floresta e conversam usando um rádio comunicador com alcance de 450 m. Alan fica parado no acampamento-base, e Bianca caminha 300 m para o norte. Após, vira 90 graus para a direita e anda 200 m. Depois, faz uma curva de 60 graus para a esquerda e anda 100 m. Por fim, faz outra curva, agora de 120 graus para a direita, e anda 100 m.

(a) Esboce a trajetória de Bianca.  
(b) Encontre a posição final de Bianca como um vetor na forma cartesiana.  
(c) Determine se, ao final da trajetória, Bianca consegue se comunicar com Alan.  
(d) As etapas poderiam ser percorridas em outra ordem? Quais propriedades da soma de vetores aparecem nessa situação?

#### Questão 2

Um vetor $x \in \mathbb{R}^n$ é dado por

$$x = \begin{bmatrix}x_1\\x_2\\\vdots\\x_n\end{bmatrix}, \qquad x_k=\sqrt{k}.$$

(a) Escreva $x$ para $n=5$.  
(b) Encontre $\lVert x\rVert$ para $n=5$.  
(c) Se $y_k=1+\sqrt{k}$, encontre $z=x-y$ para $n=5$.  
(d) Encontre uma expressão para $\lVert x-y\rVert$ que dependa somente de $n$ e não escreva explicitamente todos os termos da soma.

#### Questão 3

Três partículas $a$, $b$ e $c$ estão em posições $x_a$, $x_b$ e $x_c\in\mathbb{R}^3$, com cargas $q_a$, $q_b$ e $q_c$. O módulo da força eletrostática entre duas partículas é $|F|=kq_1q_2/d^2$, com direção determinada pelas posições.

(a) Desenhe as partículas, as forças individuais e as resultantes.  
(b) Mostre como calcular o vetor da força resultante sobre $a$.  
(c) Escolha valores não nulos e distintos e calcule essa força.  
(d) Encontre uma situação em que a força resultante sobre $a$ seja nula sem que as cargas sejam nulas nem iguais.

### Atividade Prática 01 — 2026/1

#### Questão 1

Uma partícula parte da origem, caminha 3 unidades na direção de $\begin{bmatrix}0\\1\end{bmatrix}$, vira 60 graus no sentido horário e caminha mais 3 unidades, chegando ao ponto $v$. Em seguida vira um ângulo $\theta$ e caminha uma distância $x$, retornando à origem.

(a) Esboce a trajetória, marcando distâncias e ângulos.  
(b) Encontre $\theta$.  
(c) Escreva $v$ nas formas polar e cartesiana.

#### Questão 2

Sabendo que, para $x\in\mathbb{R}^2$, $\lVert x\rVert=\sqrt{x_1^2+x_2^2}$:

(a) Mostre que $\lVert ax\rVert=a\lVert x\rVert$.  
(b) Se $\lVert x\rVert$ é conhecido, encontre $\alpha$ tal que $\lVert\alpha x\rVert=1$.

### Teste 1 — Vetores — 2026/2

#### Questão 1

Alan e Bianca estão acampando e conversam por rádio com alcance de 450 m. Bianca caminha 300 m para o norte, 200 m para o leste, 100 m numa direção obtida por uma curva de 60 graus para a esquerda e 100 m após uma curva de 120 graus para a direita.

(a) Esboce a trajetória.  
(b) Encontre a posição final como vetor cartesiano.  
(c) Verifique se Bianca ainda está no alcance do rádio.  
(d) Identifique as propriedades da soma de vetores relacionadas a trocar a ordem das etapas e a agrupar as somas.

#### Questão 2

Para $x_k=\sqrt{k}$:

(a) Escreva $x$ para $n=5$.  
(b) Calcule $\lVert x\rVert$.  
(c) Para $y_k=1+\sqrt{k}$, encontre $x-y$.  
(d) Encontre $\lVert x-y\rVert$ em uma expressão válida para qualquer inteiro positivo $n$.

#### Questão 3

Considere três partículas em $\mathbb{R}^3$ sujeitas à força eletrostática $|F|=kq_1q_2/d^2$.

(a) Desenhe as forças e resultantes.  
(b) Deduzir o vetor da força resultante sobre uma partícula.  
(c) Calcular um exemplo numérico.  
(d) Encontrar uma situação de força resultante nula com cargas não nulas e distintas.

## Matrizes e sistemas lineares

### Teste 2 — Sistemas Lineares

#### Questão 1

Encontre $x$ em

$$
\begin{bmatrix}1&1\end{bmatrix}
\begin{bmatrix}1&0\\0&1\end{bmatrix}^{T}
\begin{bmatrix}-1&1\\0&1\end{bmatrix}
\left(
\begin{bmatrix}1&\pi\\\sqrt{11}&9\end{bmatrix}
\begin{bmatrix}1&\pi\\\sqrt{11}&9\end{bmatrix}^{-1}
\right)
\begin{bmatrix}1\\0\end{bmatrix}=x.
$$

#### Questão 2

Em um alfabeto fictício com caracteres A, B e C, use one-hot encoding para representar a mensagem ABCABC. A cifra troca A por B, B por C e C por A.

(a) Encontre a matriz $X$ da mensagem.  
(b) Encontre a matriz que, multiplicada por $X$, implementa a cifra.

#### Questão 3

Uma máquina Enigma usa o alfabeto A, B, C, D e os rotores

$$P=\begin{bmatrix}0&1&0&0\\1&0&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix},\qquad
R=\begin{bmatrix}0&1&0&0\\1&0&0&0\\0&0&0&1\\0&0&1&0\end{bmatrix}.$$

A primeira letra é multiplicada por $P$, a segunda por $RP$, a terceira por $RRP$ e assim por diante. Criptografe ABCD.

### Teste 3 — Geometria Analítica

#### Questão 1

Sabendo que

$$A=\begin{bmatrix}1&0&5\\0&1&3\\0&0&1\end{bmatrix},$$

(a) determine a transformação aplicada a vetores de $\mathbb{R}^2$;  
(b) encontre $A^{-1}$ usando apenas argumentos sobre a transformação.

#### Questão 2

As matrizes homogêneas $A$ e $B$ realizam, respectivamente, as translações $[1,0]$ e $[0,1]$, e $R$ realiza uma rotação de 15 graus no sentido anti-horário. Escreva, usando apenas $A$, $B$ e $R$, a transformação que gira 60 graus em torno do ponto $[5,7]$.

### Teste 3 — Geometria Analítica — versão 2

#### Questão 1

O sistema

$$\begin{bmatrix}1&4\\D&12\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}w\\z\end{bmatrix}$$

define duas retas. Encontre $D$ para que elas sejam paralelas.

#### Questão 2

As matrizes $A$ e $B$ realizam as translações $[-1,0]$ e $[0,-1]$, e $R$ realiza uma rotação de 30 graus anti-horária. Escreva, em termos de $A$, $B$ e $R$, a transformação que gira 60 graus em torno de $[7,5]$.

### Teste 4 — Bases

#### Questão 1

Um algoritmo mapeia pixels de $(R,G,B)$ para $(X,Y,Z)$ por meio de uma matriz $A$. As componentes $Y$ e $Z$ são relevantes, enquanto $X$ é ruído.

(a) Desenhe o processo como um diagrama de blocos de operações matriciais.  
(b) Defina as matrizes necessárias.  
(c) Defina uma matriz $B$ que realize o processo completo.  
(d) Explique conceitualmente por que $B$ não pode ser invertida.

#### Questão 2

Um sanduíche usa 350 g de grão-de-bico e 15 g de alho. Um pote de homus usa 150 g de grão-de-bico e 25 g de alho. Encontre a matriz $A$ que leva $x=\begin{bmatrix}s\\h\end{bmatrix}$, quantidades de sanduíches e potes, para $y=\begin{bmatrix}b\\a\end{bmatrix}$, quantidades de ingredientes.

### Teste 2 — 2026/2

#### Questão 1

Sardinhas podem estar na forma de ovos, crianças ou adultas. A cada semana, 80% dos ovos viram crianças; 60% das crianças viram adultas; cada 100 adultas colocam 150 ovos; e 10% das adultas morrem.

(a) Faça o diagrama do ciclo de vida.  
(b) Escreva o sistema dinâmico semanal.  
(c) Escreva-o na forma matricial.  
(d) Uma mergulhadora come 50 sardinhas e lança 50 ovos por semana. Incorpore essa interferência ao sistema.

#### Questão 2

A matriz de rotação é

$$R=\begin{bmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{bmatrix}.$$

Encontre uma transformação afim que leve um quadrado a um losango inteiramente contido nele, com dimensão horizontal maior que a vertical.

(a) Identifique os vértices e seus destinos.  
(b) Esboce as transformações afins, uma a uma.  
(c) Identifique as matrizes de cada etapa.  
(d) Escreva a matriz composta $Q$.

### Prova AI — 2025/2

#### Questão 1

Escreva um pseudocódigo, sem usar funções de Python, que receba itens vetoriais de um banco de dados e uma query e retorne o item mais semelhante, usando a menor distância. A função deve funcionar em qualquer dimensão.

#### Questão 2

Encontre $x$ e $y$ em

$$
\begin{bmatrix}1&2\\3&4\\5&6\end{bmatrix}
\begin{bmatrix}5&x\\y&6\end{bmatrix}
=\begin{bmatrix}13&15\\31&33\\49&51\end{bmatrix}.
$$

#### Questão 3

Turistas se deslocam entre a Torre Eiffel, o Louvre e o Arco do Triunfo. As probabilidades são: da Torre para Louvre 0,7, para Arco 0,1 e permanece 0,2; do Louvre para Torre 0,2, para Arco 0,3 e permanece 0,5; do Arco para Torre 0,3, para Louvre 0,5 e permanece 0,2.

(a) Encontre $A$ tal que $P_{t+1}=AP_t$.  
(b) Escreva, em termos de $A$, como encontrar $B$ tal que $P_{t+10}=BP_t$.

#### Questão 4

Se $A=\begin{bmatrix}x&-y\\y&x\end{bmatrix}$ é uma matriz de rotação, encontre $A^{-1}$ em termos de $x$ e $y$, usando as relações trigonométricas fornecidas.

#### Questão 5

O sistema

$$\begin{bmatrix}1&3\\D&9\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}w\\z\end{bmatrix}$$

define duas retas. Mostre as equações e encontre $D$ para que sejam paralelas.

#### Questão 6

Um pixel RGB é transformado por $T$ para o espaço $(X,Y,Z)$. Encontre a matriz que transforma o pixel, remove a componente $Y$ e o retorna ao espaço RGB.

## Bases, autovalores, regressão e modelos

### Prova AF — 2025/2

#### Questão 1

Considere

$$
\begin{bmatrix}5\\3\\2\\9\pi\end{bmatrix}=
\begin{bmatrix}1&2\\3&4\\5&6\\\sqrt2&-1\end{bmatrix}
\begin{bmatrix}a\\b\end{bmatrix}.
$$

Proponha um método para encontrar $a$ e $b$, deixando indicadas as operações difíceis.

#### Questão 2

O desempenho de um aluno é modelado por $n=a\sqrt{t}+b$. Proponha detalhadamente um método para encontrar $a$ e $b$.

#### Questão 3

A palavra LARANJAS foi comprimida por Huffman. Mostre passo a passo como construir a árvore e encontre a sequência de bits correspondente.

#### Questão 4

Explique por que a quantização é necessária para comprimir áudio com Huffman, indicando a característica do áudio que impede a aplicação direta do código e como ela é alterada.

#### Questão 5

A população de carcarás e sapos segue

$$\begin{bmatrix}c\\s\end{bmatrix}_{t+1}=A\begin{bmatrix}c\\s\end{bmatrix}_t,$$

com $A=P\operatorname{diag}(0,7/2,2/\pi)P^{-1}$. Determine se a população cresce indefinidamente, fica estável ou tende a zero, justificando pelos autovalores.

#### Questão 6

Explique por que, em uma Cadeia de Markov representada por $x_{t+1}=Ax_t$, as colunas da matriz de transição devem somar 1.

#### Questão 7

Encontre a matriz cujos autovetores são $\begin{bmatrix}1\\0\end{bmatrix}$ e $\begin{bmatrix}0\\1\end{bmatrix}$, com autovalores associados 5 e $\pi$.

### Prova AF — 2026/1

#### Questão 1

Um modelo autorregressivo de ordem $n$ é

$$x_t=a_1x_{t-1}+a_2x_{t-2}+\cdots+a_nx_{t-n}.$$

Para ordem 3, com $a_1=2$, $a_2=0$ e $a_3=1$:

(a) Encontre o próximo elemento de $s=[1,2,4,9]$.  
(b) Escreva $y=Xw$ para esse cálculo, com $y\in\mathbb{R}^{1\times1}$, $X\in\mathbb{R}^{1\times3}$ e $w\in\mathbb{R}^{3\times1}$.  
(c) Escreva as equações para modelar $x_3,\ldots,x_8$ com um modelo de ordem 2.  
(d) Passe-as à forma matricial e indique como usar a pseudoinversa para encontrar os coeficientes.

#### Questão 2

Rumi, Mira e Zoey começam com 1000 conchinhas cada uma. A cada mês, Rumi dá metade das suas conchinhas para Mira e metade para Zoey; Mira dá um terço para Rumi e o restante para Zoey; Zoey dá três quartos para Mira e o restante para Rumi.

(a) Desenhe o grafo e as probabilidades.  
(b) Encontre $x_1$ a partir de $x_0$.  
(c) Acrescente um nó representando o colchão, para o qual Zoey passa a esconder um quarto das conchinhas.  
(d) Encontre o autovetor associado ao autovalor 1.

#### Questão 3

Para LARANJAS:

(a) Construa a árvore de Huffman.  
(b) Verifique se a árvore é única e, se não, construa outra possível.  
(c) Discuta como a árvore muda ao codificar LARANJAS repetida quatro vezes.

#### Questão 4

Partindo de $x\in\mathbb{R}^2$:

(a) Encontre a base canônica $b_1,b_2$.  
(b) Se $x=v_1w_1+v_2w_2$, explique como encontrar $v$ conhecendo $x,w_1,w_2$.  
(c) Para $y=Ax$, com $A$ uma rotação, identifique $w_1,w_2$ tais que $y=y_1w_1+y_2w_2$.

### Prova SUB — 2025/2

#### Questão 1 — Cadeias de Markov

Modele uma rede de pontos turísticos de Paris por uma Cadeia de Markov. Dadas várias medições de contagens $X_t$ e a relação $X_{t+1}=AX_t$, explique como usar todas as medições para estimar $A$ com o menor erro possível, inclusive indicando a formulação matricial e a pseudoinversa.

#### Questão 2 — Rotação e translação

Para

$$A=\begin{bmatrix}x&-y&0\\y&x&1\\0&0&1\end{bmatrix},$$

encontre $A^{-1}$ em termos de $x$ e $y$. Na versão 2026/1, também:

(a) Desenhe a transformação aplicada a uma figura.  
(b) Mostre, usando trigonometria, a relação entre a inversa e a transposta de uma matriz de rotação.  
(c) Encontre $A^{-1}$ usando intuições geométricas.

#### Questão 3 — Ciclo de vida das alfaces

A cada 100 sementes, 50 viram mudas e 50 permanecem sementes. A cada 100 mudas, 10 viram adultas, 80 permanecem mudas e 10 murcham. A cada 100 adultas, 20 murcham, as demais permanecem próprias para consumo e são geradas 200 sementes.

(a) Complete o grafo com os pesos das transições.  
(b) Escreva o sistema de equações semanal.  
(c) Escreva a matriz de transição.  
(d) Se Sam come sete alfaces por dia e planta 20 sementes por alface consumida, incorpore a interferência ao modelo.

Na versão SUB 2026/1, use os dados alterados do enunciado: 20% das sementes viram mudas; 5% das mudas viram adultas; 75% permanecem mudas; e 20% das adultas murcham. Acrescente também o estado das alfaces murchas ao grafo.

#### Questão 4 — Comutatividade

(a) Dê um exemplo numérico de dimensão 3 mostrando a comutatividade da soma de vetores.  
(b) Demonstre a propriedade usando apenas a comutatividade dos números reais e a definição da soma vetorial.  
(c) Dê um exemplo concreto em que a comutatividade da soma de vetores ajuda a explicar um fenômeno.

### Prova SUB — 2026/1

#### Questão 1 — Rotação e translação

Para a matriz homogênea

$$A=\begin{bmatrix}x&-y&0\\y&x&1\\0&0&1\end{bmatrix},$$

(a) faça um desenho da transformação aplicada a uma figura;  
(b) mostre, usando trigonometria, a relação entre a inversa e a transposta de uma matriz de rotação;  
(c) encontre $A^{-1}$ usando intuições geométricas.

#### Questão 2 — Ciclo de vida das alfaces

Use os dados da versão 2026/1: 20% das sementes viram mudas e 80% permanecem sementes; 5% das mudas viram adultas, 75% permanecem mudas e o restante murcha; 20% das adultas murcham e as demais permanecem próprias para consumo, gerando 200 sementes a cada 100 adultas.

(a) Acrescente o estado das alfaces murchas ao grafo e atribua os pesos.  
(b) Escreva o sistema de equações.  
(c) Passe o sistema à forma matricial.  
(d) Incorpore a intervenção de Sam, que come sete alfaces por dia e planta 20 sementes para cada alface consumida.

#### Questão 3 — Bases

Para $x=\begin{bmatrix}x_1\\x_2\end{bmatrix}$:

(a) demonstre que $x=x_1\begin{bmatrix}1\\0\end{bmatrix}+x_2\begin{bmatrix}0\\1\end{bmatrix}$;  
(b) escreva $x_1$ e $x_2$ como funções de $s_1$ e $s_2$ em

$$x=s_1\begin{bmatrix}2\\3\end{bmatrix}+s_2\begin{bmatrix}4\\5\end{bmatrix};$$

(c) escreva o sistema na forma matricial e indique como encontrar $s_1,s_2$;  
(d) desenhe a relação entre as duas formas de representar o vetor.

#### Questão 4 — Transformações afins

Uma nuvem quadrada $X$ está centrada em $\begin{bmatrix}-3\\-2\end{bmatrix}$. Encontre uma matriz $Q$ que expanda seu lado vertical quatro vezes, mantendo o centro, e explique as operações primitivas e a composição usadas para obter $Y=QX$.

#### Questão 5 — Inversa de rotação

Para

$$R=\begin{bmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{bmatrix},$$

(a) encontre $R^{-1}$;  
(b) mostre, por multiplicação matricial, que $RR^{-1}=I$.

### Prova AI — 2026/1

#### Questão 1 — Ciclo de vida das alfaces

Use o modelo em que 50% das sementes viram mudas; 10% das mudas viram adultas, 80% permanecem mudas e 10% murcham; 20% das adultas murcham e as demais permanecem próprias para consumo, gerando 200 sementes a cada 100 adultas.

(a) Complete o grafo com os pesos.  
(b) Escreva o sistema de equações.  
(c) Escreva-o na forma matricial.  
(d) Incorpore a intervenção de Sam, que come sete alfaces por dia e planta 20 sementes por alface consumida.

#### Questão 2 — Mudança de base

Para

$$x=\begin{bmatrix}x_1\\x_2\end{bmatrix},$$

(a) demonstre sua representação na base canônica;  
(b) encontre as equações que relacionam $x_1,x_2$ a $s_1,s_2$ na base formada por $\begin{bmatrix}2\\3\end{bmatrix}$ e $\begin{bmatrix}4\\5\end{bmatrix}$;  
(c) escreva a forma matricial e a expressão com a inversa;  
(d) desenhe as duas representações.

#### Questão 3 — Transformação de uma nuvem

Uma nuvem quadrada está centrada em $\begin{bmatrix}-3\\-2\end{bmatrix}$. Esboce a nuvem original e a obtida ao expandir o lado vertical em quatro vezes. Explique como construir a matriz $Q$ para $Y=QX$ usando operações primitivas.

#### Questão 4 — Rotação

Partindo da matriz de rotação anti-horária, encontre a matriz inversa e mostre que o produto da matriz pela sua inversa é a identidade.

## Teoria da informação e compressão

### Teste 6 — Compressão

#### Questão 1

A palavra ABACAXI foi comprimida pelo algoritmo de Huffman.

(a) Mostre passo a passo a construção da árvore.  
(b) Encontre a sequência de bits para ABACAXI.  
(c) Encontre a sequência de bits para ABC usando a mesma árvore.

#### Questão 2

Explique por que a quantização é necessária para comprimir áudio usando Huffman. Cite a característica do arquivo de áudio que impede a compressão direta e explique como a quantização a transforma em um conjunto finito de símbolos.

#### Questão 3

Explique como a taxa de compressão muda quando aumentamos o número de níveis de quantização e por que isso acontece.

### Atividade Prática 04

#### Questão 1

Sobre compressão de áudio por Huffman:

(a) Esboce uma onda sonora e sua quantização.  
(b) Explique o efeito de usar menos níveis na qualidade do som.  
(c) Explique o que significa a onda quantizada ser descrita por um conjunto finito de símbolos.  
(d) Explique por que sinais de áudio quantizados podem ser comprimidos por Huffman.
