const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
    createCanvas(400,800);
    
    engine = Engine.create();
    world = engine.world;
    if(frameCount % 150 === 0){
        for(var i = 0;i < maxDrops;i++){
            drops.push(new Drops(random(0,400),random(0,400)));
        }
    }
    //drops = new Drops(200,800);
}

function draw(){

    background("black");
    Engine.update(engine);

     //displaying rain drops
     for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }


}   

