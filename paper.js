
  class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':1,
          'density':1.4
      }
      this.body = Bodies.circle(x, y, 20,options);
      this.radius = 70;
this.image = loadImage("1 paper.png")
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;

      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius);

    }
  };