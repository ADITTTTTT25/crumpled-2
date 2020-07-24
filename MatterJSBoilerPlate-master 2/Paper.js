class Paper {

    constructor(x,y){

        var options ={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.5
        }
            this.body=Bodies.circle(x,y,30,options);

            this.image = loadImage("images/paper.png");
            World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        image (this.image,pos.x-30,pos.y-150);
        
    }
}