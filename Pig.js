class Pig extends Baseclass {

    constructor(x,y){
        
        super(x,y,65,65);
        this.image =loadImage("sprites/enemy.png");
        this.visiblity = 255;
    }
    
    display() {

        if(this.body.speed<2) { 
        super.display();
       
    }
      else{
       
        push();
        World.remove(myWorld, this.body);
        this.visiblity = this.visiblity-5;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x, this.body.position.y, 65, 65);
        pop();
        
      }

    }
}