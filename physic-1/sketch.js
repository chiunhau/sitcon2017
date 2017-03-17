var particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// background(255);
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
	this.maxSpeed = 7;

	this.applyForce = function(f) {
		this.acc.add(f);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}

	this.render = function() {
		this.update();
		ellipse(this.pos.x, this.pos.y, Math.sin(frameCount * 0.1) * 50 + 50);
	}
}
