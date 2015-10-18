var fs = require('fs');
var mkdirp = require('mkdirp');

// to read syntax
// fs.readFile('./date.js', 'utf-8', function(err, data){
// 	// do stuff here
// });

// to write syntax
// fs.writeFile('./date2.js', 'Hello World', function(err, data){
// 	// do stuff here
// });

// from jsDoc: http://usejsdoc.org/

/*
 * @copyfile
 * @param fileName {string} - the path of the file to copy
 * @param outputPath {string} - the path of the dir to ouput to
 * @param copiedFileName {string} - Optional: what the copied file should be called
 */

 function copyFile( fileName, outputPath, copiedFileName ) {
 	// will only run if fileName and outputPath are specified
 	if (fileName && outputPath){
 		// reading the file
	 	fs.readFile(fileName, 'utf-8', function(err, data) {
	 		// taking into account the optional last param
	 		var newFileName = copiedFileName ? outputPath + "/" + copiedFileName : outputPath + "/copy_" + fileName;
 			// create a directory if it doesn't exist
	 		mkdirp(outputPath, function (err) {
			    if (err) console.error(err)
		 		// writing the file
			 	fs.writeFile(newFileName, data, function(err1, data2) {
			 		console.log("Successfully copied " + fileName + " to " + newFileName)
			 	});
			});
	 	});
	// otherwise throw an error
	} else {
	 	throw new Error("fileName and outputPath must be specified!");
	}
 }; // copyFile

module.exports = copyFile;