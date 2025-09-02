import numpy as np 

def matriz_de_rotacao(angulo: float, centro: np.ndarray) -> np.ndarray:
    """Calcula uma matriz de rotacao

    Args:
        angulo (float): Angulo de rotacao, em graus
        centro (np.ndarray): Centro da imagem, em um array [i,j] em pixels

    Returns:
        np.ndarray: Matriz em coordenadas homogeneas que realiza a rotacao
    """
    matriz = np.eye(3)
    return matriz

def _criar_indices(min_i, max_i, min_j, max_j):
    import itertools
    L = list(itertools.product(range(min_i, max_i), range(min_j, max_j)))
    idx_i = np.array([e[0] for e in L])
    idx_j = np.array([e[1] for e in L])
    idx = np.vstack( (idx_i, idx_j) )
    return idx

def rotacionar_imagem(imagem: np.ndarray, angulo: float) -> np.ndarray:
    """Rotaciona a imagem em um determinado ângulo ao redor de seu centro.

    Args:
        imagem (np.ndarray): Imagem a ser rotacionada.
        angulo (float): Ângulo de rotação em graus.

    Returns:
        np.ndarray: Imagem rotacionada.
    """
    
    imagem_nova = np.zeros_like(imagem)
    return imagem_nova
