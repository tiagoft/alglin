# Projeto

Neste projeto, vamos usar classificadores para identificar *quais são os fatores de risco para o acidente vascular cerebral (AVC)*. Um AVC (*stroke*) é um dano cerebral causado pela interrupção de seu fluxo sanguíneo. Ter um AVC é um problema sério porque pode levar a sequelas, então é melhor preveni-lo do que tentar lidar com suas consequências.

Temos à nossa disposição um conjunto de dados para [predição de AVCs](https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset). O que faremos é:

1. Treinar um classificador para predizer se houve ou não houve AVCs
1. Verificar a acurácia do classificador
1. Identificar quais são os fatores que mais provavelmente estão ligados a ter AVCs

## Teoria

### Separando linhas de dados em treino e teste

O que faremos será avaliar um classificador. Lembre-se que para fazer o classificador tivemos que usar uma base de dados pré-classificada. Porém, o que gostaríamos de saber é se, ao ser colocado em produção, o classificador terá um bom desempenho.

Para isso, vamos partir de uma premissa (vou chamar de *premissa número 1* mas esse não é um nome oficial) que é muito importante: a de que nossa base de dados é composta de elementos amostrados aleatoriamente do conjunto total de dados. Nessas condições, a distribuição dos dados na nossa base de dados é a mesma distribuição dos dados que encontraremos no mundo real.

Claro que gostaríamos de saber como nosso classificador se comporta no mundo real, e não na amostra dele que compõe nossa base de dados! Então, precisamos ao menos de ter alguns dados que seguem a mesma distribuição dos dados do mundo real, e que serão usados nas mesmas condições que os dados do mundo real.

Por isso, dividimos nosso conjunto de dados em dois conjuntos: treino e teste. O conjunto de treino é o que será usado para treinar (`fit`) os nossos classificadores. O conjunto de teste será usado para testar (`score`) os classificadores. O conjunto de teste existe para simular uma situação de produção (como se o classificador estivesse operando), então ele não pode ser usado em hipótese alguma para nenhum tipo de ajuste de parâmetros. Ao mesmo tempo, o conjunto de treino é aquele que foi usado para "ensinar" rótulos corretos aos classificadores, então o desempenho dos classificadores no conjunto de treino não é representativo de seu desempenho em produção.

Para dividir os conjuntos de treino e teste, você pode usar a função `train_test_split` do scikit-learn:

    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.5)

### Analisando os dados

Antes de começar qualquer coisa, vamos (como sempre) olhar para os dados que temos. Na nossa tabela, temos uma coluna com a identificação do paciente - essa é uma ID única, anônima, que permite referenciar ao paciente. Também, temos várias colunas com características do paciente: idade, sexo, se fuma, etc. Por fim, temos uma coluna com o *outcome*, que é a coluna `stroke`. Para usar corretamente os classificadores do scikit-learn, você deve separar suas tabelas entre as que têm dados de "entrada" (as features) das que têm dados de "saída" (os *outcomes*).

Outra coisa importante é que os dados deste dataset podem ser categóricos, e nossos sistemas não lidam bem com eles. Por isso, precisamos convertê-los para dados numéricos, por exemplo usando one-hot encoding. Pandas implementa a conversão para one-hot encoding usando `pd.get_dummies(df)`. Um exemplo de seu uso é o seguinte:
import pandas as pd

    df = pd.DataFrame()
    df['coluna_de_teste'] = ['categoria_1', 'categoria_2', 'categoria_3', 'categoria_1']
    df['coluna_que_fica_inalterada_porque_ja_era_numerica'] = [3, 2, 1, 2]
    df.head()
    df_ = pd.get_dummies(df)
    df_.head()
    
### Avaliando o classificador

Quando o classificador atua sobre dados, encontramos, para cada entrada, uma saída predita, ou:

$$
\hat{y} = f(X),
$$
onde $f(.)$ é a função que implementa o classificador, $X$ são os dados de entrada e $\hat{y}$ são os dados de saída.

Neste momento, o que gostaríamos é de saber quantas vezes o classificador *acertou* dentre todas aquelas, isto é, precisamos:

1. Comparar cada valor de $\hat{y}$ a cada valor correspondente de $y$ (a saída "gabarito"),
1. Dividir o número de vezes que a saída é igual pelo número total de valores

O nome desta medida é acurácia (*accuracy*). Se você quiser, pode usar o [accuracy implementado pelo scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html) para fazer essa avaliação.

#### Hipótese nula

