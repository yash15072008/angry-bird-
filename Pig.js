class Pig {

    constructor(x,y){
        var pi = {
            restitution : 0.5,
            friction : 2,
            density : 2
        }

        this.body =Bodies.rectangle(x,y,65,65,pi);
        this.width =65;
        this.height =65;
        World.add(myWorld,this.body);
    }
    
    display(){

        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
}