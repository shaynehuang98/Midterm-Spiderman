

class Scoreboard{
    constructor(x, y){
        this.x = x
        this.y = y
        this.score = 0
    }
    render(){
        fill (255)
        stroke (255)
        textSize(30)
        text ('score : ', this.x, this.y)
        text (this.score, this.x + 100, this.y)

    }

    update(newScore){
        this.score = newScore
    }

}