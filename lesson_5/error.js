
try {
  setTimeout(function() {
	throw new Error('Ajjajjjajj!');
	console.log('End!');
  }, 2000);
} catch(e) {
	console.log('no problem');
}