class roof{
    constructor(x,y,width,height){
        var options ={
            isStatics=true,
        }
        this.body = Bodies.rectangle(450,200,400,100,options);
        this.width = 400;
        this.height = 100;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
}