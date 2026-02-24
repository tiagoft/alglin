import numpy as np
import pygame
from pygame.locals import *

pygame.init()

# Tamanho da tela e definição do FPS
screen = pygame.display.set_mode((400, 400))
clock = pygame.time.Clock()
FPS = 60  # Frames per Second
dt = 1 / FPS

BLACK = (0, 0, 0)
COR_PERSONAGEM = (30, 200, 20)

def velocidade_do_vento(s : np.ndarray) -> np.ndarray:
    vx = s[0] + s[1] * np.cos(s[0]/100)
    vy = (s[1]/200)**2 * np.sin(s[0]*s[1]/1000)
    v = np.array([vx, vy])
    return v

class Particula:

    def __init__(
        self,
        s0: np.ndarray,
        v0: np.ndarray,
        m: float,
        beta: float,
    ):
        self.s = s0
        self.v = v0
        self.m = m
        self.beta = beta

    def andar(
        self,
        a: np.ndarray,
        dt: float,
    ):
        if self.s[0] < 10 or self.s[0] > 390 or self.s[1] < 10 or self.s[
                1] > 390:  # Se eu chegar ao limite da tela, reinicio a posição do personagem
            mouseX, mouseY = pygame.mouse.get_pos()
            v_mouse = np.array([mouseX, mouseY])
            # Vetor que vai de s0 até minha posição do mouse
            # s0 + direcao_do_mouse = v_mouse
            # -> direcao_do_mouse = v_mouse - s0
            direcao_do_mouse = v_mouse - s0
            v0 = direcao_do_mouse
            v0 = v0 / np.linalg.norm(v0)
            v0 = norma_da_velocidade_inical * v0
            rnd = np.random.randn(2) * alpha
            v0 = v0 + rnd
            self.s, self.v = s0, v0

        vel_vento = velocidade_do_vento(self.s)
        f_res_do_ar = -self.beta * (self.v + vel_vento)
        a_res_do_ar = f_res_do_ar / self.m

        a_total = a + a_res_do_ar

        s_novo = self.s + self.v * dt
        v_novo = self.v + a_total * dt

        self.s = s_novo
        self.v = v_novo


# Inicializar posicoes
s0 = np.array([50, 200])
norma_da_velocidade_inical = 600
alpha = 100
v0 = np.array([100, -100])
a = np.array([0, 100])
v = v0
s = s0
v_vento = np.array([100, 10])

lista_de_particulas = []
for _ in range(500):
    lista_de_particulas.append(
        Particula(
            s0 + np.random.randn(2) * 10,
            v0 + np.random.randn(2) * 10,
            0.5,
            beta=0.99,
        ), )

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

    for p in lista_de_particulas:
        p.andar(a, dt)

    # Desenhar fundo
    screen.fill(BLACK)

    # Desenhar personagem
    for p in lista_de_particulas:
        rect = pygame.Rect(
            p.s, (10, 10))  # First tuple is position, second is size.
        screen.blit(personagem, rect)

    # Update!
    pygame.display.update()

# Terminar tela
pygame.quit()
