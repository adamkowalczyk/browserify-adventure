var url = require('url');
// var qs = require('querystring');

var address = prompt();

address = url.parse(address, true);

console.log(url.resolve(address.href, address.query.file));