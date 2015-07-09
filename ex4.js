
var ndjson = require('./ndjson');

var input1 = prompt();
var input2 = prompt();

console.log(ndjson.parse(input1));
console.log(ndjson.stringify(input2));