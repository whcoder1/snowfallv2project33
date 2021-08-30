class Snow {
    constructor(x,y,r){
        var options={
            friction :0.02,
            density:0.03
        }
        this.body=Bodies.circle(x,y,r,options);
        
        this.image1=loadImage("snow4.webp")
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);

    }
    display(){
    var pos=this.body.position;
    //var angle=this.body.angle;
    push();
    imageMode(CENTER);
    translate(pos.x,pos.y);
    //rotate(angle);
    image(this.image1,0,0,10,10)
    pop();
    }
}