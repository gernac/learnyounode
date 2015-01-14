/**
 * Created by edisonlascano on 1/12/15.
 */
var http=require('http')
var fs=require('fs')
var port=process.argv[2]
var fileLocation=process.argv[3]
//request : fetch properties
//response : sends data to the client

var server=http.createServer(function callback(req,res){

    fs.createReadStream(fileLocation).pipe(res)

})

server.listen(port)


//NODE SOLUTION
/*var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/



