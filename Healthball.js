
class HealthBall{
    constructor(x, y, size){
        this.x = x
      this.y = y
      this.size = size
      this.color = [0, 255, 0]
    //   random(0, canvasWidth)
    //   random(0,canvasHeight)
    //   random(30,60)
      this.collided = false
      this.dead = false

    }
    move(){
        // this.x+=0
        // this.y+=this.speedY
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


    render(){
        if(!this.dead){
            fill(this.color)
            circle(this.x, this.y, this.size)
        }
    }
}


