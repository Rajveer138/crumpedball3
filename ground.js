class Ground{
 
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }
   

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    } 
display(){

    //rectMode(CENTER);
    //rect(this.body.position.x,this.body.position.y,this.width,this.height);

var groundPos=this.body.position;
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.width, this.height);
			pop()
}  
}