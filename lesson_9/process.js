'use strict';

setTimeout(function () {
	console.log('err');
	throw new Error('my error');
}, 1000);

setTimeout(function () {}, 10000);

process.on('exit', function() {
	console.log('I am about to exit');
});

process.on('SIGINT', function() {
	console.log('I am about to exit, because of the user');
});
/*
process.on('uncaughtException', function() {
	console.log('An unhandled exception');
});
*/
