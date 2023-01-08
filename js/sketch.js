function setup() {
  createCanvas(1475, 643);
  trilha.loop();
}

function draw() {
  background(estrada);
  mostrarCarros();
  mostrarPersonagem();
  movimentarCarros();
  movimentarPersonagem();
  verificarColisao();
  mostrarPlacarPontos();
  
} 