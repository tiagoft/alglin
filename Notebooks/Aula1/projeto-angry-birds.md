# Projeto: jogo estilo "Angry Birds no espaço"

Neste projeto, faremos um jogo no estilo "Angry Birds no espaço".

O jogo funciona da seguinte forma:

1. O objetivo é acertar um objeto em um alvo (o grupo pode escolher que tipo de objeto se trata). Problema: como podemos detectar colisões?
2. O jogador usa um canhão para disparar o objeto, e manipula a direção e módulo da velocidade inicial do objeto usando o *mouse*.
3. O objeto, em princípio, navega em movimento uniforme através do espaço.
4. Alguns corpos celestes realizam atração gravitacional, desviando a rota do objeto.
5. Opcionalmente, adicione texturas e sons ao seu jogo, coloque em um repositório do github e compartilhe com seus colegas!

## O que você deveria aprender com este projeto

1. Relacionar equações matemáticas com suas implementações vetorias
2. Usar vetores de numpy para modelar simulações / animações / jogos
3. Relacionar cada uma das componentes de um vetor a seu significado físico
4. Fazer simulações usando tempo discreto com $\Delta t$ pequeno

## Questões para refletir após terminar o projeto

1. Como poderíamos trocar a força gravitacional dos planetas por forças eletrostáticas?
2. Como poderíamos adicionar uma força de arraste ($F=-bv$) que tenta "frear" nossos pássaros?
3. Como poderíamos adicionar um "vento" constante que tenta jogar nossos pássaros numa direção específica?
4. Como poderíamos adicionar um vento turbulento, cuja velocidade é um vetor que varia com a posição ($v_v = f(x)$)?
