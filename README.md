# EXAMEN PENSAMIENTO COMPUTACIONAL 

Sistema interactivo

### "Fnaf Simulación"

Autor: Sam Alexander Marquez Mejías

Curso: Pensamiento Computacional Sec 3 

## Descripción objetiva

Para este examen, al igual que en la solemne anterior, decidí mantener la línea de diseño enfocada en videojuegos. El proyecto se basa en el videojuego Five Nights at Freddy’s (FNAF), reinterpretando su estética y concepto de tensión en un entorno interactivo desarrollado en p5.js.

El trabajo consiste en una experiencia interactiva donde el usuario debe sobrevivir en un sistema de vigilancia y defensa, inspirado en la atmósfera del juego original, con el objetivo de generar tensión a través de la gestión de recursos y el tiempo.

## Inputs utilizados

- Tecla A → abre/cierra puerta izquierda
- Tecla D → abre/cierra puerta derecha
- Tecla R → reiniciar el juego
- Tecla ESPACIO → iniciar el juego desde el menú

## Outputs visuales 

- Fondo del escenario (fondo)
- Puertas (rectángulos semi transparentes)
- Barra de energía (rectángulo que cambia tamaño)
- Texto del HUD (hora, batería, controles)
- Texto de advertencia (enemigo cerca)
- Pantalla de Game Over (GIF jumpscare)
- Pantalla de victoria (imagen 6 AM)

 ## Outputs sonoros
 
 Sonido de jumpscare (fnaf.mp3)
 Sonido de victoria (yay.mp3)

## Procesos (lógica interna)

El sistema procesa constantemente la información dentro de draw() (≈60 veces por segundo):

- Se reduce la energía en cada frame
- Se actualiza el reloj del juego
- Se controla el avance del enemigo
- Se verifica el estado de las puertas
- Se calculan condiciones de victoria o derrota

Todo el sistema funciona en un bucle continuo de actualización.

## Estados del sistema

El juego se organiza mediante una variable de estado:

0 → menú
1 → juego activo
2 → game over (jumpscare)
3 → victoria

Esto permite separar las distintas pantallas del juego.

## Eventos

Los eventos principales del sistema son:

- Activación de teclas (keyPressed)
- Cambio de estado del enemigo (ataque)
- Consumo de batería
- Cambio de hora del juego
- Activación de victoria o derrota

Estos eventos modifican el comportamiento del sistema en tiempo real.

## Elementos multimedia

El proyecto utiliza:

Imágenes:
- fondo del escenario
- GIF de jumpscare
- imagen de victoria (6 AM)
 
Sonidos:
- sonido de jumpscare
- sonido de victoria

Estos refuerzan la atmósfera de tensión y recompensa. 

## Diagrama de flujo

Documenta la lógica del proyecto FNAF Simulación. Muestra el recorrido del juego desde el menú inicial hasta las condiciones de victoria y derrota, incluyendo la gestión de energía, el reloj, el comportamiento del animatrónico y la interacción del jugador.

