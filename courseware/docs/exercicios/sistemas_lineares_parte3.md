# Exercícios: Sistemas Lineares (Parte 3)

### Questão 1

Ana, Bárbara e Carolina são três amigas que um dia decidiram ir à praia catar conchinhas. Ana voltou com 100 conchinas, Bárbara voltou com 150, e Carolina voltou com 200, mas repararam que cada uma tinha conchinhas de uma cor diferente. Para nunca se enjoarem da conchinhas, a cada ano, elas se encontram novamente e oferecem conchinhas umas às outras. Ana dá metade de suas conchinhas para Bárbara. Bárbara dá um quarto de suas conchinhas para Carolina e um quarto para Ana. Carolina dá um terço de suas conchinhas para Ana. Assim, a cada vez que se encontram, elas misturam suas conchinhas e nunca se enjoam de seus presentes.

**a)** Escreva um sistema de equações que permita evidenciar quantas conchinhas cada uma das amigas terá ao fim do próximo encontro, sabendo a quantidade de conchinhas que cada uma tem atualmente.

**b)** Escreva esse sistema de equações na forma matricial.

**c)** Escreva um sistema de equações que permita saber quantas conchinhas cada uma das amigas terá daqui a dois encontros, sabendo quantas conchinhas cada um tem hoje.

**d)** Escreva um sistema de equações que permita saber quantas conchinhas cada uma das amigas tem hoje, sabendo a quantidade de conchinhas que ela terá no fim do próximo encontro.

### Questão 2

Quando um sinal de áudio (ou: um som do ambiente) é digitalizado, ele é representado por uma sequência de números. Esses números são chamados de amostras, e podem ser colocados em uma matriz-coluna $x$ com um número de linhas igual ao número de amostras que temos (vamos chamar essa quantidade de amostras de $N$). Daí, podemos manipular dessa matriz. Por exemplo, ao multiplicar as amostras todas por um escalar $g$, alteramos a intensidade (ou: o volume) relacionado ao som que gravamos.

Quando temos dois sons diferentes (por exemplo: $x_1$ e $x_2$, cada um deles $N \times 1$) podemos colocá-los lado a lado, formando uma matriz $N \times 2$, como em:

$$
\begin{bmatrix}
x_1 & x_2
\end{bmatrix}
$$

Representar dois sons diferentes é útil quando queremos, por exemplo, tocar sons em estéreo. Nesse caso, temos um som que vai para o canal da esquerda, e outro que vai para o canal da direita. O truque do estéreo é alterar as intensidades de cada som em cada canal, criando uma ilusão de imersão espacial.

Suponha que temos duas gravações, $x_1$ e $x_2$, correspondentes respectivamente ao violão e à voz de uma canção. Queremos que a voz apareça igualmente nos dois canais, mas que o violão apareça somente no canal da direita. Nesse caso:

**a)** Quais são as equações que permitem calcular os sons $x_e$ e $x_d$, que são os sons correspondentes aos canais da esquerda e da direita, respectivamente?

**b)** Escreva essas equações em formato matricial.

**c)** Proponha um procedimento para recuperar $x_1$ e $x_2$ à partir de $x_e$ e $x_d$ usando as técnicas que estudamos até o momento.
