class Stone{

  constructor(x,y,width,height){
      var options={
          isStatic:false,
          restitution:0.3,
          density:0.5,
      }
      this.width=width;
      this.height=height;
       this.image=loadImage("stone.png");
       this.body=Bodies.rectangle(x,y,this.width,this.height,options);
       World.add(world,this.body);
  }
        display(){
           var pos=this.body.position;
           image(this.image,pos.x,pos.y,this.width,this.height);
            
        }
}