/**
 * Created by edisonlascano on 1/12/15.
 */
//Filtered LS
var myModule = require('./myModule')

var dir = process.argv[2]
var extension=process.argv[3]


myModule(dir, extension, function(err, files) {
    if (err)
        return console.error('There was an error:', err)
    files.forEach(function (file) {
        console.log(file)
    })
});

//THE SOLUTION FROM NODE TUTORIALS
/*
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err)
        return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
})
*/
