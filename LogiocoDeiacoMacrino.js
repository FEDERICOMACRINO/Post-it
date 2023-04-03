let fs = require('fs')

function addElementToJSON(jsonData, element) {
  jsonData.push(element)
}

function writeFileJSON(file, dataJSON) {
  fs.writeFile(file, JSON.stringify(dataJSON), (err) => {
    if (err) {
      throw err;
    } else
      console.log('i dati li ho scritti nel file data.json');
  })
}

function readFile(percorsoFile) {
  var data = fs.readFileSync(percorsoFile, "utf8");
  console.log("finito readFile function!");
  return JSON.parse(data);
}


module.exports = { addElementToJSON: addElementToJSON, writeFileJSON: writeFileJSON, readFile: readFile }