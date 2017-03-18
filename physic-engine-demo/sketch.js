var particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	for (var i = 0; i < particles.length; i ++) {
		particles[i].applyForce(createVector(0, 0.3));
		particles[i].render();
	}
}

function mouseDragged() {
	particles.push(new Particle(mouseX, mouseY));
}

function Particle(x, y) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.render = function() {
		this.update();
		fill(255);

		ellipse(this.pos.x, this.pos.y, Math.sin(frameCount * 0.05) * 100);
	}

	this.applyForce = function(f) {
		this.acc.add(f);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.acc.set(0, 0);
	}
}
