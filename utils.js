
function pointInsideCircle(p, ball){

    const d = dist(p.x, p.y, ball.x, ball.y)
    if(d < ball.size/2){
        return true
    } else {
        return false
    }
}


// and this is also not what we want

function checkLineCircleIntersection(p1, p2, ball){

    let centerCircle = createVector(ball.x, ball.y)
    // let p1 = createVector(x1, y1)
    // let p2 = createVector(x2, y2);
    
    // let p1ToCenter = p5.Vector.sub(centerCircle, p1);
    let centerToP2 = p5.Vector.sub(p2, centerCircle);
    // let line = p5.Vector.sub(p2, p1);
    
    let collision
    if(centerToP2.mag() > ball.size/2){
        collision = true
    }else{
        collision = false;
    }
    
    return collision
    // if(collision){
    //   // A -> Center
    //   // B -> p1 of line
    //   // C -> Collision Point
      
    //   let angB = abs(line.angleBetween(p1ToCenter))
    //   let angC = abs(asin((p1ToCenter.mag() * sin(angB))/r));
    //   let angA = PI - angC - angB
      
    //   let dBtoC = (sin(angA) * r)/sin(angB)
      
    //   let collision1 = p1.copy().add(p1ToCenter.copy().rotate(angB).setMag(dBtoC))
    //   //let collision2 = p1.copy().add(p1ToCenter.copy().rotate(-angB).setMag(dBtoC))
    // //   stroke(255, 0, 0);
    // //   strokeWeight(8);
    // //   point(collision1.x, collision1.y)
    // //   point(collision2.x, collision2.y)
    // return true
        
    // }
  }
  





// i didn't write this and i'm not sure where p is supposed to come from
function checkLineCircleIntersectionNoWorking(p1, p2, ball){
    const cpt = createVector(ball.x, ball.y)
    const r = ball.size/2
    let sign = function(x) { return x < 0.0 ? -1 : 1; };

    let x1 = p1.copy().sub(cpt);
    let x2 = p2.copy().sub(cpt);

    let dv = x2.copy().sub(x1)
    let dr = dv.mag();
    let D = x1.x*x2.y - x2.x*x1.y;

    // evaluate if there is an intersection
    let di = r*r*dr*dr - D*D;
    if (di < 0.0)
        return [];
   
    let t = sqrt(di);

    ip = [];
    ip.push( new p5.Vector(D*dv.y + sign(dv.y)*dv.x * t, -D*dv.x + p.abs(dv.y) * t).div(dr*dr).add(cpt) );
    if (di > 0.0) {
        ip.push( new p5.Vector(D*dv.y - sign(dv.y)*dv.x * t, -D*dv.x - p.abs(dv.y) * t).div(dr*dr).add(cpt) ); 
    }
    return ip;

}