//variavel de posição x e y
let posicaoPersonagemX = 737;
let posicaoPersonagemY = 595;

//mostrar pesronagem
function mostrarPersonagem(){
  image(persona, posicaoPersonagemX, posicaoPersonagemY, 45, 45);
} 

//movimentar personagem 1475, 643
function movimentarPersonagem(){
  if(keyIsDown(UP_ARROW)){
    if(posicaoPersonagemY < 0){
      posicaoPersonagemY -= 0;
      pontuou.play();
      pontos++;
      resetPosicao();
    }else{
       posicaoPersonagemY -= 8;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(posicaoPersonagemY + 45 > 643){
      posicaoPersonagemY += 0;
    }else{
      posicaoPersonagemY += 8;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(posicaoPersonagemX < 0){
      posicaoPersonagemX -= 0;
    }else{
       posicaoPersonagemX -= 8;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(posicaoPersonagemX + 45 > 1475){
      posicaoPersonagemX += 0;
    }else{
       posicaoPersonagemX += 8;
    }
  }
}

function resetPosicao(){
    posicaoPersonagemX = 737;
    posicaoPersonagemY = 595;
}