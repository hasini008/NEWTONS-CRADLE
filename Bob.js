class Bob{

    constructor(){
    var bob_props = {
        isStatic:false,
        restitution:0.8, 
        friction : 0.5 , 
        density : 1.2
      }  
    
      Matter.Bodies.circle(  25 , 300 , 50 ,  bob_props)
        World.add(aiWorld , this.ball);
    }
      
         display() {
          circleMode(CENTER);
          fill("violet");
        circle(25 , 300 , 50)
         }
      
        }