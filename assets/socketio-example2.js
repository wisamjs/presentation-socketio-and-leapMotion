var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var connections = [];

//Redirects localhost:8080 to our html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(8000, function(){
  console.log('listening on *:8080');
});


io.on('connection', function(socket) {
  connections.push(socket.id);
  io.emit('total', connections.length);
});
