let width, height;
let size = 50;
let speed = 5;
let angle = 0;

let x,y;
let r,g,b;
let img;

let C,ctx;

function preload() {
	angle = 2*random(1)*Math.PI;
	// angle = 235/180*Math.PI;
	// alert(180/Math.PI*angle);
	// img = loadImage('assets/m.png');
}

function setup() {
	C = document.getElementById('bouncecanvas');
	ctx = C.getContext("2d");
	width = C.width;
	height = C.height;

	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);

	x = int(random(size, width - size));
	y = int(random(size, height - size));
	// cnv = createCanvas(width, height);
}

function draw() {
	ctx.clearRect(0, 0, width, height);
	C.style.backgroundColor = "#193450"
	// cnv.background(25, 50, 80);
	ctx.fillRect(x, y, size, size);
	ctx.fillStyle = "#88ff66";

	// background(25, 50, 80);
	// rect(x, y, size, size);

	// fillText("Hello World",10,50);
	// image(img, x, y, size, size);

	if (Math.random() < 0.06) {
		console.log("Random   A=%d", Math.round(180/Math.PI*angle));
		angle += (Math.random() - 0.5) * Math.PI/4;
		console.log("         A=%d", Math.round(180/Math.PI*angle));
	}

	if (angle < 0) {
		angle = angle + 2*Math.PI;
	} else {
		angle = angle % (2*Math.PI);
	}

	x += speed * Math.cos(angle);
	y += speed * Math.sin(angle);
	
	if (x<=0) {
		// left border
		console.log("x=%d < 0   A=%d", x, Math.round(180/Math.PI*angle));
		angle = Math.PI - angle;
		x = 2;
		// tint(random(255),random(255),random(255),200);
	}
	if (x+size>=width) {
		// right border
		console.log("x=%d+%d > %d   A=%d", x, size, width, Math.round(180/Math.PI*angle));
		angle = Math.PI - angle;
		x = width - size - 2;
		// tint(random(255),random(255),random(255),200);
	}
	
	if (y<=0) {
		// top border
		console.log("y=%d < 0   A=%d", y, Math.round(180/Math.PI*angle));
		angle = 2*Math.PI - angle;
		y = 2;
		// tint(random(255),random(255),random(255),200);
	}	
	
	if (y+size>=height) {
		// bottom border
		console.log("y=%d+%d > %d   A=%d", y, size, height, Math.round(180/Math.PI*angle));
		angle = 2*Math.PI - angle;
		y = height - size;
		// tint(random(255),random(255),random(255),200);
	}	
}
