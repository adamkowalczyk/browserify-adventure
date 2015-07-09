var uniq = require('uniq');

function uniqSplit(string) {
	var array = string.split(',');
	return uniq(array);
}

module.exports = uniqSplit;