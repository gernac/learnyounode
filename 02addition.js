//////////////////////////////
//BAY STEPS, ADDITION EXAMPLE
//////////////////////////////
//console.log(process.argv);
var acum=0;
for (i = 2; i < process.argv.length; i++) { 
    acum=acum+Number(process.argv[i]);
}
console.log(acum);
