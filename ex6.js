var sprintf = require('sprintf-js').sprintf;
var fs = require('fs');

var text = fs.readFileSync('./wake.txt', 'utf8');

text = text.split('\n');

text = text.map(function(line, index){
	if (index % 5 === 0 ) {
		return sprintf('%3d %s', index, line );
	}
	else {
		return '    ' + line;
	}
});

text = text.join('\n');

console.log(text);