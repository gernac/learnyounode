/**
 * Created by edisonlascano on 1/12/15.
 */
var http=require('http')
var url=process.argv[2]

http.get(url, function (response) {
    //console.log("response stats " + response.statusCode)
    response.setEncoding("utf8")

    response.on("data", function(data) {
        console.log(data)
    })
    response.on('error', console.error)
})
//SOLUTION FROM node
/*var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})
*/

