class Line{
    constructor(x1, y1, x2, y2){
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.strokeVal = 1
        this.strokeColor = (0)
    }
    
    render(){
      stroke(this.strokeColor)
      strokeWeight(this.strokeVal)
      Line(this.x1, this.y1, this.x2, this.y2)
    }
    
  }
  
  class Ball{
    constructor(x, y, size){
      this.x = x
      this.y = y
      this.size = size
      this.color = [225, 0, 0]
    }
    
   render(){
     console.log(this.x, this.y, this.size)
     fill(this.color)
     circle(this.x, this.y, this.size)
   } 
  }
  
  
  class Section{
    constructor(x, y, size){
        this.x= x
        this.y = y
        this.size = size 
        this.color = (255,255,255)
        this.leftLine = new Line(
                                  this.x + this.size * 0.25,
                                  this.y,
                                  this.x + (this.size * 0.25),
                                  this.y + this.size
                                )
        this.rightLine = new Line(                            
                                  this.x + this.size * 0.75,
                                  this.y,
                                  this.x + (this.size * 0.75),
                                  this.y + this.size)
        this.numBalls = 3 
        this.spaceBetweenLines = (this.size* 0.75 - this.size * 0.35)
        this.balls = Array.from({length: this.numBalls}, () => {
          return new Ball( this.x + this.size * 0.30 + this.spaceBetweenLines * Math.random(),this.size/15 + this.y + Math.random() * this.size, this.size/10)
        })
        
      
    }
    render(){
      fill(this.color)
      rect(this.x, this.y, this.size)
      this.rightLine.render()
      this.leftLine.render()
      this.balls.forEach(ball => ball.render())
    }
  }
  
  
  const canvasWidth = 600
  const canvasHeight = 600
  const sectionSize = 200
  const numSections = 6
  let section1, section2, section3, section4
  let sections
  
  
  function setup() {
    createCanvas(canvasWidth, canvasHeight);
   
    // the easiest thing to do here is probably make the array by hand
    // because to make it programmatically requires knowing nested
    // for loops.  so, something like
    section1 = new Section(0, 0, sectionSize)
    section2 = new Section(canvasWidth/3, 0, sectionSize)
    section3 = new Section(0, canvasHeight/3, sectionSize)
    section4 = new Section(canvasWidth/3, canvasHeight/3, sectionSize)
    Section = new Section(canvasWidth/1.5, 0, sectionSize)
    Section = new Section(canvasWidth/1.5, canvasHeight/3, sectionSize)
    section7 = new Section(0, canvasHeight/1.5, sectionSize)
    section8 = new Section(canvasWidth/3, canvasHeight/1.5, sectionSize)
    section9 = new Section(canvasWidth/1.5, canvasHeight/1.5, sectionSize)
     sections = [section1, section2, section3, section4, section5, section6, section7, section8, section9]  
  }
  
  function draw() {
    background(0,255,0);
    
  sections.forEach(section => {
    section.balls.forEach(ball => {
      ball.y = (ball.y + 10);
      if(ball.y > section.y + section.size) {
        ball.y = section.y
        }
      })
    })
     sections.forEach(section => section.render())
  
    
  }
  