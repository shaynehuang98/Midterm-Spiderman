class Ball{
    constructor(x, y, size){
      this.x = x
      this.y = y
      this.size = size
      this.color = [225, 0, 0]
      this.speedX = random(-10,10)
      this.speedY = random(-10,10)
      this.collided = false
      this.dead = false
    }
    
    checkEdges(){
        if(this.x < 0){
            this.x = canvasWidth
        }else if(this.x > canvasWidth){
            this.x = 0
        }
        if(this.y < 0){
            this.y = canvasHeight
        }else if(this.y > canvasHeight){
            this.y = 0
        }
    }

    move(){
        this.x+=this.speedX
        this.y+=this.speedY
    }

   render(){
    //  console.log(this.x, this.y, this.size)
    if(!this.dead){
        fill(this.color)
        circle(this.x, this.y, this.size)
    }

   } 


  }

