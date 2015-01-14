var fs=require('fs');
//erasing a file
//fs.unlinkSync('hello');
//renaming a file and getting stats in an asynchronous way, but with control 
//to assure that the stats run after the rename
fs.rename('hello', 'world', function (err) {
  if (err) throw err;
  fs.stat('world', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});