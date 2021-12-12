class Cannon {
    constructor(x,y,w,h,angle) {

          this.cannonImg = loadImage("canon.png")
          this.cannonBaseImg = loadImage("cannonBase.png")
          this.w = w
          this.h = h
          this.x = x
          this.y = y
          this.angle = angle
    }
    display() {
        if(keyIsDown(RIGHT_ARROW) && this.angle < 70){
            this.angle = this.angle + 1
        }

        if(keyIsDown(LEFT_ARROW) && this.angle > -30){
            this.angle = this.angle - 1
        }

        push ()
        translate (this.x, this.y)
        rotate (this.angle)
        imageMode(CENTER);
        image(this.cannonImg,0,0,this.w,this.h)
        pop ()
        image(this.cannonBaseImg,30, 40, 200, 200);
    }
  }