<!--
Edite este arquivo em Markdown.
Use blocos "!!! info" para criar os cartões do botão "?".
Escreva as fórmulas em LaTeX entre $$ e $$, como nas outras páginas da disciplina.
-->

# Formulário

Fórmulas e comandos mais usados nas aulas.

## Vetores

!!! info "Vetor em $\mathbb{R}^N$"
    $$
    \boldsymbol{x} =
    \begin{bmatrix}
    x_1 \\ x_2 \\ \vdots \\ x_N
    \end{bmatrix},
    \quad \boldsymbol{x} \in \mathbb{R}^N
    $$

    Use os índices para falar de cada componente do vetor.

!!! info "Soma de vetores"
    $$
    \boldsymbol{x}+\boldsymbol{y} =
    \begin{bmatrix}
    x_1+y_1 \\ x_2+y_2 \\ \vdots \\ x_N+y_N
    \end{bmatrix}
    $$

    Só faz sentido quando os dois vetores têm a mesma dimensão.

!!! info "Multiplicação por escalar"
    $$
    \alpha \boldsymbol{x} =
    \begin{bmatrix}
    \alpha x_1 \\ \alpha x_2 \\ \vdots \\ \alpha x_N
    \end{bmatrix}
    $$

    O escalar muda o tamanho do vetor e pode inverter o sentido.

!!! info "Norma"
    $$
    \|\boldsymbol{x}\| = \sqrt{x_1^2+x_2^2+\cdots+x_N^2}
    $$

    Também aparece como módulo ou comprimento.

!!! info "Distância entre vetores"
    $$
    d(\boldsymbol{x}_i,\boldsymbol{x}_q)=\|\boldsymbol{x}_i-\boldsymbol{x}_q\|=\sqrt{\sum_{n=1}^{N}(x_{i,n}-x_{q,n})^2}
    $$

    Na AI, isso aparece na busca do item mais parecido com uma query.

!!! info "Item mais semelhante"
    $$
    i^*=\arg\min_i\,d(\boldsymbol{x}_i,\boldsymbol{x}_q)
    $$

    Depois de encontrar $i^*$, o banco retorna o vetor $\boldsymbol{x}_i$ mais próximo da query.

!!! info "Forma polar para cartesiana"
    $$
    \boldsymbol{x}=\|\boldsymbol{x}\|
    \begin{bmatrix}
    \cos(\theta) \\ \sin(\theta)
    \end{bmatrix}
    $$

    Para vetores no plano.

!!! info "Produto interno"
    $$
    \langle \boldsymbol{x},\boldsymbol{y}\rangle=\sum_{n=1}^{N}x_n y_n=\|\boldsymbol{x}\|\|\boldsymbol{y}\|\cos(\phi)
    $$

    Se o produto interno é zero, os vetores são ortogonais.

!!! info "Projeção de $\boldsymbol{y}$ sobre $\boldsymbol{x}$"
    $$
    \boldsymbol{p}=\frac{\boldsymbol{x}}{\|\boldsymbol{x}\|}\,\|\boldsymbol{y}\|\cos(\phi)
    $$

    É a parte de $\boldsymbol{y}$ que aponta na direção de $\boldsymbol{x}$.

!!! info "Força gravitacional"
    $$
    \|\boldsymbol{F}\|=G\frac{m_1m_2}{d^2}
    $$

    A direção é dada pelo vetor que liga um corpo ao outro.

## Matrizes e sistemas

!!! info "Matriz"
    $$
    \boldsymbol{X}\in\mathbb{R}^{M\times N},
    \quad x_{i,j}\text{ fica na linha }i\text{ e coluna }j
    $$

    Linhas e colunas definem se uma multiplicação é possível.

!!! info "Soma e escalar"
    $$
    \boldsymbol{Z}=\boldsymbol{X}+\boldsymbol{Y}\Rightarrow z_{i,j}=x_{i,j}+y_{i,j},
    \quad
    \boldsymbol{Z}=a\boldsymbol{X}\Rightarrow z_{i,j}=a x_{i,j}
    $$

    A soma exige matrizes de mesmo tamanho.

!!! info "Multiplicação matricial"
    $$
    \boldsymbol{Z}=\boldsymbol{X}\boldsymbol{Y},
    \quad
    z_{i,j}=\sum_{n=1}^{N}x_{i,n}y_{n,j}
    $$

    Colunas de $\boldsymbol{X}$ precisam bater com linhas de $\boldsymbol{Y}$.

