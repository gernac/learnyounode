cars = ["BMW","Volvo","Saab","Ford"];
var i = 0;
var text = "";
console.log(cars);
while (cars[i]) {
    text += cars[i] + ", ";
    i++;
}
console.log(text);