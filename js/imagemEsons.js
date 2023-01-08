//variaveis para os carros
let carro = [1, 2, 3, 4, 5 ,6];

//variavel de personagem
let persona;
//variavel de background
let estrada; 

//variaveis de sons
let bateu;
let trilha;
let pontuou;

function preload(){
  //load background
  estrada = loadImage("js/img/estrada.png"); 
  //load carros
  carro[0] = loadImage("js/img/carro-1.png");
  carro[1] = loadImage("js/img/carro-2.png");
  carro[2] = loadImage("js/img/carro-3.png");
  carro[3] = loadImage("js/img/carro-4.png");
  carro[4] = loadImage("js/img/carro-5.png");
  carro[5] = loadImage("js/img/carro-6.png");
  //load personagem
  persona = loadImage("js/img/p.png");
  bateu = loadSound("js/sons/colidiu.mp3");
  trilha = loadSound("js/sons/trilha.mp3");
  pontuou = loadSound("js/sons/pontos.wav");
}