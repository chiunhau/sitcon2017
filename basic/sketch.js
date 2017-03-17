var img, rotation = 0;

function preload() {
	img = loadImage("../images/doraemon.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	translate(width / 2, height / 2);
	rotate(rotation);
	drawCharacter(img, 400);
}

function draw() {
	if (mouseIsPressed) {
		translate(width / 2, height / 2);
		rotate(rotation);
		drawCharacter(img, 400);
		rotation += 0.07;
	}

}

function drawCharacter(img, targetWidth) {
	image(img, - targetWidth / 2,  - img.height * (targetWidth / img.width) / 2, targetWidth, img.height * (targetWidth / img.width));
}
