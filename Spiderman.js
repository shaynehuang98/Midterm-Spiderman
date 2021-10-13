class Spiderman{
    constructor(imgs, x, y, w, h){
        this.images = imgs
        this.numImages = imgs.length
        this.walkingLength = this.numImages - 2 
        this.imageCounter = 0
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.remainingEnergy = 5
        this.webs = []
        this.hit = false
    }

    animate(){
        if(!this.hit){
            if(this.imageCounter < this.walkingLength){
                this.imageCounter++
            }else{
                this.imageCounter = 0
            }
           
        }
        
    }

    checkCollisions(balls){
        balls.forEach(ball => {
            if(!ball.collided && !ball.dead){
                if(ball.x - ball.size/2 < this.x + this.w &&
                    ball.x + ball.size/2 > this.x &&
                    ball.y - ball.size/2 < this.y + this.h && 
                    ball.y + ball.size/2 > this.y){
                        ball.collided = true
                        if(this.remainingEnergy > 0){
                            this.hit = true
                            setTimeout(this.resetHit, 1000)
                            this.imageCounter = this.numImages - 1
                            this.remainingEnergy --
                        }
                        
                    }
            }

            // this would be a good place to compare 
            // the spiderman's x and y to each ball's x and y
        })

        let numCollisions = 0
        this.webs.forEach(web => {
            numCollisions +=
            web.checkCollisions(balls)
        })
        return numCollisions;
    }


    move({x, y}){
        this.x+=x
        this.y+=y
    }


    checkCollisionsHealth(healthBalls){
        let health = 0;

        healthBalls.forEach(ball => {
            if(!ball.collided && !ball.dead){
                if(ball.x - ball.size/2 < this.x + this.w &&
                    ball.x + ball.size/2 > this.x &&
                    ball.y - ball.size/2 < this.y + this.h && 
                    ball.y + ball.size/2 > this.y){
                        ball.collided = true
                        if(this.remainingEnergy < 5){
                            this.hit = true
                            this.remainingEnergy += 1
                            // health += 1
                            health += 1
                        }
                        
                    }
            }

            
        })
        return health
    }


    render(){
      
        image(this.images[this.imageCounter], this.x, this.y, this.w, this.h)
        // console.log(this.webs)

    }

    resetHit = () => {
        this.hit = false
    }

    slingWeb(direction){
        this.webs.push(new Web(direction, this.x + this.w/2, this.y + this.h/2))
    }

    update(){
        this.animate()
        this.webs.forEach( web => {
            web.update()
            web.render()
        })
        this.newWebs = this.webs.filter(web => !web.dead)
        this.webs = this.newWebs
    }
}