var img, rotation = 0, xTranslation = 0, scalation = 1;

function preload() {
	img = loadImage("../images/doraemon.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	translate(xTranslation, windowHeight / 2);
	rotate(rotation);
	scale(scalation)
	drawCharacter(img, 400);

	rotation += 0.05;
	xTranslation += 3;
	scalation = 1 + sin(frameCount * 0.07) * 0.2;
}

function drawCharacter(img, targetWidth) {
	// image(img, - targetWidth / 2,  - img.height * (targetWidth / img.width) / 2, targetWidth, img.height * (targetWidth / img.width));
	image(img, - targetWidth / 2,  - img.height * (targetWidth / img.width) / 2, targetWidth, img.height * (targetWidth / img.width));
}
