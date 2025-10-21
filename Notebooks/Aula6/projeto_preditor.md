# Projeto

Neste projeto, vamos usar a predição linear para tentar antever fenômenos relevantes. Em especial, vamos tentar antever dados financeiros (se conseguirmos, podemos fazer operações de *trade* muito mais eficientes!), ou dados metereológicos (se conseguirmos, podemos tomar ações adequadas por exemplo em termos de planejamento rural e urbano).

O roteiro a ser seguido é o seguinte:

1. Encontre dados sobre algum tipo de série temporal. Por exemplo, você pode usar dados sobre o valor do Bitcoin (ou outras criptomoedas), sobre o câmbio real-dólar, ou sobre o preço de alguma ação específica (como por exemplo PETR4) - esses dados estão disponíveis pelo [Yahoo Finance](https://pypi.org/project/yfinance/) - ou então dados metereológicos como a temperatura diária - dados disponíveis pelo site do [INMET](https://bdmep.inmet.gov.br/). Se preferir, pode usar outro tipo de dado que se organize ao longo do tempo. Nesta etapa, defina seu caso de uso, como em: "eu gostaria de prever X porque isso permite realizar a ação Y com antecedência".

1. Divida seus dados de forma que os dados até uma determinada data sejam usado para *treino*, e os dados após esta data sejam usados para *teste*. Você pode escolher a data, mas uma regra "usual" é usar 70% dos dados disponíveis para treino, e o restante para teste. Treine um preditor linear de forma que ele possa predizer o valor da série temporal em um dia qualquer com base em alguns valores passados. Em outras palavras, usando as entradas $x[n-1]$, $x[n-2]$, até $x[n-k]$, realize a predição de um valor futuro $\hat{x}[n]$. Para isso, use a mesma equação que vimos em sala: $\hat{x} = X w^T$, e use o processo de descida pelo gradiente para encontrar os valores de $w=[w_1, w_2, \cdots, w_k]$. Nesta etapa, você **deve** programar a própria descida pelo gradiente usando `autograd`, isto é, não é permitido usar bibliotecas prontas como `sklearn`, `statsmodels`, `tensorflow` ou outras que implementem o treinamento do preditor linear.

1. Faça uma figura (provavelmente um gráfico de linha) mostrando os valores que foram gerados pelo seu preditor, junto aos valores reais. Usando a figura, e os pesos $w$ encontrados, analise se o seu preditor é adequado para ajudar no caso de uso que você definiu na etapa inicial.

1. Repita o treinamento e a análise mudando a escala de tempo em que você está analisando. Ao fim desta etapa, você deve ter, no mínimo, análises para a escala de dias, de semanas, e de meses. Se preferir, pode trocar algumas das escalas de tempo por outras que façam mais sentido para seu problema (por exemplo: predições minuto-a-minuto para bitcoin, ou predições ano-a-ano para dados metereológicos). Pode também, se fizer sentido, adicionar escalas de tempo (bitcoin tem dinâmicas diferentes se for olhado minuto-a-minuto ou ano-a-ano, por exemplo) diferentes.

1. Encontre pelo menos um artigo científico que tenha usado predição linear para resolver o mesmo problema, ou algum problema muito parecido com o seu, em especial pensando no caso de uso. Compare seus resultados com os mostrados pelo artigo. Tomando por base o que está escrito no artigo e dos seus próprios conhecimentos, discuta se as evidências que você tem indicam que a predição linear é uma ferramenta viável para o caso de uso que você trouxe na primeira etapa.


**ENTREGAS**
* Link para o repositório onde está o código do projeto.
* No repositório, um arquivo PDF ou um link para um vídeo em que cada uma das etapas do projeto é mostrada, incluindo as figuras que foram geradas.

**RUBRICA**

| Conceito | Descrição |
| --- | --- |
| F (0) | Não fez, não entregou, ou usou bibliotecas prontas (exceto `autograd`!) para implementar a regressão linear.
| E (2) | Realizou e documentou a etapa 1 corretamente. |
| D (4) | Realizou e documentou a etapa 2 corretamente. |
| C (6) | Realizou e documentou a etapa 3 corretamente. |
| B (8) | Realizou e documentou a etapa 4 corretamente. |
| A (10) | Realizou e documentou a etapa 5 corretamente. |
