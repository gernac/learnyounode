/**
 * Created by edisonlascano on 1/12/15.
 */
//Filtered LS
var path = require('path')
var fs = require('fs')

var dir = process.argv[2]
var extension=process.argv[3]
//library.function(data1, callback(error,data2) { ... });

fs.readdir(dir, filterFiles);

function filterFiles(err, list) {
    if (err) return console.error(err) //throw err;
    //list.forEach(function(file))
    for (i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == "." + extension) {
            console.log(list[i])
        }
    }
}

/*
fs.readdir(dir, function (err, list) {
    if (err) return console.error(err) //throw err;
    //list.forEach(function(file))
    for(i=0;i<list.length;i++)
    {
        if(path.extname(list[i])=="."+extension)
        {
            console.log(list[i])
        }
    }

    //I need to get the path extension
    //I need ...
    //var lines = contents.toString().split('\n').length - 1
    //console.log(lines)
});
*/