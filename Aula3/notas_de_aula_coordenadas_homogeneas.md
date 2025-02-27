# Coordenadas Homogêneas e Transformações Lineares

Em álgebra linear, transformações geométricas como rotação, escala e cisalhamento podem ser expressas como multiplicações matriciais. No entanto, a translação, que envolve soma de vetores, não pode ser diretamente representada dessa forma. Para resolver esse problema, utilizamos **coordenadas homogêneas**.

## Representação de Pontos e Transformações

Consideremos um conjunto de pontos em um espaço de dimensão $ d $. Podemos organizá-los em uma matriz $ X $, onde cada coluna representa um ponto e cada linha, uma das suas coordenadas. Assim, $ X $ tem dimensão $ d \times n $, sendo $ n $ o número de pontos.

Quando aplicamos uma transformação linear a esses pontos, utilizamos uma matriz $ A $ de dimensão $ d \times d $. A multiplicação $ AX $ preserva a estrutura da matriz e permite aplicar transformações como rotação e escala. No entanto, esse modelo não permite somar um vetor constante para realizar uma translação.

## Coordenadas Homogêneas

Para incorporar a translação em um modelo matricial, adicionamos uma dimensão extra ao sistema. Representamos cada ponto $ (x_1, x_2, \dots, x_d) $ como $ (x_1, x_2, \dots, x_d, 1) $. Dessa forma, a matriz $ X $ passa a ter dimensão $ (d+1) \times n $.

A matriz de transformação agora é expandida para $ (d+1) \times (d+1) $:

$$
T = \begin{bmatrix} A & b \\ 0 & 1 \end{bmatrix}
$$

Aqui, $ A $ é a matriz original de transformação linear e $ b $ é o vetor de translação. A linha extra com $ 0 $ e $ 1 $ garante que a nova representação seja consistente.

A operação $ Y = TX $ agora engloba todas as transformações, incluindo translação. Isso permite combinar várias transformações em uma única matriz, facilitando cálculos e simplificando a implementação computacional.

## Aplicando Múltiplas Transformações

Uma vantagem das coordenadas homogêneas é que podemos realizar sequências de transformações multiplicando matrizes. Por exemplo, para rotacionar um objeto em torno de um ponto que não seja a origem, seguimos três etapas:

1. **Transladar o objeto para a origem**.
2. **Aplicar a rotação**.
3. **Transladar de volta para a posição original**.

Cada uma dessas operações é representada por uma matriz, e o resultado final é obtido multiplicando essas matrizes na ordem correta.

## Conclusão

Coordenadas homogêneas são uma ferramenta útil para representar transformações geométricas de maneira uniforme. Ao adicionar uma dimensão extra, podemos expressar translação como uma multiplicação matricial, permitindo a combinação eficiente de múltiplas transformações.