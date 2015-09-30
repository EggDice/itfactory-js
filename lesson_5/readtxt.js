var fs = require('fs');

function readTxt(filename, callback) {
	fs.readFile(filename + '.txt', function(err, content) {
	    if (err) {
			return callback(err);
		}
		return callback(null, content.toString());
	});
}

readTxt('my-file', console.log);
readTxt('macskafarka', console.log);