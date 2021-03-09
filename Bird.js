class Bird extends Baseclass {

    constructor(x,y){
        
        super(x,y,50,50);
        this.image =loadImage("sprites/bird.png");
        this.img=loadImage("sprites/smoke.png");
        this.trajectory=[];
    }

    display(){

        super.display();
        if(this.body.velocity.x>10 && this.body.position.x>250) {
        var pos=[this.body.position.x,this.body.position.y];
        this.trajectory.push(pos);
        }
        
        for(var i=0; i<this.trajectory.length; i++) {
        image(this.img,this.trajectory[i][0],this.trajectory[i][1]);
        }
    }
    
}