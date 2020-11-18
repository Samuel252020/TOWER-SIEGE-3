class PinkBlock extends BaseClass {
    constructor(x, y, width, height){
      super(x, y, width, height);
      this.image = loadImage("sprites/pink.jpg");
      this.visibility = 255;
    }
    score(){
      if(this.visibility<=0 && this.visibility>=-50){
        score++;
      }
    }
    display(){
      if(this.body.speed < 3){
        super.display();
      }
      else{ 
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 50;
        //tint(255, this.visibility);
        //image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();     
      }
    }
  }