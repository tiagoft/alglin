# Compressão de Informação

## Referências

* [Mark Nelson and Jean-loup Gailly, The Data Compression Book](https://www.hlevkin.com/hlevkin/02imageprocC/The%20Data%20Compression%20Book%202nd%20edition.pdf), Chap. 3.
* [D. A. Huffman, "A Method for the Construction of Minimum-Redundancy Codes,"]((https://doi.org/10.1109/JRPROC.1952.273898)) in Proceedings of the IRE, vol. 40, no. 9, pp. 1098-1101, Sept. 1952, doi: 10.1109/JRPROC.1952.273898.

## Introdução

Quando nos comunicamos por escrito, usamos símbolos como "a", "b" ou "c". Esses símbolos fazem parte de um conjunto de símbolos válidos que é chamado de "alfabeto". O alfabeto é uma convenção, isto é, aceitamos esses símbolos porque "combinamos" que eles seriam assim - poderíamos simplesmente "combinar" que o "a" será escrito como "$\alpha$", o "b" como "$\beta$", e assim por diante, e as regras gramaticais ficariam todas iguais.

Esse processo de encontrar correspondências entre símbolos de diferentes alfabetos se chama "codificação". Em computação, é comum codificarmos alfabetos como sequências de bits.

??? info "Se o caractere B é codificado por $111$, N por $011$ e A por $010$, qual é a palavra codificada por $111010011010011010$?"
    Podemos resolver esse exercício encontrando sucessivamente quais caracteres "batem" com a cadeia. Se tudo deu certo, vamos encontrar a palavra "BANANA".


Um exemplo disso é quando usamos bytes para representar letras (como na [tabela ASCII](https://www.matematica.pt/util/resumos/tabela-ascii.php)): nesse caso, temos um alfabeto de 256 combinações de bits que está sendo mapeado para símbolos do alfabeto usual.

!!! tip "Bits, bytes e banana"
    Lembre-se que, para representar 256 combinações de bits, precisamos de, no mínimo, 8 bits, isto é, um byte. Então, se quisermos codificar a palavra BANANA, que tem 6 letras, usaríamos 6 bytes e, portanto, $6 \times 8 = 4\$ bits.



A codificação ASCII tem tamanho fixo, com 8 bits por caractere. Porém, lembre-se que ela é uma convenção. Poderíamos simplesmente escolher outra codificação, com um número variável de bits por caractere. Claro que essa escolha adiciona complexidade no processo de transmissão de dados: desta vez, **precisaremos de algum tipo de regra para determinar o fim de um caractere!** Porém, poderemos usar menos bits por caractere.

??? info "Se B é codificado por 3 bits, N em 5 bits, a A em 12 bits, quantos bits precisaríamos para codificar BANANA?"
    Nesse caso, usaríamos $3 + 12 + 5 + 12 + 5 + 12 = 49$ bits.

Vamos refletir um pouco sobre isso. Sabemos que alguns caracteres são mais frequentes que outros. Também, sabemos que é possível usar codificações de tamanhos diferentes para cada caractere. Se queremos que nossa cadeia de caracteres inteira tenha o menor tamanho possível, responda:

??? info "Qual deve ser a relação entre o tamanho da codificação de cada caractere e a sua frequência de ocorrência?"
    Deveríamos usar codificações menores para os caracteres mais frequentes!

## Frequência de símbolos

Uma característica importante de textos em linguagem natural é que a probabilidade de ocorrência de cada letra é bastante específica. Em outras palavras, por exemplo, em português, é muito mais comum encontrarmos a letra "A" que a letra "W" em uma palavra.

Então, podemos calcular a probabilidade: $P(\text{letra} | \text{texto})$, que é a probabilidade de, ao selecionarmos um caractere aleatório de um texto, encontrarmos a letra correspondente.

!!! info "A distribuição de probabilidades de letras"
    Na palavra BANANA, por exemplo, poderíamos calcular:

    1. $P(\text{B} | \text{BANANA}) = \frac{1}{6}$
    1. $P(\text{A} | \text{BANANA}) = \frac{3}{6}$
    1. $P(\text{N} | \text{BANANA}) = \frac{2}{6}$

Encontre $P(\text{letra} | \text{texto})$ para os seguintes casos:

| Letra | Texto |
| --- | --- |
| a | abacaxi |
| b | abacaxi |
| b | batman |
| f | mafagafos |

??? info "Respostas aqui"
    1. $\frac{3}{7}$
    1. $\frac{1}{7}$
    1. $\frac{1}{6}$
    1. $\frac{2}{9}$

## O código de Huffman

Já sabemos encontrar os símbolos mais frequentes de uma cadeia. Agora, precisamos encontrar códigos (sequências de bits) pequenas para atribuirmos a eles. Esse processo pode ser realizado usando o [algoritmo de Huffman](https://doi.org/10.1109/JRPROC.1952.273898). A ideia do algoritmo é a seguinte:

1. Calculamos a probabilidade de encontrar cada um dos símbolos da string
1. Ordenamos os símbolos em ordem crescente de sua probabilidade de ocorrência, e colocamos esses símbolos numa lista
1. Tiramos os dois elementos de menor probabilidade da lista e unimos ambos em um terceiro, que tem probabilidade igual à soma das probabilidades dos elementos retirados. Nesse passo, essa conversão deve ser armazenada em uma árvore.
1. Inserimos esse novo elemento na lista
1. Se há mais de um elemento na lista, voltamos ao passo 2.

### Exemplo: árvore do código de Huffman para BANANA

Começamos com nossa cadeia de caracteres: BANANA. No primeiro passo do algoritmo, calculamos as probabilidades de cada símbolo:

| Símbolo | Probabilidade |
| --- | --- | 
| B | $\frac{1}{6}$ |
| A | $\frac{3}{6}$ |
| N | $\frac{2}{6}$ |

Agora, passamos ao passo 2: ordenamos nossos símbolos de acordo com suas probabilidades:

| Símbolo | Probabilidade |
| --- | --- | 
| B | $\frac{1}{6}$ |
| N | $\frac{2}{6}$ |
| A | $\frac{3}{6}$ |

Agora, vamos unir nossos dois símbolos de menor probabilidade em um único símbolo:

| Símbolo | Probabilidade |
| --- | --- | 
| BN | $\frac{3}{6}$ |
| A | $\frac{3}{6}$ |

O ato de unir os símbolos B e N pode ser representado como uma árvore na qual o nó raiz é esse novo símbolo, e os nós-folha são os nós originais:

<div class="mermaid">
graph TD
    BN --> B;
    BN --> N;
</div>

A estrutura de árvore permite guardar a informação de que o nó BN surgiu da união de B e N. Isso será útil na codificação e decodificação, como veremos logo a seguir.

Realizando uma nova união, ficamos com:

| Símbolo | Probabilidade |
| --- | --- | 
| BNA | 1 |

e nossa árvore evolui para:

<div class="mermaid">
graph TD
    BN --> B;
    BN --> N;
    BNA --> BN;
    BNA --> A;
</div>

Uma dúvida relevante que aparece é como escolher o nó que fica à direita ou à esquerda. Na verdade, tanto faz: em ambos os casos, a árvore gerada será válida e igualmente boa. O mesmo vale para quando temos empates de vários símbolos com mesma probabilidade: a escolha é arbitrária, e qualquer uma das árvores geradas terá o mesmo poder de codificação.

??? info "Que árvore aparece à partir da palavra BATMAN?"
    Uma possível solução é:
    <div class="mermaid">
    graph TD
        BATMN --> A;
        BATMN --> BTMN;
        BTMN --> BT;
        BTMN --> MN;
        BT --> B;
        BT --> T;
        MN --> M;
        MN --> N;
    </div>
    Extra: você consegue mostrar que essa solução não é única (por exemplo, fazendo duas árvores diferentes para BATMAN)?

### Codificação com código de Huffman

Agora vamos usar a árvore para codificar uma cadeia de caracteres. Para isso, vamos atribuir valores $0$ ou $1$ para cada uma das arestas de saída de cada vértice. Em princípio, a escolha por qual nó terá valor 0 ou 1 é arbitrária, então podemos simplesmente escolher, para o caso de BANANA, os valores:

<div class="mermaid">
graph TD
    BN -->|0| B;
    BN -->|1| N;
    BNA -->|0| BN;
    BNA -->|1| A;
</div>

Daí, **a codificação para cada caractere é a sequência de rótulos do caminho entre o nó-raiz e o nó-folha correspondente ao símbolo**. Por exemplo, para a letra B, faríamos o caminho:

<div class="mermaid">
graph TD
    BN -->|0| B;
    BN -->|1| N;
    BNA -->|0| BN;
    BNA -->|1| A;
    style BNA fill:#f1ea00,stroke:#0077cc
    style BN fill:#f1ea00,stroke:#0077cc
    style B fill:#f1ea00,stroke:#0077cc
</div>

e, portanto, a letra B deveria ser codificada como 00.

??? info "Qual deveria ser a codificação de N e de A?"
    "N" deveria ser codificada como 01. "A" deveria ser codificada como 1.

??? info "Qual deveria ser a codificação de BANANA?"
    Concatenando as codificações: 001011011.

### Decodificação com código de Huffman



Para **decodificar** uma cadeia, partimos do nó raiz. Então, "andamos" pela árvore seguindo o caminho da sequência. Ao chegar num nó folha, reconhecemos que aquele caractere foi recebido. No próximo passo, voltamos para a raiz para começar a receber o próximo caractere.

!!! info "Decodificando 00101"
    Se recebemos a cadeia 00101, assumindo a árvore que fizemos para a palavra "BANANA", poderíamos fazer a decodificação da seguinte forma:

    | Bit recebido | Vértice que estou | Decisão |
    | --- | --- | --- |
    | Início | BNA | Começando novamente |
    | 0 | BN | Continuar lendo |
    | 0 | B | Aceitar B, voltar para o começo |
    | - | BNA | Começando novamente | 
    | 1 | A | Aceitar A, voltar para o começo |
    | - | BNA | Começando novamente |
    | 0 | BN | Continuar lendo |
    | 1 | N | Aceitar N, voltar para o começo |
    | - | - | Fim de cadeia, encerrando |

??? info "Com a árvore que usamos para BANANA, qual é a cadeia codificada por 001001001001001011011?"
    Se tudo deu certo, você deveria ter achado a cadeia BABABABABANANA.

!!! info "Código de Prefixos"
    A construção da árvore de Huffman garante uma propriedade muito importante, conhecida como código de prefixo. Isso significa que o código gerado para qualquer caractere nunca é o início (prefixo) do código de qualquer outro caractere. É por isso que o algoritmo de decodificação funciona sem ambiguidades: no momento em que a sequência de bits que você está lendo bate com o código de um caractere, você pode ter certeza absoluta de que aquele é o caractere, pois nenhuma outra combinação mais longa começa daquela forma.

## Exercícios


### 1. Executar o código de Huffman

Usando o código de Huffman, encontre e árvore e o código para as seguintes palavras:

1. BATMAN
1. TOMATE
1. ALGEBRA

### 2. Inverter 0's e 1's

Em certo momento, este texto diz que a escolha de quais arestas recebem 0's ou 1's é arbitrária. Vamos testar esta hipótese: escolha uma das árvores que você fez no exercício 1, e inverta os bits de sua codificação. Realize a codificação e a decodificação, mostrando assim que a escolha é, realmente, arbitrária, e que em qualquer caso o código gerado é válido.

### 3. Usar o código de Huffman para comunicação

Escreva uma mensagem (curta). Faça a árvore de Huffman e codifique sua mensagem como uma cadeia de bits. Após, mostre sua cadeia de bits e sua árvore para um colega. O colega deve decodificar sua mensagem. Confira se a decodificação foi correta. Após, inverta os papeis e decodifique a mensagem que seu colega codificou.

### 4. Medir a taxa de compressão do código de Huffman

Se fossemos codificar a palavra BANANA usando um número fixo de bits por caractere, precisaríamos de 2 bits por caractere, já que temos 3 símbolos diferentes. Porém, usando o código de Huffan, precisamos de um número menor de bits por caractere. Qual é a razão entre o número de bits por caractere da sequência codificada usando Huffman e a sequência codificada usando 2 bits por caractere?

### 5. Refletir sobre as árvores do código de Huffman

Considere uma string que tenha o mesmo número de ocorrências de cada caractere, como por exemplo: ABCDEFG. Faça a codificação de Huffman para essa string. Após, considere uma string que tenha muito mais ocorrências de um ou dois caracteres, como AAAAAAABBBBBBBBBCDEFG. Faça a codificação de Huffman para essa string. Em qual dos dois casos a codificação de Huffman "economizou" mais caracteres? Por que você acha que isso acontece?

### 6. Refletir sobre encontrar o fim de uma cadeia

Reflita, revisando o algoritmo de decodificação: se as codificações geradas pelo Código de Huffman têm tamanho variável, como o sistema "sabe" que chegou ao fim de um caractere?

### 7. Implementar um codificador de Huffman

Faça um programa em Python que recebe uma string e implementa a codificação e a decodificação de Huffman em strings recebidas como entrada. Implemente as seguintes funções:
 
1. `gerar_arvore(s : str)`, que gera uma árvore de Huffman com base na string `s`
1. `codificar(arvore : any, s : str)`, que codifica uma string `s` usando a árvore recebida como entrada.
1. `decodificar(arvore: any, s_cod : str)`, que decodifica uma string `s_cod` usando a árvore recebida como entrada.

