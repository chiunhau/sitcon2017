var lastDot = null, newDot = null;

function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(0);
	visualize(10, true);

}

function visualize(w, showLine) {
	for (var i = 0; i < width; i += w) {
		if (!lastDot) {
			lastDot = random(height - 20) + 10;
			ellipse(i, lastDot, 5, 5);
		}
		newDot = random(height- 20) + 10;
		ellipse(i + w, newDot, 5, 5);
		if (showLine) {
			line(i, lastDot, i + w, newDot);
		}
		lastDot = newDot;

	}
}
