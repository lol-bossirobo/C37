class Game {

      constructor() {




      }


      getState() {
      var gameref = database.ref("gameState");
      //listener 
      gameref.on("value",function (data){
          gameState=data.val();
      });

      }

    update(state) {
      database.ref('/').update({
        gameState : state
      })


    }

  async start () {

    


    if(gameState===0){

    player= new Player();
    var playerCountRef= await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
        plCount=playerCountRef.val();
        player.getCount();
    }
    form = new Form();
    form.display();
    }




  }

  play () {

    form.hide();
    textSize(30);
    text("Game has started",170,250);
    Player.getpinfo();

    if (allp != undefined) {
    var display_position= 100;
      for (var i in allp) {
        if(i === "player" + player.index)
          fill("red")
        else
          fill("black");
    }
      display_position+=20;
      textSize(30);
      text(allp[i].name + ":" + allp[i].distance,170, display_position);




      }

    if (keyIsDown(UP_ARROW) && player.index!== null) {

        player.distance += 20;
        player.update();


    }


    }



}







