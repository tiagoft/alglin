<!--
Edite este arquivo em Markdown.
Use blocos "!!! info" para criar os cartões do botão "?".
Escreva as fórmulas em LaTeX entre $$ e $$, como nas outras páginas da disciplina.
-->

# Formulário

Fórmulas e comandos mais usados nas aulas.

## Vetores

!!! info "Vetor em $\mathbb{R}^n$"
    $$
    x =
    \begin{bmatrix}
    x_1 \\ x_2 \\ \vdots \\ x_n
    \end{bmatrix},
    \quad x \in \mathbb{R}^n
    $$

    Use os índices para falar de cada componente do vetor.

!!! info "Soma de vetores"
    $$
    x+y =
    \begin{bmatrix}
    x_1+y_1 \\ x_2+y_2 \\ \vdots \\ x_n+y_n
    \end{bmatrix}
    $$

    Só faz sentido quando os dois vetores têm a mesma dimensão.

!!! info "Multiplicação por escalar"
    $$
    \alpha x =
    \begin{bmatrix}
    \alpha x_1 \\ \alpha x_2 \\ \vdots \\ \alpha x_n
    \end{bmatrix}
    $$

    O escalar muda o tamanho do vetor e pode inverter o sentido.

!!! info "Norma"
    $$
    \|x\| = \sqrt{x_1^2+x_2^2+\cdots+x_n^2}
    $$

    Também aparece como módulo ou comprimento.

!!! info "Distância entre vetores"
    $$
    d(x_i,x_q)=\|x_i-x_q\|=\sqrt{\sum_{k=1}^{n}(x_{i,k}-x_{q,k})^2}
    $$

    Na AI, isso aparece na busca do item mais parecido com uma query.

!!! info "Item mais semelhante"
    $$
    i^*=\arg\min_i\,d(x_i,x_q)
    $$

    Depois de encontrar $i^*$, o banco retorna o vetor $x_i$ mais próximo da query.

!!! info "Forma polar para cartesiana"
    $$
    x=\|x\|
    \begin{bmatrix}
    \cos(\theta) \\ \sin(\theta)
    \end{bmatrix}
    $$

    Para vetores no plano.

!!! info "Produto interno"
    $$
    \langle x,y\rangle=\sum_{i=1}^{n}x_i y_i=\|x\|\|y\|\cos(\phi)
    $$

    Se o produto interno é zero, os vetores são ortogonais.

!!! info "Projeção de $y$ sobre $x$"
    $$
    p=\frac{x}{\|x\|}\,\|y\|\cos(\phi)
    $$

    É a parte de $y$ que aponta na direção de $x$.

!!! info "Força gravitacional"
    $$
    \|F\|=G\frac{m_1m_2}{d^2}
    $$

    A direção é dada pelo vetor que liga um corpo ao outro.

## Matrizes e sistemas

!!! info "Matriz"
    $$
    X\in\mathbb{R}^{m\times n},
    \quad x_{i,j}\text{ fica na linha }i\text{ e coluna }j
    $$

    Linhas e colunas definem se uma multiplicação é possível.

!!! info "Soma e escalar"
    $$
    Z=X+Y\Rightarrow z_{i,j}=x_{i,j}+y_{i,j},
    \quad
    Z=aX\Rightarrow z_{i,j}=a x_{i,j}
    $$

    A soma exige matrizes de mesmo tamanho.

!!! info "Multiplicação matricial"
    $$
    Z=XY,
    \quad
    z_{i,j}=\sum_{k=1}^{n}x_{i,k}y_{k,j}
    $$

    Colunas de $X$ precisam bater com linhas de $Y$.

!!! info "Transposta"
    $$
    (X^T)_{j,i}=x_{i,j},
    \quad
    (XY)^T=Y^T X^T
    $$

    A transposta troca linhas por colunas.

!!! info "Identidade"
    $$
    AI=A=IA
    $$

    A identidade é o elemento neutro da multiplicação.

!!! info "Inversa"
    $$
    AB=I\Rightarrow B=A^{-1},
    \quad
    Ax=y\Rightarrow x=A^{-1}y
    $$

    Só existe quando a matriz é inversível.

!!! info "Sistema dinâmico"
    $$
    x_{t+1}=Ax_t
    $$

    A matriz $A$ transforma o estado atual no próximo estado.

!!! info "Cadeia de Markov"
    $$
    P_{t+1}=AP_t,
    \quad
    P_{t+k}=A^kP_t
    $$

    Na AI, isso aparece como a probabilidade do turista depois de várias horas.

!!! info "Colunas de matriz de transição"
    $$
    a_{i,j}=P(\text{estado }i\text{ em }t+1\mid\text{estado }j\text{ em }t),
    \quad
    \sum_i a_{i,j}=1
    $$

    Na AF, a soma $1$ significa que alguém que sai de um estado precisa ir para algum estado.

