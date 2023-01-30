# Demonstração: na matriz de covariância, P^{-1}=P^T

Vamos partir da matriz de dados $X$ e sua matriz de covariância $C$. A matriz de covariância $C$ tem a matriz de auto-vetores $P$ e a matriz de auto-valores $D$:

$$
X \in \mathbb{R}^{D \times N} \\

C_X \in \mathbb{R}^{D \times D} = X X^T = P D P^{-1}\\
$$

A matriz $X$ mostra dados cuja correlação entre as dimensões é diferente de zero.

Para encontrar uma matriz como essa, podemos partir de uma outra matriz, $Y$, que tem pontos de mesma dimensão de $X$ e cujas dimensões são completamente descorrelacionadas entre si. Podemos criar uma matriz $R$ para correlacionar as dimensões, obtendo $X$:

$$ X = RY $$

Então, $C_X$ pode ser escrita como:

$$ C_X = X^TX = RY (RY)^T = RY Y^T R^T $$

Como os dados de $Y$ são descorrelacionados, então $YY^T = C_Y = I$, logo:

$$C_X = R I R^T = R R^T$$

Vamos assumir que $R=P\sqrt{D}$. Nesse caso:

$$C_X = P \sqrt{D} (P \sqrt{D})^T\\

C_X = P \sqrt{D} \sqrt{D}^T P^T \\

C_X = P D P^T $$

Como sabemos que $C_X = P D P^{-1}$, então:

$$
P D P^T = P D P^{-1}
$$
e, portanto,

$$
P^T = P^{-1}
$$

Lembre-se que $P$ é a matriz que contém os auto-vetores de $C_X$.