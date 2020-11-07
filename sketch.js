var drops,umbrella,thunderboltimg,walkingframeimg;

function preload(){
  thunderboltimg=loadImage("proc41images/images/thunderbolt/3.png") 
  walkingframeimg=loadImage("proc41images/images/walkingFrame/walking_3.png")
}

function setup(){
canvas(400,400)
umbrella1=new umbrella(200,300)
drop1=new drops(200,0)
}

function draw(){
background("black")
}   