!!! info "Movimento com aceleração"
    $$
    s_{t+1}=s_t+\Delta t\,v_t,
    \quad
    v_{t+1}=v_t+\Delta t\,a_t
    $$

    Usado nas simulações de movimento e confetes.

## Determinantes e transformações

!!! info "Determinante $2\times2$"
    $$
    \det
    \begin{bmatrix}
    a & b \\ c & d
    \end{bmatrix}
    =ad-bc
    $$

    Se $\det(A)=0$, $A$ não tem inversa.

!!! info "Reta"
    $$
    y=ax+b,
    \quad
    Ax+By+C=0
    $$

    Sistemas $2\times2$ podem ser vistos como interseções de retas.

!!! info "Retas paralelas em sistema $2\times2$"
    $$
    \begin{cases}
    a_1x+b_1y=c_1\\
    a_2x+b_2y=c_2
    \end{cases}
    \quad
    \text{sao paralelas quando}
    \quad
    a_1b_2-a_2b_1=0
    $$

    Na AI, para a matriz $\begin{bmatrix}1&3\\D&9\end{bmatrix}$, isso dá $9-3D=0$.

!!! info "Área transformada"
    $$
    \operatorname{area}(AX)=|\det(A)|\,\operatorname{area}(X)
    $$

    O determinante mede o fator de escala de área.

!!! info "Rotação"
    $$
    R_\theta=
    \begin{bmatrix}
    \cos\theta & -\sin\theta\\
    \sin\theta & \cos\theta
    \end{bmatrix}
    $$

    Rotaciona pontos ao redor da origem.

!!! info "Soma e diferença de arcos"
    $$
    \sin(\theta\pm\phi)=\sin\theta\cos\phi\pm\cos\theta\sin\phi
    $$

    $$
    \cos(\theta\pm\phi)=\cos\theta\cos\phi\mp\sin\theta\sin\phi
    $$

    Identidades usadas na AI para manipular matrizes de rotação.

!!! info "Identidades trigonométricas"
    $$
    \cos(-\theta)=\cos\theta,
    \quad
    \sin(-\theta)=-\sin\theta,
    \quad
    \cos^2\theta+\sin^2\theta=1
    $$

    Aparecem diretamente na questão de rotação da AI.

!!! info "Inversa da rotação"
    $$
    R_\theta^{-1}=R_{-\theta}=
    \begin{bmatrix}
    \cos\theta & \sin\theta\\
    -\sin\theta & \cos\theta
    \end{bmatrix}
    $$

    Se $A=\begin{bmatrix}x&-y\\y&x\end{bmatrix}$ é rotação, então $A^{-1}=\begin{bmatrix}x&y\\-y&x\end{bmatrix}$.

!!! info "Escala"
    $$
    A=
    \begin{bmatrix}
    s_x & 0\\
    0 & s_y
    \end{bmatrix}
    $$

    Multiplica $x$ por $s_x$ e $y$ por $s_y$.

!!! info "Coordenadas homogêneas"
    $$
    \begin{bmatrix}
    a & b & \Delta x\\
    c & d & \Delta y\\
    0 & 0 & 1
    \end{bmatrix}
    \begin{bmatrix}
    x\\y\\1
    \end{bmatrix}
    =
    \begin{bmatrix}
    p\\q\\1
    \end{bmatrix}
    $$

    Permite representar translação como multiplicação matricial.

!!! info "Remover componente de cor"
    $$
    p'_{RGB}=T^{-1}
    \begin{bmatrix}
    1&0&0\\
    0&0&0\\
    0&0&1
    \end{bmatrix}
    Tp_{RGB}
    $$

    Na AI, $T$ leva RGB para XYZ; a matriz do meio zera a componente $Y$.

!!! info "Composição de transformações"
    $$
    Y=ARX
    \quad
    \text{e}
    \quad
    Y=RAX
    $$

    A ordem importa: em geral, $ARX$ e $RAX$ geram efeitos diferentes.

## Bases e autovetores

!!! info "Combinação linear"
    $$
    x=a_1v_1+a_2v_2+\cdots+a_nv_n
    $$

    Escreve um vetor como soma ponderada de outros vetores.

!!! info "Matriz de base"
    $$
    x=Bs,
    \quad
    B=
    \begin{bmatrix}
    |&|&&|\\
    b_1&b_2&\cdots&b_n\\
    |&|&&|
    \end{bmatrix}
    $$

    As colunas de $B$ são os vetores-base.

!!! info "Mudança de base"
    $$
    s=B^{-1}x
    $$

    Encontra as coordenadas de $x$ na base $B$.

!!! info "Autovetor e autovalor"
    $$
    Av=\lambda v
    $$

    A matriz só muda a escala do autovetor.

!!! info "Decomposição por autovetores"
    $$
    A=PQP^{-1}
    $$

    $P$ guarda autovetores; $Q$ guarda autovalores na diagonal.

