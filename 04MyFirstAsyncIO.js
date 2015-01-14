//////////////////////
// MY FIRST ASYNC I/O
//////////////////////
//I am using an explicit callback here . 
//in the next section you can see an easier way to do it.
var fs = require('fs')
var fileContent = undefined
var splitContent=undefined
function readFileContent(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {

    fileContent=fileContents.toString();
    splitContent=fileContent.split("\n");

    callback()
  })
}

function logNumberOfLines() {
	console.log(splitContent.length-1);
}

readFileContent(logNumberOfLines);


/*
var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/


