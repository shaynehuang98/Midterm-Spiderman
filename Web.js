class Web{
    constructor(dir, originX, originY){
        this.dir = dir
        this.origin = createVector(originX, originY)
        this.extension = createVector(originX, originY)
        this.velocity = this.setVelocity()
        this.lifeRemaining = 40
        this.dead = false
    }
    
    checkCollisions(balls){
        let numCollisions = 0
        balls.forEach(ball => {
            // const intersectionFound = checkLineCircleIntersection(this.origin, this.extension, ball)
            const inCircle = pointInsideCircle(this.extension, ball)
            console.log(inCircle)
            if(inCircle){
                ball.dead = true
                numCollisions += 1
            }

        })
        return numCollisions;
    }

    render(){
        // console.log(this.origin, this.extension)
        if(!this.dead){
            strokeWeight(2)
            stroke(255)
            line(this.origin.x, this.origin.y, this.extension.x, this.extension.y)
        }

    }

    setVelocity(){
        let vel
        if(this.dir === 'left'){
            vel = createVector(-20, 0)
        }else if(this.dir === 'up'){
           vel = createVector(0, -20)
        }else if(this.dir === 'right'){
            vel = createVector(20, 0)
        }else if(this.dir === 'down'){
            vel = createVector(0, 20)
        }
        // console.log(vel)
        return vel
    }

    update(){
        // console.log(this.velocity)
        this.extension.add(this.velocity)
        this.lifeRemaining--
        if(this.lifeRemaining < 35){
            this.origin.add(this.velocity)
        }
        if(this.lifeRemaining < 1){
            this.dead = true
        }
    }
}