!!! info "Transposta"
    $$
    (\boldsymbol{X}^T)_{j,i}=x_{i,j},
    \quad
    (\boldsymbol{X}\boldsymbol{Y})^T=\boldsymbol{Y}^T \boldsymbol{X}^T
    $$

    A transposta troca linhas por colunas.

!!! info "Identidade"
    $$
    \boldsymbol{A}\boldsymbol{I}=\boldsymbol{A}=\boldsymbol{I}\boldsymbol{A}
    $$

    A identidade é o elemento neutro da multiplicação.

!!! info "Inversa"
    $$
    \boldsymbol{A}\boldsymbol{B}=\boldsymbol{I}\Rightarrow \boldsymbol{B}=\boldsymbol{A}^{-1},
    \quad
    \boldsymbol{A}\boldsymbol{x}=\boldsymbol{y}\Rightarrow \boldsymbol{x}=\boldsymbol{A}^{-1}\boldsymbol{y}
    $$

    Só existe quando a matriz é inversível.

!!! info "Sistema dinâmico"
    $$
    \boldsymbol{x}_{t+1}=\boldsymbol{A}\boldsymbol{x}_t
    $$

    A matriz $\boldsymbol{A}$ transforma o estado atual no próximo estado.

!!! info "Cadeia de Markov"
    $$
    \boldsymbol{p}_{t+1}=\boldsymbol{A}\boldsymbol{p}_t,
    \quad
    \boldsymbol{p}_{t+k}=\boldsymbol{A}^k\boldsymbol{p}_t
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
    \boldsymbol{s}_{t+1}=\boldsymbol{s}_t+\Delta t\,\boldsymbol{v}_t,
    \quad
    \boldsymbol{v}_{t+1}=\boldsymbol{v}_t+\Delta t\,\boldsymbol{a}_t
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

    Se $\det(\boldsymbol{A})=0$, $\boldsymbol{A}$ não tem inversa.

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
    \operatorname{area}(\boldsymbol{A}\boldsymbol{X})=|\det(\boldsymbol{A})|\,\operatorname{area}(\boldsymbol{X})
    $$

    O determinante mede o fator de escala de área.

!!! info "Rotação"
    $$
    \boldsymbol{R}_\theta=
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
    \boldsymbol{R}_\theta^{-1}=\boldsymbol{R}_{-\theta}=
    \begin{bmatrix}
    \cos\theta & \sin\theta\\
    -\sin\theta & \cos\theta
    \end{bmatrix}
    $$

    Se $\boldsymbol{A}=\begin{bmatrix}x&-y\\y&x\end{bmatrix}$ é rotação, então $\boldsymbol{A}^{-1}=\begin{bmatrix}x&y\\-y&x\end{bmatrix}$.

!!! info "Escala"
    $$
    \boldsymbol{A}=
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
    \boldsymbol{p}'_{RGB}=\boldsymbol{T}^{-1}
    \begin{bmatrix}
    1&0&0\\
    0&0&0\\
    0&0&1
    \end{bmatrix}
    \boldsymbol{T}\boldsymbol{p}_{RGB}
    $$

    Na AI, $\boldsymbol{T}$ leva RGB para XYZ; a matriz do meio zera a componente $Y$.

!!! info "Composição de transformações"
    $$
    \boldsymbol{Y}=\boldsymbol{A}\boldsymbol{R}\boldsymbol{X}
    \quad
    \text{e}
    \quad
    \boldsymbol{Y}=\boldsymbol{R}\boldsymbol{A}\boldsymbol{X}
    $$

    A ordem importa: em geral, $\boldsymbol{A}\boldsymbol{R}\boldsymbol{X}$ e $\boldsymbol{R}\boldsymbol{A}\boldsymbol{X}$ geram efeitos diferentes.

## Bases e autovetores

!!! info "Combinação linear"
    $$
    \boldsymbol{x}=a_1\boldsymbol{v}_1+a_2\boldsymbol{v}_2+\cdots+a_N\boldsymbol{v}_N
    $$

    Escreve um vetor como soma ponderada de outros vetores.

