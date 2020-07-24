class Dustbin{

    constructor(x,y,width,height){
    var options = {isStatic:true};
    this.w=width;
    this.h=height;
    this.body=Bodies.rectangle(x,y,width,height,options);

    this.image = loadImage("images/dustbingreen.png");
    World.add(world,this.body)
    }

  display(){

    var pos = this.body.position;
    image(this.image,pos.x,pos.y-300)
  
        
  }
    

}