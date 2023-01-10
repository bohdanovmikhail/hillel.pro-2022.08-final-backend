const app = require('express')();
const http = require('http').Server(app);
const ioLib = require('socket.io');
const port = process.env.PORT || 3000;

const io = ioLib(http);

app.get('/', (req, res) => {
  console.dir('Request');
  console.dir(req);
  res.set('TEST', 'Test header');
  res.send('<b>Hello</b>');
});

app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('sendClientMessage', msg => {

    io.emit('sendServerMessage', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
