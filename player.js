class Player {

constructor () {

  this.index = null;
  this.distance = 0;
  this.name = null;

}

getCount() {

    var plref = database.ref("playerCount");
    plref.on("value", (data) => {
        plCount = data.val();
    })

}

updateCount(count){
  database.ref('/').update({
      playerCount: count
    
    }
  )
 
}

update(){
  var playerIndex= "players/player"+plCount;
  database.ref(playerIndex).set({
     name : this.name,
     distance : this.distance
  })

}

//static functions
//Player.getpinfo();
//arrow 


static getpinfo() {

  var refpl = database.ref("players");
  refpl.on("value", (data) => {
    allp = data.val();
  });



}




}