class Dustbin {
    constructor(x, y, height,angle) {
      var options = {
        'isStatic':true,  
        'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rotate(angle);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  