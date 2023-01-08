//variaveis de posição horizontal
let carrosX = [1200, 750, 400, 150, 450, 70];
 
//variaveis de posição vertical
let carrosY = [57, 150, 235, 333, 418, 505];
 
//variaveis de movimentação
velocidadeCarros = [13, 10];

//variaveis de tamanho
let comprimentoCarro = 150;
let larguraCarro = 75;

//variavel de colisao
let colidiu = 0;

function mostrarCarros(){
  for(let i = 0; i < 6; i++){
    image(carro[i], carrosX[i], carrosY[i], comprimentoCarro, larguraCarro);
  }
}

function movimentarCarros(){
  for(let i = 0; i < 3; i++){
    carrosX[i] -= velocidadeCarros[1];
    if(carrosX[i] + comprimentoCarro < 0){
      carrosX[i] = 1475;
    }
  }
  for(let j = 3; j < 6; j++){
    carrosX[j] += velocidadeCarros[0];
    if(carrosX[j] > 1475){
      carrosX[j] = 0;
    }
  }
} 

function verificarColisao(){
  for(let i=0; i<6; i++){
    colidiu = collideRectCircle(carrosX[i], carrosY[i], comprimentoCarro, larguraCarro, posicaoPersonagemX, posicaoPersonagemY, 15);
    if(colidiu == 1){
      resetPosicao();
      bateu.play();
      if(pontos > 0){
        pontos--;
      }
    }
  }
}
