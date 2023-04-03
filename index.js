const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
let lib = require('./LogiocoDeiacoMacrino.js');
let jsonData = lib.readFile('./data/data.json');
const app = express();
const jsonFilePath = './data/data.json';

app.use('/form', express.static(path.join(__dirname, 'form')));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/input/input.html`));
});
app.get('/post', (req, res) => {
  res.sendFile(path.join(`${__dirname}/output/result.html`));
});
app.get('/data/data.json', (req, res) => {
  res.sendFile(path.join(`${__dirname}/data/data.json`));
});
app.get('/viewPost', (req, res) => {
  res.sendFile(path.join(`${__dirname}/output/result.html`));
});
app.post('/viewPost', (req, res) => {
  res.redirect((path.join(`/viewPost`)));
});
app.post('/add', (req, res) => {
  const nickname = {
    nickname: req.body.nickname,
    commento: req.body.commento
  };
  let data = JSON.parse(fs.readFileSync(jsonFilePath));
  lib.addElementToJSON(data, nickname);
  lib.writeFileJSON('./data/data.json', data);
  
  res.redirect((path.join(`/post`)));
});
app.listen(5050, () => {
  console.log('Server started on port 5050');
});

