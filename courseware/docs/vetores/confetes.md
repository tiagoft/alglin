# Confetes digitais

Nesta aula, utilizaremos os conceitos de vetores para executar uma simulação baseada em modelos físicos.

Você vai perceber que nesta aula específica não há "certo" ou "errado" -- o que há é um processo de aprendizado. Sendo o processo tão particular de cada um, é preciso que cada um seja responsável por si. O que gostaríamos nessa atividade é praticar o seguinte fluxo de pensamento:

<div class="mermaid">

flowchart TD
    A[Entender a situação proposta: qual é o problema, e como sabemos que ele foi resolvido, isto é, quais são os critérios de aceitação] --> B[Ligar a situação a um modelo matemático e suas variáveis] --> C[Resolver o modelo matemático, possivelmente implementando um programa para isso] --> D[Identificar, dentro do modelo resolvido e/ou dos resultados mostrados pelo programa, como a situação inicial foi resolvida]

</div>

Por esse motivo, essa atividade não tem uma "rubrica" ou um "gabarito". Existem muitas soluções para cada um dos exercícios propostos. Porém, é importante que, para cada um deles, você explicitamente passe por todas as etapas do fluxo.

A quarta etapa é especialmente importante: como este é um trabalho aberto, isto é, que envolve o pensamento *divergente*, é esperado do aluno (e dos grupos de alunos) que o entendimento de cada etapa, e do que significa ter "resolvido" cada etapa, seja discutido pelo grupo de trabalho. Isso significa que fazer essa atividade pensando em "cumprir rapidamente etapas para entregar um resultado que será avaliado" não é produtivo. Ao invés disso, trata-se um trabalho importante pelo *vivenciar o processo*, e não pela entrega em si.

Dito isso, é claro que GPTs e IAs atuais resolvem todas as atividades. Não use GPTs e IAs para fazer o trabalho criativo para você neste contexto - até porque isso não faz nenhum sentido porque a atividade não recebe nota. Use essa oportunidade para identificar onde estão as *suas* dificuldades, e, ao superá-las, para exercitar o senso estético/poético de apreciar os resultados do programa que for fazendo.


## Exercício 1: analisar os efeitos da aceleração no movimento uniformemente variado

O código abaixo simula uma situação na qual jogamos uma pequena pedra do alto de um prédio. Na simulação, a cada iteração, calculamos novos valores para a velocidade e para a posição:

$$
\begin{cases}
\begin{array}{rl}
s_{t+1} &= s_{t} + \Delta t v_t\\
v_{t+1} &= v_{t} + \Delta t a
\end{array}
\end{cases}
$$

Analise o código e responda:

1. Na simulação, quanto vale $\Delta t$?
2. Por que uma das componentes da variável `a` é zero?
3. Modifique o código para que a pedra seja arremessada com uma velocidade inicial com módulo mais alto
4. Modifique o código para que a gravidade seja mais suave que a inicialmente projetada

```python
import numpy as np
import pygame
from pygame.locals import *
pygame.init()

# Tamanho da tela e definição do FPS
screen = pygame.display.set_mode((400, 400))
clock = pygame.time.Clock()
FPS = 60  # Frames per Second
dt = 1/FPS

BLACK = (0, 0, 0)
COR_PERSONAGEM = (30, 200, 20)

# Inicializar posicoes
s0 = np.array([50,200])
v0 = np.array([100, -100])
a = np.array([0, 100])
v = v0
s = s0

# Personagem
personagem = pygame.Surface((5, 5))  # Tamanho do personagem
personagem.fill(COR_PERSONAGEM)  # Cor do personagem

rodando = True
while rodando:
    # Capturar eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            rodando = False

    # Controlar frame rate
    clock.tick(FPS)

    if s[0]<10 or s[0]>390 or s[1]<10 or s[1]>390: # Se eu chegar ao limite da tela, reinicio a posição do personagem
        s, v = s0, v0

    # Recalcular posições
    s_novo = s + v * dt
    v_novo = v + a * dt 
    
    s = s_novo 
    v = v_novo

    # Desenhar fundo
    screen.fill(BLACK)

    # Desenhar personagem
    rect = pygame.Rect(s, (10, 10))  # First tuple is position, second is size.
    screen.blit(personagem, rect)

    # Update!
    pygame.display.update()

# Terminar tela
pygame.quit()
```

## Exercício 2: adicionar interatividade ao sistema de partículas

Modifique novamente o código de forma que as partículas sejam disparadas sempre na direção do ponteiro do mouse do jogador (dica: use `mouseX` e `mouseY` do `pygame`), mas sempre com mesmo módulo.

## Exercício 3: adicionar aleatoriedade ao sistema de partículas

Modifique o código de forma que a velocidade inicial da pedra seja levemente diferente a cada vez que ela é "jogada". Uma das maneiras de conseguir isso é usar um vetor de números aleatórios (`rnd = np.random.randn(2)`) que é multiplicado por algum fator de escala (experimente vários, de acordo com como gostar) e então somado à velocidade da partícula no momento em que ela é re-criada. Assim, a "pedra" deve ser inicializada aproximadamente na direção do mouse, mas com uma componente de aleatoriedade.

## Exercício 4: operar com várias partículas simultaneamente

Faça com que a simulação agora tenha 50 pedras operando simultaneamente, que são inicializadas do mesmo ponto (fazendo uma espécie de "metralhadora"). Como seria uma boa maneira de representar as posições e velocidades de 50 pedras diferentes?

## Exercício 5: adicionar atrito do ar

A resistência do ar, ou a resistência do ar, é uma força com módulo $\beta v$, onde $\beta \in \mathbb{R}$, $0 < \beta < 1$, e direção contrária a velocidade da partícula. Adicione uma força de resistência do ar ao seu sistema. Veja que, nesse caso, será preciso modelar a *massa* das partículas. O que acontece se a massa é muito grande? E se a massa é muito pequena?

## Exercício 6: adicionar vento

A resistência do ar adicionada anteriormente assume que o ar está parado. Se o ar estiver em movimento, a força de resistência do ar deve ser calculada levando em consideração que há uma tendência de "arrastar" a partícula para uma determinada direção. Utilize esboços e diagramas para encontrar um modelo físico adequado para isso. Implemente seu modelo, e faça o teste com alguns valores diferentes para a velocidade do vento.

## Exercício 7: confetes digitais

Vamos usar uma função para definir um vetor "velocidade do vento" diferente para cada posição. Neste momento, temos liberdade para escolher o que quisermos. Por exemplo, podemos começar com:

```python
def velocidade_do_vento(s : np.ndarray) -> np.ndarray:
    vx = np.cos( s[0]/10 + s[1]/20)
    vy = np.sin(  np.cos(vx**2) )
    return np.array( [vx, vy] )
```

Aplique esse vento que varia de velocidade de acordo com a posição em seu modelo.

Conseguimos fazer os confetes digitais? Altere os parâmetros do seu modelo para alterar sua estética.

