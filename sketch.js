let fondo, jumpscareGif, jumpscareSound, winImg, winSound;
let estado = 0; 
let energia = 100;
let puertaIzq = false, puertaDer = false;

let progreso = 0;
let temporizador = 0;
let hora = 12;
let temporizadorHora = 0;
let ladoAtaque = "";

function preload() {
  fondo = loadImage("fondofnaf.png");
  jumpscareGif = loadImage("foxy.gif");
  winImg = loadImage("6am.jpg");
  soundFormats('mp3');
  jumpscareSound = loadSound("fnaf.mp3");
  winSound = loadSound("yay.mp3");
}

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  ladoAtaque = random(["izquierda", "derecha"]);
}

function draw() {
  if (estado === 0) menu();
  else if (estado === 1) juego();
  else if (estado === 2) gameOver();
  else if (estado === 3) victoria();
}

function menu() {
  image(fondo, 0, 0, width, height);
  fill(0, 220);
  rect(0, 0, width, height);

  // BUCLE 1: Efecto VHS (Líneas de escaneo horizontales)
  stroke(255, 25); 
  for (let i = 0; i < height; i += 4) {
    line(0, i, width, i);
  }
  noStroke();

  fill(255);
  textSize(45);
  text("FNAF SIMULACIÓN", width / 2, height / 2 - 50);
  textSize(20);
  text("PRESIONA ESPACIO PARA COMENZAR", width / 2, height / 2 + 30);
}

function juego() {
  image(fondo, 0, 0, width, height);
  
  actualizarEnergia();
  actualizarReloj();
  actualizarAnimatronico();
  
  mostrarPuertas();
  mostrarHUD();
  mostrarAdvertencia();
}

function actualizarEnergia() {
  if (energia > 0) {
    energia -= 0.02; // Consumo base
    if (puertaIzq) energia -= 0.12; // Consumo puerta (ajustado)
    if (puertaDer) energia -= 0.12; 
  } else {
    energia = 0;
    puertaIzq = false;
    puertaDer = false;
  }
}

function actualizarReloj() {
  temporizadorHora++;
  // Partida de 42 segundos
  if (temporizadorHora > 420) { 
    hora = (hora === 12) ? 1 : hora + 1;
    temporizadorHora = 0;
  }
  if (hora === 6) {
    estado = 3;
    if (!winSound.isPlaying()) winSound.play();
  }
}

function actualizarAnimatronico() {
  temporizador++;
  
  // Tiempo que dura el aviso (Nivel 4) antes del ataque
  let tiempoLimite = (progreso === 4) ? 80 : 110; 

  if (temporizador > tiempoLimite) {
    progreso++;
    temporizador = 0;
    if (progreso >= 5) verificarAtaque();
  }
}

function verificarAtaque() {
  if (ladoAtaque === "izquierda") {
    if (puertaIzq) {
      // ÉXITO: El texto rojo desaparecerá porque progreso vuelve a 0
      progreso = 0; 
      ladoAtaque = random(["izquierda", "derecha"]);
    } else {
      morir();
    }
  } else {
    if (puertaDer) {
      progreso = 0; 
      ladoAtaque = random(["izquierda", "derecha"]);
    } else {
      morir();
    }
  }
}

function morir() {
  estado = 2;
  if (!jumpscareSound.isPlaying()) jumpscareSound.play();
}

function mostrarPuertas() {
  noStroke();
  fill(20, 240); 
  if (puertaIzq) rect(0, 0, 160, height);
  if (puertaDer) rect(width - 160, 0, 160, height);
}

function mostrarHUD() {
  let wBarra = map(energia, 0, 100, 0, 220);
  fill(0);
  rect(20, 20, 220, 30, 5);
  fill(energia > 25 ? "#00FF00" : "#FF0000");
  rect(20, 20, wBarra, 30, 5);

  // BUCLE 2: Divisiones estéticas de la batería
  stroke(0, 120);
  for (let x = 20; x < 240; x += 22) {
    line(x, 20, x, 50);
  }
  noStroke();

  fill(255);
  textSize(18);
  textAlign(LEFT);
  text("BATERÍA: " + floor(energia) + "%", 25, 75);

  textSize(45);
  textAlign(RIGHT);
  text(hora + ":00 AM", width - 30, 50);

  textAlign(CENTER);
  textSize(16);
  fill(puertaIzq ? "#00FF00" : 255);
  text("IZQUIERDA [A]", 85, height - 25);
  fill(puertaDer ? "#00FF00" : 255);
  text("DERECHA [D]", width - 85, height - 25);
}

function mostrarAdvertencia() {
  if (progreso === 4) {
    let alfa = 150 + sin(frameCount * 0.3) * 105;
    fill(255, 0, 0, alfa);
    textSize(28);
    text("¡ALGO SE ASOMA POR LA " + ladoAtaque.toUpperCase() + "!", width / 2, 110);
  }
}

function gameOver() {
  image(jumpscareGif, 0, 0, width, height);
  fill(255, 0, 0);
  textSize(60);
  text("GAME OVER", width / 2, height / 2);
  textSize(20);
  fill(255);
  text("Presiona R para reiniciar", width / 2, height / 2 + 70);
}

function victoria() {
  image(winImg, 0, 0, width, height);
  fill(0, 150);
  rect(0, 0, width, height);
  fill(255);
  textSize(80);
  textSize(30);
  text("SOBREVIVISTE", width / 2, height / 2 + 80);
  textSize(18);
  text("Presiona R para volver", width / 2, height - 40);
}

function keyPressed() {
  if (estado === 0 && keyCode === 32) estado = 1;
  if (estado === 1 && energia > 0) {
    if (key === "a" || key === "A") puertaIzq = !puertaIzq;
    if (key === "d" || key === "D") puertaDer = !puertaDer;
  }
  if ((estado === 2 || estado === 3) && (key === "r" || key === "R")) reiniciar();
}

function reiniciar() {
  estado = 0; energia = 100;
  puertaIzq = false; puertaDer = false;
  progreso = 0; temporizador = 0;
  hora = 12; temporizadorHora = 0;
  ladoAtaque = random(["izquierda", "derecha"]);
  jumpscareSound.stop(); winSound.stop();
}