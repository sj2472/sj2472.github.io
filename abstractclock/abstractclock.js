function setup() {
createCanvas(500,500); // make an HTML canvas element width x height pixels
}

function draw() {
background(80);
fill(180);
    let m = map(second(), 0, 60, 0, width);
    rect(m, 35, 10, 10);
fill(90);
    let n = map(minute(),0,60,0,width);
    rect(n,60,20,20);
fill(0);
let p = map(hour(),0,60,0,width);
    rect(p,100,40,40);
}
