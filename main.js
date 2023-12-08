function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(260,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video,0,0,640,480);
    tint(tint_color)
    fill("blue")
    rect(0,0,680,20)
    rect(0,460,680,20)
    rect(0,0,20,480)
    rect(620,0,20,480)
    rect(310,0,20,480)
    rect(0,230,680,20)
}
function filter_tint() {
    tint_color = document.getElementById("color").value;
}

function take_snapshot() {
    save('eu.png')
}