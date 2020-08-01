class Plinko{
    constructor(x,y,r){
      var options = {
        isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      fill("black");
      rect(pos.x,pos.y,this.r);
    }
  }