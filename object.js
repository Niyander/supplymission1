class Objects{
    constructor(x, y, width, height,) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(300, 300, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
      }
      display(){
          var object1 = this.body.position;

        rectMode(CENTER);
        fill("red");
        rect(object1.x,object1.y, this.width, this.height);

      }
    }