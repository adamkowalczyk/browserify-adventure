var uniq = require('uniq');

var input = prompt();

input = input.split(',');

console.log(uniq(input));