function setup() {
	createCanvas(windowWidth, windowHeight);
	visualize(15);
}

function draw() {

}

function visualize(res) {

	for( var i = 0; i < width; i += res) {
		for (var j = 0; j < height; j += res) {
			noStroke();
			fill(random(255));
			rect(i, j, 15, 15);
		}
	}
}
