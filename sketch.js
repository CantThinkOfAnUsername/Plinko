const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var particles = []
var plinkos = []
var divisions = []
var divisionHeight=300;



function setup() {
  createCanvas(480,800);

  engine = Engine.create()
  world = engine.world

  for (var k=0;k <= width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var p =40; p<=width; p=p+50){
    plinkos.push(new Plinko(p,75))
  }
  for (var f =15; f<=width-10; f=f+50){
    plinkos.push(new Plinko(f,175))
  }
  for (var x =40; x<=width; x=x+50){
    plinkos.push(new Plinko(x,275))
  }
  for (var o =15; o<=width-10; o=o+50){
    plinkos.push(new Plinko(o,375))
  }
  groundObj = new Ground(240,780,480,20)
}

function draw() {
  background(0,0,0); 
  Engine.run(engine)
  if(frameCount%90==0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  for (var k = 0; k<divisions.length;k++){
    divisions[k].display();
  }
  for (var m = 0; m<plinkos.length; m++){
    plinkos[m].display()
  }
  drawSprites();

  groundObj.display()
}