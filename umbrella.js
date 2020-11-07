class umbrella
{
   constructor(x,y)
   {
     var option={
      
     isStatic:true
        
    }

    this.image=loadImage(walkingframeimg)

     this.body=Bodies.circle(x,y,50,option)
     this.radius=50
     World.add(world,this.body)
    }
     display(){
 
      imageMode(RADIUS)
      image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
      
    
     }
     
    }
