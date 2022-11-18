import pygame
import numpy as np
pygame.init()

# Tenho aqui vários pontos sobre uma circunferência
angulo = np.linspace(0, 2*np.pi, 20)
pontos_loc = np.vstack ( (100*np.cos(angulo)+200, 100*np.sin(angulo)+200, np.ones(20)) )

# Controle de tempo
t = 0

# Velocidade angular (rotacoes por segundo)
v = 0.2

# Tamanho da tela e definição do FPS
screen = pygame.display.set_mode((400, 400))
clock = pygame.time.Clock()
FPS = 60  # Frames per Second

BLACK = (0, 0, 0)
COR_PERSONAGEM = (30, 200, 20)
COR_PONTOS = (200, 30, 20)

# Personagem
personagem = pygame.Surface((5, 5))  # Tamanho do personagem
personagem.fill(COR_PERSONAGEM)  # Cor do personagem

# Pontos 
pontos = pygame.Surface((5, 5))
pontos.fill(COR_PONTOS)  # Cor dos pontos

rodando = True
while rodando:
    # Capturar eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            rodando = False

    # Controlar frame rate
    clock.tick(FPS)

    # Movimento do personagem
    t += 1/FPS
    theta = v*t
    s = np.array([[200],[200]]) + 100 * np.array([ [np.cos(2*np.pi*theta)], [-np.sin(2*np.pi*theta)]])
    s = np.vstack( (s, np.ones(1)))

    # Desenhar fundo
    screen.fill(BLACK)

    # Dica: use pontos_loc_y para receber o resultado das transformações feitas sobre pontos_loc
    Tjogador = np.array([[1, 0, -s[0,0]], [0, 1, -s[1,0]], [0, 0, 1] ])
    Tparacentro = np.array([[1, 0, 200], [0, 1, 200], [0, 0, 1] ])
    Trot = np.array( [[np.cos(2*np.pi*theta), -np.sin(2*np.pi*theta), 0], [np.sin(2*np.pi*theta), np.cos(2*np.pi*theta), 0], [0, 0, 1]])
    T = Tparacentro@Trot@Tjogador
    pontos_loc_y = T@pontos_loc

    # Desenhar pontos
    for p in range(pontos_loc.shape[1]):
        rect = pygame.Rect(pontos_loc_y[0:2,p], (2, 2))  # First tuple is position, second is size.
        screen.blit(pontos, rect)
        
    # Desenhar personagem
    rect = pygame.Rect((T@s)[0:2,0], (10, 10))  # First tuple is position, second is size.
    screen.blit(personagem, rect)

    # Update!
    pygame.display.update()

# Terminar tela
pygame.quit()