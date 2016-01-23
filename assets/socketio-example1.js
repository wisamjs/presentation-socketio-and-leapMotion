var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Redirects localhost:8080 to our html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

io.on('connection', function(socket) {
  console.log('I\'m alive!');
});
