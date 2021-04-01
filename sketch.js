var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
    fairy.setCollider("rectangle",0,0,1000.5,300.0);
	fairy.debug = false
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.setCollider("rectangle",0,0,star.width,star.h);
	star.debug = false
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	

}


function draw() {
  background(bgImg);
  
  if(keyDown("left_arrow")){
	  fairy.velocityX=-5;
  }
  if(keyDown("right_arrow")){
	fairy.velocityX= 5;
}
if(keyDown("space")){
	star.velocityY=3;
}
if(star.isTouching(fairy)){
	star.velocityY=0;
	fairy.velocityX=0;
	if(keyDown("R")){
		fairy.x=130;
		fairy.y=520;
		star.x=650;
		star.y=30;
	}
	}

  drawSprites();
  
}

