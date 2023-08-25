rightWristX = 0
leftWristX = 0
rightWristY = 0
leftWristY = 0

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Modelo Carregado")
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function startMusic() {
    song1.play()
    song1.setVolume(0.5)
    song1.rate(1)
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        rightWristX = result[0].pose.rightWrist.x
        leftWristX = result[0].pose.leftWrist.x
        rightWristY = result[0].pose.rightWrist.y
        leftWristY = result[0].pose.leftWrist.y
    }
}

function draw() {
    image(video, 0, 0, 600, 450);
}