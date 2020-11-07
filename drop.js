class drops
{
   constructor(x,y)
   {
     var option={
      
        friction:0.001,
        restitution:0.03
     }

     this.body=Bodies.circle(x,y,5,option)
     this.radius=5;
     World.add(world,this.body)
    }
     display(){
 
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
      
    
     }
     
     update()
     {
        
       if(this.body.position.y>height)
       {
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
       }

     }
    }

   




















