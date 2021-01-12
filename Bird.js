class Bird {

    constructor(x,y){
        var bi = {
            restitution : 0.5,
            friction : 2,
            density : 2
        }

        this.body =Bodies.rectangle(x,y,50,50,bi);
        this.width =50;
        this.height =50;
        World.add(myWorld,this.body);
    }
    
    display(){

        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
}