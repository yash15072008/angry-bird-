class Box {

    constructor(x,y){
        var bo = {
            restitution : 0.5,
            friction : 2,
            density : 2
        }

        this.body =Bodies.rectangle(x,y,75,75,bo);
        this.width =75;
        this.height =75;
        World.add(myWorld,this.body);
    }
    
    display(){

        var pos =this.body.position;
        fill("lightblue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
    
}