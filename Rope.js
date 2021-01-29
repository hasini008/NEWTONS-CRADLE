class Rope {
    constructor( body1 , body2 , offsetX , offsetY ){
   
        var rope_props={
       this.offsetX = offsetX
       this.offsetY = offsetY
      pointB:{ x : this.offsetX, y: this.offsetY}
       var options={
        bodyA: body1,
        bodyB: body2

       }
       
        }
   
        this.Chain = Matter.Constraint.create(rope_props);
        World.add(world , this.Chain);
   
    }
   
     display(){
     
       var pointA = this.rope.bodyA.position;
       var pointB = this.rope.bodyA.position;

       strokeWeight(2);
       var Anchor1X=pointA.x
       var Anchor1X=pointA.y

       var Anchor2X=pointB.x
       var Anchor2X=pointB.y

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

     }
   
   }