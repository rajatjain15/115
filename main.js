noseX=0;
noseY=0;

function preload()
{
mustache=loadImage("");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Intalized");
}

function gotPoses(results)
{
 if(results.length>0)   
 {
     console.log(results);
    mouthX= results[0].pose.mouth.x;
    mouthY= results[0].pose.mouth.y;
 }
}


function snap_shot()
{
    save("download.png");
}