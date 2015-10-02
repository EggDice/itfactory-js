var fs = require('fs');
var dir = process.argv[2];
var extensionName = process.argv[3];

fs.readdir(dir, function(err, files) {
	files.filter(function(fileName) {
		return fileName.split('.')[1] === extensionName;
	})
	.forEach(function(file) {
		console.log(file);
	});
});