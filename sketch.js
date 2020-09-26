
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(521,800);

  engine = Engine.create();
  world = engine.world;

  for(var i = 65; i<590; i += 65){
    var columnSprite = createSprite(-65+i,700,5,250);
    columnSprite.shapeColor=color(0);

    column = Bodies.rectangle(-65+i,700,5,250,{isStatic:true,friction:1});
	  World.add(world, column);
  }

  for(var i = 50; i<520; i += 80){
    var pegsprite = createSprite(0+i,100,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true,friction:1});
	  World.add(world, peg);
  }
  for(var i = 50; i<520; i += 80){
    var pegsprite = createSprite(0+i,200,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true});
	  World.add(world, peg);
  }

  for(var i = 50; i<520; i += 80){
    var pegsprite = createSprite(0+i,300,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true});
	  World.add(world, peg);
  }

  for(var i = 50; i<520; i += 80){
    var pegsprite = createSprite(0+i,400,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true});
	  World.add(world, peg);
  }
    ground = new Ground(width/2,height,width,5);
    balls = new Balls(width/2, 800, 15);

  Engine.run(engine);
	
}

function draw() {
  background("darkgreen");  

  ground.display();
  balls.display();
  
  drawSprites();
}