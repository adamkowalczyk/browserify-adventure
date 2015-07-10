var through = require('through2');
var sprintf = require('sprintf-js').sprintf;
var split = require('split');
var quote = require('quote-stream');
var combine = require('stream-combiner2');

module.exports = function (file) {
	if (!/\.txt$/.test(file)) return through();
	
	var count = 0;

	
	var tr = through(function(chunk, enc, callback){
		
		chunk = chunk.toString('utf8') + '\n';
		if (count % 5 === 0) {
			chunk = sprintf('%3d %s', count, chunk);
		}
		else {
			chunk = '    ' + chunk;
		}

		this.push(chunk);
		count++;
		callback();
	});
	var prefix = through();
	prefix.push('module.exports=');
	
	return combine([split(), tr, quote(), prefix ]);
};
