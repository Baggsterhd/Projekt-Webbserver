
import http from 'http';
import { Server } from 'socket.io';
const expressServer = http.createServer(app);

const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/about.html")
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/music.html")
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/swedish.html")
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/index.html');
});

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/about.html');
});

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/music.html');
});


app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/swedish.html');
});







app.use(express.json());

const io = new Server(expressServer);

io.on('connect', function (socket) {
    console.log('a user is connected');

    setInterval(function () {
        let date = new Date().toLocaleTimeString()
        socket.send(date)
    }, 1000)

    socket.on('disconnect', () => {
        console.log('user disconnected.')
    })

})

app.get('/', (req, res, next) => {
    res.render('index.html');
})

expressServer.listen(4000, () => {
    console.log('server is listening.')
})