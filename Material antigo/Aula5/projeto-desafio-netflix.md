# Projeto: O Desafio NetFlix
Outros datasets: https://github.com/caserec/Datasets-for-Recommender-Systems

Um problema que existe hoje em dia com as grandes empresas de streaming (Netflix, Spotify, etc.) é que elas têm um acervo de conteúdo muito grande, e os usuários tendem a gostar, cada um, de uma pequena parte desse acervo. Então, como poderíamos escolher quais filmes vão aparecer tela inicial do seu streaming?

O objetivo deste projeto é fazer um sistema que toma essa decisão.

## Quais dados temos à disposição?

Neste projeto, trabalharemos com o [The Movies Dataset](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset), que tem, entre outras coisas, a avaliação de usuários em relação a filmes. Essa avaliação está na tabela `ratings.csv` - mas, opcionalmente, pode ser usada a `ratings_small.csv`, que tem somente um subconjunto desses dados.

    import pandas as pd
    df = pd.read_csv('ratings_small.csv')
    df.head(2)
    
Veja que esse dataframe pode facilmente ser transformado numa matriz $A$ que tem uma linha para cada usuário (identificado por `userId`) e uma coluna para cada filme (identificado por `movieId`). O conteúdo da matriz é o *rating* que o usuário atribuiu ao filme. Podemos ignorar a coluna `timestamp`.

## Desafio: eu vou gostar deste filme?

O que gostaríamos de saber é qual nota um usuário deveria atribuir a um filme que ele ainda não assistiu. Para isso, o procedimento será o seguinte.

1. Vamos escolher aleatoriamente um dos elementos da matriz $A$ e atribuir a ele um valor aleatório, gerando a matriz $B$, isto é, a matriz $B$ é igual à matriz $A$ com um dos elementos "estragado".
1. O sistema receberá como entrada a matriz $B$ e a posição $i,j$ do valor aleatório. Neste momento, ele não teve acesso à matriz $A$, e, portanto, não tem como saber qual é o valor "real".
1. O sistema deverá retornar o valor real que estava na matriz $A$.
1. Esse procedimento deverá ser repetido várias vezes, de forma a gerar um histograma dos erros cometidos.

## Como o sistema funciona?

A ideia do sistema de recomendação é que existem "perfis" típicos de usuários. Os perfis, para este problema, são vetores que mostram que notas são tipicamente atribuídas para cada filme por usuários daquele perfil. Por exemplo, talvez tenhamos dois perfis e três filmes, e nesse caso poderíamos ter os perfis:

* $p_0 = [2, 5, 2]$, isto é, o perfil $0$ é de uma pessoa que gosta muito do filme $f_1$, e
* $p_1 = [5, 0, 4]$, isto é, o perfil $1$ é de uma pessoa que gosta dos filmes $f_0$ e $f_2$. 

Porém, sabemos que usuários reais raramente se comportam estritamente como um perfil. As notas realmente atribuídas por um usuário aos filmes, então, são modeladas como combinações lineares dos perfis. Por exemplo, podemos ter usuários:

* $u_0 = 0.1 p_0 + 0.9 p_1$, para um usuário muito próximo de $p_1$ mas distante de $p_0$,
* $u_1 = 0.1 p_0 + 0.1 p_1$, para um usuário distante tanto de $p_0$ quanto de $p_1$,

e assim por diante.

Então, o que precisamos é de uma maneira de mapear usuários para perfis, e então perfis para filmes. Precisamos então *decompor* nossa matriz $A$ de usuários $\times$ filmes em componentes:

$
A = X Y Z,
$

onde:
* $A$ tem uma linha por usuário e uma coluna por filme,
* $X$ tem uma linha por usuário e uma coluna por perfil,
* $Y$ é quadrada e mapeia perfis para perfis,
* $Z$ tem uma linha por perfil e uma coluna por filme.

Isso se parece bastante com algo que já fizemos nesta aula!

Em nosso teste, ao aleatorizarmos um elemento da matriz $A$, estamos inserindo ruído. Como poderíamos remover esse ruído?

## Descrição do projeto

Neste projeto, o grupo deverá fazer um sistema preditor de nota de filmes por usuário, que funciona nas condições que foram citadas no enunciado (temos conhecimento de todo o dataset, exceto do par filme-usuário específico). O sistema projetado deve ser avaliado usando um histograma dos erros ao longo de várias estimativas. O número de estimações deve ser, no mínimo, mil. Envie 

**ENTREGAS**

1. O grupo deve enviar um um notebook (envio direto ou link para repositório) com o código implementado e um PDF ou vídeo com o relatório.
2. Como o objetivo do projeto é exatamente implementar o sistema de recomendação, não é permitido usar bibliotecas que fazem recomendações. Toda a parte de algoritmos e álgebra linear deve ser feita pelo próprio grupo usando Numpy ou Scipy.




**RUBRICA**

| Nível | Descrição |
| --- | --- |
| F | Não tem explicação da matemática usada ou o código não traz evidência de que o algoritmo implementado funciona | 
| D | Todos os requisitos de F foram contemplados mas só alguns de C foram contemplados | 
| C | O método foi executado corretamente. A explicação segue o enunciado, sem apresentar ideias adicionais |
| B | Todos os requisitos de C foram contemplados mas só alguns de A foram contemplados |
| A | Dois requisitos entre: (1) Traz ideias novas em relação ao enunciado (as ideias devem ser destacadas claramente), (2) Relaciona o resultado com outras fontes (artigos científicos), mostrando como a técnica poderia ser aplicada em outros contextos, (3) Propôs, implementou e comparou os resultados com uma outra solução. |


