// first section to export modules

// var fs = require("fs"),
// 	dateMethods = require("./date"),
// 	request = require("superagent");

// fs.readFile("./date.js", "utf-8", function(err, data){
// 	console.log(err, data);
// });

// console.log(dateMethods.whatDayIsIt());


// second section - Attempt 1
var copy = require("./copy");

// var file2copy = process.argv[2]
// var filePath = process.argv[3]
// var newName = process.argv[4]
// copy(file2copy, filePath, newName);

// var args = process.argv.slice(2, -1)
// copy(args[0], args[1], args[2]);

// or 
// copy.apply(null, args);

// second section - Attempt 2
var args = process.argv.reduce(function(argObjs, currentEl, index) {
	var next = process.argv[index + 1] && process.argv[index + 1].charAt(0)
	if (currentEl.charAt(0) === "-" && currentEl.length === 2 &&  next !== '-') {
		argObjs[currentEl] = process.argv[index + 1];
	}
	return argObjs;
}, {});

// show documentation if user types -h
if (Object.keys(args).indexOf('-h') !== -1 ) {
	var documentation = "\nUsage : node app (options) \
		\nOptions :  \
			\n\t-f, -file             : file path to copy from \
			\n\t-o, -outputDirectory  : directory path to copy to \
			\n\t-c, -copyFilename     : optional name of copied file\n" 
	console.log(documentation);
	return;
};

copy(args['-f'], args['-o'], args['-c']);
