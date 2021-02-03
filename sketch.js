var database;
var gameState = 0;
var plCount;
var form,player,game;
var allp ;


function setup(){
  database = firebase.database();

  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
  if (plCount === 5) {

    game.update(1);



  }

  if (gameState === 1) {

    clear();
    game.play();




  }
  
  drawSprites();
  
}