[DIAGRAMA DE FLUJO EXAMEN.pdf](https://github.com/user-attachments/files/29379278/DIAGRAMA.DE.FLUJO.EXAMEN.pdf)

<img width="1936" height="1080" alt="DIAGRAMA DE FLUJO EXAMEN" src="https://github.com/user-attachments/assets/5e94b7d5-c847-4ed9-a529-c9bcd541701d" />


# Idea y proceso del proyecto

Al igual que en la solemne anterior, decidí mantener la línea de trabajo basada en la creación de un sistema interactivo inspirado en un videojuego. En este caso, quise enfocarme en un juego de terror, tomando como referencia Five Nights at Freddy’s (FNAF), con el objetivo de reinterpretar su sistema de tensión y supervivencia dentro de p5.js.

El principal interés del proyecto fue trasladar la experiencia del juego original, especialmente la sensación de vulnerabilidad constante, el uso de recursos limitados y la presión del tiempo. Para esto, se buscó mantener elementos característicos como la gestión de energía, el sistema de puertas y el jumpscare, incorporando además el sonido como parte fundamental de la inmersión, ya que refuerza la tensión y el impacto de los eventos dentro del juego.

Para la construcción del sistema se utilizaron distintas funciones que organizan la lógica del proyecto, como la función principal de actualización (draw()), encargada de mantener el sistema en ejecución constante, y funciones específicas para separar la lógica del juego, como el manejo de la energía, el comportamiento del enemigo, el sistema de reloj y la detección de eventos.

También se trabajó con variables que representan los estados del sistema, como la energía del jugador, el estado del juego (menú, juego, victoria o derrota) y el estado de las puertas. Estas variables permiten controlar el comportamiento general del sistema y su evolución en el tiempo.

El sistema de interacción se basa en eventos de teclado, los cuales permiten al jugador abrir y cerrar puertas, afectando directamente tanto la defensa frente al enemigo como el consumo de energía. Esto genera una dinámica de decisión constante entre protegerse o conservar recursos.

Por otro lado, el sistema de tiempo se implementa mediante el uso de frames dentro de draw(), lo que permite simular el paso del tiempo hasta llegar a la condición de victoria a las 6:00 AM. Este sistema refuerza la idea de supervivencia progresiva.

El enemigo se controla mediante una lógica basada en estados y aleatoriedad, utilizando un arreglo con dos posibles direcciones (izquierda y derecha) para determinar su aparición. Esto genera incertidumbre en el jugador y aumenta la tensión del sistema.

El momento del jumpscare se activa cuando el enemigo logra completar su ataque sin ser detenido, cambiando el estado del juego a derrota y activando elementos visuales y sonoros que refuerzan el impacto del evento.

Finalmente, el proyecto utiliza funciones auxiliares para estructurar la interfaz y los efectos visuales, incluyendo la representación de la batería, las puertas y los indicadores de estado, logrando un sistema modular donde cada función cumple un rol específico dentro del funcionamiento general del juego.

# Recursos visuales

## Fondo del juego 

Se utilizó como fondo una imagen del escenario original de Five Nights at Freddy’s 1, con el fin de mantener la estética del juego y reforzar su atmósfera de tensión y suspenso dentro del proyecto.

<img width="1280" height="600" alt="fondofnaf" src="https://github.com/user-attachments/assets/3c409005-ac67-4ff8-bbf3-5f976232c901" />

## Animatrónico (Foxy / jumpscare)

Se utilizó una imagen de Foxy ya que es uno de los animatrónicos más reconocidos y temidos dentro de Five Nights at Freddy’s, lo que refuerza la tensión y el vínculo directo con la estética de terror del juego.

<img width="498" height="373" alt="foxy" src="https://github.com/user-attachments/assets/57a79d50-bfc1-4b6f-bd85-2dd2efc6cf38" />

## Pantalla de victoria (6 AM)

La pantalla de “6 AM” se utilizó como representación del momento de victoria del jugador, haciendo referencia directa a Five Nights at Freddy’s, donde sobrevivir hasta esa hora significa haber completado el turno.

<img width="1080" height="1080" alt="6am jpg" src="https://github.com/user-attachments/assets/78e6b784-c323-48f5-a331-2ee1e32b2850" />

## Recursos sonoros

Los sonidos utilizados fueron obtenidos desde fuentes externas e integrados al sistema para reforzar la experiencia del juego. Se emplea un sonido de jumpscare para enfatizar el momento de derrota y generar impacto en el jugador, y un sonido de victoria que refuerza la sensación de logro al alcanzar las 6:00 AM, siendo fiel al juego original Five Nights at Freddy’s.

https://www.myinstants.com/es/search/?name=FNAF

## Aprendizajes y dificultades

Uno de los principales desafíos durante el desarrollo del proyecto fue adaptar las mecánicas de Five Nights at Freddy’s a un sistema más simple dentro de p5.js, procurando mantener la sensación de tensión característica del juego. Para ello fue necesario realizar distintos ajustes en el consumo de energía, el avance del tiempo y el comportamiento del enemigo hasta conseguir un equilibrio entre dificultad y jugabilidad.

A lo largo del proceso reforcé conocimientos sobre el uso de variables, condicionales, funciones, arreglos y lógica basada en frames, comprendiendo cómo estos elementos trabajan en conjunto para construir un sistema interactivo.

Como apoyo durante el desarrollo utilicé inteligencia artificial para organizar la estructura inicial del proyecto y resolver dudas puntuales de programación. Sin embargo, fue necesario comprender el funcionamiento del código, adaptarlo a los requerimientos del proyecto y realizar diversas modificaciones hasta obtener el resultado final.

En conclusión, este proyecto me permitió fortalecer tanto mis conocimientos en programación con p5.js como mi capacidad para analizar, estructurar y desarrollar una experiencia interactiva inspirada en un referente de videojuegos.

## Resultado final del juego 

Grabación del funcionamiento del juego que muestra dos escenarios: uno previo a la victoria y otro previo a la derrota, con el objetivo de evidenciar la implementación de las mecánicas, la interfaz y los estados finales del proyecto.

https://github.com/user-attachments/assets/f762d61d-ecda-4273-8d2f-aba61efc8791


https://github.com/user-attachments/assets/96d05716-4ad9-40eb-b469-b7030b2c2fac

## Link de p5.js

https://editor.p5js.org/sam.marquez/full/E7wbdHywZ

