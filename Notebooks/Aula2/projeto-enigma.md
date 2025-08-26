

# Projeto: criptografia com clone digital da máquina Enigma

A ideia de enviar mensagens que não podem ser interceptadas é muito antiga. Uma das técnicas mais antigas para isso é a [cifra de substituição](https://pt.wikipedia.org/wiki/Cifra_de_substitui%C3%A7%C3%A3o), que consiste em trocar as letras da mensagem de entrada por outras letra do alfabeto. Essa é uma técnica simples, cujo processo para codificação e decodificação é essencialmente o mesmo. Ele pode ser implementada como no algoritmo abaixo:

alfabeto_normal = "abcdefghijklmnopqrstuvwxyz "
        alfabeto_cifrado = "bcdefghijkl mnopqrstuvwxyza"
        mensagem_entrada = "o bolo de chocolate fica pronto quatro horas da tarde"

        def cifrar(mensagem_entrada, alfabeto_normal, alfabeto_cifrado):
            mensagem_cifrada = ""
            for i in range(len(mensagem_entrada)):
                c = mensagem_entrada[i]
                idx = alfabeto_normal.index(c)
                mensagem_cifrada += alfabeto_cifrado[idx]
            return mensagem_cifrada

        mensagem_cifrada = cifrar(mensagem_entrada, alfabeto_normal, alfabeto_cifrado)
        mensagem_recuperada = cifrar(mensagem_cifrada, alfabeto_cifrado, alfabeto_normal)

        print(mensagem_cifrada)
        print(mensagem_recuperada)

        O problema desse tipo de criptografia é que a frequência das letras em cada língua é bastante diferente. A letra "A", por exemplo, aparece em muito mais palavras em português que a letra "Z". Então, se um número suficiente de mensagens for interceptado, podemos analisar as frequências das letras e descobrir que foi a regra de substituição que foi usada.

Durante a Segunda Guerra Mundial, o exército alemão passou a usar um tipo de cifra que foi implementado nas [máquinas Enigma](https://pt.wikipedia.org/wiki/Enigma_(m%C3%A1quina)). As máquinas enigma passam o alfabeto cifrado por um segundo processo de cifra a cada novo caractere cifrado. Então, o algoritmo funcionaria da seguinte forma:

        alfabeto_normal = "abcdefghijklmnopqrstuvwxyz "
        alfabeto_cifrado = "bcdefghijkl mnopqrstuvwxyza"
        cifrador_auxiliar = "ijkl mnopqrstuvwxyzabcdefgh"
        mensagem_entrada = "o bolo de chocolate fica pronto quatro horas da tarde"

        def enigma(mensagem_entrada, alfabeto_normal, alfabeto_cifrado, cifrador_auxiliar):
            mensagem_cifrada = ""
            for i in range(len(mensagem_entrada)):
                c = mensagem_entrada[i]
                idx = alfabeto_normal.index(c)
                mensagem_cifrada += alfabeto_cifrado[idx]
                alfabeto_cifrado = cifrar(alfabeto_cifrado, alfabeto_normal, cifrador_auxiliar)
            return mensagem_cifrada

        mensagem_cifrada = enigma(mensagem_entrada, alfabeto_normal, alfabeto_cifrado, cifrador_auxiliar)

        print(mensagem_cifrada)
        
Neste trabalho, vamos implementar a máquina Enigma usando ferramentas de álgebra linear.

## Representando caracteres como vetores: *one-hot encoding*

Uma maneira de representar um caractere é como uma matriz-coluna. Essa matriz tem tantas linhas quantas forem os caracteres possíveis no seu alfabeto. Todos os seus elementos são iguais a zero, exceto por aquele que corresponde ao caractere que está sendo representado. Poderíamos, por exemplo, representar um alfabeto de três letras usando:


$$
A =
\begin{bmatrix}
    1 \\
    0 \\
    0
\end{bmatrix}
\hspace{0.5in}

B =
\begin{bmatrix}
    0 \\
    1 \\
    0
\end{bmatrix}
\hspace{0.5in}
C =
\begin{bmatrix}
    0 \\
    0 \\
    1
\end{bmatrix}
$$

Então, uma mensagem pode ser representada como uma matriz $M \in \mathbb{R}^{N \times T}$, onde $N$ é o número de caracteres possíveis no alfabeto e $T$ é o número de caracteres na mensagem. A mensagem "AABBCC" seria então representada como:

$$
M = 
\begin{bmatrix}
    1 &  1 & 0 & 0 & 0 & 0 \\
    0 &  0 & 1 & 1 & 0 & 0 \\
    0 &  0 & 0 & 0 & 1 & 1 
\end{bmatrix}
$$

## Fazendo uma cifra usando uma multiplicação matricial
É claro que, se multiplicamos a matriz $M$ por uma matriz identidade $I$, encontramos a própria matriz $M$:

$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    1 &  1 & 0 & 0 & 0 & 0 \\
    0 &  0 & 1 & 1 & 0 & 0 \\
    0 &  0 & 0 & 0 & 1 & 1 
\end{bmatrix}
= 
\begin{bmatrix}
    1 &  1 & 0 & 0 & 0 & 0 \\
    0 &  0 & 1 & 1 & 0 & 0 \\
    0 &  0 & 0 & 0 & 1 & 1 
\end{bmatrix}
$$

Porém, veja o que acontece quando permutamos as linhas da matriz $I$ (que, claro, deixa de ser uma matriz identidade e passa a ser uma matriz de permutação $P$):

$$
\begin{bmatrix}
0 & 0 & 1 \\
1 & 0 & 0 \\
0 & 1 & 0 
\end{bmatrix}
\begin{bmatrix}
    1 &  1 & 0 & 0 & 0 & 0 \\
    0 &  0 & 1 & 1 & 0 & 0 \\
    0 &  0 & 0 & 0 & 1 & 1 
\end{bmatrix}
= 
\begin{bmatrix}
    0 &  0 & 0 & 0 & 1 & 1 \\
    1 &  1 & 0 & 0 & 0 & 0 \\
    0 &  0 & 1 & 1 & 0 & 0 
\end{bmatrix}
$$

Isso nos dá uma maneira bastante compacta de encontrar mensagens cifradas, e também um processo rápido para voltar à mensagem original:

$$
\begin{aligned}
P M & = M_c \\
P^{-1} P M & = P^{-1} M_c \\
I M & = P^{-1} M_c \\
M & = P^{-1} M_c
\end{aligned}
$$

## A criptografia Enigma

Um problema da criptografia por substituição é que é relativamente fácil encontrar as correspondências entre letras buscando pela frequência em que elas aparecem e pelas suas posições relativas em cadeias. Pensando nisso, a máquina de criptografia Enigma usa duas matrizes de permutação, que chamaremos de $P$ e $R$.

A mensagem, inicialmente, é codificada como one-hot encoding, gerando a matriz $M$. Então, a *primeira letra* codificada é alterada usando a matriz $P$. Daí, a matriz $P$ é modificada pela permutação da matriz $R$, gerando $P'$ (ou: $P'=RP$). A *segunda letra* de $M$ é modificada usando $P'$. O processo, então, é repetido para cada uma das letras.

Veja que interessante: como "permutamos a permutação", uma sequência de letras iguais, por exemplo, nunca será mapeada para uma outra sequência de letras iguais. Isso impede que façamos a análise de frequências de caracteres para encontrar o processo inverso.

## Projeto (e questões a pensar)

Faça um programa capaz de:

1. Criar uma instância de uma máquina enigma, com matrizes de permutação inicializadas aleatoriamente.
2. Receber um texto escrito como entrada e criptografá-lo usando a criptografia enigma.
3. Receber um texto criptografado como entrada e de-criptografá-lo usando a criptografia enigma.

Para fazer essa atividade, escreva explicitamente a formulação matricial do processo de criptografia e deduza como devemos fazer o processo inverso (dica: use matrizes inversas!). Ao fim da atividade, você deve ser capaz de demonstrar como o sistema funciona, e deve ser capaz de diferenciar a criptografia Enigma da simples cifra por substituição.