!!! info "Potências por autovalores"
    $$
    A^k=PQ^kP^{-1},
    \quad
    Q^k=\operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)
    $$

    Na AF, isso ajuda a decidir se um sistema dinâmico cresce, estabiliza ou vai a zero.

!!! info "Autovetores da base padrão"
    $$
    v_1=e_1,\quad v_2=e_2
    \Rightarrow
    P=I,
    \quad
    A=\operatorname{diag}(\lambda_1,\lambda_2)
    $$

    Na AF, com autovalores $5$ e $\pi$, a matriz é diagonal.

!!! info "Inversa por autovalores"
    $$
    A^{-1}=PQ^{-1}P^{-1}
    $$

    Inverter $A$ equivale a usar escalas inversas na base dos autovetores.

## Regressão e modelos físicos

!!! info "Modelo linear"
    $$
    \hat{y}=ax+b
    $$

    $a$ é inclinação; $b$ é intercepto.

!!! info "Erro"
    $$
    e_i=y_i-\hat{y}_i,
    \quad
    e=y-\hat{y}
    $$

    Diferença entre medição e estimativa.

!!! info "Erro quadrático médio"
    $$
    \mathrm{EQM}=\frac{1}{n}\sum_{i=1}^{n}\|e_i\|^2=\frac{1}{n}e^Te
    $$

    Quanto menor, melhor o ajuste no conjunto medido.

!!! info "Pseudoinversa"
    $$
    X^+=(X^TX)^{-1}X^T,
    \quad
    w^T=X^+y
    $$

    Calcula os parâmetros do modelo por matrizes.

!!! info "Sistema sobredeterminado"
    $$
    y=Xw,
    \quad
    X\in\mathbb{R}^{m\times n},
    \quad
    m>n
    \Rightarrow
    w=X^+y
    $$

    Na AF, aparece quando há mais equações do que incógnitas a estimar.

!!! info "Modelo com raiz"
    $$
    n_i=a\sqrt{t_i}+b
    $$

    $$
    X=
    \begin{bmatrix}
    \sqrt{t_1}&1\\
    \sqrt{t_2}&1\\
    \vdots&\vdots\\
    \sqrt{t_m}&1
    \end{bmatrix},
    \quad
    \begin{bmatrix}
    a\\b
    \end{bmatrix}
    =
    X^+n
    $$

    Na AF, transforma a estimativa de $a$ e $b$ em regressão linear.

!!! info "Regressão polinomial"
    $$
    \hat{y}=
    \begin{bmatrix}
    x^2 & x & 1
    \end{bmatrix}
    \begin{bmatrix}
    a\\b\\c
    \end{bmatrix}
    $$

    Adicione colunas para os termos do modelo.

!!! info "Movimento uniformemente variado"
    $$
    s=s_0+v_0t+\frac{at^2}{2}
    $$

    Na queda livre, $a$ pode representar a gravidade $g$.

!!! info "Queda livre linearizada"
    $$
    \tau=\frac{t^2}{2},
    \quad
    s=a\tau
    $$

    Transforma a estimação da gravidade em regressão linear.

!!! info "Velocidade terminal"
    $$
    v=\frac{mg}{\beta}
    $$

    Aparece quando gravidade e arraste se equilibram.

## Informação e Python

!!! info "Probabilidade de símbolo"
    $$
    P(s\mid texto)=
    \frac{\text{ocorrencias de }s}{\text{total de simbolos}}
    $$

    Base para construir a árvore de Huffman.

!!! info "Frequência no Huffman"
    $$
    p_i=\frac{n_i}{N}
    $$

    Na AF, é o primeiro passo para construir a árvore da palavra.

!!! info "Quantização de áudio"
    $$
    \hat{x}_n=Q(x_n),
    \quad
    \hat{x}_n\in\{q_1,q_2,\ldots,q_m\}
    $$

    Na AF, quantizar transforma amostras contínuas em um alfabeto finito para Huffman.

!!! info "Tamanho com código fixo"
    $$
    \text{bits}=
    \text{caracteres}\times\text{bits por caractere}
    $$

    Comparação direta com códigos de tamanho variável.

!!! info "Tamanho médio de código"
    $$
    L=\sum_i p_i\ell_i
    $$

    $p_i$ é a frequência; $\ell_i$ é o tamanho do código do símbolo.

!!! info "Taxa de compressão"
    $$
    \text{taxa}=
    \frac{\text{bits comprimidos}}{\text{bits originais}}
    $$

    Valores menores indicam mais compressão.

!!! info "Operações em NumPy"
    - `A @ x`: multiplicação matricial
    - `np.dot(x, y)`: produto interno
    - `np.linalg.norm(x)`: norma

!!! info "Álgebra linear em NumPy"
    - `np.linalg.det(A)`: determinante
    - `np.linalg.inv(A)`: inversa
    - `np.linalg.pinv(X)`: pseudoinversa
    - `np.linalg.eig(A)`: autovalores e autovetores
