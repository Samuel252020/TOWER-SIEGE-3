class GreyBlock extends BaseClass {
    constructor(x, y, width, height){
      super(x, y, width, height);
      this.image = loadImage("sprites/grey.jpg");
      this.visibility = 255;
    }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
    display(){
      if(this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = 0;
        //tint(255, this.visibility);
        //image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();     
      }
    }

}