class Block{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            restitution :0.4,
            friction :0.0,
        }
        this.radius=10;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
      }
}