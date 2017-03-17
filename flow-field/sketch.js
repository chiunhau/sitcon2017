var flowfield;
var particles = [];


function setup() {
	createCanvas(windowWidth, windowHeight);

	flowfield = new FlowField(30);
}

function draw() {
	background(255);
	flowfield.display();

	for (var i = 0; i < particles.length; i ++) {
		particles[i].follow(flowfield);
		particles[i].update();
		particles[i].render();
	}
}

function mouseClicked() {
	particles.push(new Particle(mouseX, mouseY, 1));
}

function Particle(x, y, m) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.maxSpeed = 6;
	this.mass = m;
  this.maxForce = 5;
	this.maxFieldForce = 1;
}

Particle.prototype.applyForce = function(force) {
	this.acc.add(force);
};

Particle.prototype.update = function() {
	this.vel.add(this.acc);
	this.vel.limit(this.maxSpeed);
	this.pos.add(this.vel);
	this.acc.set(0, 0);
}

Particle.prototype.render = function() {
	fill(0);
	ellipse(this.pos.x, this.pos.y, 30);
}

Particle.prototype.follow = function(flow) {
  var desired = flow.lookup(this.pos);
  desired.mult(this.maxSpeed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxFieldForce);
  this.applyForce(steer);
};
