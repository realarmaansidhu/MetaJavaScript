var score = 8;
if(score > 0 && score < 10) {
    var flag = true;
}
else {
    var flag = false; 
}
console.log("Mid-level skills: " + flag);

var timeRemaining = 0;
var energy = 10;
if(timeRemaining ==0 || energy ==0){
    var flag = true;
}
else {
    var flag = false;
}
console.log("Game Over: " + flag);

var num1 = 2;
var num2 = 5;
var test1 = (num1%2);
var test2 = (num2%2);
if(test1 == 0) {
    var result1 = true;
}
else {
    var result1 = false;
}
if(test2 == 0) {
    var result2 = true;
}
else {
    var result2 = false;
}

console.log("Is " + num1 + " An Even Number? : " + result1);
console.log("Is " + num2 + " An Even Number? : " + result2);

console.log(5+10);

var now = "Now In ";
var three = 3;
var d = "D!";
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);