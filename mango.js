class Mango{
    constructor(x,y,r){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1,
        }
         this.body=Bodies.circle(x,y,r,options);
         this.r=r;
         this.image = loadImage("Plucking mangoes/mango.png")
         World.add(world,this.body);
    }
    display(){
            var position = this.body.position;
            // push();
            // translate(position.x,position.y);
            // rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image,position.x,position.y,this.r,this.r);
            // pop();
    }

}