!!! info "Matriz de base"
    $$
    \boldsymbol{x}=\boldsymbol{B}\boldsymbol{s},
    \quad
    \boldsymbol{B}=
    \begin{bmatrix}
    |&|&&|\\
    \boldsymbol{b}_1&\boldsymbol{b}_2&\cdots&\boldsymbol{b}_N\\
    |&|&&|
    \end{bmatrix}
    $$

    As colunas de $\boldsymbol{B}$ são os vetores-base.

!!! info "Mudança de base"
    $$
    \boldsymbol{s}=\boldsymbol{B}^{-1}\boldsymbol{x}
    $$

    Encontra as coordenadas de $\boldsymbol{x}$ na base $\boldsymbol{B}$.

!!! info "Autovetor e autovalor"
    $$
    \boldsymbol{A}\boldsymbol{v}=\lambda \boldsymbol{v}
    $$

    A matriz só muda a escala do autovetor.

!!! info "Decomposição por autovetores"
    $$
    \boldsymbol{A}=\boldsymbol{P}\boldsymbol{Q}\boldsymbol{P}^{-1}
    $$

    $\boldsymbol{P}$ guarda autovetores; $\boldsymbol{Q}$ guarda autovalores na diagonal.

!!! info "Potências por autovalores"
    $$
    \boldsymbol{A}^k=\boldsymbol{P}\boldsymbol{Q}^k\boldsymbol{P}^{-1},
    \quad
    \boldsymbol{Q}^k=\operatorname{diag}(\lambda_1^k,\ldots,\lambda_N^k)
    $$

    Na AF, isso ajuda a decidir se um sistema dinâmico cresce, estabiliza ou vai a zero.

!!! info "Autovetores da base padrão"
    $$
    \boldsymbol{v}_1=\boldsymbol{e}_1,\quad \boldsymbol{v}_2=\boldsymbol{e}_2
    \Rightarrow
    \boldsymbol{P}=\boldsymbol{I},
    \quad
    \boldsymbol{A}=\operatorname{diag}(\lambda_1,\lambda_2)
    $$

    Na AF, com autovalores $5$ e $\pi$, a matriz é diagonal.

!!! info "Inversa por autovalores"
    $$
    \boldsymbol{A}^{-1}=\boldsymbol{P}\boldsymbol{Q}^{-1}\boldsymbol{P}^{-1}
    $$

    Inverter $\boldsymbol{A}$ equivale a usar escalas inversas na base dos autovetores.

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
    \boldsymbol{e}=\boldsymbol{y}-\hat{\boldsymbol{y}}
    $$

    Diferença entre medição e estimativa.

!!! info "Erro quadrático médio"
    $$
    \mathrm{EQM}=\frac{1}{N}\sum_{n=1}^{N}\|e_n\|^2=\frac{1}{N}\boldsymbol{e}^T\boldsymbol{e}
    $$

    Quanto menor, melhor o ajuste no conjunto medido.

!!! info "Pseudoinversa"
    $$
    \boldsymbol{X}^+=(\boldsymbol{X}^T\boldsymbol{X})^{-1}\boldsymbol{X}^T,
    \quad
    \boldsymbol{w}^T=\boldsymbol{X}^+\boldsymbol{y}
    $$

    Calcula os parâmetros do modelo por matrizes.

!!! info "Sistema sobredeterminado"
    $$
    \boldsymbol{y}=\boldsymbol{X}\boldsymbol{w},
    \quad
    \boldsymbol{X}\in\mathbb{R}^{M\times N},
    \quad
    M>N
    \Rightarrow
    \boldsymbol{w}=\boldsymbol{X}^+\boldsymbol{y}
    $$

    Na AF, aparece quando há mais equações do que incógnitas a estimar.

!!! info "Modelo com raiz"
    $$
    n_i=a\sqrt{t_i}+b
    $$

    $$
    \boldsymbol{X}=
    \begin{bmatrix}
    \sqrt{t_1}&1\\
    \sqrt{t_2}&1\\
    \vdots&\vdots\\
    \sqrt{t_M}&1
    \end{bmatrix},
    \quad
    \begin{bmatrix}
    a\\b
    \end{bmatrix}
    =
    \boldsymbol{X}^+\boldsymbol{n}
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
    \hat{x}_n\in\{q_1,q_2,\ldots,q_M\}
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
