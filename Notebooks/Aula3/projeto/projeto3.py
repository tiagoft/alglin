import numpy as np 

def matriz_de_rotacao(angulo: float, centro: np.ndarray) -> np.ndarray:
    matriz = np.eye(3)
    return matriz

def criar_indices(min_i, max_i, min_j, max_j):
    import itertools
    L = list(itertools.product(range(min_i, max_i), range(min_j, max_j)))
    idx_i = np.array([e[0] for e in L])
    idx_j = np.array([e[1] for e in L])
    idx = np.vstack( (idx_i, idx_j) )
    return idx

def rotacionar_imagem(imagem: np.ndarray, angulo: float) -> np.ndarray:
    imagem_nova = np.zeros_like(imagem)
    return imagem_nova
