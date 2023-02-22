
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload()
{

}
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 2500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{ 
    background('#123456');
     stroke('ABCDEF');
     textSize(difference);
     filling('723645');
     document.getElementById("tttt").innerHTML = "the size of the font will be =" + difference;
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX =" + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}