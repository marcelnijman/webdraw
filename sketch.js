var socket;

function setup() {
	createCanvas(600, 400);
	background(51);

	socket = io.connect('http://webdraw-webdraw.a3c1.starter-us-west-1.openshiftapps.com:8080');
	window.setTimeout(partB, 3000);

	socket.on('mouse', newDrawing);
}

function partB() {
	console.log(socket);
}

function newDrawing(data) {
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
//	console.log(mouseX + ',' + mouseY);

	var data = {
		x: mouseX,
		y: mouseY
	};

	socket.emit('mouse', data);

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);
}

function draw() {
}

