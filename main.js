lipsX = 0;
lipsY = 0;

function preload() {
    clownLips = loadImage('boca.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet foi iniciado');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.nose.x-20 
        lipsY = results[0].pose.nose.y+25
    }
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(clownLips, lipsX, lipsY, 40, 30);
}

function takeSnapshot() {
    save('myFilterImage.png');
}