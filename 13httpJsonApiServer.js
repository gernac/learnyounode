/**
 * Created by edisonlascano on 1/13/15.
 */
//SOLUTION FROM
//Copyright (c) 2013 Fraser Tweedale
//The MIT License (MIT)

var http = require('http');
var url = require('url');
var port=process.argv[2]
var routes = {
    "/api/parsetime": function(parsedUrl) {
        var date = new Date(parsedUrl.query.iso);
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    },
    "/api/unixtime": function(parsedUrl) {
        return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
    }
}

server = http.createServer(function(request, response) {
    parsedUrl = url.parse(request.url, true);
    resource = routes[parsedUrl.pathname];
    if (resource) {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(resource(parsedUrl)));
    }
    else {
        response.writeHead(404);
        response.end();
    }
});
server.listen(port);

// NODE SOLUTION
/*
var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))
*/