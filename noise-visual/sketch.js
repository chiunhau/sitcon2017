var xoff = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	visualize(1, 0.01, true);
}

function visualize(w, offsetInc, showLine) {
	for (var i = 0; i < width; i += w) {
		fill(0);
		// ellipse(i, noise(xoff) * height , 5, 5);
		line(i - w, noise(xoff - offsetInc) * height, i, noise(xoff) * height)

		xoff += offsetInc;
	}
}
