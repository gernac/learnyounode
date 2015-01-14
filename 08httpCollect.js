/**
 * Created by edisonlascano on 1/12/15.
 */
var http=require('http')
var bl=require('bl')
var concatStream = require('concat-stream')

var url=process.argv[2]

http.get(url, function (response) {
    //console.log("response stats " + response.statusCode)
    var result= ""
    response.pipe(bl(function (err, data) {
        //console.log(data.toString())
        result=data.toString()
        console.log(result.length)
        console.log(result)
    }))

    //THIS SHOULD' VE BEEN THE SOLUTIONS AS THEY PROPOSE
/*    response.on("end", function(data){
        console.log(result.length)
        console.log(result)
    })
*/
//THE SOLUTION FROM NODE
    /*
    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)
            data = data.toString()
            console.log(data.length)
            console.log(data)
        }))
    })
    */

    response.on('error', console.error)
})