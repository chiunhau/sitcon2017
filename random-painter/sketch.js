function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(0, 50);
	noStroke();
}

function draw() {
	if (mouseIsPressed) {
		if (mouseX < width / 2) {

			ellipse(mouseX, mouseY, random(10, 60));
		}

		else {
			ellipse(mouseX, mouseY, noise(frameCount * 0.07) * 100);
		}
	}
}
