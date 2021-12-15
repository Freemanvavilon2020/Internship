let express = require("express");
let app = express();
let path = require("path");
let bodyParser = require('body-parser');

app.use(express.static('public'));
let jsonParser = bodyParser.json();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/app2',function(req,res){
  res.sendFile(path.join(__dirname + '/public/app2.html'));
});

app.get('/app3',function(req,res){
  res.sendFile(path.join(__dirname + '/public/app3.html'));
});

app.post('/login', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.json({ msg: 'welcome, ' + req.body.username });
});

app.post('/data1', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.json({ data: +10 + req.body.inData });
});

app.post('/data2', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.json({ data: +20 + req.body.inData });
});

app.post('/data3', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.json({ data: +30 + req.body.inData });
});

app.post('/data4', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.json({ data: +40 + req.body.inData });
});

app.listen(3000);

console.log("Running at Port 3000");