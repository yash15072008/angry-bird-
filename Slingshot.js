class Slingshot {

    constructor(bodyA,bodyB) {

        var con = {
     
        bodyA : bodyA , 
        bodyB : bodyB ,
        stifness : 0.04 ,
        length : 20 

        }

        this.sling = Constraint.create(con);
        World.add(myWorld,this.sling);

    }

    display() {

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        
    }
}