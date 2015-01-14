/**
 * Created by edisonlascano on 1/11/15.
 */
//asynchronous readingfile (solution from node tutorials)
var fs=require('fs')
var content="EMPTY";

    content=fs.readFile('/etc/passwd', function (err, data) {
    if (err) return console.error(err) //throw err;
    console.log("FROM INSIDE"+data.toString());
});
console.log("from outside"+content) //this will run first, but content is still undefined (JUST FOR TESTING SYNC).