A acurácia é uma medida válida de desempenho do classificador, mas é importante sempre colocá-la em contraste com as características do próprio conjunto de dados que foram utilizados. Um caso bastante patológico é o de termos um dataset no qual, por exemplo, 70% dos exemplos são da classe A e 30% são da classe B. Nesse caso, se nosso classificador sempre dizer que qualquer elemento é da classe A, ele terá acurácia de 70%, mas essa acurácia não significa um bom desempenho. Por isso, sempre que usamos a acurácia como medida de desempenho, usamos como base para comparação um classificador que sempre "chuta" a classe mais frequente no dataset.

### Referências bibliográficas

Na nossa análise de dados, podemos encontrar vários elementos ligados ao fenômeno que estamos analisando. Por exemplo, podemos descobrir que o fato de alguém preferir suco de laranja ao suco de maracujá é um fator que pode determinar o AVC. O problema disso é que não podemos saber, só com base nisso, se essa ligação é uma característica dos nossos dados ou se é uma característica geral do fenômeno. Por isso, sempre buscamos saber mais e verificar se há outros trabalhos que também apontam as mesmas ligações que encontramos. Para este tipo de análise, é importante encontrar trabalhos que foram publicados em veículos com revisão por pares (conferências e revistas são válidos, mas não materiais auto-publicados como blogs, vídeos ou *pre-prints*). Em especial, neste trabalho, vamos nos restringir apenas a materiais que estão disponíveis gratuitamente (open access), isto é, não utilizaremos materiais que precisam do pagamento de assinatura.


## Descrição do projeto

Neste projeto, o grupo deverá projetar e avaliar o classificador linear e o classificador por árvore de decisão no problema de predizer AVCs à partir da base de dados que está disponível no Kaggle. Também, deverá avaliar quais foram os fatores de risco identificados por cada um dos classificadores e, após, deverá verificar se esses fatores de risco identificados pelos classificadores já foram identificados anteriormente por algum estudo na área.

Anotações importantes:

1. O grupo deve enviar um link para o repositório GitHub onde está localizado o projeto.
2. No diretório principal do repositório, deve haver um *notebook* comentado `demo.ipynb`, que, quando executado, executa todos os testes que geram os resultados alcançados.

**ENTREGAS**
* Link para o repositório onde está o projeto.
* No `README.md` do repositório, deve haver um resumo, com até 400 palavras, explicando qual foi a metodologia usada, quais foram os principais resultados encontrados, e o que o grupo descobriu sobre AVCs à partir da análise dos dados.
* O `demo.ipynb` deve estar comentado, célula a célula, em Markdown, explicando em linguagem natural a importância de cada passo e comentanto os resultados da execução de cada célula.
* O `demo.ipynb` deve ser colocado no repositório já executado, isto é, com todos os dados já gerados, de forma que seja possível visualizá-lo inteiramente sem executar as células.


**RUBRICA**

O projeto será avaliado usando três rubricas. [Duas delas dizem respeito à redação e ao código apresentado](rubricas.ipynb), e são compartilhados por todos os projetos. Em especial, a rubrica de *argumentação* será aplicada ao conjundo do `README.md` e das células em markdown do `demo.ipynb`. Este projeto tem ainda requisitos específicos que estão na rubrica abaixo. Os níveis são cumulativos, isto é, para passar de um nível, *todos* os requisitos dele devem ser cumpridos. A nota final é baseada na rubrica em que o trabalho obtiver o *menor* desempenho. As rubricas foram inspiradas nos níveis da [Taxonomia de Bloom](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/).

| Nível | Descrição | [Tax. de Bloom](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/) |
| --- | --- | --- |
| F | Não entregue, entregue sem completar o `README.md`, entregue sem o `demo.ipynb`, entregue sem resolver o problema que foi proposto.  | Não fez |
| E | Entregue, mas comete erros metodológicos graves: deixar de separar treino e teste, deixar de escolher as features relevantes, deixar de usar as variáveis categóricas em one-hot encoding | Entender |
| D | O projeto tem erros na avaliação de desempenho (accuracy) ou deixa de comparar o accuracy obtido com o classificador da hipótese nula. | Compreender |
| C | O projeto avalia corretamente o accuracy, mas deixa de verificar quais são as features mais relevantes para a classificação | Compreender |
| B | O método foi aplicado corretamente e o grupo encontrou quais são fatores de risco para AVC à partir da analise de seu dataset com uma metodologia consistente | Aplicar |
| A | Além da aplicação correta do método, o grupo encontrou uma ou mais referências bibliográficas (citadas no `README.md`) que corroboram com suas descobertas, ou, alternativamente, encontrou referências que encontraram o oposto do que foi descoberto pelo grupo | Analisar |

