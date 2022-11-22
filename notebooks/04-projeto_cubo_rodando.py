import pygame
import numpy as np
pygame.init()


vertices = np.array( [[0,0,0], [1,0,0], [1,1,0], [0,1,0], [0,0,1], [1,0,1], [1, 1,1], [0,1,1]]).T
vertices = np.vstack ( (vertices, np.ones(8)))
arestas = [ [0,1], [1,2], [2,3], [3,0], [4,5], [5,6], [6,7], [7,4], [0,4], [1,5], [2,6], [3,7] ]

def translacao(dx, dy, dz):
    return np.array( [[1, 0, 0, dx], [0, 1, 0, dy], [0, 0, 1, dz], [0, 0, 0, 1]]  )

def translacao_tela(zoom):
    return np.array( [[zoom, 0, 200], [0, zoom, 200], [0, 0, 1]]  )

def expansao(r):
    return np.array([[r, 0, 0, 0], [0, r, 0, 0], [0, 0, r, 0], [0, 0, 0, 1]])

def projecao(d):
    return np.array( [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, -1/d, 0]]  )

def ortho_proj():
    return np.array( [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, -0, 0]]  )

def rotation(theta_x, theta_y, theta_z):
    rx = np.array( [[1, 0, 0, 0], [0, np.cos(theta_x), -np.sin(theta_x), 0], [0, np.sin(theta_x), np.cos(theta_x), 0], [0, 0, 0, 1]]  )
    ry = np.array( [[np.cos(theta_y), 0, np.sin(theta_y), 0], [0, 1, 0, 0], [-np.sin(theta_y), 0, np.cos(theta_y), 0], [0, 0, 0, 1]] )
    rz = np.array ( [[np.cos(theta_z), -np.sin(theta_z), 0, 0], [np.sin(theta_z), np.cos(theta_z), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
    return rx, ry, rz

E = expansao(100)
T1 = translacao(-0.5, -0.5, -0.5)
vertices_ = E @ T1 @ vertices
print(vertices_ )

T2 = translacao(10, 0, 150)
P = projecao(100)

TELA = translacao_tela(1)

t = 0
vx = 0.5
vy = 0.7
vz = 0.9

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

    # Reposicionar o cubo
    t += 1/FPS
    theta_x = vx*t
    theta_y = vy*t
    theta_z = vz*t

    rx, ry, rz = rotation(theta_x, theta_y, theta_z)
    R = rx@ry@rz

    X = P @ T2 @ R @ vertices_
    X_ = X / X[2,:]
    X_ = TELA @ X_

    # Desenhar fundo
    screen.fill(BLACK)

    # Desenhar pontos
    for p in range(X.shape[1]):
        rect = pygame.Rect(X_[0:2,p], (2, 2))  # First tuple is position, second is size.
        screen.blit(pontos, rect)
    
    for l in arestas:
        pygame.draw.line(screen, 'red', X_[0:2,l[0]], X_[0:2,l[1]])
    pygame.display.flip()

    # Update!
    pygame.display.update()

# Terminar tela
pygame.quit()