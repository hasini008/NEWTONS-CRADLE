class Ground{

    constructor (x , y , width , height) {
        
        var roof_props = {
          isStatic : true,
         friction : 0.5 , 
         density : 1
           }
    
        this.ball = body.rectangle(  x , y , width , height ,  roof_props)
      World.add(aiWorld , this.ball);
    
       this.width = width;
    this.height = height;
    }  
    
       display() {
        rectMode(CENTER);
        fill("black");
      rect(0 , 0 , this.width  , this.height)
    
       }
    }
    