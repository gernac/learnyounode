/**
 * Created by edisonlascano on 1/12/15.
 */
var http=require('http')
var map = require('through2-map')

var port=process.argv[2]
var upperCase=""

upperCase=map(function (chunk) {
    return chunk.toString().toUpperCase()
})

//request : fetch properties
//response : sends data to the client

var server=http.createServer(function callback(req,res){
if(req.method == 'POST')
{
    req.pipe(upperCase).pipe(res)
}
    else
{
    return res.end('send me a post')
}

})

server.listen(port)

//NODE SOLUTION
/*
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('send me a POST\n')

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
