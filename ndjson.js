module.exports.parse = function(string) {
	return string.split('\n').map(JSON.parse);
};

module.exports.stringify = function(rows) {
	return rows.map(JSON.stringify).join('\n');
};