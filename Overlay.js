class Overlay{
    constructor(text1,text2, startButton){
        this.text1 = text1
        this.text2 = text2
        this.startButton = startButton
        this.startButton.position(canvasWidth/2.3, canvasHeight/2)
    
    }
    render(){
        fill(255)
        textSize(50)
        stroke(0)
        text(this.text1,'Use A,D,S,W to move', canvasWidth/1.5, canvasHeight/1.5)
        text(this.text2,'J,L,K,I to attact', canvasWidth/1.5, canvasHeight/1.5)

    }
}