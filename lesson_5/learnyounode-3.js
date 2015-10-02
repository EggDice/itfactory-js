var fs = require('fs');

var filename = process.argv[2];

var content = fs.readFileSync(filename);

var count = content.toString().split('\n').length - 1;

console.log(count);