status = '';
object = [];
video = '';

function preload() {
    
}
function setup() {
    kagoj = createCanvas(380, 380);
    kagoj.center();
    video= createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    jano_jinish = ml5.objectDetector('cocossd', mdlldhoeche);
    document.getElementById("status").innerHTML = 'Status = Loading ';
}

function mdlldhoeche() {
    console.log('model load hoyegeche 😡');
    status = true;
    jano_jinish.detect(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        object = results;
    }
}

function draw() {
    image(video, 0, 0,380 ,380 );
    /*noFill();
    stroke("red");
    rect(140,60,150,300);
    fill('white');
    text('dog',140,68);
    noFill();
    stroke('red')
    rect(250,70,250,300);
    fill('white');
    text("cat",250,78);*/
    if (status != '') {
        r = random(255);
        g = random(255);
        b = random(255);
        jano_jinish.detect(video,gotResults);
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = 'Status = Object Detected';
            document.getElementById("noo").innerHTML = 'No of objects detected - '+object.length;
            fill(r,g,b);
            text(object[i].label + ' ' + floor(object[i].confidence * 100) + '%', object[i].x, object[i].y);
            noFill();
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}