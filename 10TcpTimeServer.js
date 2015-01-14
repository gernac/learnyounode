/**
 * Created by edisonlascano on 1/12/15.
 */
var net = require('net')
var server = net.createServer(function (socket) {
    // socket handling logic

    var dateAsString=""
    var date=new Date()

    function addAZeroInFront(n){return n< 10 ? '0' +n : n}

    dateAsString = date.getFullYear()+"-"
    +addAZeroInFront(date.getMonth()+1)+"-"
    +addAZeroInFront(date.getDate())+" "
    +addAZeroInFront(date.getHours())+":"
    +addAZeroInFront(date.getMinutes())+"\n"

    socket.write(dateAsString)
    socket.end()

    //both lines are the same as the next line
    //socket.end(data)

})
server.listen(process.argv[2])


//NODE SOLUTION
/*
var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
    */