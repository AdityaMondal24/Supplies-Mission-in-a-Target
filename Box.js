class Box 
{
  constructor(x,y,width,height)
  {
    var box_options = {
      isStatic : true

    }
    this.body = Bodies.rectangle(x,y,width,height,box_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
  }

  display()
  {
    var locus = this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(locus.x,locus.y, this.width, this.height); 
  }
}
