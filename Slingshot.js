class Slingshot {

    constructor(bodyA,pointB) {

        var con = {
     
        bodyA : bodyA , 
        pointB : pointB ,
        stifness : 0.01 ,
        length : 20

        }
        this.pointB = pointB ;
        this.sling = Constraint.create(con);
        World.add(myWorld,this.sling);

    }

    fly(){

        this.sling.bodyA = null;
    }

    display() {

        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }

    }
}