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
  res.sendFile(process.cwd() + '/public');
});