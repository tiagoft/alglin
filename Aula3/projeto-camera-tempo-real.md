# Projeto: efeitos de vídeo em tempo real

Até o momento, fizemos transformações de formato em imagens. Vamos agora fazer o mesmo em vídeos em tempo real.

Em nosso repositorio, o arquivo `03-camera-demo.py` tem um pequeno programa que demonstra como capturar uma imagem de uma câmera e mostrá-la na tela em tempo real. A imagem é armazenada internamente numa estrutura `np.array` com `shape=(largura, altura, cores)`, isto é, exatamente o mesmo formato que usamos na imagem da aula.

O objetivo deste projeto é fazer um processador de efeito de vídeo em tempo real que faça o seu *streaming* de vídeo ficar "girando" na tela, como neste exemplo:

<img src="camera_rodando.gif" width=300>

## Algumas anotações teóricas

### Como fazer uma rotação

Uma matriz que realiza uma rotação de $\theta$ radianos ao redor do ponto $(0,0)$ é:

$$
R = 
\begin{bmatrix}
    \cos(\theta) & -\sin(\theta) \\
    \sin(\theta) & \cos(\theta)  \\
\end{bmatrix}
$$

Se usarmos a ideia de aumentar uma dimensão, a matriz fica:
$$
R = 
\begin{bmatrix}
    \cos(\theta) & -\sin(\theta) & 0 \\
    \sin(\theta) & \cos(\theta) & 0 \\
    0 & 0 & 1
\end{bmatrix}
$$

Lembre-se que para rotacionar ao redor de um ponto arbitrário $(x_0, y_0)$ é preciso deslocar esse ponto para a origem (ou seja, realizar uma translação), realizar a rotação e, por último, desfazer a translação.

### Transformações compostas (*composite transformations*)

Estamos representando nossos pixels como as colunas de uma matriz $X$, como fizemos durante a aula. Quando aplicamos uma transformação $A$, encontramos uma matriz $Y=AX$. Podemos aplicar então uma transformação $B$ sobre $Y$, encontrando $Z=BY$. Então:

$$
Z = BY = B A X
$$

Porém, veja, nesta implementação, aplicamos a transformação $A$ sobre *todos* os pixels, e depois aplicamos a transformação $B$ sobre *todos* os pixels. Podemos, porém, calcular uma matriz $C = BA$ e então simplificar essa operação:

$$
Z = BA X = C X
$$

E, agora, usando a matriz $C$, só precisamos iterar por todos os pixels de $X$ uma única vez. Isso pode aumentar significativamente a velocidade em que as transformações são aplicadas.

### Retirando artefatos da imagem

Talvez, ao realizar uma rotação, você veja a sua imagem resultante cheia de pontinhos. Isso acontece porque nem todo ponto na imagem de destino tem um correspondente na imagem de origem. Então, podemos solucionar isso usando a seguinte ideia:

Em nossa implementação da aula, os pixels de destino $X_d$ foram encontrados transformando os pixels de origem $X_o$ por uma matriz $A$, isto é:

$$
X_d = A X_o
$$

Os pixels de $X_o$ estão bem organizados em uma grade, mas os pixels de $X_d$ não, e é isso que leva ao surgimento desses pontinhos pretos no meio da imagem. Porém, nada impede que façamos os pixels de $X_d$ como uma grade, e então encontremos os pixels em $X_o$ correspondentes usando a transformação inversa:

$$
X_o = A^{-1} X_d
$$


## Descrição do projeto

Neste projeto, faremos um processador de vídeo em tempo real em Python. Ele deve ser capaz de, no mínimo, executar uma rotação ao redor do centro da imagem, semelhante à que está no GIF, *em tempo real*.

Anotações importantes:

1. Deve haver um programa (indicado no README.md) que executa uma demonstração da implementação.
2. Como o objetivo do projeto é exatamente implementar as transformações, não é permitido usar bibliotecas externas que realizem as transformações. Se for preciso, bibliotecas externas podem ser usadas para funções que não estão ligadas diretamente à implementação das transformações em si. Toda a parte de álgebra linear, porém, deve ser feita pelo próprio grupo usando multiplicações matriciais em Numpy.

**ENTREGAS**
* Inclua no próprio `README.md` instruções sobre como instalar, rodar e usar o programa.
* O relatório deste projeto deve ser em formato PDF ou então em um formato vídeo de até 5 minutos. Ele deve explicar toda a matemática usada e indicar como o código entregue implementa essa matemática.

**DICAS**
* O código-base tem 19 linhas de código. A solução feita pela equipe tem 53 linhas. Isso significa que o programa que estamos tentando fazer não é especialmente longo. Porém, ele tem muitos detalhes.
* Se você não faz ideia sobre por onde começar, é interessante fazer um pequeno programa que realiza uma rotação em uma imagem estática (possivelmente seguindo o roteiro da aula) e então ir evoluindo à partir daí.
* Em matrizes, utilizamos a notação $(i, j)$ em que $i$ são as linhas e $j$ são as colunas. Porém, em imagens, usamos a notação (largura,altura), isto é, a ordem dos índices (vertical/horizontal) é invertido em relação às matrizes!
* Lembre-se de manter anotações sobre o motivo de estar realizando cada uma das operações!

**RUBRICA**

O projeto será avaliado usando a rubrica abaixo. Os níveis são cumulativos, isto é, para passar de um nível, *todos* os requisitos dele devem ser cumpridos.

| Nível | Descrição | 
| --- | --- | 
| F | Não entregue, pip install não funciona, faltam declarar dependências, não executa, a rotação usa bibliotecas prontas.  |
| D | Todos os elementos de F foram observados, mas somente alguns de C foram observados. |
| C | A câmera gira. A implementação usa NumPy corretamente.
| B | Todos os elementos de C foram observados, mas somente alguns de A foram observados. | 
| A | Não há artefatos ao girar. Consigo controlar a velocidade do giro. Há pelo menos mais uma transformada, que não a rotação, que pode ser controlada pelo usuário. O relatório está completo, conciso e correto. | 
