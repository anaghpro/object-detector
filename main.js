status = '';
object = [];



function setup() {
    kagoj = createCanvas(550, 400);
    kagoj.center();
    jano_jinish = ml5.objectDetector('cocossd', mdlldhoeche);
    document.getElementById("status").innerHTML = 'Status = Loading ';
}

function mdlldhoeche() {
    console.log('model load hoyegeche 😡');
    status = true;
    jano_jinish.detect(img, gotResults);
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
    image(img, 0, 0, 550, 400);
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
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = 'Status = Object Detected';
            fill('white');
            text(object[i].label + ' ' + floor(object[i].confidence * 100) + '%', object[i].x, object[i].y);
            noFill();
            stroke('red');
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}