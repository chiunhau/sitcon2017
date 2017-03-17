function setup() {
	createCanvas(windowWidth, windowHeight);


}

function draw() {
	visualize(30, 0.08);
}

function visualize(res, off) {
	background(255);
	var xoff = 0;
	for( var i = 0; i < width; i += res) {
		var yoff = 0;
		for( var j = 0; j < height; j += res) {
			// noStroke();
			// fill(noise(xoff, yoff) * 255);
			// rect(i, j, res, res);
			push();
			translate(i, j);
			rotate(noise(xoff, yoff) * Math.PI * 2);
			line(0, 0, res, 0);
			pop();
			yoff += off;
		}
		xoff += off;
	}
}
