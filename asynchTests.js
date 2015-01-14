//TESTING ASYNC

//this is an asynchronous call using callback,
//so, the things are executed in the required order

var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log("from the function logMyNumber "+myNumber)
}


addOne(logMyNumber);


//this code will print first and will not read the file content yet
/*
var fs = require('fs') // require is a special function provided by node
var myNumber = "pepito";// we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    console.log("from inside the addOne method: "+myNumber)
  })
}

addOne()

console.log("after calling the addOne method"+myNumber) // logs out undefined -- this line gets run before readFile is done
*/

//TESTING SOME SEQUENTIUALITY (SYNCHRONOCITY)
/*var myNumber = 1
function addOne() { myNumber++ } // define the function
addOne() // run the function
console.log(myNumber) // logs out 2
*/