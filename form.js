class Form {

constructor() {

this.input = createInput('nameHere');
this.button = createButton('Click to Play');
this.greeting = createElement ('h1')


}
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}


display() {

    var title = createElement('h1');
    title.html("Car-Racer");
    title.position(615,100);
 
    
    var input = this.input;
    input.position(615,250);
    
    var button = this.button;
    button.position(800,500)
    
    var greet = this.greeting;

    button.mousePressed (() => {

        input.hide();
        button.hide();
        player.name = input.value();
        plCount +=1;
        
        player.update();
        player.updateCount(plCount);
        
        greet.html("Hello " + player.name);
        greet.position(615,400);


    });




}












}