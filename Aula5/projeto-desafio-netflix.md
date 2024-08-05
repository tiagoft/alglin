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

Neste projeto, o grupo deverá fazer um sistema preditor de nota de filmes por usuário, que funciona nas condições que foram citadas no enunciado (temos conhecimento de todo o dataset, exceto do par filme-usuário específico). O sistema projetado deve ser avaliado usando um histograma dos erros ao longo de várias estimativas. O número de estimações deve ser, no mínimo, mil. O projeto deve ser colocado em um repositório GitHub específico.

Anotações importantes:

1. O grupo deve enviar um link para o repositório GitHub onde está localizada a biblioteca.
2. No diretório principal do repositório, deve haver um programa `demo.py`, que, quando executado, executa todos os testes que geram o histograma de resultados.
3. Como o objetivo do projeto é exatamente implementar o sistema de recomendação, não é permitido usar bibliotecas que fazem recomendações. Toda a parte de algoritmos e álgebra linear deve ser feita pelo próprio grupo usando Numpy ou Scipy.

**ENTREGAS**
* Link para o repositório onde está a biblioteca.
* No `README.md` do repositório, deve haver uma discussão sobre como o sistema funciona. Essa discussão deve corresponder ao que foi feito no código.
* Inclua também, no próprio `README.md`, instruções sobre como rodar o `demo.py` e como usar suas funcionalidades.
* O `README.md` também deve ter uma discussão dos resultados encontrados, incluindo o histograma dos erros e uma conclusão, baseada em dados, sobre se o grupo acredita que o sistema proposto poderia ser usado em produção.



**RUBRICA**

O projeto será avaliado usando três rubricas. Duas delas dizem respeito à redação e ao código apresentado, e são compartilhadas por todos os projetos. Este projeto tem ainda requisitos específicos que estão na rubrica abaixo. Os níveis são cumulativos, isto é, para passar de um nível, *todos* os requisitos dele devem ser cumpridos. A nota final é baseada na rubrica em que o trabalho obtiver o *menor* desempenho. As rubricas foram inspiradas nos níveis da [Taxonomia de Bloom](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/).


## Específica

| Nível | Descrição | [Tax. de Bloom](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/) |
| --- | --- | --- |
| F | Não entregue, entregue sem completar o `README.md`, entregue sem o `demo.py`, entregue sem resolver o problema que foi proposto, ou usando bibliotecas que resolvem o problema central do enunciado.  | Não fez |
| D | Entregue, mas o `README.md` não indica como instalar ou rodar o programa, ou o programa usa a matriz $A$ (sem ruído) como entrada ao invés da matriz $B$. | Entender |
| C | Devido a um erro de implementação ou de teoria, o sistema não retorna um valor coerente para o elemento faltante, isto é, simplesmente retorna um valor qualquer, aleatório, ou calculado sem base teórica adequada. | Compreender |
| B | O método foi aplicado corretamente. | Aplicar |
| A | Além da aplicação correta do método, o grupo realizou um teste de stress (devidamente documentado no README.md), verificando como o histograma de erro se comporta se mais dados da matriz de entrada forem "estragados" ao mesmo tempo. | Analisar |

## Argumentação

| Nível | Descrição |
| --- | --- |
| F | A argumentação apresentada não é clara o suficiente para permitir a reprodução do código computacional a partir dela por não existir ou por não citar ou descrever corretamente os elementos corretos que aparecem no código, ou é uma argumentação que se baseia unicamente na reprodução do código computacional, ou é uma argumentação factualmente incorreta ou que justifica um código factualmente incorreto. |
| E | A argumentação apresentada não é clara o suficiente para permitir a reprodução do código computacional a partir dela por não existir ou por não explicitar a relevância dos elementos que aparecem no código, ou é uma argumentação que se baseia unicamente em comentar o código computacional. |
| D | A argumentação apresentada não é clara o suficiente para permitir a reprodução do código computacional a partir dela por não apresentar uma articulação entre os elementos matemáticos semelhante à que aparece no código ou omitir passagens que não são triviais mas são necessárias para a compreensão da solução. |
| C | A argumentação apresentada permite a reprodução do código computacional, embora haja pequenos erros pontuais em aspectos que não são relevantes para a solução (exemplo: dizer que o algoritmo aplicado foi inventado em 1963 quando essa data não é correta). |
| B | A argumentação apresentada permite a reprodução do código computacional mas cita fatos que, embora corretos, são irrelevantes para o funcionamento (exemplo: dizer que o algoritmo aplicado foi inventado em 1963 quando, de fato, foi, embora essa data seja irrelevante para o código computacional).
| A | A argumentação está correta, completa e objetiva. As justificativas matemáticas são apresentadas de forma clara e organizada, sem erros ou equívocos, e correspondem imediatamente ao código apresentado. A solução apresentada é bem justificada e explica de forma completa o raciocínio por trás da resposta.


## Código computacional

| Rubrica | Descrição |
| --- | --- |
| F | O programa não funciona, não roda, ou resolve um problema diferente do proposto. |
| E | O programa apresenta problemas de implementação, como erros de lógica, que levam a resultados incorretos ou incompletos. |
| D | O programa apresenta uma solução algoritmica que não usa sua correspondência matemática ou não usa pacotes adequados em situações que esse uso seria muito simples (por exemplo: implementando uma multiplicação matricial com laços *for* aninhados, ao invés de usar a multiplicação matricial do Numpy). |
| C | O programa implementa corretamente uma solução matemáticamente correta e usa pacotes nas situações comuns, mas tem problemas de clareza como variáveis e funções com nomes que não correspondem ao seu conteudo/funcionalidade (ex: `var_1` ou `a1, a2, a3, a4`), ou deixar de usar ou comentar de forma lacônica o uso de construções da linguagem muito diferentes das que vimos em aula (ex: ao usar funções que nunca foram usadas em aula, ou pacotes que nunca foram usados, precisamos de um comentário como "a função X recebe A e retorna B, e por isso ela faz o papel da transformação T que foi discutida na argumentação"). |
| B | O programa implementa corretamente uma solução matemáticamente correta, com nomes de funções e variáveis auto-explicativos, está corretamente comentada, mas deixou de apagar instruções "print" que foram usadas para debug ou deixou de comentar corretamente o código ou deixou elementos que não deveriam estar em produção como nome da equipe, frases de efeito, ou outras questões de organização. |
| A | O programa implementa uma solução matemática correta e completa, com nomes de funções e variáveis que são auto-explicativos, e, sempre que possível, coincidem com os nomes usados na argumentação, e comentários detalhados que ligam o algoritmo mostrado a sua argumentação. |