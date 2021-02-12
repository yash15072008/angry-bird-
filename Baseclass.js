class Baseclass {

    constructor(x,y,width,height,angle){
        var bi = {
            restitution : 0.5,
            friction : 2,
            density : 2
        }

        this.body =Bodies.rectangle(x,y,width,height,bi);
        this.width =width;
        this.height =height;
        this.image =loadImage("sprites/base.png");
        World.add(myWorld,this.body);
    }
    
    display(){

        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    
}