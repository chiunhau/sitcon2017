var particles = [];
var repellers = [];
var particlesLength = 800;

var flowfield;
var swatch = new f5.Swatch();
var counter = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	background(0);
	swatch.add(color('rgba(28, 88, 246, 0.2)'));
	swatch.add(color('rgba(255, 255, 100, 0.2)'));

	flowfield = new FlowField(10);

	for (var i = 0; i < particlesLength; i ++) {
		particles.push(new Particle(random(width), random(height), 1));
	}
}

function draw() {

	// background(0);
	// flowfield.display();
	for (var i = 0; i < particlesLength; i ++) {
		for (var m = 0; m < repellers.length; m ++) {
			particles[i].applyForce(repellers[m].repel(particles[i]));
		}
		particles[i].follow(flowfield);
		particles[i].border();
		particles[i].update();
		particles[i].render();
	}
	// if (counter >= 1500) {
	// 	flowfield.init();
	// 	counter = 0;
	// }
	// counter += 1;
}


function Particle(x, y, m) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.maxSpeed = 3;
	this.mass = m;
  this.maxForce = 300;
	this.maxFieldForce = 100;
}

Particle.prototype.applyForce = function(force) {
	this.acc.add(force);
};

Particle.prototype.applyGravity = function(g) {
	this.acc.add(g);
}

Particle.prototype.update = function() {
	this.vel.add(this.acc);
	this.vel.limit(this.maxSpeed);
	this.pos.add(this.vel);
	this.acc.set(0, 0);
}

Particle.prototype.render = function() {
	noStroke();
	fill(swatch.random());
	ellipse(this.pos.x, this.pos.y, this.mass);
}


Particle.prototype.border = function() {
	if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
		this.reborn();
	}
}

Particle.prototype.follow = function(flow) {
  var desired = flow.lookup(this.pos);
  desired.mult(this.maxSpeed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxFieldForce);
  this.applyForce(steer);
};

Particle.prototype.reborn = function() {
	this.pos.set(random(width), random(height))
	this.vel.set(0, 0);
	this.acc.set(0, 0);
}

function Repeller(x, y, power) {
	this.pos = createVector(x, y);
	this.power = power;

	this.repel = function(p) {
		var dir = p5.Vector.sub(this.pos, p.pos);
		var dist = dir.mag();
		dir.normalize();
		dist = constrain(dist, 1,1000);
		var f = -1 * this.power / (dist * dist);
		dir.mult(f);

		return dir
	}

	this.render = function() {
		fill(0, 10);
		ellipse(this.pos.x, this.pos.y, 130);
	}

	this.reborn = function() {
		this.pos.set(random(width), random(height))
	}
}

function mouseClicked() {
	repellers.push(new Repeller(mouseX, mouseY, 10000));
}
