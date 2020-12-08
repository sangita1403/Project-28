class Stone{
    constructor(x,y,r){
       var options={
       isStatic:false,
       restitution:0,
       friction:1,
       density:1.2
   }
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    this.image = loadImage("Plucking mangoes/stone.png")
    World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.r,this.r);
   }
 }