# Busca em Bases de Dados

Nesta aula, utilizaremos os conceitos de vetores para implementar um sistema de busca em bases de dados.

Você vai perceber que nesta aula específica não há "certo" ou "errado" -- o que há é um processo de aprendizado. Sendo o processo tão particular de cada um, é preciso que cada um seja responsável por si. O que gostaríamos nessa atividade é praticar o seguinte fluxo de pensamento:

<div class="mermaid">

flowchart TD
    A[Entender a situação proposta: qual é o problema, e como sabemos que ele foi resolvido, isto é, quais são os critérios de aceitação] --> B[Ligar a situação a um modelo matemático e suas variáveis] --> C[Resolver o modelo matemático, possivelmente implementando um programa para isso] --> D[Identificar, dentro do modelo resolvido e/ou dos resultados mostrados pelo programa, como a situação inicial foi resolvida]

</div>

Por esse motivo, essa atividade não tem uma "rubrica" ou um "gabarito". Existem muitas soluções para cada um dos exercícios propostos. Porém, é importante que, para cada um deles, você explicitamente passe por todas as etapas do fluxo.

A quarta etapa é especialmente importante: como este é um trabalho aberto, isto é, que envolve o pensamento *divergente*, é esperado do aluno (e dos grupos de alunos) que o entendimento de cada etapa, e do que significa ter "resolvido" cada etapa, seja discutido pelo grupo de trabalho. Isso significa que fazer essa atividade pensando em "cumprir rapidamente etapas para entregar um resultado que será avaliado" não é produtivo. Ao invés disso, trata-se um trabalho importante pelo *vivenciar o processo*, e não pela entrega em si.

Dito isso, é claro que GPTs e IAs atuais resolvem todas as atividades. Não use GPTs e IAs para fazer o trabalho criativo para você neste contexto - até porque isso não faz nenhum sentido porque a atividade não recebe nota. Use essa oportunidade para identificar onde estão as *suas* dificuldades, e, ao superá-las, para exercitar o senso estético/poético de apreciar os resultados do programa que for fazendo.


## Exercício 1: lembrar-se da teoria de alinhamento de vetores

A busca por conteúdo em bases de dados modernas usa um conceito chamado *embedding*. Um embedding é uma representação vetorial de um documento não-estruturado, isto é, é um vetor $x_i \in \mathbb{R}^n$ que é único para cada ítem $i$ em uma coleção. Uma característica de embeddings modernos é que, tipicamente, documentos semelhantes são mais alinhados, isto é, $x_i$ e $x_j$ são semelhantes se o cosseno do ângulo entre eles é grande.

Faça um desenho mostrando uma situação em $\mathbb{R}^2$ em que há oito embeddings diferentes. Escolha um deles como referência, e indique quais (dois ou três), dentre os restantes, são mais alinhados a ele.

## Exercício 2: modelar a semelhança entre vetores

Suponha que temos dois vetores, $x$ e $y$ ($x, y \in \mathbb{R}^n$) . Escreva um processo matemático (isto é, uma equação), usando os conhecimentos que já temos, capaz de encontrar o cosseno do ângulo entre $x$ e $y$.

## Exercício 3: implementar a busca por conteúdo

Suponha que temos uma lista em Python com $m$ vetores $x_i, i \in [1..m]$, representando embeddings de documentos em uma base de dados. 

(a) Usando a equação que você definiu anteriormente, defina a função `alinhamento` com o cabeçalho abaixo, que calcula o alinhamento entre os vetores da sua base e um outro vetor, $q$, usado como referência;

```python
def alinhamento(x : list[np.ndarray], 
                q : np.ndarray,
                ) -> list[float]:
    pass
```

(b) Mostre o funcionamento da sua função usando vetores que você deve definir manualmente. Se precisar, itere novamente no exercício anterior.

## Exercício 4: calcular embeddings

Para calcular embeddings de *frases* ou de passagens curtas, tipicamente usamos transformers de sequência. Talvez você tenha que instalar a biblioteca `sentence_transformers` com: `pip install sentence_transformers`. Para usá-la, o exemplo típico é:

```python
from sentence_transformers import SentenceTransformer

# Carregar o modelo na memória
modelo = SentenceTransformer("all-MiniLM-L6-v2")

# Sentenças para codificar
dataset = [
    "I am going to class.",
    "I am going to school.",
    "I like turtles.",
]

query = ["I like fishes"]

# Gerar embeddings: x e q contém embeddings!
x = modelo.encode(dataset)
q = modelo.encode(query)
```

Agora, use a função que você definiu no exercício anterior para verificar qual é a frase do dataset que mais se assemelha à query.

## Exercício 5: gerar um banco de frases

Repita o exercício 4, mas agora usando um banco de frases que você criou. O objetivo deste exercício é mostrar evidência de que o sistema realmente está funcionando como deveria.

## Exercício 6: avaliar LLMs

Hoje, existem LLMs, e eles são muito usados. Porém, é um fato que o conteúdo gerado por IA é facilmente indentificável porque tem traços de repetições de clichês e chavões. Vamos fazer um experimento para detectar se dois LLMs diferentes geram conteúdos que são repetições de si mesmos. Para isso:

1. Escolha dois LLMs (ChatGPT, Grok, Gemini...).
1. Para cada um deles, use o prompt para gerar 20 frases dentro do tema à sua escolha (dica: peça para já gerar as frases na forma de uma lista de strings em Python, por exemplo: "gere 20 frases que poderiam ser ditas por um supervilão de um filme pastelão. Formate as frases como uma lista de strings de Python"). Temos então dois conjuntos de frases.
1. Após, calcule a semelhança entre cada frase gerada e todas as outras que foram geradas. Queremos aqui duas quantidades: a semelhança média entre uma frase e as outras frases geradas pelo mesmo LLM, e a semelhança média entre uma frase e as frases geradas pelo outro LLM.
1. Os números que você encontrou permitem dizer que cada LLM *tende* a gerar frases com um determinado estilo, e que esse estilo é distinto para cada LLM?

