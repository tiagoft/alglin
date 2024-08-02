# AlgLin24-2
Álgebra Linear e Teoria da Informação - Material Didático

# Informações

* Professor: Tiago Fernandes Tavares
* Ter e Qui 09h45 ~ 13h00, intervalo entre 11h15 e 11h30.
* Atendimento: Terças 8h00 às 9h30.

# Dinâmica das aulas

* Notebooks na aula
* APS: Projetos ao final de cada módulo
* Testes após cada módulo (papel)
* Provas: AI / AF (nas datas marcadas no calendário - via computador)
* Atividades no Prairie Learn após cada aula (para casa)

# Atividades

| Atividades | Símbolo | 
| --- | --- |
| Participação: | $P$ |
| Testes escritos | $T$ |
| Atividades do Prairie Learn | $L$|
| AI | $I$ |
| AF | $F$ |
| APS | $S$ |


## Cálculo da nota final

* $T$: média aritmética das notas dos testes
* $L$: média aritmética das notas das atividades no PrairieLearn
* $P$: média aritmética das notas de participação
* $I$ e $F$: notas das respectivas provas
* $S$: média aritmética das notas das APSs
* Nota individual: $N_i = 0.1 P + 0.2 T + 0.2 L + 0.2 I + 0.3 F$
* Nota grupo: $N_g = S$
* Nota final: se $N_g>5$ e $N_i>5$, $N_f=0.6N_i + 0.4N_g$. Caso contrário, $N_f = \text{min}(N_g, N_i)$.


## Participação

Esta disciplina tem 7 módulos. Durante as aulas, seguiremos roteiros guiados usando Jupyter Notebooks. É esperado que cada alunos se empenhe em fazer as atividades propostas. Isso significa que:

* É permitido (e incentivado) discutir com colegas, mas não 

O resultado esperado é que cada aluno tenha um *notebook* preenchido ao fim de cada módulo. Esse preenchimento precisa demonstrar que o aluno participou da aula. Isso significa que:

* Precisa estar feito, mesmo que parcialmente,
* Precisa estar correto, mesmo que parcialmente,
* Não deve ser preenchido com frases alatórias só por preencher

No fim de cada módulo, o notebook, com as soluções individuais, deve ser submetido no Blackboard. A avaliação de cada notebook seguirá o seguinte critério:

* Mais de 70% dos exercícios estão feitos: "ok", nota $1$
* Menos de 70% dos exercícios estão feitos: "parcial", nota $0.5$
* Não entregue ou entregue ou entregue em branco: "não-feito", nota $0$

Note que, se o aluno faltar à aula, o que é esperado é que ele estude o que foi passado na aula de forma individual / em horário extra-sala.

## Atividades no PrairieLearn

Essas são atividades computacionais, com avaliação automática, feitas individualmente em horário pós-aula. O objetivo delas é treinar conceitos de cada aula e avaliar o aprendizado do aluno em cada etapa. Para fazer a atividade, cada um entra no PrairieLearn e faz os exercícios no prazo combinado. Ao "errar" uma resposta, o aluno recebe uma nova instância do exercício e pode tentar novamente. Há um número finito, porém grande, de tentativas possíveis antes que a nota comece a cair.

## Testes escritos

Ao final de cada módulo da disciplina, há um teste escrito. Esse teste é *individual* e *sem consulta*. Tipicamente, ele tem duas ou três questões e é realizado numa aula específica. As questões tem peso igual, e podem ser avaliadas como "correta", "parcial" ou "incorreta". As questões são baseadas em discussõe que foram feitas em aula.

Há alguns motivos por trás de existirem esses testes e deste formato:

* Embora as implementações usando álgebra linear quase sempre sejam computacionais, as discussões com outros seres humanos (equipes, livros, artigos, etc.) acontecem em formato de quadros, equações, etc.
* Há uma necessidade de fazer avaliações low-stakes com temas mais específicos, de forma a fornecer feedback rapidamente ao aluno sobre suas estratégias de estudo
* As avaliações automáticas e computacionais são interessantes, mas têm o risco de criar uma "gamificação" do processo de avaliação, no qual o aluno "testa" respostas até encontrar um feedback positivo.
* Avaliações automáticas não são capazes (ainda) de avaliar o raciocínio de um aluno, somente sua resposta.

## AI e AF

Essas são provas de high-stakes, isto é, elas têm um conteúdo mais amplo e têm um peso maior. Caso o aluno perca uma dessas provas, terá direito a fazer a substitutiva no fim do semestre (isso deve ser verificado com o MultiInsper). Tipicamente, a AI e a AF são realizadas computacionalmente e com consulta, mas sem acesso a:

* Outras pessoas (em tempo real), incluindo mensagens, chats, etc., 
* IAs, incluindo aí ChatGPT, Copilot, etc

Porém, o objetivo delas não é avaliar se o aluno *memorizou* comandos ou equações, por isso é permitido consultar sites, livros, anotações, etc.

## APS

Ao fim de cada módulo, haverá uma atividade -- a ser realizada *individualmente* ou *em dupla*, mas nunca em grupos com três ou mais pessoas -- que é um "deliverable" prático usando o que foi visto em aula.

O que se espera deste projeto é que ele seja feito, de fato, em dupla. Maneiras inadequadas de dividir o projeto são:

* Uma pessoa faz o código e a outra o relatório,
* Uma pessoa faz os projetos ímpares e outra pessoa faz os projetos pares
* Um grupo faz o projeto e outro grupo pede ao ChatGPT uma paráfrase desse projeto

Ao fim de cada APS, será entregue um *relatório* e um *código*, que serão avaliados por rubricas específicas. Discutiremos as rubricas ao longo das aulas.

Os *grupos* seguirão as seguintes regras:

1. As duplas podem ser escolhidas livremente, porém
1. não é permitido "repetir" duplas em quaisquer projetos, isto é, se Becky e Kimberly fazem dupla na APS 1, então Becky e Kimberly não podem fazer dupla em *nenhuma outra* APS.

Se um grupo for repetido, ele será forçadamente separado e os membros deverão fazer a APS individualmente.

# "Não entendi nada"

* [Livro do Hefferon](https://hefferon.net/linearalgebra/) - o texto é mais simples, mas pode ser mais superficial
* [Livro do Cherney](https://www.math.ucdavis.edu/~linear/) - o texto é mais complicado, mas as discussões podem ser mais interessantes
* [3Blue1Brown](https://www.3blue1brown.com/topics/linear-algebra)
* Google
* e-mail

# Ambiente computacional

Recomendo criar um enviroment específico para o curso:

    conda env create -f alglin python=3.11
    conda activate alglin

Após, instale as bibliotecas usando: `pip install -r requirements.txt`.

Confirme que tudo funciona rodando `python verificar_bibliotecas.py`.
