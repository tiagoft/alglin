

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

$
\begin{aligned}
P M & = M_c \\
P^{-1} P M & = P^{-1} M_c \\
I M & = P^{-1} M_c \\
M & = P^{-1} M_c
\end{aligned}
$


## Descrição do projeto
Neste projeto, faremos uma biblioteca Python para criptografia usando Enigma

A biblioteca deve conter:
* Uma função `para_one_hot(msg : str)` para codificar mensagens como uma matriz usando one-hot encoding
* Uma função `para_string(M : np.array)` para converter mensagens da representação one-hot encoding para uma string legível
* Uma função `cifrar(msg : str, P : np.array)` que aplica uma cifra simples em uma mensagem recebida como entrada e retorna a mensagem cifrada. `P` é a matriz de permutação que realiza a cifra.
* Uma função `de_cifrar(msg : str, P : np.array)` que recupera uma mensagem cifrada, recebida como entrada, e retorna a mensagem original. `P` é a matriz de permutação que realiza a cifra.
* Uma função `enigma(msg : str, P : np.array, E : np.array)` que faz a cifra enigma na mensagem de entrada usando o cifrador `P` e o cifrador auxiliar `E`, ambos representados como matrizes de permutação.
* Uma função `de_enigma(msg : str, P : np.array, E : np.array)` que recupera uma mensagem cifrada como enigma assumindo que ela foi cifrada com o usando o cifrador `P` e o cifrador auxiliar `E`, ambos representados como matrizes de permutação.

Anotações importantes:

1. O grupo deve enviar um link para o repositório GitHub onde está localizada a biblioteca.
2. No diretório principal do repositório, deve haver um programa `demo.py`, que, quando executado, demonstra o funcionamento de cada uma das funções da biblioteca


**ENTREGAS**
* Link para o repositório onde está a biblioteca.
* No `README.md` do repositório, deve haver uma discussão sobre que equações foram implementadas para realizar a criptografia e a de-criptografia com Enigma.
* Inclua também, no próprio `README.md`, instruções sobre como rodar o `demo.py` e como usar a biblioteca.
* Também, inclua instruções sobre como executar procedimentos de teste rápidos. Serão testados: mensagens normais, mensagens com caracteres que não fazem parte do alfabeto, mensagens vazias.

**RUBRICA**

O projeto será avaliado usando a rubrica abaixo. Os níveis são cumulativos, isto é, para passar de um nível, *todos* os requisitos dele devem ser cumpridos. As rubricas foram inspiradas nos níveis da [Taxonomia de Bloom](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/).

| Nível | Descrição | [Tax. de Bloom](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/) |
| --- | --- | --- |
| F | Não entregue, entregue sem completar o `README.md`, ou entregue sem implementar a criptografia Enigma | Não fez |
| E | Entregue, mas o `README.md` não indica como instalar ou rodar o programa. | Entender (-) |
| D | Roda com alguns travamentos ou erros ou o `README.md` não descreve o modelo matemático que foi aplicado. | Entender |
| C | Funciona sem travar e o `README.md` está completo, mas falha nos casos de teste descritos na entrega. | Compreender |
| B | A biblioteca funciona bem mas o código está muito confuso e sem comentários. | Aplicar |
| A | A biblioteca obedece a todos os requisitos e o código tem uma correspondência imediata ao modelo matemático descrito no `README.md` | Analisar |
| A+ | A biblioteca funciona perfeitamente e, em adição aos requisitos pedidos, tem um programa que permite que o algoritmo seja executado como uma API REST. | Analisar |
| A++ | A biblioteca funciona perfeitamente e, em adição aos requisitos anteriores, pode ser instalada usando `pip install .`. | Analisar |