var express = require('express');

var app = express();
var server = app.listen(3000);

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log(socket.id);

	socket.on('mouse', mouseMessage);

	function mouseMessage(data) {
//		console.log(data);
		socket.broadcast.emit('mouse', data);
		// io.sockets.emit('mouse', data);
	}
}

