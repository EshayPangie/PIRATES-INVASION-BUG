class CannonBall {
  constructor(x, y) {
    var ball_features = {
      isStatic: true,
    };

    this.ball = Bodies.circle(x, y, 30, ball_features);
    World.add(myWorld, this.ball);
    this.cannonBall = loadImage("cannonball.png");
    this.x = x;
    this.y = y;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.cannonBall, this.x, this.y, 30, 30);
    pop();
  }

  shoot() {
    var newAngle = cannonBase.angle - 28;
    newAngle = newAngle * (3.14 / 180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.ball, false);
    Matter.Body.setVelocity(this.ball, {
      x: velocity.x * (180 / 3.14),
      y: velocity.y * (180 / 3.14),
    });
    /*   console.log("HELLO");
    Matter.Body.setStatic(this.ball, false);
    Matter.Body.setVelocity(this.ball, { x: 40, y: -20 }); */
    // Matter.Body.setVelocity(this.ball,{x:velocity.X*(180/3.14),y:velocity.Y*(180/3.14))
  }
}
