---
marp: true
theme: default
paginate: true

---

# Aula 06 - Parte 01 - Regressão

Álgebra Linear e Teoria da Informação

Prof. Tiago Tavares


---

# Cenário: Medindo a Velocidade do Som

Imagine medir a velocidade do som:
*   Uma pessoa grita e aciona um cronômetro.
*   Outra pessoa, a metros de distância, para o cronômetro ao ouvir o grito.
*   O experimento é repetido para várias distâncias.

---

# Teoria: Movimento Uniforme

O som se propaga a uma velocidade constante ($c$), seguindo um movimento uniforme:
$$ t = \frac{1}{c} \Delta s $$
Onde $t$ é o tempo de propagação e $\Delta s$ é a distância.

Então, medimos $t$ para vários valores de $\Delta s$, e então estimamos o coeficiente $

---

# Imperfeições nas Medições

Na realidade, as medições são imperfeitas devido a:

*   **Erro humano:** Acionamento manual do cronômetro.
*   **Variações do ambiente:** Vento, temperatura afetam a velocidade do som.
*   **Fontes de erro imprevisíveis.**

Esses erros se somam, resultando em desvios com uma distribuição Gaussiana (Normal) de média zero.

---

# Erro Quadrático Médio

O EQM quantifica o quão bem um modelo se ajusta aos dados medidos.

**Fórmula:**
$$ \text{EQM} = \frac{1}{N} \sum_{n=1}^N (y_n - (ax_n + b))^2 $$

Onde:
*   $N$ é o número total de medições.
*   $y_n$ é o valor medido.
*   $ax_n + b$ é o valor estimado pelo modelo linear para $x_n$.

Exercício: calcule $\frac{d_\text{EQM}}{da}$.

---

# Descida pelo Gradiente (Gradient Descent)

Partindo de um coeficiente angular atual ($a_{\text{atual}}$), estimamos um novo modelo usando a seguinte regra de atualização:
$$ a_{\text{novo}} = a_{\text{atual}} - \alpha \cdot e'(a_{\text{atual}}) $$
Onde:
*   $a_{\text{novo}}$ é o coeficiente angular atualizado.
*   $a_{\text{atual}}$ é o coeficiente angular na iteração anterior.
*   $\alpha$ (alpha) é a **taxa de aprendizado (learning rate)**, um valor pequeno e positivo (por exemplo, 0.01).
*   $e'(a_{\text{atual}})$ é a derivada do EQM em relação a $a$ no ponto $a_{\text{atual}}$.

---

# Estimando a Aceleração da Gravidade ($g$)

*   Tempo de queda ($t$) de um objeto de altura ($h$):
    $$ t = \sqrt{\frac{2h}{g}} $$
*   Elevando ao quadrado:
    $$ t^2 = \frac{2}{g} h $$
*   Seja $y = t^2$ e $x = h$. Então, a relação é linear:
    $$ y = ax $$
    onde o coeficiente angular $a = \frac{2}{g} \Rightarrow g = \frac{2}{a}$.


---

# Procedimento Experimental

1.  **Objeto:** Escolha um objeto que possa ser jogado sem quebrar (ex: borracha).
2.  **Medições:** Solte o objeto de diferentes alturas ($h$) e meça o tempo de queda ($t$) com um cronômetro. Anote vários pares $(h, t)$.
3.  **Compartilhe:** Junte as medições com a turma.
4.  **Transformação:** Para cada ponto, calcule $y = t^2$.
5.  **Estimativa de $a$:** Use a função `melhorar_modelo` (descida pelo gradiente) com seus dados de $(h, t^2)$ para estimar o coeficiente $a$.
6.  **Cálculo de $g$:** Utilize a relação $g = \frac{2}{a}$ para calcular o valor da aceleração da gravidade.

---

# Hora da chamada!

Hoje estamos na Aula 06, Parte 01!

