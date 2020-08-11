class Dustbin{
    constructor(x,y,width,height){
        this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
        this.angle=0;	
		
       var options={
            isStatic:false,
            restituution:0.3,
            friction:0.5,
            density:1.2

        }
   
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);


    	this.bottomBody=Bodies.rectangle(x, y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(x+this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
   }

 display(){

    /*var pos =this.body.position;
   
    push();

    translate(pos.x,pos.y);
    rectMode(CENTER);

    rect(0, 0, this.width, this.height);
    pop();*/


    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;

    

    push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER)
    //strokeWeight(4);
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    rotate(this.angle)
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop()

    push()
    translate(posRight.x, posRight.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rotate(-1*this.angle)
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop()

    push()
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rect(0,0,this.dustbinWidth, this.wallThickness);
    pop()
  }
}