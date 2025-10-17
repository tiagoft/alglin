# Atividade: PageRank

Nesta atividade, colocaremos o PageRank para funcionar na prática.

Inicialmente, use bibliotecas como `requests`, `beautifulsoup`, `selenium`, `playwright` ou outra de sua preferência para fazer um webcrawler. Um webcrawler é um robô que navega em páginas web e, relizando uma busca em largura, encontra o grafo que representa os links de uma página a outra. Guarde os links.

Rode seu webcrawler em uma página real (por exemplo, inicie sua busca pela página inicial da faculdade). Navegue por algumas dezenas ou centenas de páginas.

Após, monte a matriz $A$ de links que permite calcular as probabilidades relacionadas ao surfista aleatório (se precisar, volte no material e relembre das equações).

Calcule os autovalores e autovetores dessa matriz $A$.

Após, calcule as probabilidades do surfista aleatório usando o método das iterações repetidas (ou seja: calculando $A^N$).

À partir disso, encontre:

(a) Qual é o PageRank de cada uma das páginas que seu navegador passou?

(b) Qual método é mais *rápido* para calcular o PageRank?

