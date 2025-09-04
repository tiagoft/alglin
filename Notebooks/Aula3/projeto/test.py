import pytest
from projeto3 import matriz_de_rotacao, rotacionar_imagem
import numpy as np


def _matriz_de_rotacao(angulo: float, centro: np.ndarray) -> np.ndarray:
    # Converte o ângulo de graus para radianos
    angulo_rad = np.deg2rad(angulo)

    # Cria a matriz de translacao
    T = np.array([[1, 0, centro[0]], [0, 1, centro[1]], [0, 0, 1]])

    # Cria a matriz de rotação
    R = np.array(
        [
            [np.cos(angulo_rad), -np.sin(angulo_rad), 0],
            [np.sin(angulo_rad), np.cos(angulo_rad), 0],
            [0, 0, 1],
        ]
    )

    return T @ R @ np.linalg.inv(T)


def criar_indices(min_i, max_i, min_j, max_j):
    import itertools
    L = list(itertools.product(range(min_i, max_i), range(min_j, max_j)))
    idx_i = np.array([e[0] for e in L])
    idx_j = np.array([e[1] for e in L])
    idx = np.vstack( (idx_i, idx_j) )
    return idx

def _rotacionar_imagem1(imagem: np.ndarray, angulo: float) -> np.ndarray:
    # Obtém as dimensões da imagem
    altura, largura = imagem.shape[:2]
    
    # Calcula o centro da imagem
    centro = (largura // 2, altura // 2)
    
    # Obtém a matriz de rotação
    matriz_rotacao = _matriz_de_rotacao(angulo, np.array(centro))

    idx = criar_indices(0, altura, 0, largura)
    idxh = np.vstack( (idx, np.ones(idx.shape[1])) )
    
    idx_rot = matriz_rotacao @ idxh
    filter = (idx_rot[0,:] >= 0) & (idx_rot[0,:] < altura) & (idx_rot[1,:] >= 0) & (idx_rot[1,:] < largura)
    idx_rot = idx_rot[:, filter]
    idx = idx[:, filter]
    imagem_nova = np.zeros_like(imagem)
    imagem_nova[idx_rot[0,:].astype(int), idx_rot[1,:].astype(int)] = imagem[idx[0,:], idx[1,:]]
    return imagem_nova

def _rotacionar_imagem2(imagem: np.ndarray, angulo: float) -> np.ndarray:
    # Obtém as dimensões da imagem
    altura, largura = imagem.shape[:2]
    
    # Calcula o centro da imagem
    centro = (largura // 2, altura // 2)
    
    # Obtém a matriz de rotação
    matriz_rotacao = _matriz_de_rotacao(angulo, np.array(centro))

    idx = criar_indices(0, altura, 0, largura)
    idxh = np.vstack( (idx, np.ones(idx.shape[1])) )
    idx_orig = np.linalg.inv(matriz_rotacao) @ idxh
    idx_orig = np.round(idx_orig).astype(int)
    filter = (idxh[0,:] >= 0) & (idxh[0,:] < altura) & (idxh[1,:] >= 0) & (idxh[1,:] < largura)
    idxh = idxh[:, filter]
    idx = idx[:, filter]    
    
    imagem_nova = np.zeros_like(imagem)
    imagem_nova[idx[0,:].astype(int), idx[1,:].astype(int)] = imagem[idx_orig[0,:], idx_orig[1,:]]
    return imagem_nova

def test_matriz_de_rotacao():
    for angulo in [0, 15, 25, 27]:
        for centro in [(0, 0), (1, 1), (2, 2)]:
            np.testing.assert_array_almost_equal(
                matriz_de_rotacao(angulo, np.array(centro)),
                _matriz_de_rotacao(angulo, np.array(centro)),
                err_msg="Matriz de rotacao esta errada!"
            )

def test_rotacionar_figura():
    for angulo in [0, 15, 25, 27]:
        altura, largura = 100, 100
        imagem = np.random.random((altura, largura, 3))
        imagem_rotacionada = _rotacionar_imagem1(imagem, angulo)
        np.testing.assert_array_almost_equal(
                imagem_rotacionada,
                rotacionar_imagem(imagem, angulo),
                err_msg="Rotacao nao esta funcionando!"
            )

def test_rotacionar_figura2():
    for angulo in [0, 15, 25, 27]:
        altura, largura = 100, 100
        imagem = np.random.random((altura, largura, 3))
        imagem_rotacionada = _rotacionar_imagem2(imagem, angulo)
        np.testing.assert_array_almost_equal(
                imagem_rotacionada,
                rotacionar_imagem(imagem, angulo),
                err_msg="Rotacao funciona, mas tem !"
            )