/**
 * Created by edisonlascano on 1/12/15.
 */
var fs = require('fs')
var path = require('path')

module.exports = function filterFiles(dir, extension, callback) {
    fs.readdir(dir, filterFiles);

    function filterFiles(err, list) {
        var filteredList = [];

        if (err) {
            return callback(err) //throw err;
        }else {
            for (i = 0; i < list.length; i++) {
                if (path.extname(list[i]) == "." + extension) {
                    //console.log(list[i])
                    filteredList.push(list[i])
                }
            }
            return callback(null, filteredList);
        }
    }
}


//THE SOLUTION FROM NODE TUTORIALS
//file Name: solution_filter.js:
/*
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        if (err)
            return callback(err)

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
    })
}
*/