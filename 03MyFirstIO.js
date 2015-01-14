////////////////
// MY FIRST I/O
////////////////
var fs = require('fs');
//var buffer=fs.readFileSync('01program.js');
var buffer=fs.readFileSync(process.argv[2]);

//the next line will return a String
//var str=fs.readFileSync(process.argv[2],'utf8');

var filelContent=buffer.toString();
var splitContent=filelContent.split("\n");
console.log(splitContent.length-1);
//console.log(JSON.stringify(buffer));