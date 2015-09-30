var fs = require('fs');

fs.readFile('my-file.txt', function(err, content) {
	console.log(content.toString());
	console.log('real end');
	console.log(err);
});

try {
  fs.readFile('kutyafule.txt', function(err, content) {
	console.log(err);
  });
} catch(e) {
  console.log('error volt');	
}

console.log('end');