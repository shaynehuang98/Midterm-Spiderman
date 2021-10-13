class Health{
    constructor(x, y, w, h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.energy = 5
    }

    render(){
        fill(255)
        noStroke()
        textSize(canvasWidth/40)
        text('remaining energy : ', this.x, this.y)
        fill([0,240,0])
        rect(this.x + this.w * 10, this.y - this.w/1.5, this.energy * this.w, this.h)
    }

    update(spideyEnergy){
        this.energy = spideyEnergy
    }
}