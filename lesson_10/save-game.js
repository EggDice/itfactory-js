'use strict';

var config = require('./config');

var fs = require('fs');
var DB_FILE_NAME = config.dbFileName;

function addEntry(entry) {
	loadEntries(function(err, entries) {
		entries.push(entry);
		fs.writeFile(DB_FILE_NAME, JSON.stringify(entries));
	});
}

function loadEntries(callback) {
	fs.readFile(DB_FILE_NAME, function(err, db) {
        var dbContent = db.toString() || '[]';
		callback(err, JSON.parse(dbContent));
	});
}

module.exports = {
	addEntry: addEntry,
	loadEntries: loadEntries
};