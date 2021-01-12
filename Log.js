class Log {

    constructor(x,y,height,angle){
        var pi = {
            restitution : 0.5,
            friction : 2,
            density : 2
        }

        this.body =Bodies.rectangle(x,y,20,height,pi);
        this.width =20;
        this.height =height;
        Matter.Body.setAngle(this.body,angle);
        World.add(myWorld,this.body);
    }
    
    display(){

        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
}